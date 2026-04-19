/**
 * Footer.jsx
 *
 * Site-wide footer with brand info, navigation columns, and legal copy.
 * Imported once in RootLayout — never placed directly on pages.
 */

import { Link } from 'react-router-dom';
import { BRAND, SOCIALS, PHONE_DISPLAY, waLink } from '../../utils/constants';

// Footer navigation columns — easy to extend
const FOOTER_COLS = [
  {
    heading: 'Shop',
    links: [
      { label: 'Phones',      to: '/shop?cat=phones'      },
      { label: 'Laptops',     to: '/shop?cat=laptops'     },
      { label: 'Accessories', to: '/shop?cat=accessories' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',    to: '/about'   },
      { label: 'Our Rebrand', to: '/rebrand' },
      { label: 'Blog',        to: '/blog'    },
      { label: 'Contact',     to: '/contact' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { label: 'FAQ',               to: '/faq'               },
      { label: 'Terms & Conditions', to: '/terms'            },
      { label: 'WhatsApp',          href: SOCIALS.whatsapp   },
      { label: 'TikTok',            href: SOCIALS.tiktok     },
      { label: 'Instagram',         href: SOCIALS.instagram  },
    ],
  },
];

const Footer = () => (
  <footer className="
    bg-light-surface dark:bg-dark-surface
    border-t border-light-border dark:border-dark-border
    mt-20 pt-12 pb-6
  ">
    <div className="container-custom">

      {/* ── Top grid ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="font-display text-4xl mb-3">
            <span className="text-dark-bg dark:text-white">0</span>
            <span className="text-brand-green">1</span>
          </div>
          <p className="text-[14px] font-light text-dark-raised dark:text-white/50 leading-relaxed max-w-[240px] mb-4">
            {BRAND.tagline}<br />
            {BRAND.location} · CAC Registered.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              bg-brand-green text-white text-[13px] font-semibold
              px-4 py-2.5 rounded-md
              transition-opacity duration-200 hover:opacity-85
            "
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Navigation columns */}
        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <h4 className="font-mono text-[10px] tracking-[0.18em] uppercase text-dark-border2 dark:text-white/30 mb-4">
              {col.heading}
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-[14px] text-dark-raised dark:text-white/50 hover:text-brand-green transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[14px] text-dark-raised dark:text-white/50 hover:text-brand-green transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────── */}
      <div className="
        flex flex-col sm:flex-row items-center justify-between gap-3
        pt-6 border-t border-light-border dark:border-dark-border
      ">
        <p className="font-mono text-[11px] text-dark-border2 dark:text-white/25 tracking-wide">
          © {BRAND.year} {BRAND.name}. All rights reserved.
        </p>

        <div className="flex gap-4">
          {[
            { label: 'Terms', to: '/terms'   },
            { label: 'FAQ',   to: '/faq'     },
            { label: 'Contact', to: '/contact' },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="font-mono text-[11px] text-dark-border2 dark:text-white/25 hover:text-brand-green transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
