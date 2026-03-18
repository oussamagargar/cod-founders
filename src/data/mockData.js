export const revenueData = [
  { date: 'Jan', revenue: 4200, leads: 320, orders: 180 },
  { date: 'Feb', revenue: 5800, leads: 410, orders: 240 },
  { date: 'Mar', revenue: 4900, leads: 380, orders: 210 },
  { date: 'Apr', revenue: 7200, leads: 520, orders: 310 },
  { date: 'May', revenue: 6100, leads: 460, orders: 270 },
  { date: 'Jun', revenue: 8400, leads: 610, orders: 380 },
  { date: 'Jul', revenue: 7800, leads: 580, orders: 350 },
]

export const topProducts = [
  { name: 'CLARINS Serum KSA', sold: 234, revenue: 8250, img: null },
  { name: 'Patick Philippe Watch', sold: 187, revenue: 6540, img: null },
  { name: 'جهاز تدليك كامل للجسم', sold: 156, revenue: 5480, img: null },
  { name: 'جهاز تدليك الجسم بالأشعة', sold: 98, revenue: 3920, img: null },
  { name: 'Lip Plumper Vegan', sold: 76, revenue: 2660, img: null },
]

export const leads = [
  { id: 'LD-10234', customer: 'Ahmed Benali', phone: '+212 6XX XXX XX1', product: 'CLARINS Serum KSA', country: '🇲🇦 Morocco', status: 'Confirmed', date: 'Mar 15, 2026', amount: '5.79 USD' },
  { id: 'LD-10233', customer: 'Karim Ouali', phone: '+213 7XX XXX XX2', product: 'Patick Philippe Watch', country: '🇩🇿 Algeria', status: 'In Progress', date: 'Mar 15, 2026', amount: '7.99 USD' },
  { id: 'LD-10232', customer: 'Yassine Trabelsi', phone: '+216 9XX XXX XX3', product: 'جهاز تدليك كامل للجسم', country: '🇹🇳 Tunisia', status: 'Delivered', date: 'Mar 14, 2026', amount: '19.90 USD' },
  { id: 'LD-10231', customer: 'Mohamed Hassan', phone: '+20 1XX XXX XX4', product: 'Lip Plumper Vegan', country: '🇪🇬 Egypt', status: 'Canceled', date: 'Mar 14, 2026', amount: '9.99 USD' },
  { id: 'LD-10230', customer: 'Ibrahima Diallo', phone: '+221 7XX XXX XX5', product: 'Camera Detector', country: '🇸🇳 Senegal', status: 'Shipped', date: 'Mar 13, 2026', amount: '24.90 USD' },
  { id: 'LD-10229', customer: 'Moussa Ould Ahmed', phone: '+222 2XX XXX XX6', product: 'جهاز تدليك الجسم بالأشعة', country: '🇲🇷 Mauritania', status: 'Confirmed', date: 'Mar 13, 2026', amount: '99.00 USD' },
  { id: 'LD-10228', customer: 'Sara Mansouri', phone: '+212 6XX XXX XX7', product: 'Rounded Polarized Glasses', country: '🇲🇦 Morocco', status: 'Fulfilled', date: 'Mar 12, 2026', amount: '14.50 USD' },
  { id: 'LD-10227', customer: 'Nassim Belhaj', phone: '+213 5XX XXX XX8', product: 'Aceite de suero', country: '🇩🇿 Algeria', status: 'Returned', date: 'Mar 12, 2026', amount: '11.00 USD' },
]

export const orders = [
  { id: 'ORD-54200', product: 'CLARINS Serum KSA', customer: 'Ahmed Benali', country: '🇲🇦 Morocco', status: 'Shipped', total: '5.79 USD', date: 'Mar 15, 2026' },
  { id: 'ORD-54199', product: 'Patick Philippe Watch', customer: 'Karim Ouali', country: '🇩🇿 Algeria', status: 'Processing', total: '7.99 USD', date: 'Mar 14, 2026' },
  { id: 'ORD-54198', product: 'جهاز تدليك كامل للجسم', customer: 'Yassine Trabelsi', country: '🇹🇳 Tunisia', status: 'Delivered', total: '19.90 USD', date: 'Mar 13, 2026' },
  { id: 'ORD-54197', product: 'Lip Plumper Vegan', customer: 'Sara Mansouri', country: '🇲🇦 Morocco', status: 'Canceled', total: '9.99 USD', date: 'Mar 12, 2026' },
  { id: 'ORD-54196', product: 'Camera Detector', customer: 'Ibrahima Diallo', country: '🇸🇳 Senegal', status: 'Delivered', total: '24.90 USD', date: 'Mar 11, 2026' },
  { id: 'ORD-54195', product: 'Rounded Polarized Glasses', customer: 'Mohamed Hassan', country: '🇪🇬 Egypt', status: 'Shipped', total: '14.50 USD', date: 'Mar 10, 2026' },
]

export const sourcingRequests = [
  { id: 'QOT54200', product: 'Lip Plumper Vegan', type: 'Regular', country: '🇸🇦 Saudi arabia', date: 'Mar 1, 2026', status: 'Pending' },
  { id: 'QOT54199', product: 'Automatic DIY Hair Braiding Tool', type: 'Regular', country: '🇰🇼 Kuwait', date: 'Feb 28, 2026', status: 'Quoted' },
  { id: 'QOT49636', product: '2025 Wholesale Smartwatch Manufact...', type: 'Regular', country: '🇦🇪 United Arab Emirates', date: 'Oct 6, 2025', status: 'Approved' },
  { id: 'QOT49584', product: 'Hidratar Arrugas Suave Refina Suero', type: 'Regular', country: '🇸🇦 Saudi arabia', date: 'Oct 4, 2025', status: 'Pending' },
  { id: 'QOT49583', product: 'Rounded Polarized Glasses with Adjus...', type: 'Regular', country: '🇸🇦 Saudi arabia', date: 'Oct 3, 2025', status: 'Quoted' },
  { id: 'QOT49582', product: 'Rounded Polarized Glasses with Adjus...', type: 'Regular', country: '🇶🇦 Qatar', date: 'Oct 3, 2025', status: 'Approved' },
  { id: 'QOT49581', product: 'Aceite de suero', type: 'Regular', country: '🇰🇼 Kuwait', date: 'Oct 3, 2025', status: 'Pending' },
  { id: 'QOT49360', product: 'Camera Detector', type: 'Regular', country: '🇸🇦 Saudi arabia', date: 'Sep 24, 2025', status: 'Approved' },
  { id: 'QOT49359', product: 'Camera Detector', type: 'Regular', country: '🇰🇼 Kuwait', date: 'Sep 24, 2025', status: 'Quoted' },
  { id: 'QOT49066', product: '2025 Wholesale Smartwatch Manufact...', type: 'Regular', country: '🇸🇦 Saudi arabia', date: 'Sep 10, 2025', status: 'Approved' },
]

export const products = [
  { id: 1, name: 'CLARINS Serum KSA', weight: '0.1 KG', availability: 'Available', cost: '5.79 USD', addedAt: 'Aug 24, 2024, 12:08 PM', img: null },
  { id: 2, name: 'ساعة باتيك فيليب Patick Philippe', weight: '0.2 KG', availability: 'Available', cost: '7.99 USD', addedAt: 'Jun 6, 2024, 5:50 PM', img: null },
  { id: 3, name: 'جهاز تدليك كامل للجسم', weight: '1 KG', availability: 'Available', cost: '19.90 USD', addedAt: 'Aug 10, 2023, 7:14 PM', img: null },
  { id: 4, name: 'جهاز تدليك الجسم بالأشعة الحمراء', weight: '3 KG', availability: 'Available', cost: '99.00 USD', addedAt: 'Feb 13, 2023, 6:34 PM', img: null },
]
