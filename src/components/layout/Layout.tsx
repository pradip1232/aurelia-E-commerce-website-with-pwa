import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';
import { SearchOverlay } from '../modals/SearchOverlay';
import { QuickViewModal } from '../modals/QuickViewModal';
import { CartDrawer } from '../cart/CartDrawer';
import { ToastContainer } from '../common/ToastContainer';
import { CouturePreloader } from '../common/CouturePreloader';
import { PWAInstallPrompt, IOSInstallGuide, NetworkStatusBar, PWAUpdateToast } from '../../pwa';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="app-root-layout">
      {/* Animated Couture Haute Runway Preloader */}
      <CouturePreloader />

      <Header />
      <main className="main-content-flow">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />

      {/* Global Interactive Overlays */}
      <SearchOverlay />
      <QuickViewModal />
      <CartDrawer />
      <ToastContainer />

      {/* Progressive Web App Features */}
      <NetworkStatusBar />
      <PWAInstallPrompt />
      <IOSInstallGuide />
      <PWAUpdateToast />
    </div>
  );
};
