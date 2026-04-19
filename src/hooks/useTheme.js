/**
 * useTheme.js
 *
 * Custom hook that manages the dark/light theme.
 *
 * - Reads the user's saved preference from localStorage on first load.
 * - Falls back to the OS preference via prefers-color-scheme.
 * - Applies/removes the 'dark' class on <html> (required by Tailwind dark mode).
 * - Persists the preference to localStorage on every change.
 *
 * Usage:
 *   const { theme, toggleTheme, isDark } = useTheme();
 */

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'zo-theme';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // 1. Check localStorage for a saved preference
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;

    // 2. Fall back to the OS colour scheme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;

    // Tailwind dark mode reads the 'dark' class on <html>
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Persist so the preference survives page refreshes
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };
};

export default useTheme;
