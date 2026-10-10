import React from 'react';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import './index.scss';

export interface CartSummaryProps {
  subtotal: number;
  discount?: number;
  shippingFee?: number;
  tax?: number;
  total: number;
  onCheckout: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  ctaText?: string;
  className?: string;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  discount = 0,
  shippingFee = 0,
  tax = 0,
  total,
  onCheckout,
  isLoading = false,
  disabled = false,
  ctaText = 'PROCEED TO CHECKOUT',
  className = '',
}) => {
  return (
    <div className={`atelier-cart-summary ${className}`}>
      <h3 className="atelier-cart-summary__heading">ORDER SUMMARY</h3>

      <div className="atelier-cart-summary__breakdown">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString('en-IN')}</span>
        </div>

        {discount > 0 && (
          <div className="summary-row is-discount">
            <span>Privilege Discount</span>
            <span>-₹{discount.toLocaleString('en-IN')}</span>
          </div>
        )}

        <div className="summary-row">
          <span>White-Glove Delivery</span>
          <span>{shippingFee === 0 ? 'COMPLIMENTARY' : `₹${shippingFee.toLocaleString('en-IN')}`}</span>
        </div>

        {tax > 0 && (
          <div className="summary-row">
            <span>Estimated GST / Duties</span>
            <span>₹{tax.toLocaleString('en-IN')}</span>
          </div>
        )}

        <div className="summary-divider" />

        <div className="summary-row is-total">
          <span>Total Investment</span>
          <span className="total-amount">₹{total.toLocaleString('en-IN')}</span>
        </div>
        <span className="tax-inclusive-note">Inclusive of all luxury duties and domestic taxes</span>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        disabled={disabled || isLoading}
        className="atelier-cart-summary__checkout-btn"
      >
        <span>{isLoading ? 'PREPARING ORDER...' : ctaText}</span>
        <ArrowRight size={16} />
      </button>

      <div className="atelier-cart-summary__trust-badges">
        <div className="trust-item">
          <ShieldCheck size={14} />
          <span>Cryptographically Certified Authenticity</span>
        </div>
        <div className="trust-item">
          <Lock size={14} />
          <span>256-Bit SSL Encrypted Checkout</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
