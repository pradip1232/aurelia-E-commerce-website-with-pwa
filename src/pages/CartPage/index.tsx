import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '@/stores/useCartStore';
import { useWishlistStore } from '@/stores/useWishlistStore';
import { useUIStore } from '@/stores/useUIStore';
import { CartItem } from '@/components/cart/CartItem';
import { PromoCodeForm } from '@/components/cart/PromoCodeForm';
import { CartSummary } from '@/components/cart/CartSummary';
import { Breadcrumbs } from '@/layouts/Breadcrumbs';
import { PageTransition } from '@/animations/PageTransition';
import { Reveal } from '@/animations/Reveal';
import { Tag, ShoppingBag, Gift, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import './index.scss';

export const CartPage: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    getSubtotal,
    couponCode,
    couponDiscount,
    applyCoupon,
    removeCoupon,
  } = useCartStore();

  const { addToWishlist } = useWishlistStore();
  const { showToast } = useUIStore();
  const navigate = useNavigate();

  const [giftWrap, setGiftWrap] = useState(false);

  const subtotal = getSubtotal();
  const giftWrapFee = giftWrap ? 250 : 0;
  const shippingFee = subtotal >= 999 || subtotal === 0 ? 0 : 150;
  const finalTotal = Math.max(0, subtotal - couponDiscount + shippingFee + giftWrapFee);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleMoveToWishlist = (item: any) => {
    addToWishlist(item.productId);
    removeItem(item.id);
    showToast(`Moved ${item.name} to your saved wishlist`);
  };

  return (
    <PageTransition>
      <div className="atelier-cart-page">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Shopping Bag' }]} />

          <Reveal variant="fade-up">
            <div className="atelier-cart-page__header">
              <h1 className="atelier-cart-page__title">SHOPPING BAG</h1>
              <span className="atelier-cart-page__count">
                {items.length} {items.length === 1 ? 'Creations Reserved' : 'Creations Reserved'}
              </span>
            </div>
          </Reveal>

          {items.length === 0 ? (
            <div className="atelier-cart-page__empty-state">
              <div className="empty-icon-wrap">
                <ShoppingBag size={48} />
              </div>
              <h2>YOUR BAG IS EMPTY</h2>
              <p>Explore our latest runway collections, bespoke tailoring, and timeless fine horology.</p>
              <Link to="/shop" className="btn-explore">
                DISCOVER COLLECTIONS
              </Link>
            </div>
          ) : (
            <div className="atelier-cart-page__grid">
              {/* Left Column: Items List */}
              <div className="atelier-cart-page__items-col">
                <div className="items-card">
                  {items.map((item) => (
                    <div key={item.id} className="cart-item-wrapper">
                      <CartItem
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeItem}
                      />
                      <button
                        type="button"
                        onClick={() => handleMoveToWishlist(item)}
                        className="move-to-wishlist-btn"
                      >
                        Save to Wishlist for later
                      </button>
                    </div>
                  ))}
                </div>

                {/* Gift Wrap Privilege */}
                <div className="gift-wrap-card">
                  <div className="gift-wrap-left">
                    <Gift size={20} className="gift-icon" />
                    <div>
                      <strong>SIGNATURE LUXURY GIFT WRAPPING (₹250)</strong>
                      <p>
                        Hand-pressed Florentine gold foil box, wax seal emblem, and personalized handwritten
                        calligraphy card.
                      </p>
                    </div>
                  </div>
                  <label className="gift-wrap-toggle">
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                    />
                    <span className="toggle-slider" />
                  </label>
                </div>

                {/* Value Assurances */}
                <div className="assurances-banner">
                  <div className="assurance-item">
                    <Truck size={18} />
                    <span>Complimentary Express Air Transit on orders above ₹999</span>
                  </div>
                  <div className="assurance-item">
                    <RotateCcw size={18} />
                    <span>Complimentary 14-day reverse pickup exchange</span>
                  </div>
                  <div className="assurance-item">
                    <ShieldCheck size={18} />
                    <span>100% Cryptographic authenticity certificate included</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary & Coupon */}
              <div className="atelier-cart-page__summary-col">
                <div className="coupon-box">
                  <h4>PRIVILEGE CODE</h4>
                  <PromoCodeForm
                    appliedCode={couponCode}
                    discountAmount={couponDiscount}
                    subtotal={subtotal}
                    onApply={applyCoupon}
                    onRemove={removeCoupon}
                  />
                </div>

                <CartSummary
                  subtotal={subtotal}
                  discount={couponDiscount}
                  shippingFee={shippingFee}
                  tax={0}
                  total={finalTotal}
                  onCheckout={handleCheckout}
                  ctaText="PROCEED TO SECURE CHECKOUT"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default CartPage;
