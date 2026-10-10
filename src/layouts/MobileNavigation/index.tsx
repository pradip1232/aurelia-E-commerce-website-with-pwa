import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWishlistStore } from '../../stores/useWishlistStore';
import { useUIStore } from '../../stores/useUIStore';
import { useAuthStore } from '../../stores/useAuthStore';
import { Home, Compass, Search, Heart, User } from 'lucide-react';
import './index.scss';

export interface MobileNavigationProps {
  className?: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ className = '' }) => {
  const { wishlistProductIds } = useWishlistStore();
  const { openSearch } = useUIStore();
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className={`atelier-mobile-nav ${className}`} aria-label="Mobile Navigation">
      <NavLink to="/" className={({ isActive }) => `atelier-mobile-nav__item ${isActive ? 'is-active' : ''}`}>
        <Home size={20} className="atelier-mobile-nav__icon" />
        <span className="atelier-mobile-nav__label">Home</span>
      </NavLink>

      <NavLink to="/shop" className={({ isActive }) => `atelier-mobile-nav__item ${isActive ? 'is-active' : ''}`}>
        <Compass size={20} className="atelier-mobile-nav__icon" />
        <span className="atelier-mobile-nav__label">Explore</span>
      </NavLink>

      <button
        type="button"
        onClick={openSearch}
        className="atelier-mobile-nav__item atelier-mobile-nav__item--btn"
        aria-label="Search Catalog"
      >
        <Search size={20} className="atelier-mobile-nav__icon" />
        <span className="atelier-mobile-nav__label">Search</span>
      </button>

      <NavLink to="/wishlist" className={({ isActive }) => `atelier-mobile-nav__item ${isActive ? 'is-active' : ''}`}>
        <div className="atelier-mobile-nav__icon-wrapper">
          <Heart size={20} className="atelier-mobile-nav__icon" />
          {wishlistProductIds.length > 0 && (
            <span className="atelier-mobile-nav__badge">{wishlistProductIds.length}</span>
          )}
        </div>
        <span className="atelier-mobile-nav__label">Wishlist</span>
      </NavLink>

      <NavLink
        to={isAuthenticated ? '/account' : '/login'}
        className={({ isActive }) => `atelier-mobile-nav__item ${isActive ? 'is-active' : ''}`}
      >
        <User size={20} className="atelier-mobile-nav__icon" />
        <span className="atelier-mobile-nav__label">Account</span>
      </NavLink>
    </nav>
  );
};

export default MobileNavigation;
