/**
 * products.js
 *
 * ── HOW TO ADD A PRODUCT ──────────────────────────────────────────
 * 1. Add your image to public/images/products/
 * 2. Copy any object below, change the fields, increment the id
 *
 * ── HOW TO MARK OUT OF STOCK ─────────────────────────────────────
 * Set inStock: false — the card shows "Out of Stock" automatically
 *
 * ── HOW TO REMOVE A PRODUCT ──────────────────────────────────────
 * Delete its object from the array below
 * ─────────────────────────────────────────────────────────────────
 */

const products = [
  // ── PHONES ──────────────────────────────────────────────────────
  {
    id: 1,
    category: 'phones',
    name: 'iPhone 17 Pro Max',
    model: '256GB · Natural Titanium',
    price: '₦1,950,000',
    badge: 'Hot',
    description: 'Brand new, sealed. A17 Pro chip, titanium frame, 48MP camera system.',
    image: '/images/products/New-iPhone-17-Pro.jpg',
    inStock: true,
  },
  {
    id: 2,
    category: 'phones',
    name: 'Samsung Galaxy S24 Ultra',
    model: '256GB · Phantom Black',
    price: '₦780,000',
    badge: 'Popular',
    description: 'New. 200MP camera, built-in S Pen, 5000mAh battery.',
    image: '/images/products/Samsung-Galaxy-S24-Ultra-256GB.jpg',
    inStock: true,
  },
  {
    id: 3,
    category: 'phones',
    name: 'iPhone 14 Pro',
    model: '128GB · Deep Purple',
    price: '₦480,000',
    badge: 'UK Used',
    description: 'Grade A UK used. Dynamic Island, 48MP, excellent condition.',
    image: '/images/products/IPHONE-14-PRO.jpg',
    inStock: true,
  },
  {
    id: 4,
    category: 'phones',
    name: 'Tecno Phantom X2 Pro',
    model: '256GB · Mars Orange',
    price: '₦185,000',
    badge: 'New',
    description: 'Brand new. Retractable portrait lens, 5160mAh, 45W charging.',
    image: '/images/products/tecno-phantom-x2.jpg',
    inStock: false,
  },

  // ── LAPTOPS ─────────────────────────────────────────────────────
  {
    id: 5,
    category: 'laptops',
    name: 'MacBook Air M2',
    model: '8GB RAM · 256GB SSD',
    price: '₦620,000',
    badge: 'Popular',
    description: 'UK used, Grade A. Fanless design, all-day battery, blazing fast.',
    image: '/images/products/Two-MacBook-Air-M2-Silver.jpg',
    inStock: true,
  },
  {
    id: 6,
    category: 'laptops',
    name: 'Dell XPS 15',
    model: '16GB RAM · 512GB SSD',
    price: '₦520,000',
    badge: 'UK Used',
    description: 'Intel i7 12th Gen. OLED display. Perfect for creatives.',
    image: '/images/products/2026-Dell-XPS.jpg',
    inStock: true,
  },
  {
    id: 7,
    category: 'laptops',
    name: 'ASUS ROG Strix G15',
    model: '16GB RAM · 512GB SSD',
    price: '₦480,000',
    badge: 'Gaming',
    description: 'RTX 3060, 144Hz display. Dominates every game you throw at it.',
    image: '/images/products/asus-rog-strix.jpg',
    inStock: true,
  },
  {
    id: 8,
    category: 'laptops',
    name: 'HP EliteBook 840 G9',
    model: '16GB RAM · 256GB SSD',
    price: '₦280,000',
    badge: 'UK Used',
    description: 'Intel i5 12th Gen. Business grade, lightweight, fast.',
    image: '/images/products/hp-elitebook-840.jpg',
    inStock: true,
  },

  // ── ACCESSORIES ─────────────────────────────────────────────────
  {
    id: 9,
    category: 'accessories',
    name: 'AirPods Pro (2nd Gen)',
    model: 'USB-C · White',
    price: '₦85,000',
    badge: 'New',
    description: 'Active noise cancellation, spatial audio, 30hr total battery.',
    image: '/images/products/airpods-pro-2.jpg',
    inStock: true,
  },
  {
    id: 10,
    category: 'accessories',
    name: 'Samsung 65W Super Fast Charger',
    model: 'USB-C PD',
    price: '₦12,000',
    badge: 'New',
    description: 'Official Samsung. Compatible with S and A series plus laptops.',
    image: '/images/products/samsung-65w-charger.jpg',
    inStock: true,
  },
  {
    id: 11,
    category: 'accessories',
    name: 'Apple MagSafe Charger',
    model: '15W · 1m Cable',
    price: '₦22,000',
    badge: 'New',
    description: 'Original Apple. Works with iPhone 12 and above.',
    image: '/images/products/apple-magsafe.jpg',
    inStock: true,
  },
  {
    id: 12,
    category: 'accessories',
    name: 'JBL Flip 6',
    model: 'Black · Waterproof',
    price: '₦48,000',
    badge: 'New',
    description: 'IP67 waterproof, 12hr playtime, powerful JBL bass.',
    image: '/images/products/jbl-flip-6.jpg',
    inStock: true,
  },
];

export default products;