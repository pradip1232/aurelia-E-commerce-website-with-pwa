import React from 'react';
import { useCartStore } from '../../../stores/useCartStore';
import { useUIStore } from '../../../stores/useUIStore';
import { X, Tag, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { CartItem } from '../CartItem';
import { PromoCodeForm } from '../PromoCodeForm';
import './index.scss';

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
    removeCoupon,
  } = useCartStore();

  const navigate = useNavigate();

  useScrollLock(isCartDrawerOpen);

  if (!isCartDrawerOpen) return null;

  const subtotal = getSubtotal();
  const total = getTotal();
  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleCheckout = () => {
    closeCartDrawer();
    navigate('/checkout');
  };

  return (
    <div className="atelier-cart-drawer-backdrop" onClick={closeCartDrawer} role="dialog" aria-modal="true">
      <aside className="atelier-cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="atelier-cart-drawer__header">
          <div className="title-count">
            <h3>SHOPPING BAG</h3>
            <span className="count-badge">({items.length})</span>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={closeCartDrawer}
            aria-label="Close bag"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="atelier-cart-drawer__progress">
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
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Items List */}
        <div className="atelier-cart-drawer__body">
          {items.length === 0 ? (
            <div className="atelier-cart-drawer__empty">
              <div className="empty-icon-wrap">
                <Tag size={36} />
              </div>
              <h4>Your bag is currently empty</h4>
              <p>Explore our curated collections of luxury craftsmanship and essentials.</p>
              <Link to="/shop" onClick={closeCartDrawer} className="explore-btn">
                DISCOVER COLLECTIONS
              </Link>
            </div>
          ) : (
            <div className="items-list">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary (Only if items exist) */}
        {items.length > 0 && (
          <div className="atelier-cart-drawer__footer">
            <PromoCodeForm
              appliedCode={couponCode}
              discountAmount={couponDiscount}
              subtotal={subtotal}
              onApply={applyCoupon}
              onRemove={removeCoupon}
            />

            <div className="summary-breakdown">
              <div className="row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {couponDiscount > 0 && (
                <div className="row is-discount">
                  <span>Privilege Discount ({couponCode})</span>
                  <span>-₹{couponDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="row">
                <span>Delivery</span>
                <span>{subtotal >= freeShippingThreshold ? 'FREE' : '₹150'}</span>
              </div>
              <div className="row is-total">
                <span>Total Investment</span>
                <span className="total-val">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="checkout-btn"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={16} />
            </button>

            <div className="trust-note">
              <ShieldCheck size={14} />
              <span>Complimentary Returns & White-Glove Concierge</span>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
