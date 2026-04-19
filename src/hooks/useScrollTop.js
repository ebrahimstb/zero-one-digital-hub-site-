/**
 * useScrollTop.js
 *
 * Scrolls the window to the top on every route change.
 * Used once in the root layout — no need to add it to individual pages.
 *
 * Usage:
 *   Place <ScrollToTop /> as a child of <BrowserRouter> in App.jsx
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
};

export default useScrollTop;
