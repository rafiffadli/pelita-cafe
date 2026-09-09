/**
 * Pelita Cafe - Firebase Configuration & Database Bridge
 * 
 * Instructions:
 * 1. Create a free project at https://console.firebase.google.com
 * 2. Enable:
 *    - Authentication (Email/Password)
 *    - Cloud Firestore (Start in test mode or production with rules)
 *    - Cloud Storage (For menu photos)
 * 3. Copy your Web App config from Firebase Project Settings and paste below.
 */

const firebaseConfig = {
  apiKey: "AIzaSyA-XQkmkNedfmeCaioAmcSWiU9dzuDfM3g",
  authDomain: "pelita-cafe.firebaseapp.com",
  projectId: "pelita-cafe",
  storageBucket: "pelita-cafe.firebasestorage.app",
  messagingSenderId: "656305071216",
  appId: "1:656305071216:web:a0b533ff31e8efe215c0b5",
  measurementId: "G-F8EC7D2GV4"
};

// Check if actual credentials have been entered
const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.apiKey !== "YOUR_API_KEY" && 
  !firebaseConfig.apiKey.includes("YOUR_")
);

let app = null;
let auth = null;
let db = null;
let storage = null;

if (typeof firebase !== 'undefined' && isFirebaseConfigured) {
  try {
    if (!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);
    } else {
      app = firebase.app();
    }
    if (typeof firebase.auth === 'function') {
      auth = firebase.auth();
    }
    if (typeof firebase.firestore === 'function') {
      db = firebase.firestore();
    }
    if (typeof firebase.storage === 'function') {
      storage = firebase.storage();
    }
    console.log('[Pelita Firebase] Connected successfully to project:', firebaseConfig.projectId);
  } catch (err) {
    console.error('[Pelita Firebase] Initialization error:', err);
  }
}

/**
 * Automatically compress and downscale photos client-side.
 * Shrinks 6MB-12MB smartphone camera pictures to ~80KB web-optimized JPEG.
 */
function compressImage(file, maxWidth = 900, maxHeight = 900, quality = 0.8) {
  return new Promise((resolve, reject) => {
    if (!file.type || !file.type.startsWith('image/')) {
      return reject(new Error('Selected file is not an image'));
    }

    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (event) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// Global accessor
window.PelitaFirebase = {
  config: firebaseConfig,
  isConfigured: isFirebaseConfigured,
  app,
  auth,
  db,
  storage,

  /**
   * Fetch all menu items from Firestore (or LocalStorage fallback)
   */
  async getMenuItems() {
    if (this.isConfigured && db) {
      try {
        const snapshot = await db.collection('menu_items').get();
        if (!snapshot.empty) {
          const items = [];
          snapshot.forEach(doc => {
            items.push({ id: doc.id, ...doc.data() });
          });
          // Sort by order if present, or maintain default order
          items.sort((a, b) => (a.order || 999) - (b.order || 999));
          return items;
        }
      } catch (e) {
        console.warn('[Pelita Firebase] Firestore get error, using fallback:', e);
      }
    }
    // LocalStorage fallback for demo/testing mode
    const cached = localStorage.getItem('pelita_custom_menu');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        console.error(e);
      }
    }
    return null;
  },

  /**
   * Realtime listener for menu updates
   */
  onMenuChange(callback) {
    if (this.isConfigured && db) {
      return db.collection('menu_items').onSnapshot(snapshot => {
        const items = [];
        snapshot.forEach(doc => {
          items.push({ id: doc.id, ...doc.data() });
        });
        items.sort((a, b) => (a.order || 999) - (b.order || 999));
        callback(items);
      }, err => {
        console.warn('[Pelita Firebase] Snapshot error:', err);
      });
    }
    return null;
  },

  /**
   * Save or update a single menu item
   */
  async saveMenuItem(item) {
    const data = { ...item };
    const id = data.id || ('dish-' + Date.now());
    data.id = id;
    data.updatedAt = new Date().toISOString();

    if (this.isConfigured && db) {
      await db.collection('menu_items').doc(id).set(data, { merge: true });
      return data;
    }

    // Fallback: save to LocalStorage with quota safety
    let localItems = JSON.parse(localStorage.getItem('pelita_custom_menu') || '[]');
    const index = localItems.findIndex(i => i.id === id);
    if (index >= 0) {
      localItems[index] = data;
    } else {
      localItems.push(data);
    }

    try {
      localStorage.setItem('pelita_custom_menu', JSON.stringify(localItems));
    } catch (quotaErr) {
      console.warn('[Pelita] LocalStorage quota reached. Pruning stale items...', quotaErr);
      try {
        localStorage.removeItem('pelita_custom_menu');
        localStorage.setItem('pelita_custom_menu', JSON.stringify(localItems.slice(-15)));
      } catch (e) {
        console.error('[Pelita] LocalStorage storage failed:', e);
      }
    }
    return data;
  },

  /**
   * Delete a menu item
   */
  async deleteMenuItem(id) {
    if (this.isConfigured && db) {
      await db.collection('menu_items').doc(id).delete();
      return true;
    }
    let localItems = JSON.parse(localStorage.getItem('pelita_custom_menu') || '[]');
    localItems = localItems.filter(i => i.id !== id);
    localStorage.setItem('pelita_custom_menu', JSON.stringify(localItems));
    return true;
  },

  /**
   * Upload food image to Firebase Storage (with client-side auto-compression)
   */
  async uploadPhoto(file, dishId) {
    // 1. Automatically downscale high-res phone camera photos to ~80KB web JPEG
    const compressedDataUrl = await compressImage(file, 900, 900, 0.82);

    if (this.isConfigured && storage) {
      try {
        const response = await fetch(compressedDataUrl);
        const blob = await response.blob();
        const fileName = `dishes/${dishId}_${Date.now()}.jpg`;
        const ref = storage.ref().child(fileName);
        const uploadTask = await ref.put(blob, { contentType: 'image/jpeg' });
        const downloadURL = await uploadTask.ref.getDownloadURL();
        return downloadURL;
      } catch (cloudErr) {
        console.warn('[Pelita Firebase] Cloud upload fallback to compressed copy:', cloudErr);
      }
    }

    // Lightweight compressed Base64 data URL for instant demo/local mode
    return compressedDataUrl;
  },

  /**
   * Seed / Initial Sync: Bulk upload default static menu to Firestore
   */
  async seedInitialMenu(defaultItems) {
    if (this.isConfigured && db) {
      const batch = db.batch();
      defaultItems.forEach((item, index) => {
        const ref = db.collection('menu_items').doc(item.id);
        batch.set(ref, {
          ...item,
          order: index + 1,
          isSoldOut: Boolean(item.isSoldOut),
          updatedAt: new Date().toISOString()
        }, { merge: true });
      });
      await batch.commit();
      return true;
    }

    // Fallback to LocalStorage
    localStorage.setItem('pelita_custom_menu', JSON.stringify(defaultItems));
    return true;
  },

  /**
   * Fetch outlet location details
   */
  async getOutlets() {
    if (this.isConfigured && db) {
      try {
        const doc = await db.collection('settings').doc('outlets').get();
        if (doc.exists) {
          return doc.data();
        }
      } catch (e) {
        console.warn('[Pelita Firebase] Outlets get error:', e);
      }
    }
    const cached = localStorage.getItem('pelita_custom_outlets');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        console.error(e);
      }
    }
    return null;
  },

  /**
   * Save outlet location details (address, Google Maps link, Waze link)
   */
  async saveOutlets(outletsData) {
    if (this.isConfigured && db) {
      try {
        await db.collection('settings').doc('outlets').set(outletsData, { merge: true });
      } catch (e) {
        console.warn('[Pelita Firebase] Outlets save error:', e);
      }
    }
    localStorage.setItem('pelita_custom_outlets', JSON.stringify(outletsData));
    return outletsData;
  },

  /**
   * Realtime listener for outlet address updates
   */
  onOutletsChange(callback) {
    if (this.isConfigured && db) {
      return db.collection('settings').doc('outlets').onSnapshot(doc => {
        if (doc.exists) {
          callback(doc.data());
        }
      }, err => {
        console.warn('[Pelita Firebase] Outlets snapshot error:', err);
      });
    }
    return null;
  },

  /**
   * Create a new staff account without logging out the current admin session.
   * Uses a secondary Firebase app instance.
   */
  async createStaffUser(email, password, displayName, role = 'staff') {
    if (!this.isConfigured || !window.firebase) {
      throw new Error('Firebase is not configured');
    }

    // 1. Initialize temporary secondary app so current admin session is not lost
    const tempAppName = 'temp_staff_creator_' + Date.now();
    const tempApp = window.firebase.initializeApp(firebaseConfig, tempAppName);
    const tempAuth = tempApp.auth();

    try {
      const cred = await tempAuth.createUserWithEmailAndPassword(email, password);
      const uid = cred.user.uid;

      // Update user profile display name
      if (displayName && cred.user.updateProfile) {
        await cred.user.updateProfile({ displayName });
      }

      // 2. Save staff record in Firestore 'staff_users' collection
      const staffDoc = {
        uid,
        email,
        displayName: displayName || email.split('@')[0],
        role,
        createdAt: new Date().toISOString(),
        createdBy: auth && auth.currentUser ? auth.currentUser.email : 'admin'
      };

      if (db) {
        await db.collection('staff_users').doc(uid).set(staffDoc);
      }

      // Cleanup temp app
      await tempApp.delete();
      return staffDoc;
    } catch (err) {
      await tempApp.delete();
      throw err;
    }
  },

  /**
   * Check if user is an authorized staff/admin
   */
  async checkUserRole(uid) {
    if (!this.isConfigured || !db || !uid) return null;
    try {
      const doc = await db.collection('staff_users').doc(uid).get();
      if (doc.exists) {
        return doc.data();
      }

      // Safe Initial Bootstrapping: If and ONLY IF the entire staff directory is empty (0 records),
      // the first authenticated user is registered as Primary Admin.
      const existingSnap = await db.collection('staff_users').limit(1).get();
      if (existingSnap.empty) {
        const currentAuthUser = auth ? auth.currentUser : null;
        if (currentAuthUser && currentAuthUser.uid === uid) {
          const bootstrapAdmin = {
            uid: currentAuthUser.uid,
            email: currentAuthUser.email,
            displayName: currentAuthUser.displayName || currentAuthUser.email.split('@')[0],
            role: 'Owner / Primary Admin',
            createdAt: new Date().toISOString()
          };
          await db.collection('staff_users').doc(uid).set(bootstrapAdmin);
          return bootstrapAdmin;
        }
      }
      return null;
    } catch (err) {
      console.warn('[Pelita Firebase] Role check error:', err);
      return null;
    }
  },

  /**
   * Fetch list of staff users (Authorized staff only)
   */
  async getStaffUsers() {
    if (this.isConfigured && db) {
      try {
        const snap = await db.collection('staff_users').get();
        const staff = [];
        snap.forEach(doc => staff.push({ id: doc.id, ...doc.data() }));
        staff.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
        return staff;
      } catch (err) {
        console.warn('[Pelita] Staff fetch error:', err);
      }
    }
    return [];
  },

  /**
   * Delete or revoke a staff user record from Firestore
   */
  async removeStaffRecord(uid) {
    if (this.isConfigured && db) {
      await db.collection('staff_users').doc(uid).delete();
      return true;
    }
    return false;
  },

  /**
   * --- ORDER MANAGEMENT & KITCHEN SYSTEM ---
   */

  /**
   * Create a new order ticket
   */
  async createOrder(orderData) {
    const orderWithMeta = {
      ...orderData,
      id: orderData.orderId,
      status: orderData.status || 'received',
      createdAt: orderData.createdAt || Date.now(),
      updatedAt: Date.now()
    };

    if (this.isConfigured && db) {
      try {
        await db.collection('orders').doc(orderData.orderId).set(orderWithMeta);
      } catch (e) {
        console.warn('[Pelita Firebase] Order create error:', e);
      }
    }

    // LocalStorage fallback cache
    try {
      const existing = JSON.parse(localStorage.getItem('pelita_orders_list') || '[]');
      const filtered = existing.filter(o => o.orderId !== orderData.orderId);
      filtered.unshift(orderWithMeta);
      localStorage.setItem('pelita_orders_list', JSON.stringify(filtered.slice(0, 100)));
      localStorage.setItem('pelita_active_order_id', orderData.orderId);
    } catch (e) {
      console.warn('[Pelita] Local orders cache error:', e);
    }

    return orderWithMeta;
  },

  /**
   * Get single order by orderId
   */
  async getOrder(orderId) {
    if (!orderId) return null;
    if (this.isConfigured && db) {
      try {
        const doc = await db.collection('orders').doc(orderId).get();
        if (doc.exists) return doc.data();
      } catch (e) {
        console.warn('[Pelita Firebase] Get order error:', e);
      }
    }
    // Fallback cache
    try {
      const existing = JSON.parse(localStorage.getItem('pelita_orders_list') || '[]');
      const found = existing.find(o => o.orderId === orderId);
      if (found) return found;
    } catch (e) {}
    return null;
  },

  /**
   * Realtime listener for a single order (Customer Live Tracker)
   */
  onOrderChange(orderId, callback) {
    if (!orderId) return null;
    if (this.isConfigured && db) {
      return db.collection('orders').doc(orderId).onSnapshot(doc => {
        if (doc.exists) {
          callback(doc.data());
        }
      }, err => {
        console.warn('[Pelita Firebase] Order tracker listener error:', err);
      });
    }
    return null;
  },

  /**
   * Realtime listener for all active kitchen orders (Admin Portal)
   */
  onOrdersChange(callback) {
    if (this.isConfigured && db) {
      return db.collection('orders')
        .orderBy('createdAt', 'desc')
        .limit(60)
        .onSnapshot(snapshot => {
          const orders = [];
          snapshot.forEach(doc => orders.push(doc.data()));
          callback(orders);
        }, err => {
          console.warn('[Pelita Firebase] Kitchen orders listener error:', err);
        });
    }
    return null;
  },

  /**
   * Fetch all orders once
   */
  async getOrders() {
    if (this.isConfigured && db) {
      try {
        const snap = await db.collection('orders')
          .orderBy('createdAt', 'desc')
          .limit(60)
          .get();
        const orders = [];
        snap.forEach(doc => orders.push(doc.data()));
        return orders;
      } catch (e) {
        console.warn('[Pelita Firebase] Fetch orders error:', e);
      }
    }
    try {
      return JSON.parse(localStorage.getItem('pelita_orders_list') || '[]');
    } catch (e) {
      return [];
    }
  },

  /**
   * Update order status: 'received' -> 'in_progress' -> 'prepared' -> 'served' (or 'cancelled')
   */
  async updateOrderStatus(orderId, newStatus) {
    const updatedAt = Date.now();
    if (this.isConfigured && db) {
      try {
        await db.collection('orders').doc(orderId).update({
          status: newStatus,
          updatedAt: updatedAt
        });
      } catch (e) {
        console.warn('[Pelita Firebase] Update status error:', e);
      }
    }

    // Update local cache
    try {
      const existing = JSON.parse(localStorage.getItem('pelita_orders_list') || '[]');
      const updated = existing.map(o => {
        if ((o.orderId || o.id) === orderId) {
          return { ...o, status: newStatus, updatedAt };
        }
        return o;
      });
      localStorage.setItem('pelita_orders_list', JSON.stringify(updated));
    } catch (e) {}

    return true;
  },

  /**
   * Delete or void order ticket
   */
  async deleteOrder(orderId) {
    if (this.isConfigured && db) {
      try {
        await db.collection('orders').doc(orderId).delete();
      } catch (e) {
        console.warn('[Pelita Firebase] Delete order error:', e);
      }
    }
    try {
      const existing = JSON.parse(localStorage.getItem('pelita_orders_list') || '[]');
      const updated = existing.filter(o => (o.orderId || o.id) !== orderId);
      localStorage.setItem('pelita_orders_list', JSON.stringify(updated));
    } catch (e) {}
    return true;
  }
};
