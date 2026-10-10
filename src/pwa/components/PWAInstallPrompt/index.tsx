import React, { useState } from 'react';
import { usePWA } from '../../usePWA';
import { Download, X, Sparkles, Share, Smartphone, Zap } from 'lucide-react';
import './index.scss';

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
              className="btn-dismiss"
              onClick={dismissInstallPrompt}
              aria-label="Dismiss installation prompt"
            >
              <X size={15} />
            </button>
          </div>

          <div className="card-perks">
            <span className="perk-pill">⚡ Instant Launch</span>
            <span className="perk-pill">🔒 Private Security</span>
            <span className="perk-pill">💎 Member Perks</span>
          </div>

          <div className="card-action-row">
            <button
              type="button"
              className="btn-install-secondary"
              onClick={dismissInstallPrompt}
            >
              Not Now
            </button>
            <button
              type="button"
              className="btn-install-primary"
              onClick={promptInstall}
            >
              <Download size={14} />
              <span>Install Desktop App</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. MOBILE VIEW (Native App Store Style Bottom Sheet / Sticky Dock)
          ========================================================================= */}
      <div className={`pwa-mobile-sheet ${isMinimized ? 'is-minimized' : ''}`}>
        {/* Minimized Quick Pill */}
        {isMinimized ? (
          <div className="pwa-mobile-minimized-pill" onClick={() => setIsMinimized(false)}>
            <div className="pill-brand">
              <span className="gold-sparkle">✦</span>
              <span>Aurelia Luxury App</span>
            </div>
            <button 
              type="button" 
              className="btn-pill-install"
              onClick={(e) => {
                e.stopPropagation();
                promptInstall();
              }}
            >
              Install
            </button>
            <button 
              type="button" 
              className="btn-pill-close"
              onClick={(e) => {
                e.stopPropagation();
                dismissInstallPrompt();
              }}
              aria-label="Close"
            >
              <X size={13} />
            </button>
          </div>
        ) : (
          /* Full Mobile Card (Native App Store Style) */
          <div className="pwa-mobile-full-card">
            <div className="mobile-sheet-handle" onClick={() => setIsMinimized(true)}>
              <span className="handle-bar" />
            </div>

            <div className="mobile-card-header">
              <div className="mobile-app-badge">
                <img 
                  src="/icons/icon-192.png" 
                  alt="Aurelia Icon" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }} 
                />
                <span className="mobile-fallback-star">✦</span>
              </div>

              <div className="mobile-app-meta">
                <div className="meta-top">
                  <span className="atelier-tag">OFFICIAL ATELIER APP</span>
                  <span className="rating-tag">★ 4.9</span>
                </div>
                <h4 className="mobile-app-title">AURELIA ATELIER</h4>
                <p className="mobile-app-sub">Luxury Prêt-à-Porter &amp; High Horology</p>
              </div>

              <button
                type="button"
                className="btn-mobile-close"
                onClick={dismissInstallPrompt}
                aria-label="Dismiss app install banner"
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile Feature Badges */}
            <div className="mobile-features-strip">
              <div className="feature-item">
                <Zap size={13} className="feature-icon" />
                <span>Instant 0.2s Launch</span>
              </div>
              <div className="feature-item">
                <Smartphone size={13} className="feature-icon" />
                <span>Full Screen Luxe</span>
              </div>
              <div className="feature-item">
                <Sparkles size={13} className="feature-icon" />
                <span>Offline Access</span>
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="mobile-actions">
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
              
              <div className="mobile-actions-secondary">
                <button
                  type="button"
                  className="btn-mobile-minimize"
                  onClick={() => setIsMinimized(true)}
                >
                  Hide for now
                </button>
                <span className="dot">•</span>
                <button
                  type="button"
                  className="btn-mobile-never"
                  onClick={dismissInstallPrompt}
                >
                  Don't ask again
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
