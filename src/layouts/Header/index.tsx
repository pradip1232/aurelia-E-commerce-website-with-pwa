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
  Download,
} from 'lucide-react';
import { usePWA } from '../../pwa';
import './index.scss';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const { getItemCount, openCartDrawer } = useCartStore();
  const { wishlistProductIds } = useWishlistStore();
  const { openSearch, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const { isAuthenticated, user } = useAuthStore();
  const { isInstallable, isInstalled, promptInstall } = usePWA();

  const [activeMegaCategory, setActiveMegaCategory] = useState<string | null>(null);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = getItemCount();

  const megaProductPreview = activeMegaCategory
    ? MOCK_PRODUCTS.find((p) => p.category === activeMegaCategory) || MOCK_PRODUCTS[0]
    : null;

  return (
    <header className={`atelier-header ${isScrolled ? 'is-scrolled' : ''} ${className}`}>
      {/* 1. Announcement Bar */}
      {!announcementDismissed && (
        <div className="atelier-header__announcement">
          <div className="atelier-header__announcement-inner">
            <span className="atelier-header__announcement-text">
              COMPLIMENTARY WHITE-GLOVE AIR DELIVERY ON ORDERS ABOVE ₹999 • DISCOVER SS26 PRÊT-À-PORTER
            </span>
            <button
              type="button"
              onClick={() => setAnnouncementDismissed(true)}
              className="atelier-header__announcement-dismiss"
              aria-label="Dismiss announcement"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* 2. Main Navigation Bar */}
      <div className="atelier-header__navbar">
        <div className="atelier-header__navbar-inner">
          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="atelier-header__hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Luxury Brand Logo */}
          <Link to="/" className="atelier-header__logo" onClick={closeMobileMenu}>
            <span className="atelier-header__logo-symbol">✦</span>
            <span className="atelier-header__logo-brand">AURELIA</span>
            <span className="atelier-header__logo-atelier">ATELIER</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="atelier-header__desktop-nav" aria-label="Main Navigation">
            <ul className="atelier-header__nav-list">
              <li
                className="atelier-header__nav-item"
                onMouseEnter={() => setActiveMegaCategory('men')}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <NavLink to="/category/men" className="atelier-header__nav-link">
                  MEN <ChevronDown size={14} className="atelier-header__chevron" />
                </NavLink>
              </li>
              <li
                className="atelier-header__nav-item"
                onMouseEnter={() => setActiveMegaCategory('women')}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <NavLink to="/category/women" className="atelier-header__nav-link">
                  WOMEN <ChevronDown size={14} className="atelier-header__chevron" />
                </NavLink>
              </li>
              <li
                className="atelier-header__nav-item"
                onMouseEnter={() => setActiveMegaCategory('accessories')}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <NavLink to="/category/accessories" className="atelier-header__nav-link">
                  ACCESSORIES <ChevronDown size={14} className="atelier-header__chevron" />
                </NavLink>
              </li>
              <li
                className="atelier-header__nav-item"
                onMouseEnter={() => setActiveMegaCategory('electronics')}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <NavLink to="/category/electronics" className="atelier-header__nav-link">
                  ELECTRONICS <ChevronDown size={14} className="atelier-header__chevron" />
                </NavLink>
              </li>
              <li
                className="atelier-header__nav-item"
                onMouseEnter={() => setActiveMegaCategory('home')}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <NavLink to="/category/home" className="atelier-header__nav-link">
                  HOME & LIVING <ChevronDown size={14} className="atelier-header__chevron" />
                </NavLink>
              </li>
              <li className="atelier-header__nav-item">
                <NavLink to="/new-arrivals" className="atelier-header__nav-link is-highlight">
                  NEW ARRIVALS
                </NavLink>
              </li>
              <li className="atelier-header__nav-item">
                <NavLink to="/offers" className="atelier-header__nav-link is-sale">
                  OFFERS
                </NavLink>
              </li>
            </ul>

            {/* Mega Menu Dropdown */}
            {activeMegaCategory && (
              <div
                className="atelier-header__mega-dropdown"
                onMouseEnter={() => setActiveMegaCategory(activeMegaCategory)}
                onMouseLeave={() => setActiveMegaCategory(null)}
              >
                <div className="atelier-header__mega-inner">
                  <div className="atelier-header__mega-col">
                    <h4 className="atelier-header__mega-title">COLLECTIONS</h4>
                    <ul className="atelier-header__mega-links">
                      <li><Link to={`/category/${activeMegaCategory}?filter=new`}>Spring / Summer 2026</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}?filter=tailored`}>The Bespoke Atelier</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}?filter=essentials`}>Modern Daily Essentials</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}?filter=exclusive`}>Limited Editions & Rare Finds</Link></li>
                    </ul>
                  </div>

                  <div className="atelier-header__mega-col">
                    <h4 className="atelier-header__mega-title">CATEGORIES</h4>
                    <ul className="atelier-header__mega-links">
                      <li><Link to={`/category/${activeMegaCategory}`}>Prêt-à-Porter Clothing</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}`}>Footwear & Leather Loafers</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}`}>Fine Horology & Watches</Link></li>
                      <li><Link to={`/category/${activeMegaCategory}`}>Aromatic Scents & Botanicals</Link></li>
                    </ul>
                  </div>

                  <div className="atelier-header__mega-col">
                    <h4 className="atelier-header__mega-title">SERVICES</h4>
                    <ul className="atelier-header__mega-links">
                      <li><Link to="/about">The Art of Craftsmanship</Link></li>
                      <li><Link to="/support">Complimentary Custom Monogramming</Link></li>
                      <li><Link to="/support">Private Client Concierge</Link></li>
                      <li><Link to="/about">Sustainable Heritage</Link></li>
                    </ul>
                  </div>

                  {megaProductPreview && (
                    <div className="atelier-header__mega-preview">
                      <div className="atelier-header__preview-card">
                        <img src={megaProductPreview.images[0]} alt={megaProductPreview.name} />
                        <div className="atelier-header__preview-info">
                          <span className="atelier-header__preview-badge">FEATURED CREATION</span>
                          <h5>{megaProductPreview.name}</h5>
                          <span className="atelier-header__preview-price">₹{megaProductPreview.price.toLocaleString('en-IN')}</span>
                          <Link
                            to={`/product/${megaProductPreview.slug}`}
                            className="atelier-header__preview-action"
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

          {/* Action Icons */}
          <div className="atelier-header__actions">
            {/* Search Icon Trigger */}
            <button
              type="button"
              onClick={openSearch}
              className="atelier-header__action-icon atelier-header__search-icon-btn"
              title="Search creations"
              aria-label="Open search dialog"
            >
              <Search size={20} />
            </button>

            {/* Account Link */}
            <Link
              to={isAuthenticated ? '/account' : '/login'}
              className="atelier-header__action-icon"
              title={isAuthenticated ? `Signed in as ${user?.name}` : 'Sign in to your account'}
              aria-label="Account"
            >
              <UserIcon size={20} />
            </Link>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="atelier-header__action-icon"
              title="Saved Creations"
              aria-label="Wishlist"
            >
              <div className="atelier-header__icon-badge-wrap">
                <Heart size={20} />
                {wishlistProductIds.length > 0 && (
                  <span className="atelier-header__badge">{wishlistProductIds.length}</span>
                )}
              </div>
            </Link>

            {/* Cart Trigger */}
            <button
              type="button"
              onClick={openCartDrawer}
              className="atelier-header__action-icon atelier-header__cart-trigger"
              aria-label={`Shopping bag with ${totalCartCount} items`}
            >
              <div className="atelier-header__icon-badge-wrap">
                <ShoppingBag size={20} />
                {totalCartCount > 0 && (
                  <span className="atelier-header__badge atelier-header__badge--accent">
                    {totalCartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="atelier-header__mobile-drawer">
          <div className="atelier-header__mobile-backdrop" onClick={closeMobileMenu} />
          <div className="atelier-header__mobile-content">
            <div className="atelier-header__mobile-header">
              <span className="atelier-header__mobile-title">MENU</span>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="atelier-header__mobile-close"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="atelier-header__mobile-nav">
              <ul className="atelier-header__mobile-list">
                <li>
                  <Link to="/" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/category/men" onClick={closeMobileMenu}>Men's Collection</Link>
                </li>
                <li>
                  <Link to="/category/women" onClick={closeMobileMenu}>Women's Collection</Link>
                </li>
                <li>
                  <Link to="/category/accessories" onClick={closeMobileMenu}>Accessories & Leather</Link>
                </li>
                <li>
                  <Link to="/category/electronics" onClick={closeMobileMenu}>Horology & Electronics</Link>
                </li>
                <li>
                  <Link to="/category/home" onClick={closeMobileMenu}>Home & Living</Link>
                </li>
                <li>
                  <Link to="/new-arrivals" onClick={closeMobileMenu} className="is-gold">New Arrivals SS26</Link>
                </li>
                <li>
                  <Link to="/offers" onClick={closeMobileMenu} className="is-gold">Private Offers & Sales</Link>
                </li>
              </ul>

              <div className="atelier-header__mobile-support">
                <h6>CLIENT SERVICES</h6>
                <div className="atelier-header__mobile-sublinks">
                  <Link to="/about" onClick={closeMobileMenu}>The Atelier Heritage</Link>
                  <Link to="/contact" onClick={closeMobileMenu}>Concierge & Appointments</Link>
                  <Link to="/faq" onClick={closeMobileMenu}>Shipping & Bespoke Returns</Link>
                </div>
              </div>

              {isInstallable && !isInstalled && (
                <div className="atelier-header__mobile-install">
                  <button
                    type="button"
                    onClick={() => {
                      closeMobileMenu();
                      promptInstall();
                    }}
                    className="atelier-header__mobile-install-btn"
                  >
                    <Download size={16} />
                    <span>Install Aurelia Mobile App</span>
                  </button>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
