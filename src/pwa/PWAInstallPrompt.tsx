import React, { useState } from 'react';
import { usePWA } from './usePWA';
import { Download, X, Sparkles, Share, Smartphone, Zap } from 'lucide-react';
import './PWA.scss';

export const PWAInstallPrompt: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, promptInstall, dismissInstallPrompt } = usePWA();
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isInstallable || isInstalled) {
    return null;
  }

  return (
    <div className="pwa-install-container" role="region" aria-label="Install Aurelia Atelier App">
      {/* =========================================================================
          1. DESKTOP VIEW (Floating luxury prompt card in bottom-right corner)
          ========================================================================= */}
      <div className="pwa-desktop-prompt">
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
              <span>{isIOS ? 'Add to Home Screen' : 'Install Application'}</span>
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

      {/* =========================================================================
          2. MOBILE VIEW (Native mobile app banner / bottom sheet tailored for phones)
          ========================================================================= */}
      <div className={`pwa-mobile-prompt ${isMinimized ? 'minimized' : ''}`}>
        {isMinimized ? (
          /* Minimized Compact Mobile Bar */
          <div className="mobile-minimized-bar">
            <div className="mini-info" onClick={() => setIsMinimized(false)}>
              <span className="mini-star">✦</span>
              <span className="mini-text">Install Aurelia App</span>
            </div>
            <div className="mini-actions">
              <button
                type="button"
                className="btn-mini-install"
                onClick={promptInstall}
              >
                <Download size={13} />
                <span>Install</span>
              </button>
              <button
                type="button"
                className="btn-mini-close"
                onClick={() => dismissInstallPrompt(7)}
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        ) : (
          /* Full Mobile Native App Sheet */
          <div className="mobile-sheet-card">
            <div 
              className="sheet-handle-pill" 
              onClick={() => setIsMinimized(true)}
              title="Minimize prompt"
            />

            <div className="mobile-sheet-header">
              <div className="mobile-app-badge">
                <img 
                  src="/icons/icon-192.png" 
                  alt="Aurelia Icon" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }} 
                />
                <span className="fallback-symbol">✦</span>
              </div>

              <div className="mobile-title-block">
                <div className="title-rating-row">
                  <h4 className="mobile-app-name">AURELIA ATELIER</h4>
                  <span className="rating-pill">★ 4.9</span>
                </div>
                <span className="mobile-app-category">Official Prêt-à-Porter App</span>
                <span className="mobile-app-spec">Fast • &lt; 2 MB • Offline Mode</span>
              </div>

              <button
                type="button"
                className="btn-mobile-close"
                onClick={() => dismissInstallPrompt(7)}
                aria-label="Dismiss app prompt"
              >
                <X size={16} />
              </button>
            </div>

            {/* Mobile Benefit Highlights */}
            <div className="mobile-benefits-strip">
              <div className="benefit-item">
                <Zap size={12} className="benefit-icon" />
                <span>Instant 0.2s Launch</span>
              </div>
              <div className="benefit-item">
                <Sparkles size={12} className="benefit-icon" />
                <span>Offline Collections</span>
              </div>
              <div className="benefit-item">
                <Smartphone size={12} className="benefit-icon" />
                <span>Full-Screen Luxe</span>
              </div>
            </div>

            {/* Mobile Action Controls */}
            <div className="mobile-actions-block">
              <button
                type="button"
                className="btn-mobile-install-cta"
                onClick={promptInstall}
              >
                {isIOS ? (
                  <>
                    <Share size={16} />
                    <span>ADD TO HOME SCREEN</span>
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    <span>INSTALL AURELIA APP</span>
                  </>
                )}
              </button>

              <button
                type="button"
                className="btn-mobile-dismiss"
                onClick={() => dismissInstallPrompt(3)}
              >
                Continue in browser
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
