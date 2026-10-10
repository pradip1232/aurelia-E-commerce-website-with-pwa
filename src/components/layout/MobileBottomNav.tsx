import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWishlistStore } from '../../stores/useWishlistStore';
import { useUIStore } from '../../stores/useUIStore';
import { useAuthStore } from '../../stores/useAuthStore';
import { Home, Compass, Search, Heart, User } from 'lucide-react';
import './MobileBottomNav.scss';

export const MobileBottomNav: React.FC = () => {
  const { wishlistProductIds } = useWishlistStore();
  const { openSearch } = useUIStore();
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      <NavLink to="/" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
        <Home size={20} />
        <span>Home</span>
      </NavLink>

      <NavLink to="/shop" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
        <Compass size={20} />
        <span>Explore</span>
      </NavLink>

      <button onClick={openSearch} className="nav-btn" aria-label="Search">
        <Search size={20} />
        <span>Search</span>
      </button>

      <NavLink to="/wishlist" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
        <div className="icon-wrapper">
          <Heart size={20} />
          {wishlistProductIds.length > 0 && (
            <span className="badge">{wishlistProductIds.length}</span>
          )}
        </div>
        <span>Wishlist</span>
      </NavLink>

      <NavLink
        to={isAuthenticated ? '/account' : '/login'}
        className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
      >
        <User size={20} />
        <span>Account</span>
      </NavLink>
    </nav>
  );
};

