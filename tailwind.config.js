/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable class-based dark mode (toggled via 'dark' class on <html>)
  darkMode: 'class',

  // Tell Tailwind which files to scan for class names
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      // ── Brand colors ─────────────────────────────────────────────
      colors: {
        brand: {
          green:     '#1FAD5C', // primary accent — always emerald
          'green-10': 'rgba(31,173,92,0.10)',
          'green-20': 'rgba(31,173,92,0.20)',
        },
        // Dark theme surfaces
        dark: {
          bg:      '#060606',
          surface: '#0d0d0d',
          raised:  '#141414',
          border:  '#1e1e1e',
          border2: '#2a2a2a',
        },
        // Light theme surfaces
        light: {
          bg:      '#f5f5f3',
          surface: '#ffffff',
          raised:  '#eeeeec',
          border:  '#e0e0de',
          border2: '#ccccca',
        },
      },

      // ── Typography ───────────────────────────────────────────────
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],   // headlines
        body:    ['Outfit', 'sans-serif'],         // body copy
        mono:    ['Space Mono', 'monospace'],      // labels, tags, code
      },

      // ── Fluid font sizes ─────────────────────────────────────────
      fontSize: {
        'display-xl': 'clamp(56px, 8vw, 96px)',
        'display-lg': 'clamp(44px, 6vw, 72px)',
        'display-md': 'clamp(36px, 5vw, 56px)',
        'display-sm': 'clamp(28px, 4vw, 40px)',
      },

      // ── Spacing extras ───────────────────────────────────────────
      spacing: {
        'nav': '64px', // height of fixed navbar — used for page padding-top
      },

      // ── Animations ───────────────────────────────────────────────
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.5s ease both',
        'pulse-dot': 'pulse 2s ease infinite',
      },
    },
  },

  plugins: [],
};
