/**
 * App.jsx — Application root
 *
 * Responsibilities:
 *   1. Owns the theme state via useTheme() and passes it down to RootLayout
 *   2. Defines all client-side routes via React Router v6
 *   3. Wraps everything in BrowserRouter
 *
 * Route structure:
 *   /           → Home
 *   /shop       → Shop
 *   /about      → About
 *   /blog       → Blog
 *   /faq        → FAQ
 *   /contact    → Contact
 *   /terms      → Terms & Conditions
 *   /rebrand    → Rebrand story
 *   *           → 404 NotFound
 *
 * To add a new page:
 *   1. Create src/pages/MyPage.jsx
 *   2. Import it here
 *   3. Add a <Route> below
 *   4. Optionally add it to NAV_LINKS in src/utils/constants.js
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import RootLayout from './components/layout/RootLayout';

// Pages
import Home     from './pages/Home';
import Shop     from './pages/Shop';
import About    from './pages/About';
import Blog     from './pages/Blog';
import FAQ      from './pages/FAQ';
import Contact  from './pages/Contact';
import Terms    from './pages/Terms';
import Rebrand  from './pages/Rebrand';
import NotFound from './pages/NotFound';

const App = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <BrowserRouter>
      <Routes>
        {/*
          RootLayout is the shell (Navbar + Footer + scroll-to-top).
          All page routes are nested inside it via <Outlet />.
        */}
        <Route
          element={<RootLayout toggleTheme={toggleTheme} isDark={isDark} />}
        >
          <Route index            element={<Home />}     />
          <Route path="shop"      element={<Shop />}     />
          <Route path="about"     element={<About />}    />
          <Route path="blog"      element={<Blog />}     />
          <Route path="faq"       element={<FAQ />}      />
          <Route path="contact"   element={<Contact />}  />
          <Route path="terms"     element={<Terms />}    />
          <Route path="rebrand"   element={<Rebrand />}  />
          <Route path="*"         element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
