/**
 * NotFound.jsx — 404 page
 * Shown when no route matches the current URL.
 */

import Button from '../components/ui/Button';

const NotFound = () => (
  <div className="pt-nav min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center">
    <div className="text-center px-6">
      <div className="font-display text-[140px] leading-none text-light-border2 dark:text-dark-border2">
        404
      </div>
      <h1 className="font-display text-display-sm text-dark-bg dark:text-white leading-none mt-2 mb-4">
        PAGE NOT FOUND
      </h1>
      <p className="text-[15px] font-light text-dark-raised dark:text-white/50 mb-8">
        This page doesn't exist. Let's get you back on track.
      </p>
      <Button href="/">← Back to Home</Button>
    </div>
  </div>
);

export default NotFound;
