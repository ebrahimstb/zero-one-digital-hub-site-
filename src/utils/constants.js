/**
 * constants.js
 *
 * Single source of truth for all app-wide configuration.
 * Change values here and they update everywhere automatically.
 *
 * ✅ Never hardcode phone numbers, links, or brand strings anywhere else.
 */

// ── Contact ───────────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '2348144345484'; // E.164 without '+'
export const PHONE_DISPLAY   = '08144345484';
export const EMAIL           = 'zero1digitalhub@gmail.com';

// ── Social ────────────────────────────────────────────────────────────────────
export const SOCIALS = {
  tiktok:    'https://tiktok.com/@zero.one_digitalhub',
  instagram: 'https://instagram.com/zero.one_digitalhub',
  whatsapp:  `https://wa.me/${WHATSAPP_NUMBER}`,
};

// ── Brand ─────────────────────────────────────────────────────────────────────
export const BRAND = {
  name:     'Zero One Digital Hub',
  handle:   '@zero.one_digitalhub',
  tagline:  'Smart Devices. Smart Prices. Smart Choices.',
  location: 'Lagos, Nigeria',
  year:     '2025',
};

/**
 * Build a WhatsApp deep-link with a pre-filled message.
 * @param {string} message - The pre-filled text
 * @returns {string} Full wa.me URL
 */
export const waLink = (message = `Hi! from your website I want to order from ${BRAND.name}.`) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { path: '/',        label: 'Home'    },
  { path: '/shop',    label: 'Shop'    },
  { path: '/about',   label: 'About'   },
  { path: '/blog',    label: 'Blog'    },
  { path: '/faq',     label: 'FAQ'     },
  { path: '/contact', label: 'Contact' },
  { path: '/rebrand', label: 'Rebrand' },

];

// ── Product categories ────────────────────────────────────────────────────────
export const CATEGORIES = [
  { value: 'all',         label: 'All Products' },
  { value: 'phones',      label: 'Phones'       },
  { value: 'laptops',     label: 'Laptops'      },
  { value: 'accessories', label: 'Accessories'  },
];

// ── Badge color map ───────────────────────────────────────────────────────────
export const BADGE_COLORS = {
  Hot:       'bg-red-600',
  Popular:   'bg-brand-green',
  New:       'bg-brand-green',
  'UK Used': 'bg-purple-600',
  Gaming:    'bg-orange-600',
};
