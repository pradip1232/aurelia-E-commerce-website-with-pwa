import React from 'react';
import { usePWA } from './usePWA';
import { Download, X } from 'lucide-react';
import './PWA.scss';

export const PWAInstallPrompt: React.FC = () => {
  const { isInstallable, isInstalled, promptInstall, dismissInstallPrompt } = usePWA();

  if (!isInstallable || isInstalled) {
    return null;
  }

  return (
    <div className="pwa-install-banner-wrap" role="region" aria-label="Install Aurelia Atelier App">
      <div className="pwa-install-card">
        <div className="card-top-row">
          <div className="app-icon-preview">
            <img 
              src="/icons/icon-192.png" 
              alt="Aurelia Icon" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }} 
            />
            <span className="fallback-star">✦</span>
          </div>

          <div className="app-info">
            <span className="app-eyebrow">HAUTE HABILLEMENT</span>
            <h4 className="app-title">Install Aurelia App</h4>
            <p className="app-desc">Experience standalone full-screen browsing &amp; offline luxury access.</p>
          </div>

          <button
            type="button"
            className="btn-close-prompt"
            onClick={() => dismissInstallPrompt(7)}
            aria-label="Dismiss installation prompt"
          >
            <X size={15} />
          </button>
        </div>

        <div className="card-actions-row">
          <button
            type="button"
            className="btn-install-cta"
            onClick={promptInstall}
          >
            <Download size={15} />
            <span>Install Application</span>
          </button>

          <button
            type="button"
            className="btn-later"
            onClick={() => dismissInstallPrompt(3)}
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};
