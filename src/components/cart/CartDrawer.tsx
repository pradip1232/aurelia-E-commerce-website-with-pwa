import React, { useState } from 'react';
import { useCartStore } from '../../stores/useCartStore';
import { useUIStore } from '../../stores/useUIStore';
import { AVAILABLE_COUPONS } from '../../data/mockData';
import { X, Trash2, Plus, Minus, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './CartDrawer.scss';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartDrawerOpen,
    closeCartDrawer,
    removeItem,
    updateQuantity,
    getSubtotal,
    getTotal,
    couponCode,
    couponDiscount,
    applyCoupon,
    removeCoupon
  } = useCartStore();

  const { showToast } = useUIStore();
  const navigate = useNavigate();

  const [inputCoupon, setInputCoupon] = useState('');
  const [showCouponsList, setShowCouponsList] = useState(false);

  if (!isCartDrawerOpen) return null;

  const subtotal = getSubtotal();
  const total = getTotal();
  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (code: string) => {
    const found = AVAILABLE_COUPONS.find((c) => c.code.toUpperCase() === code.toUpperCase());
    if (!found) {
      showToast('Invalid promotion code', 'error');
      return;
    }
    if (subtotal < found.minOrderValue) {
      showToast(`Minimum order of ₹${found.minOrderValue} required for ${found.code}`, 'warning');
      return;
    }

    const discountAmount = found.freeShipping
      ? 150
      : Math.min(found.maxDiscount ?? 99999, Math.round((subtotal * found.discountPercent) / 100));

    applyCoupon(found.code, discountAmount);
    showToast(`Coupon ${found.code} applied! Saved ₹${discountAmount}`);
    setInputCoupon('');
    setShowCouponsList(false);
  };

  const handleCheckout = () => {
    closeCartDrawer();
    navigate('/checkout');
  };

  return (
    <div className="drawer-backdrop" onClick={closeCartDrawer}>
      <aside className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="title-count">
            <h3>SHOPPING BAG</h3>
            <span className="count-badge">({items.length})</span>
          </div>
          <button className="close-btn" onClick={closeCartDrawer} aria-label="Close bag">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="shipping-progress-banner">
          {remainingForFreeShipping > 0 ? (
            <p>
              Add <strong>₹{remainingForFreeShipping.toLocaleString('en-IN')}</strong> more for{' '}
              <strong>FREE WHITE-GLOVE DELIVERY</strong>
            </p>
          ) : (
            <p className="free-unlocked">
              🎉 <strong>YOU HAVE UNLOCKED COMPLIMENTARY EXPRESS DELIVERY</strong>
            </p>
          )}
          <div className="progress-bar-bg">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Items List */}
        <div className="drawer-items-list">
          {items.length === 0 ? (
            <div className="empty-cart-view">
              <div className="empty-circle">
                <Tag size={36} />
              </div>
              <h4>Your bag is currently empty</h4>
              <p>Explore our curated collections of luxury craftsmanship and essentials.</p>
              <Link to="/shop" onClick={closeCartDrawer} className="btn-explore">
                DISCOVER COLLECTIONS
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item-row">
                <div className="item-thumbnail">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <span className="item-brand">{item.brand}</span>
                  <h4 className="item-title">{item.name}</h4>
                  <div className="item-variants-spec">
                    <span>Size: {item.size}</span>
                    <span className="divider">•</span>
                    <span>Color: {item.color}</span>
                  </div>

                  <div className="qty-price-row">
                    <div className="qty-stepper">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <div className="item-prices">
                      <span className="price-val">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn-trash"
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Summary */}
        {items.length > 0 && (
          <div className="drawer-footer">
            {/* Promo Code Accordion */}
            <div className="promo-code-section">
              {couponCode ? (
                <div className="applied-coupon-pill">
                  <div className="code-info">
                    <Tag size={14} />
                    <span>
                      Code <strong>{couponCode}</strong> applied (Saved ₹{couponDiscount})
                    </span>
                  </div>
                  <button onClick={removeCoupon} className="btn-remove-code">
                    Remove
                  </button>
                </div>
              ) : (
                <div className="coupon-input-box">
                  <input
                    type="text"
                    placeholder="Enter privilege or gift code"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                  />
                  <button onClick={() => handleApplyCoupon(inputCoupon)}>APPLY</button>
                </div>
              )}

              <button
                className="toggle-available-coupons"
                onClick={() => setShowCouponsList(!showCouponsList)}
              >
                {showCouponsList ? 'Hide Available Coupons' : 'View Available Coupons (% OFF)'}
              </button>

              {showCouponsList && (
                <div className="available-coupons-dropdown">
                  {AVAILABLE_COUPONS.map((cpn) => (
                    <div key={cpn.code} className="coupon-card-mini">
                      <div className="c-details">
                        <strong>{cpn.code}</strong>
                        <p>{cpn.description}</p>
                      </div>
                      <button onClick={() => handleApplyCoupon(cpn.code)}>APPLY</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="summary-breakdown">
              <div className="row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {couponDiscount > 0 && (
                <div className="row discount-row">
                  <span>Privilege Discount</span>
                  <span>-₹{couponDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="row">
                <span>Estimated Shipping</span>
                <span>{subtotal >= 999 ? 'COMPLIMENTARY' : '₹150'}</span>
              </div>
              <div className="row total-row">
                <span>Estimated Total</span>
                <span className="total-amount">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="drawer-cta-group">
              <button onClick={handleCheckout} className="btn-checkout">
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/cart" onClick={closeCartDrawer} className="btn-view-cart">
                VIEW FULL CART & DETAILS
              </Link>
            </div>

            <div className="trust-footnote">
              <ShieldCheck size={14} />
              <span>Complimentary insured shipping & easy 14-day returns</span>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

