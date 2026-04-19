/**
 * index.js — Application entry point
 *
 * Mounts the React app to the #root div in public/index.html.
 * Global CSS is imported here so it loads before any component renders.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
