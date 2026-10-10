import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../stores/useCartStore';
import { useWishlistStore } from '../stores/useWishlistStore';
import { useUIStore } from '../stores/useUIStore';
import { AVAILABLE_COUPONS } from '../data/mockData';
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Heart,
  ShieldCheck,
  Tag,
  ShoppingBag,
  Truck
} from 'lucide-react';
import './CartPage.scss';

export const CartPage: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    getSubtotal,
    couponCode,
    couponDiscount,
    applyCoupon,
    removeCoupon
  } = useCartStore();

  const { addToWishlist } = useWishlistStore();
  const { showToast } = useUIStore();
  const navigate = useNavigate();

  const [inputCoupon, setInputCoupon] = useState('');
  const [giftWrap, setGiftWrap] = useState(false);

  const subtotal = getSubtotal();
  const giftWrapFee = giftWrap ? 250 : 0;
  const shippingFee = subtotal >= 999 || subtotal === 0 ? 0 : 150;
  const finalTotal = Math.max(0, subtotal - couponDiscount + shippingFee + giftWrapFee);

  const handleApply = () => {
    const found = AVAILABLE_COUPONS.find((c) => c.code.toUpperCase() === inputCoupon.trim().toUpperCase());
    if (!found) {
      showToast('Invalid privilege code entered', 'error');
      return;
    }
    if (subtotal < found.minOrderValue) {
      showToast(`Requires minimum order of ₹${found.minOrderValue}`, 'warning');
      return;
    }
    const discountAmount = found.freeShipping
      ? 150
      : Math.min(found.maxDiscount ?? 99999, Math.round((subtotal * found.discountPercent) / 100));

    applyCoupon(found.code, discountAmount);
    showToast(`Coupon ${found.code} applied successfully!`);
    setInputCoupon('');
  };

  const handleMoveToWishlist = (productId: string, cartItemId: string) => {
    addToWishlist(productId);
    removeItem(cartItemId);
    showToast('Creation moved to your Wishlist');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page-empty">
        <div className="container empty-content">
          <div className="icon-wrap">
            <ShoppingBag size={48} />
          </div>
          <h1>YOUR SHOPPING BAG IS EMPTY</h1>
          <p>
            Your private selection awaits. Explore our prêt-à-porter collections, fine horology, and
            artisanal lifestyle essentials.
          </p>
          <Link to="/shop" className="btn-return-shop">
            EXPLORE THE ATELIER
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        {/* Header Breadcrumb */}
        <div className="cart-header">
          <nav className="cart-breadcrumb">
            <Link to="/">HOME</Link>
            <span>/</span>
            <span className="current">SHOPPING BAG ({items.length})</span>
          </nav>
          <h1>MY SHOPPING BAG</h1>
        </div>

        <div className="cart-grid-layout">
          {/* Items Table */}
          <div className="cart-items-section">
            <div className="cart-items-table-header">
              <span>CREATION</span>
              <span>QUANTITY</span>
              <span>SUBTOTAL</span>
            </div>

            <div className="cart-items-rows">
              {items.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="item-main-col">
                    <img src={item.image} alt={item.name} className="item-img" />
                    <div className="item-meta">
                      <span className="brand">{item.brand}</span>
                      <h3 className="title">{item.name}</h3>
                      <div className="specs">
                        <span>Size: <strong>{item.size}</strong></span>
                        <span className="sep">•</span>
                        <span>Color: <strong>{item.color}</strong></span>
                      </div>
                      <div className="item-actions">
                        <button
                          onClick={() => handleMoveToWishlist(item.productId, item.id)}
                          className="btn-link"
                        >
                          <Heart size={14} /> Move to Wishlist
                        </button>
                        <button onClick={() => removeItem(item.id)} className="btn-link danger">
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="item-qty-col">
                    <div className="stepper">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        <Minus size={13} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>

                  <div className="item-subtotal-col">
                    <span className="price-tag">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                    {item.mrp > item.price && (
                      <span className="original-mrp">
                        ₹{(item.mrp * item.quantity).toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Gift Wrap Toggle */}
            <div className="gift-wrap-card">
              <label className="checkbox-gift">
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                />
                <span className="box" />
                <div className="desc">
                  <strong>Add Atelier Gift Packaging (+₹250)</strong>
                  <p>Includes handmade mulberry paper wrapping, grosgrain silk ribbon, and personalized calligraphy note.</p>
                </div>
              </label>
            </div>
          </div>

          {/* Order Summary Column */}
          <aside className="cart-summary-sidebar">
            <div className="summary-box">
              <h3>ORDER SUMMARY</h3>

              {/* Coupon Applicator */}
              <div className="coupon-box">
                {couponCode ? (
                  <div className="applied-tag">
                    <Tag size={15} />
                    <span>
                      Privilege <strong>{couponCode}</strong> applied (-₹{couponDiscount.toLocaleString('en-IN')})
                    </span>
                    <button onClick={removeCoupon}>Remove</button>
                  </div>
                ) : (
                  <div className="coupon-input">
                    <input
                      type="text"
                      placeholder="PROMOTION / GIFT CODE"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                    />
                    <button onClick={handleApply}>APPLY</button>
                  </div>
                )}
              </div>

              {/* Calculation Rows */}
              <div className="pricing-rows">
                <div className="row">
                  <span>Bag Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="row discount">
                    <span>Privilege Savings</span>
                    <span>-₹{couponDiscount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="row">
                  <span>White-Glove Express Delivery</span>
                  <span>{shippingFee === 0 ? 'COMPLIMENTARY' : `₹${shippingFee}`}</span>
                </div>
                {giftWrap && (
                  <div className="row">
                    <span>Atelier Gift Packaging</span>
                    <span>₹250</span>
                  </div>
                )}
                <div className="row total-row">
                  <span>Estimated Total</span>
                  <span className="total-val">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button onClick={() => navigate('/checkout')} className="btn-proceed-checkout">
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight size={18} />
              </button>

              <div className="summary-assurances">
                <div className="item">
                  <Truck size={16} />
                  <span>Complimentary insured transit on orders above ₹999</span>
                </div>
                <div className="item">
                  <ShieldCheck size={16} />
                  <span>Encrypted 256-bit checkout authentication</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
