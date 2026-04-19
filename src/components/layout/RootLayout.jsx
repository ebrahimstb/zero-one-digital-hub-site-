/**
 * RootLayout.jsx
 *
 * Wraps every page with:
 *   - Navbar (top)
 *   - <main> content area
 *   - Footer (bottom)
 *   - ScrollToTop behaviour on route change
 *
 * This is the single place where layout chrome is composed.
 * Adding a new layout element (e.g. a cookie banner) happens here only.
 */

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useScrollTop from '../../hooks/useScrollTop';

const RootLayout = ({ toggleTheme, isDark }) => {
  // Scroll window to top whenever the route changes
  useScrollTop();

  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />

      {/* Outlet renders whichever page component matches the current URL */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
