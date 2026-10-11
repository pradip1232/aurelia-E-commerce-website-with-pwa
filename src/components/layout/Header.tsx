import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCartStore } from '../../stores/useCartStore';
import { useWishlistStore } from '../../stores/useWishlistStore';
import { useUIStore } from '../../stores/useUIStore';
import { useAuthStore } from '../../stores/useAuthStore';
import { MOCK_PRODUCTS } from '../../data/mockData';
import {
  Search,
  Heart,
  ShoppingBag,
  User as UserIcon,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Download
} from 'lucide-react';
import { usePWA } from '../../pwa';
import './Header.scss';

export const Header: React.FC = () => {
  const { getItemCount, openCartDrawer } = useCartStore();
  const { wishlistProductIds } = useWishlistStore();
  const { openSearch, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const { isAuthenticated, user } = useAuthStore();
  const { isInstallable, isInstalled, promptInstall } = usePWA();

  const [activeMegaCategory, setActiveMegaCategory] = useState<string | null>(null);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          setIsScrolled((prev) => {
            // Hysteresis buffer to eliminate boundary flicker on scroll
            if (!prev && scrollY > 45) return true;
            if (prev && scrollY < 20) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = getItemCount();

  // Highlight preview product for current hovered mega menu category
  const megaProductPreview = activeMegaCategory
    ? MOCK_PRODUCTS.find((p) => p.category === activeMegaCategory) || MOCK_PRODUCTS[0]
    : null;

  return (
    <div
      className={`site-header-wrapper ${isScrolled ? 'is-scrolled' : ''} ${
        !announcementDismissed ? 'has-announcement' : ''
      }`}
    >
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* 1. Top Announcement Bar */}
      {!announcementDismissed && (
        <div className="announcement-bar">
          <div className="container announcement-content">
            <span className="announcement-text">
              COMPLIMENTARY WHITE-GLOVE AIR DELIVERY ON ORDERS ABOVE ₹999 • DISCOVER SS26 PRÊT-À-PORTER
            </span>
            <button
              type="button"
              className="btn-replay-intro"
              onClick={() => window.dispatchEvent(new CustomEvent('replay-couture-intro'))}
              title="Replay Haute Couture Intro Presentation"
            >
              ✦ INTRO
            </button>
            <button
              onClick={() => setAnnouncementDismissed(true)}
              className="dismiss-announcement-btn"
              aria-label="Dismiss announcement"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* 2. Main Navigation Bar */}
      <div className="main-navbar">
        <div className="container navbar-inner">
          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-hamburger-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Luxury Brand Logo */}
          <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
            <span className="logo-symbol">✦</span>
            <span className="logo-text">AURELIA</span>
            <span className="logo-tag">ATELIER</span>
          </Link>

          {/* Desktop Primary Nav with Mega Menu triggers */}
          <nav className="desktop-navigation">
            <ul className="nav-list">
              <li
                className="nav-item has-mega"
                onMouseEnter={() => setActiveMegaCategory('men')}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <NavLink to="/category/men" className="nav-link">
                  MEN <ChevronDown size={14} className="chevron" />
                </NavLink>
              </li>
              <li
                className="nav-item has-mega"
                onMouseEnter={() => setActiveMegaCategory('women')}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <NavLink to="/category/women" className="nav-link">
                  WOMEN <ChevronDown size={14} className="chevron" />
                </NavLink>
              </li>
              <li
                className="nav-item has-mega"
                onMouseEnter={() => setActiveMegaCategory('accessories')}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <NavLink to="/category/accessories" className="nav-link">
                  ACCESSORIES <ChevronDown size={14} className="chevron" />
                </NavLink>
              </li>
              <li
                className="nav-item has-mega"
                onMouseEnter={() => setActiveMegaCategory('electronics')}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <NavLink to="/category/electronics" className="nav-link">
                  ELECTRONICS <ChevronDown size={14} className="chevron" />
                </NavLink>
              </li>
              <li
                className="nav-item has-mega"
                onMouseEnter={() => setActiveMegaCategory('home')}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <NavLink to="/category/home" className="nav-link">
                  HOME & LIVING <ChevronDown size={14} className="chevron" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new-arrivals" className="nav-link highlight">
                  NEW ARRIVALS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/offers" className="nav-link sale-tag">
                  OFFERS
                </NavLink>
              </li>
            </ul>

            {/* Desktop Mega Menu Dropdown */}
            {activeMegaCategory && (
              <div
                className="mega-menu-dropdown"
                onMouseEnter={() => setActiveMegaCategory(activeMegaCategory)}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <div className="container mega-menu-inner">
                  <div className="mega-col">
                    <h4 className="mega-heading">COLLECTIONS</h4>
                    <ul className="mega-links">
                      <li><Link to={`/category/${activeMegaCategory}?filter=new`}>Spring / Summer 2026</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}?filter=tailored`}>The Bespoke Atelier</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}?filter=essentials`}>Modern Daily Essentials</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}?filter=exclusive`}>Limited Editions & Rare Finds</Link></li>
                    </ul>
                  </div>

                  <div className="mega-col">
                    <h4 className="mega-heading">CATEGORIES</h4>
                    <ul className="mega-links">
                      <li><Link to={`/category/${activeMegaCategory}`}>Prêt-à-Porter Clothing</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}`}>Footwear & Leather Loafers</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}`}>Fine Horology & Watches</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}`}>Aromatic Scents & Botanicals</Link></li>
                    </ul>
                  </div>

                  <div className="mega-col">
                    <h4 className="mega-heading">SERVICES</h4>
                    <ul className="mega-links">
                      <li><Link to="/about">The Art of Craftsmanship</Link></li>
                      <li><Link to="/support">Complimentary Custom Monogramming</Link></li>
                      <li><Link to="/support">Private Client Concierge</Link></li>
                      <li><Link to="/about">Sustainable Heritage</Link></li>
                    </ul>
                  </div>

                  {megaProductPreview && (
                    <div className="mega-preview-col">
                      <div className="preview-card">
                        <img src={megaProductPreview.images[0]} alt={megaProductPreview.name} />
                        <div className="preview-info">
                          <span className="featured-tag">FEATURED CREATION</span>
                          <h5>{megaProductPreview.name}</h5>
                          <span className="price">₹{megaProductPreview.price.toLocaleString('en-IN')}</span>
                          <Link
                            to={`/product/${megaProductPreview.slug}`}
                            className="explore-btn"
                            onClick={() => setActiveMegaCategory(null)}
                          >
                            <span>DISCOVER PIECE</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </nav>

          {/* Action Icons (Search, Account, Wishlist, Cart) */}
          <div className="nav-actions">
            {/* Search Trigger with Download Option */}
            <div className="search-bar-pill-wrapper">
              <button
                onClick={openSearch}
                className="action-icon-btn search-trigger"
                aria-label="Open search dialog"
              >
                <Search size={18} />
                <span className="search-hint">Search creations...</span>
              </button>
              {isInstallable && !isInstalled && (
                <button
                  type="button"
                  onClick={promptInstall}
                  className="search-bar-download-pill"
                  title="Download & Install Aurelia App"
                  aria-label="Download Aurelia App"
                >
                  <Download size={13} />
                  <span>Download App</span>
                </button>
              )}
            </div>

            {/* Account Link */}
            <Link
              to={isAuthenticated ? '/account' : '/login'}
              className="action-icon-btn account-btn"
              title={isAuthenticated ? `Signed in as ${user?.name}` : 'Sign in to your account'}
            >
              <UserIcon size={20} />
              {isAuthenticated && <span className="auth-indicator" />}
            </Link>

            {/* PWA Install Button */}
            {isInstallable && !isInstalled && (
              <button
                onClick={promptInstall}
                className="action-icon-btn install-btn"
                title="Install Aurelia App"
                aria-label="Install Aurelia App"
              >
                <Download size={20} />
              </button>
            )}

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="action-icon-btn wishlist-icon-btn"
              title="View your saved creations"
            >
              <Heart size={20} />
              {wishlistProductIds.length > 0 && (
                <span className="count-pill">{wishlistProductIds.length}</span>
              )}
            </Link>

            {/* Shopping Bag Drawer Trigger */}
            <button
              onClick={openCartDrawer}
              className="action-icon-btn cart-icon-btn"
              aria-label="Open shopping bag"
            >
              <ShoppingBag size={20} />
              {totalCartCount > 0 && <span className="count-pill">{totalCartCount}</span>}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="menu-title">MENU</span>
              <button onClick={closeMobileMenu} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <div className="mobile-menu-links">
              <NavLink to="/category/men" onClick={closeMobileMenu}>
                MEN
              </NavLink>
              <NavLink to="/category/women" onClick={closeMobileMenu}>
                WOMEN
              </NavLink>
              <NavLink to="/category/accessories" onClick={closeMobileMenu}>
                ACCESSORIES
              </NavLink>
              <NavLink to="/category/electronics" onClick={closeMobileMenu}>
                ELECTRONICS
              </NavLink>
              <NavLink to="/category/home" onClick={closeMobileMenu}>
                HOME & LIVING
              </NavLink>
              <NavLink to="/category/beauty" onClick={closeMobileMenu}>
                BEAUTY & BOTANICALS
              </NavLink>
              <NavLink to="/new-arrivals" onClick={closeMobileMenu} className="highlight">
                NEW ARRIVALS
              </NavLink>
              <NavLink to="/offers" onClick={closeMobileMenu} className="sale-tag">
                EXCLUSIVE OFFERS
              </NavLink>

              <hr className="menu-divider" />

              <NavLink to="/wishlist" onClick={closeMobileMenu}>
                SAVED CREATIONS ({wishlistProductIds.length})
              </NavLink>
              <NavLink to={isAuthenticated ? '/account' : '/login'} onClick={closeMobileMenu}>
                {isAuthenticated ? 'MY PRIVATE ACCOUNT' : 'LOGIN / REGISTER'}
              </NavLink>
              <NavLink to="/about" onClick={closeMobileMenu}>
                ATELIER HERITAGE
              </NavLink>
              <NavLink to="/support" onClick={closeMobileMenu}>
                CONCIERGE & SUPPORT
              </NavLink>

              {isInstallable && !isInstalled && (
                <button
                  type="button"
                  className="mobile-install-btn"
                  onClick={() => {
                    closeMobileMenu();
                    promptInstall();
                  }}
                >
                  <Download size={16} />
                  <span>INSTALL AURELIA APP</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
    </div>
  );
};

