# Pelita Cafe — Project Documentation & AI Context

This file provides context, architectural decisions, and operating standards for AI assistants and developers working on the **Pelita Cafe** codebase.

---

## 1. Project Overview

- **Business**: Pelita Cafe (Contemporary Dining & Authentic Heritage Malaysian Cuisine, Est. 2004 in Sepang & Putrajaya).
- **Core Technology**: Pure Vanilla HTML5, CSS3, Modern ES6+ JavaScript, Firebase (Firestore & Storage compat).
- **Design Philosophy**: Warm luxury aesthetic (Dark roasted espresso tones `#18110D`, warm gold accents `#C88A36`, terracotta `#9B4A24`), highly accessible, fully responsive from 320px to ultra-wide displays, zero AI slop, zero heavy frontend framework overhead.

---

## 2. Key Files & Architecture

| File | Purpose |
| :--- | :--- |
| `index.html` | Main customer-facing application. Hero, Interactive Menu Explorer, Interactive Menu Book (Flipbook), Heritage Story, Branch Outlets, Customer Reviews, WhatsApp Cart Drawer, Live Order Tracker Modal, and Table Reservation Modal. |
| `script.js` | Primary frontend engine. Contains `MENU_DATA`, `AppState`, bilingual `I18N` dictionaries (English & Bahasa Melayu), WhatsApp order formulation, cart management, search & filtering, and Firebase realtime listeners. |
| `styles.css` | Global stylesheet and design system. Includes CSS variables, animations, and comprehensive responsive breakpoints (320px, 360px, 480px, 768px, 1024px, 1440px). |
| `admin.html` | Secure management portal. Dish management (add, edit, price, sold-out status), branch hours and status toggling (Open/Closed), live orders, and review moderation. |
| `firebase-config.js` | Firebase SDK integration, Firestore CRUD queries, image uploads to Firebase Storage, and graceful offline fallback handling. |
| `firestore.rules` & `storage.rules` | Security rules for Firebase database and file storage. |

---

## 3. Important Design Decisions & State

### A. Default Language
- **Default is English (`'en'`)**:
  - The website loads in English by default on initial visits and reloads.
  - Users can toggle between **English** and **Bahasa Melayu (BM)** anytime via the header pill switchers or mobile drawer.
  - The user's manual selection is stored in `localStorage` under `pelita_lang` and `pelita_lang_user_set`.

### B. Secret Admin Portal Access
- Public links and buttons to the Admin Portal (`admin.html`) are **intentionally removed from the public site** for security and a cleaner customer experience.
- Authorized staff can access the admin portal via:
  1. **Direct URL**: Navigate to `/admin.html` in the browser.
  2. **Secret Gesture**: Rapidly tap/click the **Pelita Cafe Logo in the footer 3 times** within 0.7 seconds.
  3. **Keyboard Shortcut**: Press `Ctrl + Alt + A` (or `Cmd + Option + A` on macOS).

### C. Menu & Chef Recommended Section
- The standalone static "Chef Recommended / Our Timeless Signatures" highlights block was removed so the Hero section flows directly into the **Interactive Menu Explorer (`#menu`)**.
- All dishes (including *Nasi Ayam Pelita*, *Nasi Ayam Geprek*, *Nasi Lemak Sambal Sotong*, etc.) are managed dynamically inside `MENU_DATA` and synchronized live with Firebase Firestore.

### D. WhatsApp Ordering & Live Order Tracking
- Adding items sends them to the sliding cart drawer.
- Checkout opens WhatsApp with an automated, pre-formatted order message and a unique order ticket ID (`#PEL-XXXX`).
- Customers can track order status (Received -> Cooking -> Ready -> Completed) via the **Live Order Tracker** modal.

---

## 4. Development & Maintenance Guidelines

1. **Keep Dependencies Minimal**: Avoid adding heavy runtime dependencies or npm frameworks (React, Vue, Tailwind, etc.). Stick to high-performance vanilla JavaScript and CSS.
2. **Cache Busting**: When updating `styles.css` or `script.js`, update the query parameter version string in `index.html` (e.g. `script.js?v=5.1`) so returning visitors receive fresh assets immediately.
3. **Bilingual Support**: Always update both English (`I18N.en`) and Bahasa Melayu (`I18N.bm`) translation maps in `script.js` whenever adding new user-facing text.
4. **Mobile First & Responsive**: Verify layout changes across small mobile viewports (`320px` - `375px`) as well as standard desktop resolutions.
