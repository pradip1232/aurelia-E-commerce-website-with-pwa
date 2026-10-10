import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MobileNavigation } from '../MobileNavigation';
import { ScrollToTop } from '../ScrollToTop';
import { SearchOverlay } from '../../components/modals/SearchOverlay';
import { QuickViewModal } from '../../components/modals/QuickViewModal';
import { CartDrawer } from '../../components/cart/CartDrawer';
import { ToastContainer } from '../../components/common/ToastContainer';
import { PWAInstallPrompt, IOSInstallGuide, NetworkStatusBar, PWAUpdateToast } from '../../pwa';
import './index.scss';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="atelier-main-layout">
      <Header />
      <main className="atelier-main-layout__content" id="main-content">
        {children || <Outlet />}
      </main>
      <Footer />
      <MobileNavigation />
      <ScrollToTop />

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

export default MainLayout;
