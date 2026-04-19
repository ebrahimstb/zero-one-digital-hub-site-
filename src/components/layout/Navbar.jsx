/**
 * Navbar.jsx
 *
 * Fixed top navigation bar.
 * - Desktop: horizontal links + theme toggle + WhatsApp CTA
 * - Mobile: hamburger → full-screen slide-in menu
 *
 * Props:
 *   toggleTheme - function from useTheme() hook
 *   isDark      - boolean from useTheme() hook
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, waLink, BRAND } from '../../utils/constants';

const Navbar = ({ toggleTheme, isDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Main bar ───────────────────────────────────────────────── */}
      <nav className="
        fixed top-0 left-0 right-0 z-50 h-nav
        flex items-center
        bg-light-bg/90 dark:bg-dark-bg/90
        backdrop-blur-md
        border-b border-light-border dark:border-dark-border
        transition-colors duration-300
      ">
        <div className="container-custom flex items-center justify-between w-full">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="font-display text-[28px] leading-none"
            aria-label={BRAND.name}
          >
            <span className="text-dark-bg dark:text-white">0</span>
            <span className="text-brand-green">1</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {NAV_LINKS.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`
                    font-body text-[14px] px-3 py-1.5 rounded-md
                    transition-all duration-200
                    ${pathname === path
                      ? 'text-brand-green'
                      : 'text-dark-raised dark:text-white/60 hover:text-dark-bg dark:hover:text-white hover:bg-light-raised dark:hover:bg-dark-raised'
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle colour theme"
              className="
                w-9 h-9 rounded-full flex items-center justify-center
                bg-light-raised dark:bg-dark-raised
                border border-light-border dark:border-dark-border
                text-base transition-all duration-200
                hover:border-brand-green
              "
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* WhatsApp CTA — hidden on mobile */}
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="
                hidden md:inline-flex items-center
                bg-brand-green text-white text-[13px] font-semibold
                px-4 py-2 rounded-md
                transition-opacity duration-200 hover:opacity-85
                whitespace-nowrap
              "
            >
              WhatsApp Order
            </a>

            {/* Hamburger — visible on mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              className="
                md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]
                bg-light-raised dark:bg-dark-raised
                border border-light-border dark:border-dark-border
                rounded-md transition-all duration-200 hover:border-brand-green
              "
            >
              <span className="block w-[18px] h-[1.5px] bg-dark-bg dark:bg-white rounded" />
              <span className="block w-[18px] h-[1.5px] bg-dark-bg dark:bg-white rounded" />
              <span className="block w-[18px] h-[1.5px] bg-dark-bg dark:bg-white rounded" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ────────────────────────────────── */}
      {menuOpen && (
        <div className="
          md:hidden fixed inset-0 top-nav z-40
          bg-light-bg dark:bg-dark-bg
          flex flex-col px-6 py-8 gap-2
          overflow-y-auto
        ">
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu}
              className={`
                font-body text-lg py-3 border-b
                border-light-border dark:border-dark-border
                transition-colors duration-200
                ${pathname === path
                  ? 'text-brand-green'
                  : 'text-dark-raised dark:text-white/60 hover:text-brand-green'
                }
              `}
            >
              {label}
            </Link>
          ))}

          {/* WhatsApp CTA in mobile menu */}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="
              mt-6 bg-brand-green text-white font-semibold text-base
              px-6 py-4 rounded-md text-center
              transition-opacity duration-200 hover:opacity-85
            "
          >
            💬 Order on WhatsApp
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
