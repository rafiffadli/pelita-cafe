/**
 * Pelita Cafe - Official Web Experience
 * Established 2004 • Sepang & Putrajaya, Malaysia
 * Pure Vanilla JavaScript ES6+ • Zero AI Slop • Responsive & Accessible
 */

// --- 1. COMPREHENSIVE MENU DATABASE ---
let MENU_DATA = [
  // Signature Meals
  {
    id: 'sig-1',
    category: 'signatures',
    name: 'Nasi Ayam Pelita',
    nameBM: 'Nasi Ayam Pelita Istimewa',
    price: 8.90,
    badge: 'Best Seller',
    spicyLevel: 1,
    isChefPick: true,
    isHalal: true,
    image: 'assets/images/nasi-ayam-pelita.webp',
    description: 'Our iconic heritage recipe since 2004. Succulent roasted chicken with crispy skin, fragrant chicken-infused jasmine rice, served with rich broth, house-made chili sauce & dark sweet soy.',
    descriptionBM: 'Resipi warisan turun-temurun sejak 2004. Ayam panggang lembut berjus, nasi beraroma wangi, sup ayam herba, cili kisar resipi rahsia & kicap pekat istimewa.',
    tags: ['Ayam', 'Warisan', 'Nasi'],
  },
  {
    id: 'sig-2',
    category: 'signatures',
    name: 'Nasi Ayam Geprek',
    nameBM: 'Nasi Ayam Geprek Sambal Meletop',
    price: 12.90,
    badge: 'Spicy Favorite',
    spicyLevel: 3,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/nasi-ayam-geprek.webp',
    description: 'Crispy battered golden fried chicken smashed and smothered in fiery red chili sambal geprek, served with warm white rice, fried tofu, tempeh & fresh lalapan.',
    descriptionBM: 'Ayam goreng rangup keemasan dihancurkan bersama sambal geprek cili padi pedas berapi, dihidang nasi putih panas, tauhu, tempe & ulam segar.',
    tags: ['Ayam', 'Pedas', 'Sambal'],
  },
  {
    id: 'sig-3',
    category: 'signatures',
    name: 'Nasi Ayam Penyet',
    nameBM: 'Nasi Ayam Penyet Sambal Terasi',
    price: 12.90,
    badge: 'Popular',
    spicyLevel: 2,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/nasi-ayam-penyet.webp',
    description: 'Traditional spiced fried chicken crushed to perfection, paired with aromatic sambal terasi, fried tofu, tempeh, crisp krupuk & cucumber slices.',
    descriptionBM: 'Ayam goreng berempah tradisional yang dipenyet lembut bersama sambal terasi enak, tauhu goreng, tempe, keropok & timun rangup.',
    tags: ['Ayam', 'Penyet', 'Tradisional'],
  },
  {
    id: 'sig-4',
    category: 'signatures',
    name: 'Nasi Keli Penyet',
    nameBM: 'Nasi Keli Penyet Rangup',
    price: 12.90,
    badge: 'Local Pride',
    spicyLevel: 2,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/nasi-keli-penyet.webp',
    description: 'Deep-fried marinated catfish with an ultra-crisp exterior and tender flesh, served with zesty sambal terasi, tofu, tempeh & steamed white rice.',
    descriptionBM: 'Ikan keli goreng garing berempah dengan isi lembut manis, diiringi sambal terasi padu, tauhu, tempe dan nasi putih.',
    tags: ['Ikan', 'Keli', 'Tradisional'],
  },
  {
    id: 'sig-5',
    category: 'signatures',
    name: 'Nasi Keli Geprek',
    nameBM: 'Nasi Keli Geprek Berapi',
    price: 12.90,
    badge: 'Spicy Hit',
    spicyLevel: 3,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/nasi-keli-geprek.webp',
    description: 'Crispy fried catfish smashed under fresh fiery bird’s eye chili sambal. Full of punchy Malaysian flavors with tofu and tempeh.',
    descriptionBM: 'Ikan keli garing digeprek bersama curahan sambal cili padi segar. Pedas terangkat bersama tauhu, tempe dan ulaman.',
    tags: ['Ikan', 'Pedas', 'Geprek'],
  },

  // All-Day Kopitiam Heritage
  {
    id: 'kop-1',
    category: 'kopitiam',
    name: 'Nasi Lemak Ayam Crispy',
    nameBM: 'Nasi Lemak Ayam Goreng Rangup',
    price: 8.90,
    badge: 'All-Day Hit',
    spicyLevel: 2,
    isChefPick: true,
    isHalal: true,
    image: 'assets/images/nasi-lemak.webp',
    description: 'Rich santan-infused coconut rice served with signature whole crispy fried chicken, slow-cooked caramelised sambal, crunchy anchovies, peanuts & fried egg.',
    descriptionBM: 'Nasi beraroma santan kelapa asli bersama ayam goreng rangup berempah, sambal manis pedas pecah minyak, ikan bilis rangup, kacang & telur.',
    tags: ['Nasi Lemak', 'Sarapan', 'Ayam'],
  },
  {
    id: 'kop-2',
    category: 'kopitiam',
    name: 'Nasi Lemak Sambal Sotong',
    nameBM: 'Nasi Lemak Sambal Sotong Karat',
    price: 14.90,
    badge: 'Signature',
    spicyLevel: 2,
    isChefPick: true,
    isHalal: true,
    image: 'assets/images/nasi-lemak-sotong.webp',
    description: 'Aromatic coconut rice paired with tender squid rings slow-simmered in rich shallot and dried chili sambal. A Malaysian breakfast classic.',
    descriptionBM: 'Nasi lemak santan berkualiti bersama sambal sotong pekat manis pedas yang lembut tidak liat, diiringi telur mata & ulam timun.',
    tags: ['Nasi Lemak', 'Seafood', 'Sotong'],
  },
  {
    id: 'kop-3',
    category: 'kopitiam',
    name: 'Nasi Lemak Telur Mata',
    nameBM: 'Nasi Lemak Telur Mata Klasik',
    price: 4.90,
    badge: 'Value Choice',
    spicyLevel: 1,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/nasi-lemak.webp',
    description: 'The pure, unadulterated Malaysian soul food. Fragrant santan rice, sunny-side-up egg, crispy ikan bilis, roasted peanuts & house sambal.',
    descriptionBM: 'Sajian jiwa rakyat Malaysia. Nasi santan wangi, telur goreng mata kuning goyang, ikan bilis garing, kacang tanah & sambal tumis.',
    tags: ['Nasi Lemak', 'Klasik', 'Murah'],
  },
  {
    id: 'kop-4',
    category: 'kopitiam',
    name: 'Soto Ayam Pelita',
    nameBM: 'Soto Ayam Kuah Rempah Kuning',
    price: 8.90,
    badge: 'Comfort Food',
    spicyLevel: 1,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/soto-ayam.webp',
    description: 'Hearty golden spiced chicken turmeric broth with shredded chicken, glass vermicelli noodles, pressed rice cakes (ketupat), bean sprouts & spicy bergedil.',
    descriptionBM: 'Sup herba kuning pekat beraroma rempah ratus, diisi isi ayam carik, bihun, nasi himpit lembut, tauge segar & sambal kicap cili padi.',
    tags: ['Sup', 'Ayam', 'Tradisional'],
  },
  {
    id: 'kop-5',
    category: 'kopitiam',
    name: 'Roti Bakar Kaya Butter',
    nameBM: 'Roti Bakar Hainan Kaya Mentega Asli',
    price: 4.00,
    badge: 'Tea-time Must',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: 'Traditional charcoal-toasted thick bread slathered with rich pandan kaya and cold thick slices of pure butter. Melt-in-your-mouth perfection.',
    descriptionBM: 'Roti tebal dibakar garing di luar, disapu kaya pandan pekat wangi serta kepingan mentega sejuk yang mencair di lidah.',
    tags: ['Roti', 'Kaya', 'Kopitiam'],
  },
  {
    id: 'kop-6',
    category: 'kopitiam',
    name: 'Telur Separuh Masak (2 Biji)',
    nameBM: 'Telur Separuh Masak Kampung (2 Biji)',
    price: 4.00,
    badge: 'Kopitiam Icon',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: 'Two perfectly soft-boiled farm eggs with velvety golden yolks, seasoned with premium white pepper and dark aged soy sauce.',
    descriptionBM: 'Dua biji telur separuh masak sempurna berkuning sutera, ditaburi lada putih Sarawak & titisan kicap pekat aromatik.',
    tags: ['Telur', 'Kopitiam', 'Sarapan'],
  },

  // Wok Specialties
  {
    id: 'wok-1',
    category: 'wok',
    name: 'Nasi Goreng Pelita Chicken Wings',
    nameBM: 'Nasi Goreng Pelita Kepak Ayam Rangup',
    price: 13.90,
    badge: 'Signature Wok',
    spicyLevel: 1,
    isChefPick: true,
    isHalal: true,
    image: 'assets/images/fried_dishes/nasi-goreng-wings.webp',
    description: 'High-heat wok-fried rice with intense wok hei aroma, eggs, and vegetables, topped with double golden marinated fried chicken wings.',
    descriptionBM: 'Nasi goreng harum beraroma wok hei tinggi bersama telur & sayuran, dihidang bersama 2 ketul kepak ayam goreng rangup berempah.',
    tags: ['Wok', 'Ayam', 'Nasi Goreng'],
  },
  {
    id: 'wok-2',
    category: 'wok',
    name: 'Nasi Goreng Kampung',
    nameBM: 'Nasi Goreng Kampung Ikan Bilis',
    price: 9.90,
    badge: 'Crowd Favorite',
    spicyLevel: 2,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/fried_dishes/nasi-goreng-kampung.webp',
    description: 'Rustic village-style fried rice infused with pounded shallots, garlic, fiery chili padi, water spinach (kangkung) & crispy anchovies.',
    descriptionBM: 'Nasi goreng gaya desa asli dengan tumbukan cili padi, kangkung segar dan taburan ikan bilis goreng rangup menyelerakan.',
    tags: ['Wok', 'Kampung', 'Pedas'],
  },
  {
    id: 'wok-3',
    category: 'wok',
    name: 'Nasi Goreng Cili Padi',
    nameBM: 'Nasi Goreng Cili Padi Berapi',
    price: 9.90,
    badge: 'Extra Spicy',
    spicyLevel: 3,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/fried_dishes/nasi-goreng-cili-padi.webp',
    description: 'For thrill-seeking spice lovers. Stir-fried with our explosive crushed green bird’s eye chili paste, eggs, and sweet soy notes.',
    descriptionBM: 'Pilihan peminat pedas sejati. Ditumis bersama pes cili padi hijau pekat segar, telur dan sayuran renek.',
    tags: ['Wok', 'Pedas', 'Cili Padi'],
  },
  {
    id: 'wok-4',
    category: 'wok',
    name: 'Nasi Goreng Daging Blackpepper',
    nameBM: 'Nasi Goreng Daging Lada Hitam',
    price: 14.90,
    badge: 'Chef Special',
    spicyLevel: 2,
    isChefPick: true,
    isHalal: true,
    image: 'assets/images/fried_dishes/nasi-goreng-cina.webp',
    description: 'Tender marinated beef slices stir-fried in a peppery, savory Sarawak black pepper glaze paired with wok-tossed fried rice.',
    descriptionBM: 'Hirisan daging lembu lembut dimasak sos lada hitam Sarawak yang wangi dan pekat, dipadukan bersama nasi goreng panas.',
    tags: ['Wok', 'Daging', 'Blackpepper'],
  },
  {
    id: 'wok-5',
    category: 'wok',
    name: 'Mee / Bihun Goreng Mamak',
    nameBM: 'Mee / Bihun Goreng Mamak Istimewa',
    price: 9.90,
    badge: 'Classic',
    spicyLevel: 2,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/fried_dishes/mee-goreng.webp',
    description: 'Yellow noodles or rice vermicelli stir-fried with bean sprouts, tofu cubes, eggs, chives, chicken slices, and spicy tomato sambal.',
    descriptionBM: 'Mee kuning atau bihun ditumis kuali panas bersama tauhu, telur hancur, tauge, hirisan ayam dan sos rempah mamak kaw.',
    tags: ['Mee', 'Bihun', 'Mamak'],
  },
  {
    id: 'wok-6',
    category: 'wok',
    name: 'Kuey Teow Kungfu Cantonese',
    nameBM: 'Kuey Teow Kungfu Telur Pekat',
    price: 12.90,
    badge: 'Popular',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/fried_dishes/nasi-goreng-seafood.webp',
    description: 'Crisp pan-fried flat rice noodles encased in an egg blanket, drenched in rich silky chicken and seafood egg gravy with greens.',
    descriptionBM: 'Kuey teow digoreng garing bersalut telur, disiram kuah pekat Cantonese sutera bersama ayam, udang dan sayur sawi.',
    tags: ['Kuey Teow', 'Kungfu', 'Sup'],
  },

  // Omelettes & Light Bites
  {
    id: 'ome-1',
    category: 'omelettes',
    name: 'Cheese Omelette + Fried Rice',
    nameBM: 'Omelette Keju Meleleh + Nasi Goreng',
    price: 12.90,
    badge: 'Kids & Teens Love',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: 'Fluffy 3-egg omelette filled with melted cheddar and mozzarella cheese, served alongside fragrant simple homestyle fried rice.',
    descriptionBM: 'Telur dadar gebu berisi keju cheddar meleleh, dihidangkan bersama nasi goreng ringkas yang sedap dan wangi.',
    tags: ['Omelette', 'Keju', 'Nasi'],
  },
  {
    id: 'bit-1',
    category: 'bites',
    name: 'Bakwan Sayur Rangup',
    nameBM: 'Bakwan Sayur Rangup Sambal Kicap',
    price: 9.00,
    badge: 'Crispy Snack',
    spicyLevel: 1,
    isChefPick: true,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: 'Golden, crispy Indonesian-style shredded vegetable fritters (carrots, cabbage, scallions) served with authentic spicy sweet chili soy dip.',
    descriptionBM: 'Cucur sayuran aneka rangup keemasan di luar lembut di dalam, dicicah bersama sambal kicap pedas cili padi pekat.',
    tags: ['Snack', 'Sayur', 'Petang'],
  },
  {
    id: 'bit-2',
    category: 'bites',
    name: 'Loaded Cheese Fries',
    nameBM: 'Kentang Goreng Sos Keju Leleh',
    price: 9.00,
    badge: 'Popular',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: 'Golden crispy shoestring potatoes drizzled generously with warm creamy cheddar sauce, mayonnaise, and smoked paprika dusting.',
    descriptionBM: 'Kentang goreng rangup disalut curahan sos keju cheddar pekat, mayonis dan taburan herba aroma.',
    tags: ['Fries', 'Keju', 'Bites'],
  },

  // Premium Artisan Coffee
  {
    id: 'cof-1',
    category: 'coffee',
    name: 'Signature Gula Melaka Latte',
    nameBM: 'Latte Gula Melaka Asli',
    price: 13.00,
    badge: 'Signature Brew',
    spicyLevel: 0,
    isChefPick: true,
    isHalal: true,
    image: 'assets/images/coffee/latte-art.webp',
    description: 'Pelita’s crowd-favorite barista creation. Double shot espresso pulled over velvety steamed milk, infused with smoky organic Melaka palm sugar.',
    descriptionBM: 'Kopi signatur Pelita paling digemari. Espresso dwi-shot berkrim diadun susu segar dan sirap nisan gula Melaka asli yang harum berkaramel.',
    tags: ['Kopi', 'Latte', 'Gula Melaka'],
  },
  {
    id: 'cof-2',
    category: 'coffee',
    name: 'Spanish Latte',
    nameBM: 'Spanish Latte Berkrim',
    price: 12.00,
    badge: 'Bestseller',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/coffee/iced-coffee.webp',
    description: 'Bold espresso blended with fresh dairy and a touch of sweet condensed milk for a silky, comforting Spanish-style afternoon treat.',
    descriptionBM: 'Espresso pekat diadun susu segar dan sentuhan susu pekat manis seimbang, menghasilkan tekstur sutera lembut.',
    tags: ['Kopi', 'Latte', 'Ais'],
  },
  {
    id: 'cof-3',
    category: 'coffee',
    name: 'Caramel Macchiato',
    nameBM: 'Karamel Macchiato',
    price: 12.00,
    badge: 'Sweet & Bold',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/coffee/caramel-macchiato.webp',
    description: 'Layered vanilla milk marked with rich espresso and drizzled with artisan butterscotch caramel sauce. Served hot or iced.',
    descriptionBM: 'Lapisan susu vanila berkrim ditanda suntikan espresso mantap dan hiasan sos karamel mentega mewah. Pilihan panas atau sejuk.',
    tags: ['Kopi', 'Karamel', 'Macchiato'],
  },
  {
    id: 'cof-4',
    category: 'coffee',
    name: 'Cafe Latte / Flat White',
    nameBM: 'Cafe Latte / Flat White Barista',
    price: 10.00,
    badge: 'Classic',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/coffee/latte-art.webp',
    description: 'Crafted with our specialty 100% Arabica house blend beans. Velvety microfoam over a rich, chocolatey espresso base with elegant latte art.',
    descriptionBM: 'Biji kopi 100% Arabica terpilih dengan buih susu sutera lembut bertekstur mikro, menampilkan seni latte barista memukau.',
    tags: ['Kopi', 'Latte', 'Arabica'],
  },
  {
    id: 'cof-5',
    category: 'coffee',
    name: 'Mocha Dark Roast',
    nameBM: 'Mocha Coklat Gelap',
    price: 12.00,
    badge: 'Indulgent',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/coffee/mocha.webp',
    description: 'The harmonious union of robust espresso and decadent Belgian dark chocolate, topped with smooth steamed milk and cacao powder.',
    descriptionBM: 'Gabungan mantap antara espresso pekat dan coklat gelap Belgium yang kaya, disempurnakan taburan serbuk koko premium.',
    tags: ['Kopi', 'Mocha', 'Coklat'],
  },

  // Non-Coffee & Local Signatures
  {
    id: 'non-1',
    category: 'noncoffee',
    name: 'Teh Tarik Pelita Kaw',
    nameBM: 'Teh Tarik Pelita Kaw Buih Melimpah',
    price: 5.50,
    badge: 'Malaysian Gem',
    spicyLevel: 0,
    isChefPick: true,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: 'Pulled high for thick, velvety foam. Brewed with our secret blend of Cameron Highlands black tea leaves and condensed milk.',
    descriptionBM: 'Ditarik tinggi berbuih pekat menggunung. Dirumus khas menggunakan daun teh hitam Cameron Highlands bersama susu berkualiti.',
    tags: ['Teh Tarik', 'Kaw', 'Warisan'],
  },
  {
    id: 'non-2',
    category: 'noncoffee',
    name: 'Uji Matcha Latte',
    nameBM: 'Latte Matcha Jepun Asli',
    price: 12.00,
    badge: 'Premium Grade',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: 'Ceremonial grade pure Japanese Uji matcha whisked with oat or dairy milk for an earthy, vibrant, antioxidant-rich sip.',
    descriptionBM: 'Serbuk matcha Uji gred tinggi dari Jepun dibancuh segar bersama susu berkrim menghasilkan rasa tanah hijau menenangkan.',
    tags: ['Matcha', 'Teh', 'Sihat'],
  },
  {
    id: 'non-3',
    category: 'noncoffee',
    name: 'Belgium Dark Cocoa',
    nameBM: 'Coklat Gelap Belgium Mewah',
    price: 11.00,
    badge: 'Rich & Creamy',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: 'Decadent melted Belgian chocolate folded with fresh creamy milk. A soothing comfort drink for any time of the day.',
    descriptionBM: 'Coklat Belgium pekat mewah diadun bersama susu segar berkrim. Sajian manis penghilang lelah paling memuaskan.',
    tags: ['Coklat', 'Bukan Kopi', 'Mewah'],
  },

  // Refreshers & Fresh Juices
  {
    id: 'jui-1',
    category: 'juices',
    name: 'Asam Boi Limau Kasturi Cooler',
    nameBM: 'Jus Limau Kasturi Asam Boi Segar',
    price: 7.00,
    badge: 'Thirst Quencher',
    spicyLevel: 0,
    isChefPick: true,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: 'Freshly squeezed calamansi limes shaken with preserved white plum (asam boi), ice, and a dash of cane syrup. Electrifyingly refreshing!',
    descriptionBM: 'Perahan limau kasturi segar digoncang bersama asam boi putih dan ketulan ais. Masam manis sejuk menyegarkan tekak.',
    tags: ['Jus', 'Limau', 'Asam Boi'],
  },
  {
    id: 'jui-2',
    category: 'juices',
    name: 'Bandung Soda Cincau Royale',
    nameBM: 'Bandung Soda Cincau Royale',
    price: 6.50,
    badge: 'Local Classic',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: 'Fragrant rose syrup, evaporated milk, sparkling soda water, and hand-cut herbal grass jelly strips (cincau).',
    descriptionBM: 'Sirap ros wangi, susu sejat berlemak, soda berkarbonat dan hirisan cincau hitam lembut yang menyegarkan.',
    tags: ['Bandung', 'Soda', 'Cincau'],
  },
  {
    id: 'jui-3',
    category: 'juices',
    name: 'Fresh Cold-Pressed Orange',
    nameBM: 'Jus Oren Segar Asli 100%',
    price: 8.50,
    badge: '100% Pure',
    spicyLevel: 0,
    isChefPick: false,
    isHalal: true,
    image: 'assets/images/dishes-spread.webp',
    description: '100% pure cold-pressed Valencia oranges. No added water, zero artificial sugar. Pure natural vitamin C in every chilled sip.',
    descriptionBM: 'Perahan 100% buah oren Valencia manis segar tanpa tambahan air atau gula tiruan. Kaya vitamin C semulajadi.',
    tags: ['Jus', 'Oren', 'Sihat'],
  }
];

window.MENU_DATA = MENU_DATA;
window.MENU_ITEMS = MENU_DATA;

// --- 2. BRANCH & HOURS SPECIFICATIONS ---
let BRANCHES = {
  putrajaya: {
    key: 'putrajaya',
    name: 'Pelita Cafe Putrajaya',
    nameBM: 'Pelita Cafe Cawangan Putrajaya',
    address: 'Jalan Diplomatik 1, Presint 15, 62050 Putrajaya, Wilayah Persekutuan Putrajaya',
    hoursText: 'Sat – Wed: 9:00 AM – 10:00 PM (Closed Thursday & Friday)',
    hoursTextBM: 'Sabtu – Rabu: 9:00 PG – 10:00 MLM (Tutup Khamis & Jumaat)',
    phone: '+6012-337 7807',
    phoneRaw: '60123377807',
    email: 'pelitaheritagesdnbhd@gmail.com',
    mapsUrl: 'https://maps.google.com/?q=Pelita+Cafe+Putrajaya+Presint+15',
    wazeUrl: 'https://waze.com/ul?q=Pelita+Cafe+Putrajaya',
    openDays: [6, 0, 1, 2, 3], // Sat (6), Sun (0), Mon (1), Tue (2), Wed (3)
    openHour: 9,
    closeHour: 22,
    isTemporaryClosed: false,
    closureNotice: '',
    foodpandaUrl: 'https://www.foodpanda.my/restaurant/yi1i/pelita-cafe-putrajaya-yi1i'
  },
  sepang: {
    key: 'sepang',
    name: 'Pelita Cafe Sepang',
    nameBM: 'Pelita Cafe Cawangan Sepang (Asal 2004)',
    address: 'Medan 23, Bandar Baru Salak Tinggi, 43900 Sepang, Selangor',
    hoursText: 'Sat – Thu: 9:00 AM – 7:00 PM (Closed Friday)',
    hoursTextBM: 'Sabtu – Khamis: 9:00 PG – 7:00 PTG (Tutup Jumaat)',
    phone: '+6012-337 7807',
    phoneRaw: '60123377807',
    email: 'pelitaheritagesdnbhd@gmail.com',
    mapsUrl: 'https://maps.google.com/?q=Pelita+Cafe+Sepang+Medan+23',
    wazeUrl: 'https://waze.com/ul?q=Pelita+Cafe+Sepang',
    openDays: [6, 0, 1, 2, 3, 4], // Sat (6), Sun (0), Mon (1), Tue (2), Wed (3), Thu (4)
    openHour: 9,
    closeHour: 19,
    isTemporaryClosed: false,
    closureNotice: '',
    foodpandaUrl: 'https://www.foodpanda.my/restaurant/yi1i/pelita-cafe-putrajaya-yi1i'
  }
};

const FOODPANDA_DELIVERY_URL = 'https://www.foodpanda.my/restaurant/yi1i/pelita-cafe-putrajaya-yi1i';

function redirectToFoodpanda() {
  const branch = (typeof BRANCHES !== 'undefined' && typeof AppState !== 'undefined' && BRANCHES[AppState.selectedBranch]) ? BRANCHES[AppState.selectedBranch] : null;
  const targetUrl = (branch && branch.foodpandaUrl) || FOODPANDA_DELIVERY_URL;
  const a = document.createElement('a');
  a.href = targetUrl;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

window.BRANCHES = BRANCHES;
window.FOODPANDA_DELIVERY_URL = FOODPANDA_DELIVERY_URL;
window.redirectToFoodpanda = redirectToFoodpanda;

// --- 3. BILINGUAL DICTIONARY (EN / BM) ---
const I18N = {
  en: {
    // Navigation & Top Bar
    nav_home: 'Home',
    nav_menu: 'Menu',
    nav_book: 'Menu Book',
    nav_story: 'Our Heritage',
    nav_outlets: 'Outlets',
    nav_gallery: 'Gallery',
    nav_reviews: 'Reviews',
    nav_track_order: 'Track Order',
    btn_book_table: 'Reserve Table',
    btn_order_now: 'Order Now',
    order_wa_btn: 'Order via WhatsApp',
    nav_order_wa: 'Order WhatsApp',
    admin_portal: 'Admin Portal',
    btn_admin_mobile: 'ADMIN PORTAL LOGIN',
    ticker_putrajaya: 'Putrajaya: Open Now',
    ticker_sepang: 'Sepang: Open Now',

    // Hero Section
    badge_heritage: 'EST. 2004 • AUTHENTIC MALAYSIAN TASTE',
    hero_title: 'Where Heritage Flavours Meet Artisan Cafe Comfort',
    hero_subtitle: 'Serving beloved Hainanese chicken rice, authentic wok-fried dishes, and barista specialty coffees since 2004 across Sepang and Putrajaya.',
    btn_explore_menu: 'Explore Menu',
    badge_halal: '100% Halal Ingredients',
    badge_halal_sub: 'Certified Fresh & Clean',
    badge_branches: 'Sepang & Putrajaya Outlets',
    badge_branches_sub: 'Comfortable Air-Conditioned Dining',
    badge_reviews: '451 Verified Customer Reviews',
    badge_reviews_short: '4.8★ Google Verified',
    badge_reviews_sub: '4.8-Star Google Rating',
    hero_floating_badge: 'RM 8.90 • Iconic Recipe Since 2004',
    hero_rating_badge: 'Heritage Recipe Since 2004',

    // Highlights Section
    highlights_eyebrow: 'CHEF RECOMMENDED',
    highlights_title: 'Our Timeless Signatures',
    highlights_subtext: 'Recipes perfected through 20 years of dedication to authentic Malaysian comfort food.',
    hl_badge_1: 'Best Seller Since 2004',
    hl_desc_1: 'Succulent golden roasted chicken, fragrant ginger chicken rice, rich herbal broth, and our legendary secret chili paste.',
    hl_badge_2: 'Fiery Favorite',
    hl_desc_2: 'Crispy shattered fried chicken drenched in fresh bird’s eye chili sambal geprek, served with warm rice, tofu & tempeh.',
    hl_badge_3: 'Heritage Royal',
    hl_desc_3: 'Fragrant coconut jasmine rice with slow-simmered tender squid in sweet & spicy caramelized onion sambal.',
    btn_add_short: '+ Add',

    // Menu Explorer
    menu_eyebrow: 'SAVOUR EVERY DISH',
    menu_title: 'Explore Our Full Menu',
    menu_subtext: 'Over 60 authentic dishes, wok specialties, kopitiam breakfast, and specialty coffees made to order.',
    search_placeholder: 'Search dishes, coffee, ingredients...',
    filter_all: 'All Delights',
    filter_signatures: 'Signatures',
    filter_kopitiam: 'All-Day Kopitiam',
    filter_wok: 'Wok Specialties',
    filter_omelettes: 'Omelettes',
    filter_bites: 'Light Bites',
    filter_coffee: 'Barista Coffee',
    filter_noncoffee: 'Teas & Local Kaw',
    filter_juices: 'Cold Pressed & Coolers',
    quick_add: '+ Add to WhatsApp Order',
    added_to_cart: 'Added to your order!',
    btn_view_full_menu: 'View Full Menu (60+ Items)',
    btn_show_less_menu: 'Show Signature Dishes Only',
    menu_showing_signatures: 'Showing 6 Heritage Signatures • 60+ Full Menu Items Available',

    // Menu Book
    book_eyebrow: 'DIGITAL MENU BOOK',
    book_title: 'Digital Interactive Menu Book',
    book_subtitle: 'Browse our authentic physical menu pages with smooth swipe gestures. Tap any page to view in high resolution.',
    btn_prev: 'Previous Page',
    btn_next: 'Next Page',
    book_tap_zoom: 'Click to Enlarge',

    // Heritage Story
    story_badge_label: 'Years of Heritage',
    story_eyebrow: 'OUR JOURNEY SINCE 2004',
    story_title: "From Sepang's Humble Beginning to a Putrajaya Icon",
    story_lead: 'What started in 2004 as a modest stall at Medan 23, Bandar Baru Salak Tinggi has grown into a cherished culinary destination.',
    story_p1: 'Rooted in authentic Hainanese cooking techniques and infused with distinct Malaysian spices, Pelita Cafe has stayed true to its founding promise: honest cooking, generous portions, and recipes prepared from scratch every morning without compromise.',
    story_p2: 'Today, our Putrajaya and Sepang outlets bridge nostalgic Malaysian comfort food with modern cafe ambience — offering specialty coffees, soothing teh tarik, and a warm sanctuary for family gatherings, friends, and workers.',
    story_tl_title_1: 'First Eatery in Sepang',
    story_tl_desc_1: 'Opened at Medan 23 Salak Tinggi with our signature roasted chicken rice recipe.',
    story_tl_title_2: 'Expanding Wok Specialties',
    story_tl_desc_2: 'Introduced authentic wok dishes, fiery geprek, and expanded our loyal local following.',
    story_tl_title_3: 'Putrajaya Flagship Branch',
    story_tl_desc_3: 'Launched our contemporary dining concept at Presint 15 with specialty barista coffees.',
    story_tl_title_4: '4.8 Rating Across 451 Google Reviews',
    story_tl_desc_4: 'Serving thousands of delighted patrons weekly with 100% Halal quality reassurance.',

    // Outlets & Hours
    outlets_eyebrow: 'VISIT US TODAY',
    outlets_title: 'Our Outlets & Hours',
    outlets_subtext: 'Find our convenient locations in Putrajaya and Sepang, complete with real-time opening hours.',
    outlet_sub_putrajaya: 'Presint 15 Flagship Outlet',
    outlet_sub_sepang: 'Heritage Origin (Established 2004)',
    label_address: 'Address',
    btn_copy_addr: 'Copy Address',
    label_hours: 'Operating Hours',
    closed_thu_fri: 'Closed Thursday & Friday',
    closed_fri: 'Closed Friday',
    label_phone: 'Phone & WhatsApp',
    btn_copy_phone: 'Copy Number',
    open_now: 'OPEN NOW',
    closed_now: 'CLOSED NOW',

    // Gallery
    gallery_eyebrow: 'VISUAL FEAST',
    gallery_title: 'Pelita Moments & Atmosphere',
    gallery_subtext: 'A glimpse into our comforting cafe ambience, signature dishes, and artisan brews. Click any photo to enlarge.',
    gallery_cap_1: 'Cozy Dining Sanctuary',
    gallery_cap_2: 'Authentic Heritage Feast',
    gallery_cap_3: 'Event & Celebration Hall',
    gallery_cap_4: 'Artisan Barista Brews',
    gallery_cap_5: 'Fiery Sambal Geprek',
    gallery_cap_6: 'Traditional Herbal Broth',
    gallery_cap_7: 'Smoky Wok Breath (Wok Hei)',
    gallery_cap_8: 'Refreshing Local & Western Brews',

    // Table Reservation Banner & Modal
    reserve_eyebrow: 'PLAN YOUR VISIT',
    reserve_title: 'Book a Table or Event',
    reserve_desc: 'Hosting a family gathering, birthday feast or business meetup? Let us reserve the finest table for you.',
    btn_submit_reserve: 'Confirm Reservation Request',
    btn_call_putrajaya: 'Call Putrajaya Outlet (+6012-337 7807)',
    reserve_lbl_outlet: 'Preferred Outlet / Cawangan',
    reserve_lbl_name: 'Your Full Name / Nama Penuh',
    reserve_lbl_phone: 'WhatsApp Number',
    reserve_lbl_date: 'Date / Tarikh',
    reserve_lbl_time: 'Time / Masa',
    reserve_lbl_pax: 'Number of Guests / Bilangan Pax',
    reserve_lbl_notes: 'Special Requests / Seating Notes',
    reserve_notes_ph: 'e.g. Baby chair needed, birthday celebration',

    // Reviews & Testimonials
    reviews_eyebrow: 'CUSTOMER VOICES',
    reviews_title: 'Google Reviews & Patron Feedback',
    reviews_subtext: 'Real experiences shared by diners across our Putrajaya and Sepang outlets.',
    google_rating_label: 'Google Business Rating',
    google_verified_text: 'Based on 451 Verified Google Maps Reviews',
    google_leave_review: 'Read More or Leave a Review on Google ↗',
    review_text_1: '"Pelita Cafe Presint 15 is our regular family lunch spot. Their signature Nasi Ayam has juicy roasted chicken and fragrant rice that reminds you of traditional cooking. Very clean interior, air-conditioned and welcoming staff!"',
    reviewer_origin_1: 'Local Guide • Putrajaya Outlet',
    review_text_2: '"Been eating here since their early days in Salak Tinggi! The Ayam Gepuk & Ayam Geprek sambal is top notch — crispy chicken with authentic spicy kick. Also love their iced coffee kaw!"',
    reviewer_origin_2: 'Verified Diner • Sepang Outlet',
    review_text_3: '"Hidden gem in Diplomatik Putrajaya. Tried the Mee Goreng Mamak and iced latte. Food came out steaming hot and fast. Highly recommended for a casual dinner or remote work coffee session."',
    reviewer_origin_3: 'Local Guide • Putrajaya Outlet',
    review_text_4: '"Great place for gatherings! The cafe ambiance is modern, clean, and aesthetic. Portion sizes are generous for the price. Ordering via WhatsApp for takeaway was super seamless too."',
    reviewer_origin_4: 'Verified Diner • Putrajaya Outlet',
    review_text_5: '"Pelita Cafe\'s Nasi Ayam never disappoints. Consistent taste over the years. Soto Ayam soup is rich with good herbal spices. 5 stars all the way!"',
    reviewer_origin_5: 'Verified Diner • Sepang Outlet',
    review_text_6: '"One of the best comfort dining spots in Presint 15. The barista coffee is surprisingly good for a local heritage cafe. The staff is polite and service is prompt."',
    reviewer_origin_6: 'Cyberjaya Worker • Putrajaya Outlet',

    // Footer
    footer_brand_desc: 'Authentic Malaysian Heritage Eatery & Contemporary Cafe. Dedicated to timeless flavor, comforting ambience, and warm hospitality since 2004.',
    footer_nav_title: 'Navigation',
    footer_locations_title: 'Locations',
    footer_connect_title: 'Stay Connected',
    footer_link_home: 'Home',
    footer_link_menu: 'Menu Explorer',
    footer_link_book: 'Interactive Menu Book',
    footer_link_heritage: 'Our Heritage (2004)',
    footer_link_outlets: 'Outlets & Hours',
    footer_link_gallery: 'Atmosphere & Gallery',
    footer_news_text: 'Subscribe to receive exclusive seasonal dish invitations and festive specials.',
    footer_news_placeholder: 'Your email address',
    footer_news_btn: 'Join',
    footer_copyright: '© 2004 – 2026 Pelita Heritage Sdn Bhd. All rights reserved.',
    footer_crafted: 'Crafted with care • Putrajaya & Sepang, Malaysia',

    // Cart Drawer
    cart_summary: 'Your WhatsApp Order',
    cart_sec_outlet: '1. Select Outlet',
    cart_sec_type: '2. Order Type',
    cart_sec_cust: '3. Customer Details',
    cart_placeholder_name: 'Your Name',
    cart_placeholder_notes: 'Special Requests (e.g. Less sweet, separate sambal)',
    cart_sec_dishes: '4. Selected Dishes',
    cart_empty: 'Your order is empty. Browse our menu and pick your favourites!',
    cart_browse_btn: 'Browse Menu & Add Dishes',
    cart_est_total: 'Estimated Total:',
    order_type_dinein: 'Dine-In',
    order_type_takeaway: 'Takeaway (Bungkus)',
    order_type_delivery: 'Delivery (Foodpanda ↗)',
    send_order_wa: 'Send Order via WhatsApp',

    // Live Order Tracker
    tracker_title: 'Live Order Tracker',
    tracker_subtitle: 'Follow your dish live from the kitchen wok to your table or counter',
    tracker_input_ph: 'Enter Order ID (e.g. PEL-1082)',
    tracker_btn_track: 'Track',
    tracker_lbl_ticket: 'ORDER TICKET',
    tracker_lbl_outlet_type: 'OUTLET & TYPE',
    step_received: 'Received',
    step_in_progress: 'In Progress',
    step_prepared: 'Prepared',
    step_served: 'Served',
    tracker_step_received_sub: 'Confirmed',
    tracker_step_cooking_sub: 'Cooking',
    tracker_step_ready_sub: 'Ready',
    tracker_step_completed_sub: 'Completed',
    tracker_not_found_title: 'Order Not Found',
    tracker_not_found_desc: 'Please check your Order ID (e.g. PEL-1082) sent via WhatsApp or your recent order receipt.'
  },

  bm: {
    // Navigation & Top Bar
    nav_home: 'Utama',
    nav_menu: 'Menu',
    nav_book: 'Buku Menu',
    nav_story: 'Kisah Warisan',
    nav_outlets: 'Cawangan',
    nav_gallery: 'Galeri',
    nav_reviews: 'Ulasan',
    nav_track_order: 'Jejak Pesanan',
    btn_book_table: 'Tempah Meja',
    btn_order_now: 'Pesan Sekarang',
    order_wa_btn: 'Pesan Melalui WhatsApp',
    nav_order_wa: 'Pesan WhatsApp',
    admin_portal: 'Portal Admin',
    btn_admin_mobile: 'LOG MASUK PORTAL ADMIN',
    ticker_putrajaya: 'Putrajaya: Buka Sekarang',
    ticker_sepang: 'Sepang: Buka Sekarang',

    // Hero Section
    badge_heritage: 'SEJAK 2004 • RESIPI WARISAN ASLI',
    hero_title: 'Harmoni Rasa Warisan & Aroma Kopi Kontemporari',
    hero_subtitle: 'Menyajikan Nasi Ayam Pelita legenda, masakan kuali panas berasap, dan kopi barista bermutu tinggi sejak 2004 di Sepang & Putrajaya.',
    btn_explore_menu: 'Terokai Menu',
    badge_halal: '100% Ramuan Halal',
    badge_halal_sub: 'Diiktiraf Bersih & Suci',
    badge_branches: 'Cawangan Sepang & Putrajaya',
    badge_branches_sub: 'Ruang Selesa Berhawa Dingin',
    badge_reviews: '451+ Ulasan Pelanggan Disahkan',
    badge_reviews_short: '4.8★ Ulasan Google',
    badge_reviews_sub: 'Penarafan Google 4.8 Bintang',
    hero_floating_badge: 'RM 8.90 • Resipi Ikonik Sejak 2004',
    hero_rating_badge: 'Resipi Warisan Sejak 2004',

    // Highlights Section
    highlights_eyebrow: 'PILIHAN CHEF',
    highlights_title: 'Sajian Pilihan Sepanjang Zaman',
    highlights_subtext: 'Resipi yang disempurnakan menerusi dedikasi 20 tahun demi keenakan hidangan kegemaran rakyat Malaysia.',
    hl_badge_1: 'Paling Laris Sejak 2004',
    hl_desc_1: 'Ayam panggang keemasan berjus, nasi beraroma halia, sup herba menyegarkan, dan pes sambal cili rahsia legenda.',
    hl_badge_2: 'Kegemaran Berapi',
    hl_desc_2: 'Ayam goreng rangup berempah disiram sambal geprek cili padi segar membara, disajikan bersama nasi panas, tauhu & tempe.',
    hl_badge_3: 'Sajian Diraja Warisan',
    hl_desc_3: 'Nasi wangi santan pandan bersama sambal sotong lembut yang dimasak perlahan dengan bawang karamel manis pedas.',
    btn_add_short: '+ Tambah',

    // Menu Explorer
    menu_eyebrow: 'NIKMATI SETIAP HIDANGAN',
    menu_title: 'Terokai Semua Pilihan Menu',
    menu_subtext: 'Lebih 60 sajian asli, masakan kuali panas, sarapan kopitiam, dan kopi barista segar mengikut pesanan anda.',
    search_placeholder: 'Cari hidangan, kopi, ramuan...',
    filter_all: 'Semua Menu',
    filter_signatures: 'Sajian Pilihan',
    filter_kopitiam: 'Kopitiam Sepanjang Hari',
    filter_wok: 'Masakan Kuali Panas',
    filter_omelettes: 'Siri Omelette',
    filter_bites: 'Kudapan & Minum Petang',
    filter_coffee: 'Kopi Barista',
    filter_noncoffee: 'Teh & Minuman Kaw',
    filter_juices: 'Jus Buah & Penyejuk Tekak',
    quick_add: '+ Tambah Pesanan WhatsApp',
    added_to_cart: 'Ditambah ke dalam pesanan!',
    btn_view_full_menu: 'Lihat Semua Menu (60+ Sajian)',
    btn_show_less_menu: 'Papar Sajian Pilihan Sahaja',
    menu_showing_signatures: 'Memaparkan 6 Sajian Pilihan • 60+ Sajian Lengkap Tersedia',

    // Menu Book
    book_eyebrow: 'BUKU MENU DIGITAL',
    book_title: 'Buku Menu Digital Interaktif',
    book_subtitle: 'Semak helaian buku menu fizikal Pelita Cafe dengan leretan lancar. Sentuh mana-mana halaman untuk paparan resolusi tinggi.',
    btn_prev: 'Halaman Sebelumnya',
    btn_next: 'Halaman Seterusnya',
    book_tap_zoom: 'Klik untuk Besarkan',

    // Heritage Story
    story_badge_label: 'Tahun Warisan Rasa',
    story_eyebrow: 'PERJALANAN KAMI SEJAK 2004',
    story_title: 'Daripada Permulaan Sederhana di Sepang Menjadi Ikon Putrajaya',
    story_lead: 'Bermula pada tahun 2004 sebagai sebuah gerai sederhana di Medan 23, Bandar Baru Salak Tinggi, Pelita Cafe telah berkembang menjadi destinasi menjamu selera yang dekat di hati ramai.',
    story_p1: 'Berakar umbi daripada teknik masakan Hainan asli dan disebatikan bersama rempah ratus Malaysia, Pelita Cafe sentiasa berpegang pada janji asal: hidangan ikhlas, porsi memuaskan, dan bahan yang dimasak segar setiap pagi tanpa sebarang kompromi.',
    story_p2: 'Hari ini, cawangan kami di Putrajaya dan Sepang merapatkan kenikmatan sajian tradisi dengan keselesaan kafe kontemporari — menyediakan kopi barista artisan, teh tarik kaw yang menenangkan, serta ruang mesra untuk seisi keluarga, sahabat handai dan rakan sekerja.',
    story_tl_title_1: 'Kedai Pertama di Sepang',
    story_tl_desc_1: 'Mula beroperasi di Medan 23 Salak Tinggi dengan resipi legenda Nasi Ayam Panggang kami.',
    story_tl_title_2: 'Memperluas Sajian Kuali Panas',
    story_tl_desc_2: 'Memperkenalkan masakan kuali panas berasap, hidangan geprek berapi, dan menambat hati pelanggan setia.',
    story_tl_title_3: 'Cawangan Utama Putrajaya',
    story_tl_desc_3: 'Melancarkan konsep kafe moden di Presint 15 bersama bancuhan kopi barista istimewa.',
    story_tl_title_4: 'Penarafan 4.8 Menerusi 451+ Ulasan Google',
    story_tl_desc_4: 'Menyajikan ribuan pelanggan gembira setiap minggu dengan jaminan kualiti 100% Halal.',

    // Outlets & Hours
    outlets_eyebrow: 'KUNJUNGI KAMI HARI INI',
    outlets_title: 'Cawangan & Waktu Operasi',
    outlets_subtext: 'Ketahui lokasi cawangan kami di Putrajaya dan Sepang, lengkap dengan kemas kini waktu operasi secara langsung.',
    outlet_sub_putrajaya: 'Cawangan Utama Presint 15',
    outlet_sub_sepang: 'Asal Usul Warisan (Sejak 2004)',
    label_address: 'Alamat',
    btn_copy_addr: 'Salin Alamat',
    label_hours: 'Waktu Operasi',
    closed_thu_fri: 'Tutup Khamis & Jumaat',
    closed_fri: 'Tutup Jumaat',
    label_phone: 'Telefon & WhatsApp',
    btn_copy_phone: 'Salin Nombor',
    open_now: 'BUKA SEKARANG',
    closed_now: 'TUTUP SEKARANG',

    // Gallery
    gallery_eyebrow: 'TATAPAN MATA & RASA',
    gallery_title: 'Suasana & Detik Indah Pelita',
    gallery_subtext: 'Gambaran suasana kafe kami yang tenang, sajian istimewa, dan bancuhan artisan. Klik foto untuk paparan besar.',
    gallery_cap_1: 'Ruang Makan Selesa & Tenang',
    gallery_cap_2: 'Jamuan Makanan Warisan Asli',
    gallery_cap_3: 'Ruang Majlis & Keraian Khas',
    gallery_cap_4: 'Seni Kopi Barista Artisan',
    gallery_cap_5: 'Sambal Ayam Geprek Membara',
    gallery_cap_6: 'Sup Herba Soto Tradisional',
    gallery_cap_7: 'Aroma Kuali Panas Berasap (Wok Hei)',
    gallery_cap_8: 'Minuman Segar Tempatan & Kopi Ais',

    // Table Reservation Banner & Modal
    reserve_eyebrow: 'RANCANG KUNJUNGAN ANDA',
    reserve_title: 'Tempahan Meja & Majlis Khas',
    reserve_desc: 'Mahu meraikan hari lahir, makan beramai-ramai atau perjumpaan santai? Tempah meja terbaik anda hari ini.',
    btn_submit_reserve: 'Hantar Pengesahan Tempahan',
    btn_call_putrajaya: 'Hubungi Cawangan Putrajaya (+6012-337 7807)',
    reserve_lbl_outlet: 'Cawangan Pilihan',
    reserve_lbl_name: 'Nama Penuh Anda',
    reserve_lbl_phone: 'Nombor WhatsApp',
    reserve_lbl_date: 'Tarikh',
    reserve_lbl_time: 'Masa',
    reserve_lbl_pax: 'Bilangan Tetamu (Pax)',
    reserve_lbl_notes: 'Permintaan Khas / Catatan Tempat Duduk',
    reserve_notes_ph: 'cth. Kerusi bayi diperlukan, sambutan hari lahir',

    // Reviews & Testimonials
    reviews_eyebrow: 'SUARA PELANGGAN',
    reviews_title: 'Ulasan Google & Maklum Balas Pelanggan',
    reviews_subtext: 'Pengalaman sebenar yang dikongsi oleh para pengunjung di cawangan Putrajaya dan Sepang.',
    google_rating_label: 'Penarafan Google Business',
    google_verified_text: 'Berdasarkan 451 Ulasan Disahkan di Google Maps',
    google_leave_review: 'Baca Ulasan atau Tinggalkan Ulasan di Google ↗',
    review_text_1: '"Pelita Cafe Presint 15 adalah tempat makan tengah hari tetap keluarga kami. Nasi Ayam istimewa mereka ada ayam panggang yang juicy dan nasi wangi yang mengingatkan pada masakan tradisional. Ruang sangat bersih, berhawa dingin dan kakitangan mesra!"',
    reviewer_origin_1: 'Pemandu Tempatan (Local Guide) • Cawangan Putrajaya',
    review_text_2: '"Dah makan kat sini sejak awal pembukaan di Salak Tinggi lagi! Sambal Ayam Gepuk & Ayam Geprek memang terbaik — ayam rangup dengan kepedasan asli menyengat. Kopi ais kaw mereka pun padu!"',
    reviewer_origin_2: 'Pelanggan Disahkan • Cawangan Sepang',
    review_text_3: '"Permata tersembunyi di Diplomatik Putrajaya. Dah cuba Mee Goreng Mamak dan iced latte. Makanan sampai panas-panas dan pantas. Sangat disyorkan untuk makan malam santai atau sesi kerja sambil minum kopi."',
    reviewer_origin_3: 'Pemandu Tempatan (Local Guide) • Cawangan Putrajaya',
    review_text_4: '"Tempat yang sangat sesuai untuk berkumpul! Suasana kafe moden, bersih, dan estetik. Porsi hidangan banyak dan berbaloi dengan harga. Pesan melalui WhatsApp untuk bungkus pun sangat lancar."',
    reviewer_origin_4: 'Pelanggan Disahkan • Cawangan Putrajaya',
    review_text_5: '"Nasi Ayam Pelita Cafe tak pernah mengecewakan. Rasanya konsisten sejak bertahun-tahun. Kuah Soto Ayam kaya dengan rempah herba yang wangi. 5 bintang tanpa ragu!"',
    reviewer_origin_5: 'Pelanggan Disahkan • Cawangan Sepang',
    review_text_6: '"Salah satu tempat makan paling selesa di Presint 15. Kopi barista sangat memuaskan untuk kafe warisan tempatan. Kakitangan berbudi bahasa dan servis sangat pantas."',
    reviewer_origin_6: 'Warga Kerja Cyberjaya • Cawangan Putrajaya',

    // Footer
    footer_brand_desc: 'Kafe Kontemporari & Sajian Warisan Asli Malaysia. Beriltizam mengekalkan keenakan rasa turun-temurun, suasana yang menenangkan, serta layanan mesra sejak 2004.',
    footer_nav_title: 'Navigasi',
    footer_locations_title: 'Lokasi Cawangan',
    footer_connect_title: 'Kekal Berhubung',
    footer_link_home: 'Utama',
    footer_link_menu: 'Terokai Menu',
    footer_link_book: 'Buku Menu Interaktif',
    footer_link_heritage: 'Kisah Warisan (2004)',
    footer_link_outlets: 'Cawangan & Waktu Operasi',
    footer_link_gallery: 'Suasana & Galeri',
    footer_news_text: 'Langgan untuk menerima jemputan menu bermusim istimewa dan tawaran perayaan.',
    footer_news_placeholder: 'Alamat e-mel anda',
    footer_news_btn: 'Sertai',
    footer_copyright: '© 2004 – 2026 Pelita Heritage Sdn Bhd. Hak cipta terpelihara.',
    footer_crafted: 'Disediakan dengan ikhlas • Putrajaya & Sepang, Malaysia',

    // Cart Drawer
    cart_summary: 'Ringkasan Pesanan WhatsApp',
    cart_sec_outlet: '1. Pilih Cawangan',
    cart_sec_type: '2. Jenis Pesanan',
    cart_sec_cust: '3. Butiran Pelanggan',
    cart_placeholder_name: 'Nama Anda',
    cart_placeholder_notes: 'Permintaan Khas (cth. Kurang manis, sambal asing)',
    cart_sec_dishes: '4. Hidangan Dipilih',
    cart_empty: 'Pesanan anda masih kosong. Pilih sajian kegemaran anda!',
    cart_browse_btn: 'Terokai Menu & Tambah Hidangan',
    cart_est_total: 'Anggaran Jumlah:',
    order_type_dinein: 'Makan Sini (Dine-In)',
    order_type_takeaway: 'Bungkus (Takeaway)',
    order_type_delivery: 'Penghantaran (Foodpanda ↗)',
    send_order_wa: 'Hantar Pesanan ke WhatsApp',

    // Live Order Tracker
    tracker_title: 'Penjejak Pesanan Langsung',
    tracker_subtitle: 'Ikuti status hidangan anda terus dari kuali dapur ke meja atau kaunter anda',
    tracker_input_ph: 'Masukkan ID Pesanan (cth. PEL-1082)',
    tracker_btn_track: 'Jejak',
    tracker_lbl_ticket: 'TIKET PESANAN',
    tracker_lbl_outlet_type: 'CAWANGAN & JENIS',
    step_received: 'Diterima',
    step_in_progress: 'Sedang Dimasak',
    step_prepared: 'Sedia',
    step_served: 'Selesai',
    tracker_step_received_sub: 'Disahkan',
    tracker_step_cooking_sub: 'Dimasak',
    tracker_step_ready_sub: 'Sedia',
    tracker_step_completed_sub: 'Selesai',
    tracker_not_found_title: 'Pesanan Tidak Dijumpai',
    tracker_not_found_desc: 'Sila semak semula ID Pesanan anda (cth. PEL-1082) yang dihantar melalui WhatsApp atau resit pesanan anda.'
  }
};

// --- CYBERSECURITY SANITIZATION & SECURITY UTILITIES (Anti-XSS & Anti-IDOR) ---
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeId(id) {
  return String(id || '').replace(/[^a-zA-Z0-9_-]/g, '');
}

// Cryptographically secure, collision-resistant friendly Order ID generator
function generateSecureOrderId() {
  const charset = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  const bytes = new Uint8Array(6);
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 6; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += charset[bytes[i] % charset.length];
  }
  return `PEL-${code}`;
}

// --- 4. STATE MANAGEMENT ---
const AppState = {
  lang: 'en',
  activeCategory: 'all',
  searchQuery: '',
  selectedBranch: 'putrajaya', // 'putrajaya' | 'sepang'
  orderType: 'takeaway', // 'dinein' | 'takeaway' | 'delivery'
  customerName: '',
  customerNotes: '',
  cart: {}, // { [itemId]: quantity }
  currentPage: 1,
  totalPages: 9,
  isCartOpen: false,
  isReserveModalOpen: false,
  selectedDishModal: null,
  isMenuExpanded: false
};

// --- 5. TIME & REAL-TIME BRANCH STATUS LOGIC ---
function getBranchStatus(branchKey) {
  const branch = BRANCHES[branchKey];
  if (!branch) return { isOpen: false, closingNote: '' };

  const isBM = AppState && AppState.lang === 'bm';

  // Check if temporary holiday closure or special notice is active
  if (branch.isTemporaryClosed) {
    return {
      isOpen: false,
      isTemporaryClosed: true,
      closingNote: branch.closureNotice || (isBM ? 'Ditutup Khas / Notis Cuti' : 'Temporarily Closed / Special Notice'),
      badgeText: isBM ? 'CUTI / NOTIS' : 'SPECIAL NOTICE'
    };
  }

  // Calculate using Malaysian Time (UTC+8)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const myt = new Date(utc + (3600000 * 8));
  
  const currentDay = myt.getDay(); // 0: Sun, 1: Mon, ... 6: Sat
  const currentHour = myt.getHours() + (myt.getMinutes() / 60);

  const openDays = Array.isArray(branch.openDays) ? branch.openDays : [0, 1, 2, 3, 6];
  const openHour = typeof branch.openHour === 'number' ? branch.openHour : 9;
  const closeHour = typeof branch.closeHour === 'number' ? branch.closeHour : 22;

  const isOpenDay = openDays.includes(currentDay);
  const isOpenHour = currentHour >= openHour && currentHour < closeHour;
  const isOpen = isOpenDay && isOpenHour;

  let closingNote = '';
  if (isOpen) {
    const hoursLeft = Math.floor(closeHour - currentHour);
    const minsLeft = Math.floor(((closeHour - currentHour) % 1) * 60);
    if (isBM) {
      closingNote = hoursLeft > 0 ? `Tutup dlm ${hoursLeft}j ${minsLeft}m` : `Akan tutup sebentar lagi`;
    } else {
      closingNote = hoursLeft > 0 ? `Closes in ${hoursLeft}h ${minsLeft}m` : `Closes soon`;
    }
  } else {
    // Format hour display helper
    const formatHour = (h) => {
      const hh = Math.floor(h);
      const mm = Math.round((h % 1) * 60);
      const suffix = hh >= 12 ? (isBM ? 'PTG/MLM' : 'PM') : (isBM ? 'PG' : 'AM');
      const dispH = hh % 12 || 12;
      return `${dispH}:${mm < 10 ? '0' + mm : mm} ${suffix}`;
    };

    const dayNamesEN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNamesBM = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];

    let nextDay = (currentDay + 1) % 7;
    let daysAhead = 1;

    if (isOpenDay && currentHour < openHour) {
      nextDay = currentDay;
      daysAhead = 0;
    } else {
      while (!openDays.includes(nextDay) && daysAhead < 7) {
        nextDay = (nextDay + 1) % 7;
        daysAhead++;
      }
    }

    if (daysAhead === 0) {
      closingNote = isBM ? `Buka hari ini ${formatHour(openHour)}` : `Opens today ${formatHour(openHour)}`;
    } else if (daysAhead === 1) {
      closingNote = isBM ? `Buka esok ${formatHour(openHour)}` : `Opens tomorrow ${formatHour(openHour)}`;
    } else {
      const dName = isBM ? dayNamesBM[nextDay] : dayNamesEN[nextDay];
      closingNote = isBM ? `Buka semula ${dName} ${formatHour(openHour)}` : `Reopens ${dName} ${formatHour(openHour)}`;
    }
  }

  return { isOpen, isTemporaryClosed: false, closingNote, badgeText: null };
}

// Dynamically update outlet addresses, operating hours, Google Maps links, and Waze links across website
function updateOutletsDOM() {
  if (!BRANCHES) return;
  const isBM = AppState && AppState.lang === 'bm';

  // Putrajaya
  const putrajaya = BRANCHES.putrajaya;
  if (putrajaya) {
    const pAddr = document.getElementById('outlet-addr-putrajaya');
    if (pAddr && putrajaya.address) pAddr.textContent = putrajaya.address;

    const pHours = document.getElementById('outlet-hours-putrajaya');
    if (pHours) {
      const text = isBM ? (putrajaya.hoursTextBM || putrajaya.hoursText) : (putrajaya.hoursText || putrajaya.hoursTextBM);
      if (text) pHours.textContent = text;
    }

    const pFooterHours = document.getElementById('footer-outlet-hours-putrajaya');
    if (pFooterHours) {
      pFooterHours.textContent = isBM ? (putrajaya.hoursTextBM || putrajaya.hoursText) : (putrajaya.hoursText || putrajaya.hoursTextBM);
    }

    const pGmaps = document.getElementById('outlet-gmaps-putrajaya');
    if (pGmaps && putrajaya.mapsUrl) pGmaps.href = putrajaya.mapsUrl;

    const pWaze = document.getElementById('outlet-waze-putrajaya');
    if (pWaze && putrajaya.wazeUrl) pWaze.href = putrajaya.wazeUrl;

    const pPhone = document.getElementById('outlet-phone-putrajaya');
    if (pPhone && putrajaya.phone) pPhone.textContent = putrajaya.phone;

    const pWa = document.getElementById('outlet-wa-putrajaya');
    if (pWa && putrajaya.phoneRaw) {
      pWa.href = `https://wa.me/${putrajaya.phoneRaw}?text=${encodeURIComponent('Hello Pelita Cafe Putrajaya, saya ingin bertanya')}`;
    }

    const pFooter = document.getElementById('footer-outlet-addr-putrajaya');
    if (pFooter && putrajaya.address) {
      pFooter.textContent = putrajaya.shortAddress || (putrajaya.address.length > 35 ? putrajaya.address.slice(0, 32) + '...' : putrajaya.address);
    }

    // Update global call buttons and top bar if Putrajaya phone changed
    const topPhone = document.getElementById('top-phone-link');
    const topPhoneText = document.getElementById('top-phone-text');
    if (topPhone && putrajaya.phone) {
      topPhone.href = `tel:${putrajaya.phone.replace(/[^0-9+]/g, '')}`;
      if (topPhoneText) topPhoneText.textContent = putrajaya.phone;
    }

    const btnCallDirect = document.getElementById('btn-call-direct');
    const btnCallText = document.getElementById('btn-call-direct-text');
    if (btnCallDirect && putrajaya.phone) {
      btnCallDirect.href = `tel:${putrajaya.phone.replace(/[^0-9+]/g, '')}`;
      if (btnCallText) {
        btnCallText.textContent = isBM ? `Hubungi Cawangan Putrajaya (${putrajaya.phone})` : `Call Putrajaya Outlet (${putrajaya.phone})`;
      }
    }

    const footerWa = document.getElementById('footer-social-wa');
    if (footerWa && putrajaya.phoneRaw) {
      footerWa.href = `https://wa.me/${putrajaya.phoneRaw}`;
    }
  }

  // Sepang
  const sepang = BRANCHES.sepang;
  if (sepang) {
    const sAddr = document.getElementById('outlet-addr-sepang');
    if (sAddr && sepang.address) sAddr.textContent = sepang.address;

    const sHours = document.getElementById('outlet-hours-sepang');
    if (sHours) {
      const text = isBM ? (sepang.hoursTextBM || sepang.hoursText) : (sepang.hoursText || sepang.hoursTextBM);
      if (text) sHours.textContent = text;
    }

    const sFooterHours = document.getElementById('footer-outlet-hours-sepang');
    if (sFooterHours) {
      sFooterHours.textContent = isBM ? (sepang.hoursTextBM || sepang.hoursText) : (sepang.hoursText || sepang.hoursTextBM);
    }

    const sGmaps = document.getElementById('outlet-gmaps-sepang');
    if (sGmaps && sepang.mapsUrl) sGmaps.href = sepang.mapsUrl;

    const sWaze = document.getElementById('outlet-waze-sepang');
    if (sWaze && sepang.wazeUrl) sWaze.href = sepang.wazeUrl;

    const sPhone = document.getElementById('outlet-phone-sepang');
    if (sPhone && sepang.phone) sPhone.textContent = sepang.phone;

    const sWa = document.getElementById('outlet-wa-sepang');
    if (sWa && sepang.phoneRaw) {
      sWa.href = `https://wa.me/${sepang.phoneRaw}?text=${encodeURIComponent('Hello Pelita Cafe Sepang, saya ingin bertanya')}`;
    }

    const sFooter = document.getElementById('footer-outlet-addr-sepang');
    if (sFooter && sepang.address) {
      sFooter.textContent = sepang.shortAddress || (sepang.address.length > 35 ? sepang.address.slice(0, 32) + '...' : sepang.address);
    }
  }

  initBranchStatusBadges();
}

// Live Cloud Database Sync via Firebase Firestore
async function initFirebaseSync() {
  if (typeof window.PelitaFirebase !== 'undefined') {
    // 1. Menu Dishes Sync
    try {
      const cloudDishes = await window.PelitaFirebase.getMenuItems();
      if (cloudDishes && cloudDishes.length > 0) {
        // Enforce verified price synchronization for Nasi Lemak Sambal Sotong (RM 14.90)
        const sotongItem = cloudDishes.find(d => d.id === 'kop-2');
        if (sotongItem && Number(sotongItem.price) !== 14.90) {
          sotongItem.price = 14.90;
          if (window.PelitaFirebase.saveMenuItem) {
            window.PelitaFirebase.saveMenuItem(sotongItem).catch(() => {});
          }
        }
        MENU_DATA = cloudDishes;
        window.MENU_DATA = MENU_DATA;
        window.MENU_ITEMS = MENU_DATA;
        renderMenu();
        syncHighlightPrices();
        console.log('[Pelita] Synced', cloudDishes.length, 'dishes from database.');
      }
    } catch (e) {
      console.warn('[Pelita] Firebase menu sync fallback:', e);
    }

    // 2. Outlets & Locations Sync
    try {
      const cloudOutlets = await window.PelitaFirebase.getOutlets();
      if (cloudOutlets) {
        if (cloudOutlets.putrajaya) BRANCHES.putrajaya = { ...BRANCHES.putrajaya, ...cloudOutlets.putrajaya };
        if (cloudOutlets.sepang) BRANCHES.sepang = { ...BRANCHES.sepang, ...cloudOutlets.sepang };
        window.BRANCHES = BRANCHES;
        updateOutletsDOM();
        console.log('[Pelita] Synced outlet addresses from database.');
      }
    } catch (e) {
      console.warn('[Pelita] Firebase outlets sync fallback:', e);
    }

    // 3. Realtime Listeners
    if (window.PelitaFirebase.isConfigured) {
      window.PelitaFirebase.onMenuChange((items) => {
        if (items && items.length > 0) {
          const sotongItem = items.find(d => d.id === 'kop-2');
          if (sotongItem && Number(sotongItem.price) !== 14.90) {
            sotongItem.price = 14.90;
          }
          MENU_DATA = items;
          window.MENU_DATA = MENU_DATA;
          window.MENU_ITEMS = MENU_DATA;
          renderMenu();
          syncHighlightPrices();
        }
      });

      window.PelitaFirebase.onOutletsChange((outlets) => {
        if (outlets) {
          if (outlets.putrajaya) BRANCHES.putrajaya = { ...BRANCHES.putrajaya, ...outlets.putrajaya };
          if (outlets.sepang) BRANCHES.sepang = { ...BRANCHES.sepang, ...outlets.sepang };
          window.BRANCHES = BRANCHES;
          updateOutletsDOM();
        }
      });
    }
  }
}

// Synchronize Chef Signatures card prices with MENU_DATA dynamically
function syncHighlightPrices() {
  const p1 = document.getElementById('highlight-price-sig1');
  const p2 = document.getElementById('highlight-price-sig2');
  const p3 = document.getElementById('highlight-price-sotong');
  if (!p1 && !p2 && !p3) return;
  const menuList = (typeof MENU_DATA !== 'undefined' && Array.isArray(MENU_DATA)) ? MENU_DATA : (window.MENU_DATA || []);
  const sig1 = menuList.find(m => m.id === 'sig-1');
  const sig2 = menuList.find(m => m.id === 'sig-2');
  const kop2 = menuList.find(m => m.id === 'kop-2');
  if (p1 && sig1) p1.textContent = `RM ${Number(sig1.price).toFixed(2)}`;
  if (p2 && sig2) p2.textContent = `RM ${Number(sig2.price).toFixed(2)}`;
  if (p3 && kop2) p3.textContent = `RM ${Number(kop2.price).toFixed(2)}`;
}

// --- 6. DOM READY & INITIALIZATION ---
function initApp() {
  const tasks = [
    ['Language', initLanguage],
    ['BranchStatus', initBranchStatusBadges],
    ['Menu', renderMenu],
    ['FirebaseSync', initFirebaseSync],
    ['MenuFilters', initMenuFilters],
    ['Search', initSearch],
    ['InteractiveBook', initInteractiveBook],
    ['OrderSystem', initOrderSystem],
    ['ReservationModal', initReservationModal],
    ['GalleryLightbox', initGalleryLightbox],
    ['ScrollAnimations', initScrollAnimations],
    ['NavbarScroll', initNavbarScroll],
    ['MobileDrawer', initMobileDrawer],
    ['InteractiveBackground', initInteractiveBackground],
    ['ReviewsCarousel', initReviewsCarousel],
    ['KeyboardShortcuts', initKeyboardShortcuts]
  ];

  tasks.forEach(([name, fn]) => {
    try {
      fn();
    } catch (err) {
      console.warn(`[Pelita] Init error in ${name}:`, err);
    }
  });
  
  // Refresh live open/close status every minute
  setInterval(initBranchStatusBadges, 60000);

  // Auto-open Order Tracker if ?track=PEL-XXXX in URL
  const urlParams = new URLSearchParams(window.location.search);
  const trackParam = urlParams.get('track');
  if (trackParam) {
    setTimeout(() => {
      openOrderTrackerModal(trackParam);
    }, 500);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Modern Global Keyboard Shortcuts (Escape to dismiss, Arrow keys for menu book)
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDishModal();
      closeReserveModal();
      closeCartDrawer();
      closeOrderTrackerModal();
      const mobileDrawer = document.getElementById('mobile-nav-drawer');
      const mobileBackdrop = document.getElementById('mobile-drawer-backdrop');
      if (mobileDrawer) mobileDrawer.classList.remove('is-open');
      if (mobileBackdrop) mobileBackdrop.classList.remove('is-open');
      const lightbox = document.getElementById('gallery-lightbox');
      if (lightbox) lightbox.classList.remove('is-open');
      document.body.classList.remove('modal-locked');
    }
  });
}

// --- 7. LANGUAGE ENGINE ---
function initLanguage() {
  let savedLang = localStorage.getItem('pelita_lang');

  // If user has not explicitly clicked a language switch in this version, default to English
  if (!localStorage.getItem('pelita_lang_user_set')) {
    savedLang = 'en';
    localStorage.setItem('pelita_lang', 'en');
  }

  if (savedLang && (savedLang === 'en' || savedLang === 'bm')) {
    AppState.lang = savedLang;
  } else {
    AppState.lang = 'en'; // Default to English
  }
  updateLanguageDisplay();

  const langToggles = document.querySelectorAll('[data-action="toggle-lang"]');
  langToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) {
        AppState.lang = targetLang;
      } else {
        AppState.lang = AppState.lang === 'en' ? 'bm' : 'en';
      }
      localStorage.setItem('pelita_lang', AppState.lang);
      localStorage.setItem('pelita_lang_user_set', 'true');
      updateLanguageDisplay();
      renderMenu();
      updateCartDrawer();
      initBranchStatusBadges();
    });
  });
}

function updateLanguageDisplay() {
  const t = I18N[AppState.lang];
  if (!t) return;
  document.documentElement.lang = AppState.lang === 'bm' ? 'ms' : 'en';

  // Update text nodes with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update HTML nodes with data-i18n-html attribute
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update active state in language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === AppState.lang) {
      btn.classList.add('is-active');
    } else {
      btn.classList.remove('is-active');
    }
  });

  // Re-sync dynamic branch text for the current language
  if (typeof updateOutletsDOM === 'function') {
    updateOutletsDOM();
  }

  // Re-sync cart drawer strings
  if (typeof updateCartDrawer === 'function') {
    updateCartDrawer();
  }

  // Re-sync menu book page indicator
  const pageIndicator = document.getElementById('book-page-indicator');
  if (pageIndicator && AppState.currentPage) {
    const isBM = AppState.lang === 'bm';
    pageIndicator.textContent = `${isBM ? 'Halaman' : 'Page'} ${AppState.currentPage} / ${AppState.totalPages}`;
  }

  // Re-sync reservation pax options
  const paxSelect = document.getElementById('reserve-pax');
  if (paxSelect) {
    const isBM = AppState.lang === 'bm';
    const currentVal = paxSelect.value;
    paxSelect.innerHTML = isBM ? `
      <option value="2">2 Orang (Pasangan / Duo)</option>
      <option value="3-4">3 - 4 Orang (Keluarga Kecil / Rakan)</option>
      <option value="5-8">5 - 8 Orang (Keluarga Besar)</option>
      <option value="9-15">9 - 15 Orang (Jamuan Kumpulan)</option>
      <option value="16+">16+ Orang (Majlis Khas / Hari Lahir)</option>
    ` : `
      <option value="2">2 Pax (Couples / Duo)</option>
      <option value="3-4">3 - 4 Pax (Small Family / Friends)</option>
      <option value="5-8">5 - 8 Pax (Family Gathering)</option>
      <option value="9-15">9 - 15 Pax (Group Feast)</option>
      <option value="16+">16+ Pax (Private Event / Birthday)</option>
    `;
    paxSelect.value = currentVal;
  }
}

// --- 8. BRANCH STATUS BADGES ---
function initBranchStatusBadges() {
  const t = I18N[AppState.lang];
  const isBM = AppState.lang === 'bm';

  ['putrajaya', 'sepang'].forEach(branchKey => {
    const status = getBranchStatus(branchKey);
    const badgeEl = document.getElementById(`status-badge-${branchKey}`);
    const noteEl = document.getElementById(`status-note-${branchKey}`);
    const modalBadgeEl = document.getElementById(`modal-status-${branchKey}`);
    const noticeBanner = document.getElementById(`outlet-notice-${branchKey}`);
    const branch = BRANCHES[branchKey];

    if (badgeEl) {
      if (status.isTemporaryClosed) {
        badgeEl.className = 'status-pill status-holiday';
        badgeEl.innerHTML = `<span class="status-dot"></span> <span>${status.badgeText || (isBM ? 'NOTIS KHAS' : 'SPECIAL NOTICE')}</span>`;
      } else {
        badgeEl.className = `status-pill ${status.isOpen ? 'status-open' : 'status-closed'}`;
        badgeEl.innerHTML = `<span class="status-dot"></span> <span>${status.isOpen ? t.open_now : t.closed_now}</span>`;
      }
    }
    if (noteEl) {
      noteEl.textContent = status.closingNote;
    }
    if (modalBadgeEl) {
      if (status.isTemporaryClosed) {
        modalBadgeEl.className = 'status-pill-small status-holiday';
        modalBadgeEl.textContent = status.badgeText || (isBM ? 'CUTI' : 'HOLIDAY');
      } else {
        modalBadgeEl.className = `status-pill-small ${status.isOpen ? 'status-open' : 'status-closed'}`;
        modalBadgeEl.textContent = status.isOpen ? t.open_now : t.closed_now;
      }
    }
    if (noticeBanner) {
      if (status.isTemporaryClosed && branch && branch.closureNotice) {
        noticeBanner.style.display = 'block';
        noticeBanner.innerHTML = `<span style="display:inline-flex; align-items:center; margin-right:6px; vertical-align:middle;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span><strong>${isBM ? 'Notis Khas:' : 'Special Notice:'}</strong> ${branch.closureNotice}`;
      } else {
        noticeBanner.style.display = 'none';
      }
    }
  });

  // Update header live ticker
  const liveTicker = document.getElementById('header-live-ticker');
  if (liveTicker) {
    const pj = getBranchStatus('putrajaya');
    const sp = getBranchStatus('sepang');
    
    const formatTickerItem = (branchKey, status) => {
      const name = branchKey === 'putrajaya' ? 'Putrajaya' : 'Sepang';
      if (status.isTemporaryClosed) {
        return `<span class="ticker-dot is-closed" style="background:#D97706;"></span> <strong>${name}:</strong> ${isBM ? 'Notis Khas' : 'Special Notice'}`;
      }
      return `<span class="ticker-dot ${status.isOpen ? 'is-open' : 'is-closed'}"></span> <strong>${name}:</strong> ${status.isOpen ? (isBM ? 'Buka (Open)' : 'Open Now') : (isBM ? 'Tutup (Closed)' : 'Closed Now')}`;
    };

    liveTicker.innerHTML = `
      <span class="ticker-item">${formatTickerItem('putrajaya', pj)}</span>
      <span class="ticker-divider">•</span>
      <span class="ticker-item">${formatTickerItem('sepang', sp)}</span>
    `;
  }
}

// --- 9. MENU RENDERER & FILTERS ---
function renderMenu() {
  const container = document.getElementById('menu-items-grid');
  if (!container) return;
  const controlsContainer = document.getElementById('menu-progressive-controls');

  const isBM = AppState.lang === 'bm';
  const query = AppState.searchQuery.toLowerCase().trim();
  
  const filtered = MENU_DATA.filter(item => {
    // Category match
    const matchCategory = AppState.activeCategory === 'all' || item.category === AppState.activeCategory;
    if (!matchCategory) return false;

    // Search query match
    if (query) {
      const matchName = item.name.toLowerCase().includes(query) || item.nameBM.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query) || item.descriptionBM.toLowerCase().includes(query);
      const matchTags = item.tags && item.tags.some(tag => tag.toLowerCase().includes(query));
      return matchName || matchDesc || matchTags;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-menu-state">
        <div class="empty-icon" style="color: var(--gold);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg>
        </div>
        <h3>${isBM ? 'Tiada hidangan dijumpai' : 'No dishes found'}</h3>
        <p>${isBM ? 'Cuba ubah carian atau pilih kategori lain.' : 'Try changing your search terms or filter category.'}</p>
        <button type="button" class="btn-primary-sm" onclick="resetMenuFilters()">
          ${isBM ? 'Papar Semua Hidangan' : 'Show All Items'}
        </button>
      </div>
    `;
    if (controlsContainer) controlsContainer.innerHTML = '';
    return;
  }

  // Progressive Disclosure: Default to 6 Signature Dishes on initial 'all' view without active search
  let displayList = filtered;
  const isDefaultView = AppState.activeCategory === 'all' && !query;

  if (isDefaultView && !AppState.isMenuExpanded) {
    const preferredSignatureIds = ['sig-1', 'sig-2', 'sig-3', 'kop-1', 'kop-2', 'wok-1'];
    const curated = [];
    preferredSignatureIds.forEach(id => {
      const found = filtered.find(item => item.id === id);
      if (found && !curated.includes(found)) curated.push(found);
    });
    if (curated.length < 6) {
      const extra = filtered.filter(item => !curated.includes(item) && (item.isChefPick || item.category === 'signatures'));
      curated.push(...extra);
    }
    displayList = curated.slice(0, 6);
  }

  container.innerHTML = displayList.map(item => {
    const rawName = isBM ? item.nameBM : item.name;
    const rawDesc = isBM ? item.descriptionBM : item.description;
    const displayName = escapeHtml(rawName);
    const displayDesc = escapeHtml(rawDesc);
    const safeId = sanitizeId(item.id);
    const safeImg = escapeHtml(item.image || 'assets/images/dishes-spread.webp');
    const safeBadge = item.badge ? escapeHtml(item.badge) : '';
    const qtyInCart = AppState.cart[item.id] || 0;
    const isSoldOut = Boolean(item.isSoldOut);

    // Spicy flame indicator
    let spicyIcons = '';
    if (item.spicyLevel > 0) {
      const flameSvg = '<svg width="13" height="13" viewBox="0 0 24 24" fill="#E24A4A" stroke="#E24A4A" stroke-width="1" style="display:inline-block; vertical-align:-1px; margin-right:1px;"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>';
      spicyIcons = `<span class="spicy-indicator" title="Spicy Level: ${Number(item.spicyLevel)}">` + flameSvg.repeat(Math.min(3, Math.max(1, Number(item.spicyLevel)))) + `</span>`;
    }

    return `
      <article class="dish-card ${isSoldOut ? 'is-sold-out' : ''}" data-dish-id="${safeId}">
        <div class="dish-media" onclick="openDishModal('${safeId}')">
          <img src="${safeImg}" alt="${displayName}" loading="lazy" class="dish-img">
          <div class="dish-media-overlay">
            <span class="view-detail-badge">${isBM ? 'Lihat Perincian' : 'View Details'}</span>
          </div>
          ${isSoldOut ? `<span class="dish-badge" style="background: #EF4444; color: #FFF;">${isBM ? 'Habis Dijual' : 'Sold Out'}</span>` : (safeBadge ? `<span class="dish-badge">${safeBadge}</span>` : '')}
          ${spicyIcons ? `<div class="dish-spicy-float">${spicyIcons}</div>` : ''}
        </div>

        <div class="dish-content">
          <div class="dish-header">
            <h3 class="dish-title" onclick="openDishModal('${safeId}')">${displayName}</h3>
            <span class="dish-price">RM ${Number(item.price).toFixed(2)}</span>
          </div>

          <p class="dish-desc">${displayDesc}</p>

          <div class="dish-actions">
            ${isSoldOut ? `
              <button type="button" class="btn-add-cart" disabled style="opacity: 0.6; cursor: not-allowed; background: #4B5563;">
                <span>${isBM ? 'Habis Dijual' : 'Sold Out'}</span>
              </button>
            ` : (qtyInCart > 0 ? `
              <div class="qty-control-inline">
                <button type="button" class="btn-qty-sub" onclick="updateCartItem('${safeId}', -1)">−</button>
                <span class="qty-number">${qtyInCart}</span>
                <button type="button" class="btn-qty-add" onclick="updateCartItem('${safeId}', 1)">+</button>
              </div>
            ` : `
              <button type="button" class="btn-add-cart" onclick="updateCartItem('${safeId}', 1)">
                <span>${I18N[AppState.lang].quick_add}</span>
              </button>
            `)}
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Render Progressive Disclosure Controls
  if (controlsContainer) {
    if (isDefaultView) {
      if (!AppState.isMenuExpanded) {
        controlsContainer.innerHTML = `
          <div class="menu-unfold-wrapper">
            <div class="menu-disclosure-hint">
              <span class="disclosure-dot"></span>
              <span>${isBM ? 'Memaparkan 6 Sajian Pilihan • 60+ Sajian Lengkap Tersedia' : 'Showing 6 Heritage Signatures • 60+ Full Menu Items Available'}</span>
            </div>
            <button type="button" class="btn-unfold-menu" onclick="toggleMenuExpand()">
              <span>${isBM ? 'Lihat Semua Menu (60+ Sajian)' : 'View Full Menu (60+ Items)'}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
          </div>
        `;
      } else {
        controlsContainer.innerHTML = `
          <div class="menu-unfold-wrapper">
            <button type="button" class="btn-unfold-menu btn-collapse-menu" onclick="toggleMenuExpand()">
              <span>${isBM ? 'Papar Sajian Pilihan Sahaja' : 'Show Signature Dishes Only'}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
            </button>
          </div>
        `;
      }
    } else {
      controlsContainer.innerHTML = '';
    }
  }

  syncHighlightPrices();
}

function toggleMenuExpand() {
  AppState.isMenuExpanded = !AppState.isMenuExpanded;
  renderMenu();
  if (!AppState.isMenuExpanded) {
    const menuSec = document.getElementById('menu');
    if (menuSec) {
      menuSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
window.toggleMenuExpand = toggleMenuExpand;

function initMenuFilters() {
  const filterButtons = document.querySelectorAll('[data-category]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      AppState.activeCategory = btn.getAttribute('data-category');
      renderMenu();
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('menu-search-input');
  if (!searchInput) return;

  let debounceTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      AppState.searchQuery = e.target.value;
      renderMenu();
    }, 200);
  });

  const clearBtn = document.getElementById('menu-search-clear');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      AppState.searchQuery = '';
      renderMenu();
      searchInput.focus();
    });
  }
}

function resetMenuFilters() {
  AppState.activeCategory = 'all';
  AppState.searchQuery = '';
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) searchInput.value = '';

  const filterButtons = document.querySelectorAll('[data-category]');
  filterButtons.forEach(b => {
    if (b.getAttribute('data-category') === 'all') {
      b.classList.add('is-active');
    } else {
      b.classList.remove('is-active');
    }
  });

  renderMenu();
}

// --- 10. INTERACTIVE MENU BOOK ENGINE (SWIPEABLE CAROUSEL & LIGHTBOX) ---
function initInteractiveBook() {
  const carousel = document.getElementById('menu-book-carousel');
  const canvas = document.getElementById('menu-book-canvas');
  const prevBtn = document.getElementById('book-prev-btn');
  const nextBtn = document.getElementById('book-next-btn');
  const pageIndicator = document.getElementById('book-page-indicator');
  const totalPages = AppState.totalPages || 9;

  // Preload all 9 page images into browser memory for instant display
  for (let i = 1; i <= totalPages; i++) {
    const preImg = new Image();
    preImg.decoding = 'async';
    preImg.src = `assets/images/menu-book/page-${i}.jpg`;
  }

  function updateActivePageIndicator(pageNum) {
    AppState.currentPage = pageNum;
    const isBM = AppState.lang === 'bm';
    if (pageIndicator) {
      pageIndicator.textContent = `${isBM ? 'Halaman' : 'Page'} ${pageNum} / ${totalPages}`;
    }
    if (prevBtn) prevBtn.disabled = pageNum <= 1;
    if (nextBtn) nextBtn.disabled = pageNum >= totalPages;

    document.querySelectorAll('[data-book-page]').forEach(thumb => {
      const p = parseInt(thumb.getAttribute('data-book-page'), 10);
      if (p === pageNum) {
        thumb.classList.add('is-current-page');
      } else {
        thumb.classList.remove('is-current-page');
      }
    });
  }

  function goToBookPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages) return;
    updateActivePageIndicator(pageNum);

    if (carousel) {
      const targetCard = carousel.querySelector(`[data-page="${pageNum}"]`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    } else {
      const track = document.getElementById('book-pages-track');
      if (track) {
        track.style.transform = `translate3d(-${(pageNum - 1) * 100}%, 0, 0)`;
      }
    }
  }
  window.goToBookPage = goToBookPage;
  window.renderBookPage = goToBookPage;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (AppState.currentPage > 1) {
        goToBookPage(AppState.currentPage - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (AppState.currentPage < totalPages) {
        goToBookPage(AppState.currentPage + 1);
      }
    });
  }

  // Thumbnails navigation
  document.querySelectorAll('[data-book-page]').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const pageNum = parseInt(thumb.getAttribute('data-book-page'), 10);
      if (pageNum >= 1 && pageNum <= totalPages) {
        goToBookPage(pageNum);
      }
    });
  });

  // Track active page via carousel scroll position
  if (carousel) {
    let scrollTimer = null;
    carousel.addEventListener('scroll', () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const cards = carousel.querySelectorAll('.menu-page-card');
        if (!cards.length) return;
        const carouselCenter = carousel.getBoundingClientRect().left + carousel.offsetWidth / 2;
        let closestPage = 1;
        let minDistance = Infinity;

        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const dist = Math.abs(carouselCenter - cardCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestPage = parseInt(card.getAttribute('data-page'), 10) || 1;
          }
        });
        updateActivePageIndicator(closestPage);
      }, 50);
    }, { passive: true });
  }

  // Keyboard arrow navigation when menu book is in viewport
  window.addEventListener('keydown', (e) => {
    const el = carousel || canvas || document.getElementById('menu-book');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      if (e.key === 'ArrowLeft' && AppState.currentPage > 1) {
        goToBookPage(AppState.currentPage - 1);
      } else if (e.key === 'ArrowRight' && AppState.currentPage < totalPages) {
        goToBookPage(AppState.currentPage + 1);
      }
    }
  });

  updateActivePageIndicator(1);
}

// --- 11. WHATSAPP ORDER & CART SYSTEM ---
function initOrderSystem() {
  // Drawer trigger buttons
  document.querySelectorAll('[data-action="open-cart"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartBackdrop = document.getElementById('cart-drawer-backdrop');
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  // Branch switcher inside cart
  document.querySelectorAll('[data-cart-branch]').forEach(branchBtn => {
    branchBtn.addEventListener('click', () => {
      document.querySelectorAll('[data-cart-branch]').forEach(b => b.classList.remove('is-selected'));
      branchBtn.classList.add('is-selected');
      AppState.selectedBranch = branchBtn.getAttribute('data-cart-branch');
      updateCartDrawer();
    });
  });

  // Order type switcher inside cart (Dine-in / Takeaway / Delivery)
  document.querySelectorAll('[data-order-type]').forEach(typeBtn => {
    typeBtn.addEventListener('click', () => {
      const type = typeBtn.getAttribute('data-order-type');
      document.querySelectorAll('[data-order-type]').forEach(b => b.classList.remove('is-selected'));
      typeBtn.classList.add('is-selected');
      AppState.orderType = type;

      if (type === 'delivery') {
        redirectToFoodpanda();
      }

      updateCartDrawer();
    });
  });

  // Checkout button
  const checkoutBtn = document.getElementById('btn-send-whatsapp-order');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', executeWhatsAppCheckout);
  }
}

function openCartDrawer() {
  AppState.isCartOpen = true;
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (drawer) drawer.classList.add('is-open');
  if (backdrop) backdrop.classList.add('is-open');
  document.body.classList.add('modal-locked');
  updateCartDrawer();
}

function closeCartDrawer() {
  AppState.isCartOpen = false;
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (drawer) drawer.classList.remove('is-open');
  if (backdrop) backdrop.classList.remove('is-open');
  document.body.classList.remove('modal-locked');
}

function updateCartItem(itemId, change) {
  let resolvedId = sanitizeId(itemId);
  // Robust alias resolution for legacy / mistyped IDs
  if (resolvedId === 'kopi-2') resolvedId = 'kop-2';
  if (resolvedId === 'kopi-1') resolvedId = 'kop-1';

  // Verify item exists in MENU_DATA (or fallback)
  const menuList = (typeof MENU_DATA !== 'undefined' && Array.isArray(MENU_DATA)) ? MENU_DATA : (window.MENU_DATA || []);
  let item = menuList.find(m => m.id === resolvedId);
  if (!item) {
    // Try case-insensitive lookup
    item = menuList.find(m => m.id.toLowerCase() === resolvedId.toLowerCase());
    if (item) resolvedId = item.id;
  }

  if (!item) {
    console.warn('[Pelita Cart] Item not found in menu database:', itemId);
    return;
  }

  const currentQty = AppState.cart[resolvedId] || 0;
  const newQty = currentQty + change;

  if (newQty <= 0) {
    delete AppState.cart[resolvedId];
  } else {
    AppState.cart[resolvedId] = newQty;
  }

  // Update floating badge
  updateFloatingCartBadge();
  // Re-render menu buttons if visible
  renderMenu();
  // Update cart drawer
  updateCartDrawer();

  // Show friendly toast if item was added
  if (change > 0) {
    const isBM = AppState.lang === 'bm';
    const dishName = isBM ? (item.nameBM || item.name) : item.name;
    showToast(`${escapeHtml(dishName)} ${isBM ? 'ditambah ke troli!' : 'added to cart!'}`);
  }
}

function updateFloatingCartBadge() {
  const totalItems = Object.values(AppState.cart).reduce((sum, q) => sum + q, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = totalItems;
    if (totalItems > 0) {
      b.classList.remove('is-hidden');
      b.classList.remove('animate-bump');
      void b.offsetWidth; // Reflow for bounce animation
      b.classList.add('animate-bump');
    } else {
      b.classList.add('is-hidden');
    }
  });

  // Modern Dynamic Page Title
  const baseTitle = 'Pelita Cafe | Authentic Malaysian Heritage & Artisan Coffee (Est. 2004)';
  if (totalItems > 0) {
    document.title = `(${totalItems}) Pelita Cafe | Order Ready`;
  } else {
    document.title = baseTitle;
  }
}

function navigateToMenuSection() {
  closeCartDrawer();
  const menuEl = document.getElementById('menu');
  if (menuEl) {
    const header = document.querySelector('.site-header');
    const headerHeight = header ? header.offsetHeight : 78;
    const targetOffset = menuEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight - 2);
    window.scrollTo({
      top: Math.max(0, Math.round(targetOffset)),
      behavior: 'smooth'
    });
  }
}
window.navigateToMenuSection = navigateToMenuSection;

function updateCartDrawer() {
  const isBM = AppState.lang === 'bm';
  const cartList = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const emptyStateEl = document.getElementById('cart-empty-message');
  const orderFooterEl = document.getElementById('cart-footer-panel');
  const deliveryNotice = document.getElementById('cart-delivery-notice');
  const deliveryNoteText = document.getElementById('cart-delivery-note-text');
  const customerSection = document.getElementById('cart-customer-section');
  const itemsSection = document.getElementById('cart-items-section');
  const checkoutBtn = document.getElementById('btn-send-whatsapp-order');
  const drawerTitle = document.querySelector('.cart-drawer-header h3');

  const branchKey = (typeof AppState !== 'undefined' && AppState.selectedBranch) ? AppState.selectedBranch : 'putrajaya';
  const branch = (typeof BRANCHES !== 'undefined' && BRANCHES[branchKey]) ? BRANCHES[branchKey] : null;
  const shortBranchName = branchKey === 'sepang' ? 'Sepang' : 'Putrajaya';
  const targetFoodpandaUrl = (branch && branch.foodpandaUrl) || FOODPANDA_DELIVERY_URL;

  // Handle Delivery (Foodpanda) Mode:
  // Delivery is purely managed by Foodpanda. Hide customer details, dish items, and WhatsApp footer.
  if (AppState.orderType === 'delivery') {
    if (customerSection) customerSection.style.display = 'none';
    if (itemsSection) itemsSection.style.display = 'none';
    if (orderFooterEl) orderFooterEl.style.display = 'none';
    if (drawerTitle) {
      drawerTitle.textContent = isBM ? 'Pesanan Penghantaran Foodpanda' : 'Foodpanda Delivery Order';
    }

    if (deliveryNotice) {
      deliveryNotice.style.display = 'block';

      const branchTag = document.getElementById('cart-delivery-branch-tag');
      if (branchTag) {
        branchTag.textContent = shortBranchName;
      }

      if (deliveryNoteText) {
        deliveryNoteText.textContent = isBM
          ? `Pesanan penghantaran (delivery) cawangan ${shortBranchName} diuruskan sepenuhnya melalui aplikasi dan laman web Foodpanda.`
          : `Pelita Cafe ${shortBranchName} delivery orders are fulfilled entirely via the Foodpanda app and website.`;
      }

      const feat1 = document.getElementById('cart-delivery-feat-1');
      if (feat1) {
        feat1.textContent = isBM
          ? 'Dihantar terus ke pintu rumah atau pejabat anda'
          : 'Delivered straight to your doorstep or office';
      }

      const feat2 = document.getElementById('cart-delivery-feat-2');
      if (feat2) {
        feat2.textContent = isBM
          ? 'Pesanan disediakan segar dari dapur cawangan'
          : 'Prepared fresh from our kitchen upon order';
      }

      const deliveryLink = document.getElementById('cart-delivery-link');
      if (deliveryLink) {
        deliveryLink.href = targetFoodpandaUrl;
      }

      const deliveryBtnText = document.getElementById('cart-delivery-btn-text');
      if (deliveryBtnText) {
        deliveryBtnText.textContent = isBM
          ? `Buka Foodpanda (${shortBranchName}) ↗`
          : `Open Foodpanda (${shortBranchName}) ↗`;
      }
    }

    return; // Early return: skip item list rendering and subtotal recalculation
  }

  // Restore non-delivery mode (Takeaway / Dine-in)
  if (deliveryNotice) {
    deliveryNotice.style.display = 'none';
  }
  if (customerSection) {
    customerSection.style.display = 'block';
  }
  if (itemsSection) {
    itemsSection.style.display = 'block';
  }
  if (drawerTitle) {
    drawerTitle.textContent = isBM ? 'Ringkasan Pesanan WhatsApp' : 'Your WhatsApp Order';
  }

  // Reset checkout button styling for WhatsApp order
  if (checkoutBtn) {
    checkoutBtn.style.background = '';
    checkoutBtn.style.borderColor = '';
    checkoutBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="wa-btn-svg">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.067-2.025-.483-1.636-.677-2.673-2.338-2.753-2.446-.08-.108-.667-.887-.667-1.691 0-.804.421-1.2.57-1.358.144-.153.38-.225.507-.225.127 0 .254.002.365.008.118.006.275-.045.431.33.161.388.55 1.341.597 1.44.048.099.08.216.015.344-.064.127-.096.207-.191.319-.096.111-.202.248-.288.333-.096.095-.197.198-.085.39.112.192.498.822 1.069 1.33.734.654 1.353.856 1.545.952.192.096.305.08.418-.048.113-.128.483-.562.612-.755.129-.192.257-.16.432-.096.175.064 1.111.524 1.303.62.192.096.32.144.368.225.048.081.048.47-.096.875zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.957-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
      </svg>
      <span data-i18n="send_order_wa">${isBM ? 'Hantar Pesanan ke WhatsApp' : 'Send Order via WhatsApp'}</span>
    `;
  }

  if (!cartList) return;

  const itemIds = Object.keys(AppState.cart);
  let subtotal = 0;

  if (itemIds.length === 0) {
    cartList.innerHTML = '';
    if (emptyStateEl) emptyStateEl.style.display = 'block';
    if (orderFooterEl) orderFooterEl.style.display = 'none';
    if (subtotalEl) subtotalEl.textContent = 'RM 0.00';
    return;
  }

  if (emptyStateEl) emptyStateEl.style.display = 'none';
  if (orderFooterEl) orderFooterEl.style.display = 'block';

  const itemsHtml = itemIds.map(id => {
    const item = MENU_DATA.find(m => m.id === id);
    if (!item) return '';
    const qty = AppState.cart[id];
    const itemTotal = item.price * qty;
    subtotal += itemTotal;

    const rawName = isBM ? item.nameBM : item.name;
    const displayName = escapeHtml(rawName);
    const safeId = sanitizeId(item.id);

    return `
      <div class="cart-item-row">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${displayName}</h4>
          <span class="cart-item-rate">RM ${Number(item.price).toFixed(2)} / unit</span>
        </div>
        <div class="cart-item-controls">
          <div class="qty-stepper-sm">
            <button type="button" class="btn-step" onclick="updateCartItem('${safeId}', -1)">−</button>
            <span class="step-val">${Number(qty)}</span>
            <button type="button" class="btn-step" onclick="updateCartItem('${safeId}', 1)">+</button>
          </div>
          <span class="cart-item-subtotal">RM ${Number(itemTotal).toFixed(2)}</span>
        </div>
      </div>
    `;
  }).join('');

  cartList.innerHTML = itemsHtml + `
    <button type="button" class="btn-add-more-from-cart" onclick="navigateToMenuSection()">
      <span>＋ ${isBM ? 'Tambah Hidangan Lain dari Menu' : 'Add More Dishes from Menu'}</span>
    </button>
  `;

  if (subtotalEl) {
    subtotalEl.textContent = `RM ${subtotal.toFixed(2)}`;
  }
}

function executeWhatsAppCheckout() {
  const isBM = AppState.lang === 'bm';

  // If order type is Delivery, immediately route to Foodpanda store
  if (AppState.orderType === 'delivery') {
    redirectToFoodpanda();
    return;
  }

  const branch = BRANCHES[AppState.selectedBranch];
  const itemIds = Object.keys(AppState.cart);

  if (itemIds.length === 0) {
    alert(isBM ? 'Sila pilih sekurang-kurangnya satu hidangan.' : 'Please add at least one item to your order.');
    return;
  }

  const nameInput = document.getElementById('cart-cust-name');
  const notesInput = document.getElementById('cart-cust-notes');
  const custName = nameInput ? nameInput.value.trim() : '';
  const custNotes = notesInput ? notesInput.value.trim() : '';

  let orderTypeLabel = 'Bungkus / Takeaway';
  if (AppState.orderType === 'dinein') orderTypeLabel = 'Makan Sini (Dine-In)';
  if (AppState.orderType === 'delivery') orderTypeLabel = 'Penghantaran (Delivery)';

  // Cryptographically secure, unguessable & collision-free Order ID (e.g. PEL-7X9K2M)
  const orderId = generateSecureOrderId();
  const cleanCustName = (custName || '').slice(0, 100);
  const cleanCustNotes = (custNotes || '').slice(0, 300);

  let orderLines = [];
  let orderItems = [];
  let subtotal = 0;

  itemIds.forEach(id => {
    const item = MENU_DATA.find(m => m.id === id);
    if (item) {
      const qty = Number(AppState.cart[id] || 1);
      const cost = item.price * qty;
      subtotal += cost;
      orderLines.push(`• ${qty}x ${isBM ? item.nameBM : item.name} (RM ${cost.toFixed(2)})`);
      orderItems.push({
        id: sanitizeId(item.id),
        name: item.name,
        nameBM: item.nameBM,
        price: item.price,
        qty: qty,
        cost: cost
      });
    }
  });

  const orderData = {
    orderId: orderId,
    branch: AppState.selectedBranch,
    branchName: branch.name,
    orderType: AppState.orderType,
    orderTypeLabel: orderTypeLabel,
    customerName: cleanCustName || (isBM ? 'Pelanggan Laman Web' : 'Website Customer'),
    customerNotes: cleanCustNotes,
    items: orderItems,
    totalAmount: subtotal,
    status: 'received',
    createdAt: Date.now()
  };

  // 1. Record in Firebase Firestore & Local Cache
  if (window.PelitaFirebase && window.PelitaFirebase.createOrder) {
    window.PelitaFirebase.createOrder(orderData);
  }

  // 2. Generate live tracking URL
  const trackingUrl = `${window.location.origin}${window.location.pathname}?track=${orderId}`;

  // 3. Build WhatsApp message
  let msg = `*HELLO PELITA CAFE (${branch.name.toUpperCase()})*\n`;
  msg += `Saya ingin membuat pesanan melalui laman web:\n\n`;
  msg += `*No. Pesanan / Order ID:* #${orderId}\n`;
  msg += `*Jenis Pesanan:* ${orderTypeLabel}\n`;
  if (custName) msg += `*Nama Pelanggan:* ${custName}\n`;
  msg += `\n*Senarai Pesanan:*\n`;
  msg += orderLines.join('\n');
  msg += `\n\n*Jumlah Keseluruhan:* RM ${subtotal.toFixed(2)}\n`;
  if (custNotes) msg += `*Catatan Khas:* ${custNotes}\n`;
  msg += `\n*Status Semakan Langsung:* ${trackingUrl}\n`;
  msg += `\nTerima kasih! Mohon sahkan pesanan ini.`;

  // 4. Clear Cart
  AppState.cart = {};
  updateFloatingCartBadge();
  renderMenu();
  closeCartDrawer();

  // 5. Open WhatsApp
  const waUrl = `https://wa.me/${branch.phoneRaw}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');

  // 6. Open Live Tracker Modal for Customer
  setTimeout(() => {
    openOrderTrackerModal(orderId);
  }, 400);
}

// --- 11B. LIVE ORDER TRACKER SYSTEM ---
let activeOrderTrackerUnsub = null;

async function openOrderTrackerModal(orderIdToTrack = null) {
  const modal = document.getElementById('track-order-modal');
  if (modal) modal.classList.add('is-open');
  document.body.classList.add('modal-locked');

  const targetId = orderIdToTrack || localStorage.getItem('pelita_active_order_id');
  const inputEl = document.getElementById('track-order-input');

  if (targetId) {
    if (inputEl) inputEl.value = targetId;
    await trackOrderById(targetId);
  } else {
    // Show search state
    document.getElementById('tracker-status-container').style.display = 'none';
    document.getElementById('tracker-empty-state').style.display = 'none';
    if (inputEl) inputEl.focus();
  }
}

function closeOrderTrackerModal() {
  const modal = document.getElementById('track-order-modal');
  if (modal) modal.classList.remove('is-open');
  document.body.classList.remove('modal-locked');

  // Unsubscribe listener to conserve resources
  if (typeof activeOrderTrackerUnsub === 'function') {
    activeOrderTrackerUnsub();
    activeOrderTrackerUnsub = null;
  }
}

async function handleTrackerSearch(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('track-order-input');
  if (!input) return;
  const orderId = input.value.trim().toUpperCase().replace('#', '');
  if (orderId) {
    await trackOrderById(orderId);
  }
}

async function trackOrderById(orderId) {
  const container = document.getElementById('tracker-status-container');
  const emptyState = document.getElementById('tracker-empty-state');

  // Unsubscribe any previous active listener
  if (typeof activeOrderTrackerUnsub === 'function') {
    activeOrderTrackerUnsub();
    activeOrderTrackerUnsub = null;
  }

  // 1. Fetch current order data
  let order = null;
  if (window.PelitaFirebase && window.PelitaFirebase.getOrder) {
    order = await window.PelitaFirebase.getOrder(orderId);
  }

  if (!order) {
    container.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  // Render order
  emptyState.style.display = 'none';
  container.style.display = 'block';
  renderOrderTrackerStatus(order);

  // Save as last active order in storage
  localStorage.setItem('pelita_active_order_id', orderId);

  // 2. Attach real-time snapshot listener
  if (window.PelitaFirebase && window.PelitaFirebase.onOrderChange) {
    activeOrderTrackerUnsub = window.PelitaFirebase.onOrderChange(orderId, (liveOrder) => {
      if (liveOrder) {
        renderOrderTrackerStatus(liveOrder);
      }
    });
  }
}

function renderOrderTrackerStatus(order) {
  const isBM = AppState.lang === 'bm';
  const steps = ['received', 'in_progress', 'prepared', 'served'];
  const currentStep = (order.status || 'received').toLowerCase();
  let currentIdx = steps.indexOf(currentStep);
  if (currentIdx === -1) currentIdx = 0;

  // Header meta
  const orderIdEl = document.getElementById('tracker-order-id');
  if (orderIdEl) orderIdEl.textContent = `#${order.orderId}`;

  const branchNameEl = document.getElementById('tracker-branch-name');
  if (branchNameEl) branchNameEl.textContent = order.branchName || (order.branch === 'sepang' ? 'Pelita Cafe Sepang' : 'Pelita Cafe Putrajaya');

  const orderTypeEl = document.getElementById('tracker-order-type');
  if (orderTypeEl) {
    const rawType = (order.orderType || '').toLowerCase().replace(/[-_\s]/g, '');
    let typeTxt = isBM ? 'Bungkus (Takeaway)' : 'Takeaway';
    if (rawType === 'dinein') typeTxt = isBM ? 'Makan Sini (Dine-In)' : 'Dine-In';
    else if (rawType === 'delivery') typeTxt = isBM ? 'Penghantaran (Delivery)' : 'Delivery';
    orderTypeEl.textContent = typeTxt;
  }

  // Update Stepper Nodes & Connecting Lines
  steps.forEach((stepKey, idx) => {
    const node = document.getElementById(`step-node-${stepKey}`);
    if (node) {
      if (idx < currentIdx) {
        node.className = 'step-node is-completed';
      } else if (idx === currentIdx) {
        node.className = 'step-node is-current';
      } else {
        node.className = 'step-node';
      }
    }
  });

  // Connecting lines
  const line1 = document.getElementById('step-line-1');
  const line2 = document.getElementById('step-line-2');
  const line3 = document.getElementById('step-line-3');
  if (line1) line1.className = currentIdx >= 1 ? 'step-line is-active' : 'step-line';
  if (line2) line2.className = currentIdx >= 2 ? 'step-line is-active' : 'step-line';
  if (line3) line3.className = currentIdx >= 3 ? 'step-line is-active' : 'step-line';

  // Status Banner with contextual explanations
  const banner = document.getElementById('tracker-status-banner');
  const emoji = document.getElementById('tracker-status-emoji');
  const text = document.getElementById('tracker-status-text');

  const statusConfigs = {
    received: {
      iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 15 11"></polyline><line x1="12" y1="2" x2="12" y2="14"></line><path d="M20 16.5v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2"></path></svg>',
      textEN: 'Your order ticket has been received by our kitchen.',
      textBM: 'Pesanan anda telah diterima oleh pihak dapur Pelita Cafe.',
      isServed: false
    },
    in_progress: {
      iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-2V7a4 4 0 0 0-8 0v3H6a2 2 0 0 0-2 2v2a8 8 0 0 0 16 0v-2a2 2 0 0 0-2-2z"></path><line x1="12" y1="2" x2="12" y2="3"></line></svg>',
      textEN: 'Our chefs and barista are preparing your food & drinks fresh.',
      textBM: 'Tukang masak & barista kami sedang menyiapkan hidangan anda.',
      isServed: false
    },
    prepared: {
      iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
      textEN: 'Your order is prepared and ready! Please collect at the counter.',
      textBM: 'Pesanan anda telah sedia! Sila ambil di kaunter pengambilan.',
      isServed: true
    },
    served: {
      iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
      textEN: 'Order completed and served. Selamat menjamu selera!',
      textBM: 'Pesanan telah selesai disajikan. Terima kasih & selamat menjamu selera!',
      isServed: true
    }
  };

  const currentCfg = statusConfigs[currentStep] || statusConfigs.received;
  if (banner && emoji && text) {
    emoji.innerHTML = currentCfg.iconSvg;
    text.textContent = isBM ? currentCfg.textBM : currentCfg.textEN;
    if (currentCfg.isServed) {
      banner.classList.add('is-served');
    } else {
      banner.classList.remove('is-served');
    }
  }

  // Items list summary
  const itemsContainer = document.getElementById('tracker-items-summary');
  if (itemsContainer && Array.isArray(order.items)) {
    const itemsHtml = order.items.map(item => `
      <div class="tracker-item-row">
        <span><strong>${Number(item.qty || 1)}x</strong> ${escapeHtml(isBM ? (item.nameBM || item.name) : item.name)}</span>
        <span>RM ${Number(item.cost || (item.price * (item.qty || 1))).toFixed(2)}</span>
      </div>
    `).join('');

    itemsContainer.innerHTML = `
      <div style="font-weight: 700; color: var(--text-main); margin-bottom: 8px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">
        ${isBM ? 'Item Pesanan' : 'Ordered Items'}
      </div>
      ${itemsHtml}
      <div class="tracker-item-row" style="font-weight: 800; border-top: 2px solid rgba(0,0,0,0.1); margin-top: 8px; padding-top: 8px; color: var(--primary);">
        <span>${isBM ? 'Jumlah Keseluruhan' : 'Total Amount'}</span>
        <span>RM ${Number(order.totalAmount || 0).toFixed(2)}</span>
      </div>
    `;
  }
}

window.openOrderTrackerModal = openOrderTrackerModal;
window.closeOrderTrackerModal = closeOrderTrackerModal;
window.handleTrackerSearch = handleTrackerSearch;

// --- 12. DISH DETAILS MODAL ---
function openDishModal(dishId) {
  let resolvedId = sanitizeId(dishId);
  if (resolvedId === 'kopi-2') resolvedId = 'kop-2';
  if (resolvedId === 'kopi-1') resolvedId = 'kop-1';

  const menuList = (typeof MENU_DATA !== 'undefined' && Array.isArray(MENU_DATA)) ? MENU_DATA : (window.MENU_DATA || []);
  let item = menuList.find(m => m.id === resolvedId);
  if (!item) {
    item = menuList.find(m => m.id.toLowerCase() === resolvedId.toLowerCase());
  }
  if (!item) return;

  const isBM = AppState.lang === 'bm';
  const modal = document.getElementById('dish-detail-modal');
  const modalBody = document.getElementById('dish-modal-body');
  if (!modal || !modalBody) return;

  const displayName = escapeHtml(isBM ? (item.nameBM || item.name) : item.name);
  const displayDesc = escapeHtml(isBM ? (item.descriptionBM || item.description) : item.description);
  const safeBadge = item.badge ? `<span class="modal-dish-badge">${escapeHtml(item.badge)}</span>` : '';
  const safeImg = escapeHtml(item.image || 'assets/images/dishes-spread.webp');
  const safeId = sanitizeId(item.id);

  modalBody.innerHTML = `
    <div class="dish-modal-grid">
      <div class="dish-modal-image-col">
        <img src="${safeImg}" alt="${displayName}" class="dish-modal-img">
        ${safeBadge}
      </div>
      <div class="dish-modal-info-col">
        ${item.spicyLevel > 0 ? `
          <div class="dish-modal-tags">
            <span class="tag-pill">${isBM ? 'Tahap Pedas' : 'Spicy'}: ${Number(item.spicyLevel)}/3</span>
          </div>
        ` : ''}
        <h2 class="dish-modal-title">${displayName}</h2>
        <div class="dish-modal-price">RM ${Number(item.price).toFixed(2)}</div>
        <p class="dish-modal-desc">${displayDesc}</p>
        
        <div class="dish-modal-features">
          <div class="feature-item">
            <span class="feat-icon" style="color: var(--gold); display: inline-flex; align-items: center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg></span>
            <div>
              <strong>${isBM ? 'Dimasak Segar' : 'Cooked Fresh'}</strong>
              <small>${isBM ? 'Penyediaan kuali panas segera' : 'Cooked hot upon order'}</small>
            </div>
          </div>
          <div class="feature-item">
            <span class="feat-icon" style="color: var(--gold); display: inline-flex; align-items: center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-7.3 16.8 1 1 0 0 0 .3.2l7 3 7-3a1 1 0 0 0 .3-.2A10 10 0 0 0 12 2z"></path><path d="M12 2v20"></path></svg></span>
            <div>
              <strong>${isBM ? 'Bahan Asli' : 'Natural Ingredients'}</strong>
              <small>${isBM ? 'Bahan tempatan terpilih' : 'Finest local ingredients'}</small>
            </div>
          </div>
        </div>

        <div class="dish-modal-actions">
          ${item.isSoldOut ? `
            <button type="button" class="btn-primary-large" disabled style="opacity: 0.6; cursor: not-allowed; background: #4B5563;">
              <span>${isBM ? 'Maaf, Hidangan Ini Telah Habis' : 'Sorry, Item Currently Sold Out'}</span>
            </button>
          ` : `
            <button type="button" class="btn-primary-large" onclick="updateCartItem('${safeId}', 1); closeDishModal(); openCartDrawer();">
              <span>${isBM ? 'Tambah ke Pesanan WhatsApp' : 'Add to WhatsApp Order'} • RM ${Number(item.price).toFixed(2)}</span>
            </button>
          `}
          ${typeof navigator !== 'undefined' && navigator.share ? `
            <button type="button" class="btn-share-dish" onclick="shareDish('${safeId}')">
              <span style="display:inline-flex; align-items:center; margin-right:4px;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></span> <span>${isBM ? 'Kongsi Sajian Ini' : 'Share Dish with Friends'}</span>
            </button>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('is-open');
  document.body.classList.add('modal-locked');
}

async function shareDish(dishId) {
  const item = MENU_DATA.find(d => d.id === dishId);
  if (!item) return;
  const isBM = AppState.lang === 'bm';
  const name = isBM ? item.nameBM : item.name;
  if (navigator.share) {
    try {
      await navigator.share({
        title: `${name} - Pelita Cafe`,
        text: `Check out ${name} (RM ${item.price.toFixed(2)}) at Pelita Cafe!`,
        url: window.location.href.split('#')[0] + '#menu'
      });
    } catch (err) {
      // User cancelled share
    }
  }
}
window.shareDish = shareDish;

async function copyTextToClipboard(text, btnElement) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    if (btnElement) {
      const originalText = btnElement.innerHTML;
      btnElement.classList.add('copied');
      btnElement.innerHTML = 'Copied!';
      setTimeout(() => {
        btnElement.classList.remove('copied');
        btnElement.innerHTML = originalText;
      }, 2200);
    }
    showToast(AppState.lang === 'bm' ? 'Disalin ke papan keratan!' : 'Copied to clipboard!');
  } catch (e) {
    showToast(AppState.lang === 'bm' ? 'Gagal menyalin' : 'Copy failed');
  }
}
window.copyTextToClipboard = copyTextToClipboard;

function closeDishModal() {
  const modal = document.getElementById('dish-detail-modal');
  if (modal) modal.classList.remove('is-open');
  document.body.classList.remove('modal-locked');
}

// Make functions available on global window for inline onclick handlers
window.openDishModal = openDishModal;
window.closeDishModal = closeDishModal;
window.updateCartItem = updateCartItem;
window.resetMenuFilters = resetMenuFilters;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;

// --- 13. TABLE RESERVATIONS SYSTEM ---
function initReservationModal() {
  const openBtns = document.querySelectorAll('[data-action="open-reserve"]');
  const modal = document.getElementById('reserve-modal');
  const closeBtn = document.getElementById('close-reserve-btn');
  const backdrop = document.getElementById('reserve-modal-backdrop');
  const form = document.getElementById('reserve-table-form');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('is-open');
      document.body.classList.add('modal-locked');
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeReserveModal);
  if (backdrop) backdrop.addEventListener('click', closeReserveModal);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const isBM = AppState.lang === 'bm';
      const branchKey = form.elements['reserve_branch'].value;
      const name = form.elements['reserve_name'].value.trim();
      const phone = form.elements['reserve_phone'].value.trim();
      const date = form.elements['reserve_date'].value;
      const time = form.elements['reserve_time'].value;
      const pax = form.elements['reserve_pax'].value;
      const notes = form.elements['reserve_notes'].value.trim();

      const branch = BRANCHES[branchKey] || BRANCHES.putrajaya;

      let msg = `*TEMPAHAN MEJA / RESERVATION - PELITA CAFE*\n`;
      msg += `*Cawangan:* ${branch.name}\n`;
      msg += `*Nama:* ${name}\n`;
      msg += `*No Telefon:* ${phone}\n`;
      msg += `*Tarikh:* ${date}\n`;
      msg += `*Masa:* ${time}\n`;
      msg += `*Bilangan Pax:* ${pax} orang\n`;
      if (notes) msg += `*Catatan / Permintaan:* ${notes}\n`;
      msg += `\nMohon semak kekosongan meja untuk kami. Terima kasih!`;

      closeReserveModal();
      showToast(isBM ? 'Menghubungkan ke WhatsApp...' : 'Connecting to WhatsApp...');
      window.open(`https://wa.me/${branch.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}

function closeReserveModal() {
  const modal = document.getElementById('reserve-modal');
  if (modal) modal.classList.remove('is-open');
  document.body.classList.remove('modal-locked');
}
window.closeReserveModal = closeReserveModal;

// --- 14. GALLERY LIGHTBOX ---
function openLightboxImage(src, caption) {
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = src;
  if (lightboxCaption) lightboxCaption.textContent = caption || '';
  lightbox.classList.add('is-open');
  document.body.classList.add('modal-locked');
}
window.openLightboxImage = openLightboxImage;

function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('gallery-lightbox');
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightbox) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const overlayCap = item.querySelector('.gallery-caption');
      const caption = (overlayCap && overlayCap.textContent.trim()) || item.getAttribute('data-caption') || (img ? img.alt : '');
      if (img) {
        openLightboxImage(img.src, caption);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('modal-locked');
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('is-open');
        document.body.classList.remove('modal-locked');
      }
    });
  }

  const track = document.getElementById('gallery-slider-track');
  if (track) {
    track.addEventListener('touchstart', () => {
      track.style.animationPlayState = 'paused';
    }, { passive: true });
    track.addEventListener('touchend', () => {
      track.style.animationPlayState = 'running';
    }, { passive: true });
  }
}

// --- 15. TOAST NOTIFICATION UTILITY ---
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'pelita-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('is-visible');

  setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2600);
}

// --- 16. NAVBAR STICKY, AUTO-SCROLL & SCROLLSPY ---
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  const backToTop = document.getElementById('back-to-top');

  // 1. Sticky header background, Back-to-Top visibility & Scroll Progress on scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Dynamic Scroll Progress Bar
    if (scrollProgressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrollPercent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        scrollProgressBar.style.width = scrollPercent + '%';
      }
    }

    if (header) {
      if (scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    if (backToTop) {
      if (scrollY > 450) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Smooth Auto-Scroll for Navigation Links (Desktop, Mobile, Footer, CTA)
  const allHashLinks = document.querySelectorAll('a[href^="#"]');
  const desktopLinks = document.querySelectorAll('.nav-links .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links .mobile-nav-link');

  function updateActiveNav(targetId) {
    desktopLinks.forEach(link => {
      if (link.getAttribute('href') === targetId) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });

    mobileLinks.forEach(link => {
      if (link.getAttribute('href') === targetId) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  }

  allHashLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || !href.startsWith('#')) return;

      const targetEl = document.querySelector(href);
      if (!targetEl) return;

      e.preventDefault();

      // If mobile drawer is currently open, close it smoothly
      const drawer = document.getElementById('mobile-nav-drawer');
      const backdrop = document.getElementById('mobile-drawer-backdrop');
      if (drawer && drawer.classList.contains('is-open')) {
        drawer.classList.remove('is-open');
        if (backdrop) backdrop.classList.remove('is-open');
        document.body.classList.remove('modal-locked');
      }

      // Calculate destination with dynamic header offset
      const currentHeaderHeight = header ? header.offsetHeight : 78;
      const targetOffset = targetEl.getBoundingClientRect().top + window.pageYOffset - (currentHeaderHeight - 2);

      window.scrollTo({
        top: Math.max(0, Math.round(targetOffset)),
        behavior: 'smooth'
      });

      // Update active navigation state immediately
      updateActiveNav(href);
    });
  });

  // Ensure page always starts at top on reload and clean URL hash
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname + window.location.search);
  }
  window.scrollTo(0, 0);

  // 3. Scrollspy: dynamically update active link based on current scroll position
  const sections = Array.from(document.querySelectorAll('section[id]'));
  if (sections.length > 0) {
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const currentHeaderHeight = header ? header.offsetHeight : 78;
        const currentOffset = scrollY + currentHeaderHeight + 60;

        let activeSectionId = '';

        // If near top of page, home is active
        if (scrollY < 120) {
          activeSectionId = '#home';
        } else if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 50) {
          // If at bottom of page, last section is active
          activeSectionId = '#' + sections[sections.length - 1].id;
        } else {
          for (let i = sections.length - 1; i >= 0; i--) {
            const sec = sections[i];
            if (sec.offsetTop <= currentOffset) {
              activeSectionId = '#' + sec.id;
              break;
            }
          }
        }

        if (activeSectionId) {
          updateActiveNav(activeSectionId);
        }
      }, 60);
    }, { passive: true });
  }

  // Highlight initial section on load
  const initialHash = window.location.hash || '#home';
  updateActiveNav(initialHash);
}

// --- 17. MOBILE DRAWER NAVIGATION ---
function initMobileDrawer() {
  const burger = document.getElementById('mobile-burger-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('close-mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');

  if (!drawer) return;

  function openDrawer(e) {
    if (e && e.preventDefault) e.preventDefault();
    drawer.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    document.body.classList.add('modal-locked');
    if (burger) burger.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer(e) {
    if (e && e.preventDefault) e.preventDefault();
    drawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    document.body.classList.remove('modal-locked');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  // Expose globally for inline onclick fallbacks
  window.openMobileDrawer = openDrawer;
  window.closeMobileDrawer = closeDrawer;

  if (burger) {
    burger.setAttribute('aria-expanded', 'false');
    burger.addEventListener('click', openDrawer);
  }
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Close when clicking nav links
  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// --- 18. SCROLL REVEAL ANIMATIONS ---
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

// --- 19. DYNAMIC INTERACTIVE PARALLAX & AMBIENT MOTION BACKGROUND ---
function initInteractiveBackground() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const orb1 = document.getElementById('bg-orb-1');
  const orb2 = document.getElementById('bg-orb-2');
  const orb3 = document.getElementById('bg-orb-3');
  const spotlight = document.getElementById('cursor-spotlight');
  const secBgItems = Array.from(document.querySelectorAll('.sec-bg-item'));

  function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
  }

  let targetScrollY = getScrollTop();
  let currentScrollY = targetScrollY;

  let targetMouseX = window.innerWidth / 2;
  let targetMouseY = window.innerHeight / 2;
  let currentMouseX = targetMouseX;
  let currentMouseY = targetMouseY;

  // Active scroll listener
  window.addEventListener('scroll', () => {
    targetScrollY = getScrollTop();
  }, { passive: true });

  // Mousemove listener for ambient light and spotlight tracking
  window.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
    if (spotlight) spotlight.classList.add('is-active');
  }, { passive: true });

  // Touch parallax on mobile devices
  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      targetMouseX = e.touches[0].clientX;
      targetMouseY = e.touches[0].clientY;
      if (spotlight) spotlight.classList.add('is-active');
    }
  }, { passive: true });

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function animate() {
    // Smooth lerping for velocity
    currentScrollY = lerp(currentScrollY, targetScrollY, 0.12);
    currentMouseX = lerp(currentMouseX, targetMouseX, 0.08);
    currentMouseY = lerp(currentMouseY, targetMouseY, 0.08);

    const mouseDeltaX = (currentMouseX - window.innerWidth / 2) * 0.05;
    const mouseDeltaY = (currentMouseY - window.innerHeight / 2) * 0.05;

    // Update background texture position
    document.documentElement.style.setProperty('--bg-scroll-y', `${currentScrollY.toFixed(1)}px`);

    const winH = window.innerHeight || 800;

    // Fluid ambient glow orbs moving across the page
    if (orb1) {
      const y = (currentScrollY * 0.25) % (winH * 1.5) + mouseDeltaY * 2.0;
      const x = mouseDeltaX * 2.0;
      orb1.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    }

    if (orb2) {
      const y = (-currentScrollY * 0.3) % (winH * 1.5) - mouseDeltaY * 1.8;
      const x = -mouseDeltaX * 1.6;
      orb2.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    }

    if (orb3) {
      const y = (currentScrollY * 0.18) % (winH * 1.5) + mouseDeltaY * 1.4;
      const x = mouseDeltaX * 1.0;
      orb3.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    }

    // Cursor spotlight positioning
    if (spotlight) {
      spotlight.style.left = `${currentMouseX.toFixed(1)}px`;
      spotlight.style.top = `${currentMouseY.toFixed(1)}px`;
    }

    // High-impact, continuous section-anchored parallax motion across every section
    secBgItems.forEach(item => {
      const parentSec = item.closest('section');
      if (!parentSec) return;

      const rect = parentSec.getBoundingClientRect();
      if (rect.bottom >= -250 && rect.top <= winH + 250) {
        const progress = (winH - rect.top) / (winH + rect.height);
        const travel = parseFloat(item.getAttribute('data-travel') || 130);
        const maxRot = parseFloat(item.getAttribute('data-rot') || 25);

        // Substantial travel distance (±150px - ±280px) for clear, undeniable motion
        const yOffset = (progress - 0.5) * travel * 2.4;
        const rotation = (progress - 0.5) * maxRot * 1.6;
        const xOffset = mouseDeltaX * 1.2;

        item.style.transform = `translate3d(${xOffset.toFixed(1)}px, ${yOffset.toFixed(1)}px, 0) rotate(${rotation.toFixed(1)}deg)`;
      }
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// --- 20. GOOGLE REVIEWS HORIZONTAL CAROUSEL ---
function initReviewsCarousel() {
  const track = document.getElementById('reviews-carousel-track');
  const prevBtn = document.getElementById('review-prev-btn');
  const nextBtn = document.getElementById('review-next-btn');
  const dotsContainer = document.getElementById('review-dots-container');
  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.review-slide-card'));
  if (!slides.length) return;

  // Generate pagination dots
  if (dotsContainer) {
    dotsContainer.innerHTML = slides.map((_, i) => `
      <button type="button" class="review-dot ${i === 0 ? 'is-active' : ''}" data-index="${i}" aria-label="Go to review slide ${i + 1}"></button>
    `).join('');
  }

  function getSlideWidth() {
    const slide = slides[0];
    const gap = 24;
    return slide ? slide.offsetWidth + gap : 340;
  }

  function updateActiveState() {
    const scrollLeft = track.scrollLeft;
    const slideWidth = getSlideWidth();
    const activeIndex = Math.round(scrollLeft / slideWidth);

    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.review-dot');
      dots.forEach((dot, idx) => {
        if (idx === activeIndex) {
          dot.classList.add('is-active');
        } else {
          dot.classList.remove('is-active');
        }
      });
    }

    // Update button states
    if (prevBtn) {
      prevBtn.disabled = scrollLeft <= 10;
    }
    if (nextBtn) {
      const maxScroll = track.scrollWidth - track.clientWidth - 10;
      nextBtn.disabled = scrollLeft >= maxScroll;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const slideWidth = getSlideWidth();
      track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const slideWidth = getSlideWidth();
      track.scrollBy({ left: slideWidth, behavior: 'smooth' });
    });
  }

  // Dot click navigation
  if (dotsContainer) {
    dotsContainer.addEventListener('click', (e) => {
      const dot = e.target.closest('.review-dot');
      if (!dot) return;
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      const slideWidth = getSlideWidth();
      track.scrollTo({ left: idx * slideWidth, behavior: 'smooth' });
    });
  }

  // Scroll listener on track for active state
  track.addEventListener('scroll', updateActiveState, { passive: true });
  window.addEventListener('resize', updateActiveState, { passive: true });

  // Initial state
  updateActiveState();

  // If Elfsight live widget loads, seamlessly swap out the fallback slider
  const liveContainer = document.getElementById('live-google-reviews-container');
  const fallbackSlider = document.querySelector('.reviews-slider-wrapper');
  if (liveContainer && fallbackSlider) {
    const checkLiveWidget = () => {
      if (liveContainer.offsetHeight > 80) {
        fallbackSlider.style.display = 'none';
      }
    };
    const observer = new MutationObserver(checkLiveWidget);
    observer.observe(liveContainer, { childList: true, subtree: true });
    setTimeout(checkLiveWidget, 2000);
    setTimeout(checkLiveWidget, 5000);
  }
}

/* ==========================================================================
   DISCREET ADMIN PORTAL ACCESS (FOR CAFE OWNERS & MANAGERS)
   - 3 Fast Taps on the Footer Pelita Logo
   - Keyboard Shortcut: Ctrl + Alt + A (or Cmd + Option + A on Mac)
   ========================================================================== */
(function setupSecretAdminShortcut() {
  let logoTapCount = 0;
  let logoTapTimer = null;

  document.addEventListener('click', (e) => {
    const footerLogo = e.target.closest('.footer-logo-img') || e.target.closest('#secret-admin-trigger');
    if (!footerLogo) return;

    logoTapCount++;
    clearTimeout(logoTapTimer);

    if (logoTapCount >= 3) {
      logoTapCount = 0;
      window.location.href = 'admin.html';
    } else {
      logoTapTimer = setTimeout(() => {
        logoTapCount = 0;
      }, 700);
    }
  });

  // Desktop Keyboard Shortcut: Ctrl+Alt+A or Cmd+Option+A
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'a' || e.key === 'A')) {
      window.location.href = 'admin.html';
    }
  });
})();
