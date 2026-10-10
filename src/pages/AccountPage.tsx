import React, { useState } from 'react';
import { useAuthStore } from '../stores/useAuthStore';
import { useOrderStore } from '../stores/useOrderStore';
import { useWishlistStore } from '../stores/useWishlistStore';
import { useUIStore } from '../stores/useUIStore';
import {
  User as UserIcon,
  Package,
  Heart,
  MapPin,
  Tag,
  LogOut,
  Edit2,
  Trash2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './AccountPage.scss';

export const AccountPage: React.FC = () => {
  const { user, addresses, deleteAddress, updateProfile, logout, isAuthenticated } = useAuthStore();
  const { orders } = useOrderStore();
  const { wishlistProductIds } = useWishlistStore();
  const { showToast } = useUIStore();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'overview' | 'profile' | 'addresses' | 'coupons'>('overview');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileName, setProfileName] = useState(user?.name || '');
  const [profilePhone, setProfilePhone] = useState(user?.phone || '');

  if (!isAuthenticated || !user) {
    return (
      <div className="container auth-guard-wrap">
        <h2>PLEASE SIGN IN TO YOUR ATELIER ACCOUNT</h2>
        <p>Access your bespoke orders, saved pieces, and client privileges.</p>
        <Link to="/login" className="btn-login">LOGIN OR REGISTER</Link>
      </div>
    );
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name: profileName, phone: profilePhone });
    setIsEditingProfile(false);
    showToast('Atelier profile updated successfully');
  };

  const handleLogout = () => {
    logout();
    showToast('Signed out of Aurelia Atelier');
    navigate('/');
  };

  return (
    <div className="account-page">
      <div className="container">
        <div className="account-header-bar">
          <div className="user-intro">
            <div className="avatar-circle">
              {user.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div className="user-meta">
              <h1>SALUTATIONS, {user.name.toUpperCase()}</h1>
              <span className="privilege-status">✦ PRIVATE CLIENT PRIVILEGE MEMBER • {user.rewardPoints} MERIT POINTS</span>
            </div>
          </div>
          <button onClick={handleLogout} className="btn-logout-header">
            <LogOut size={16} /> Sign Out
          </button>
        </div>

        <div className="account-layout-grid">
          {/* Sidebar Nav */}
          <aside className="account-nav-sidebar">
            <button
              className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <UserIcon size={18} />
              <span>Overview & Portfolio</span>
            </button>
            <Link to="/orders" className="nav-item">
              <Package size={18} />
              <span>My Orders ({orders.length})</span>
            </Link>
            <Link to="/wishlist" className="nav-item">
              <Heart size={18} />
              <span>Saved Wishlist ({wishlistProductIds.length})</span>
            </Link>
            <button
              className={`nav-item ${activeTab === 'addresses' ? 'active' : ''}`}
              onClick={() => setActiveTab('addresses')}
            >
              <MapPin size={18} />
              <span>Saved Addresses ({addresses.length})</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'coupons' ? 'active' : ''}`}
              onClick={() => setActiveTab('coupons')}
            >
              <Tag size={18} />
              <span>Privilege Vouchers</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <Edit2 size={18} />
              <span>Profile Settings</span>
            </button>
          </aside>

          {/* Main Display Pane */}
          <main className="account-main-content">
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="overview-pane">
                {/* Stats cards */}
                <div className="overview-stats-cards">
                  <div className="stat-card">
                    <span className="label">ACTIVE PURCHASES</span>
                    <strong>{orders.length}</strong>
                    <Link to="/orders" className="link">View Orders →</Link>
                  </div>
                  <div className="stat-card">
                    <span className="label">DESIRED PIECES</span>
                    <strong>{wishlistProductIds.length}</strong>
                    <Link to="/wishlist" className="link">View Wishlist →</Link>
                  </div>
                  <div className="stat-card">
                    <span className="label">ATELIER MERIT REWARD</span>
                    <strong>{user.rewardPoints} PTS</strong>
                    <span className="note">Tier: Obsidian Black</span>
                  </div>
                </div>

                {/* Recent Order Preview */}
                {orders.length > 0 && (
                  <div className="recent-order-preview-box">
                    <div className="box-header">
                      <h3>MOST RECENT ACQUISITION</h3>
                      <Link to="/orders" className="view-link">View All Purchases →</Link>
                    </div>
                    <div className="recent-order-card">
                      <div className="info">
                        <strong>Order {orders[0].orderNumber}</strong>
                        <span>Acquired on {orders[0].date} • Status: {orders[0].orderStatus}</span>
                      </div>
                      <span className="price">₹{orders[0].total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ADDRESSES TAB */}
            {activeTab === 'addresses' && (
              <div className="addresses-pane">
                <div className="pane-header">
                  <h3>SAVED DESTINATIONS</h3>
                </div>
                <div className="addresses-cards-grid">
                  {addresses.map((a) => (
                    <div key={a.id} className="address-item-card">
                      <div className="top">
                        <strong>{a.name}</strong>
                        <span className="type">{a.addressType}</span>
                        {a.isDefault && <span className="default-pill">DEFAULT</span>}
                      </div>
                      <p>{a.address}, {a.locality}</p>
                      <p>{a.city}, {a.state} - {a.pincode}</p>
                      <p className="phone">Phone: {a.phone}</p>
                      <div className="card-actions">
                        <button onClick={() => deleteAddress(a.id)} className="btn-delete">
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* COUPONS TAB */}
            {activeTab === 'coupons' && (
              <div className="coupons-pane">
                <div className="pane-header">
                  <h3>ATELIER PRIVILEGE VOUCHERS</h3>
                  <p>Apply these codes during checkout for dedicated luxury savings.</p>
                </div>
                <div className="coupons-cards-list">
                  <div className="privilege-coupon-card">
                    <div className="left-code">
                      <strong>AURELIA10</strong>
                      <span>10% PRIVILEGE OFF</span>
                    </div>
                    <div className="right-desc">
                      <p>Valid on all luxury apparel and prêt-à-porter collections above ₹2,000.</p>
                      <span className="expiry">Never Expires • Certified Member Voucher</span>
                    </div>
                  </div>
                  <div className="privilege-coupon-card">
                    <div className="left-code">
                      <strong>LUXURY20</strong>
                      <span>20% BESPOKE OFF</span>
                    </div>
                    <div className="right-desc">
                      <p>Exclusive 20% privilege on orders above ₹25,000.</p>
                      <span className="expiry">Seasonal Spring 2026 Invitation</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <div className="profile-pane">
                <div className="pane-header">
                  <h3>PERSONAL DOSSIER</h3>
                </div>
                {isEditingProfile ? (
                  <form onSubmit={handleSaveProfile} className="edit-profile-form">
                    <div className="field">
                      <label>Full Legal Name</label>
                      <input
                        type="text"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="field">
                      <label>Primary Phone</label>
                      <input
                        type="tel"
                        value={profilePhone}
                        onChange={(e) => setProfilePhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="btn-group">
                      <button type="submit" className="btn-save">Save Changes</button>
                      <button type="button" onClick={() => setIsEditingProfile(false)} className="btn-cancel">Cancel</button>
                    </div>
                  </form>
                ) : (
                  <div className="profile-info-table">
                    <div className="row">
                      <span>Full Name</span>
                      <strong>{user.name}</strong>
                    </div>
                    <div className="row">
                      <span>Email Address</span>
                      <strong>{user.email}</strong>
                    </div>
                    <div className="row">
                      <span>Contact Telephone</span>
                      <strong>{user.phone}</strong>
                    </div>
                    <div className="row">
                      <span>Member Category</span>
                      <strong>Obsidian Private Salon</strong>
                    </div>
                    <button onClick={() => setIsEditingProfile(true)} className="btn-edit-profile">
                      <Edit2 size={14} /> Edit Dossier
                    </button>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
