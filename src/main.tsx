import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Register Progressive Web App Service Worker
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  const initSW = () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch((err) => {
      console.warn('[PWA] Service Worker registration failed:', err);
    });
  };

  if (document.readyState === 'complete') {
    initSW();
  } else {
    window.addEventListener('load', initSW);
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

