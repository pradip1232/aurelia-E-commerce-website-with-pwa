import React, { useState } from 'react';
import { Tag, Check, X } from 'lucide-react';
import { AVAILABLE_COUPONS } from '../../../data/mockData';
import { useUIStore } from '../../../stores/useUIStore';
import './index.scss';

export interface PromoCodeFormProps {
  appliedCode?: string;
  discountAmount?: number;
  subtotal: number;
  onApply: (code: string, discount: number) => void;
  onRemove: () => void;
  className?: string;
}

export const PromoCodeForm: React.FC<PromoCodeFormProps> = ({
  appliedCode,
  discountAmount = 0,
  subtotal,
  onApply,
  onRemove,
  className = '',
}) => {
  const [inputVal, setInputVal] = useState('');
  const [showCoupons, setShowCoupons] = useState(false);
  const { showToast } = useUIStore();

  const handleApply = (codeToApply: string) => {
    const found = AVAILABLE_COUPONS.find((c) => c.code.toUpperCase() === codeToApply.trim().toUpperCase());
    if (!found) {
      showToast('Invalid promotion privilege code', 'error');
      return;
    }
    if (subtotal < found.minOrderValue) {
      showToast(`Minimum order of ₹${found.minOrderValue} required for ${found.code}`, 'warning');
      return;
    }

    const calcDiscount = Math.min(
      found.maxDiscount ?? 99999,
      Math.round((subtotal * found.discountPercent) / 100)
    );

    onApply(found.code, calcDiscount);
    showToast(`Coupon ${found.code} applied! Saved ₹${calcDiscount}`);
    setInputVal('');
    setShowCoupons(false);
  };

  return (
    <div className={`atelier-promo-form ${className}`}>
      {appliedCode ? (
        <div className="atelier-promo-form__applied">
          <div className="atelier-promo-form__applied-info">
            <Check size={16} className="check-icon" />
            <div>
              <strong>{appliedCode}</strong>
              <span>Saved ₹{discountAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onRemove}
            className="atelier-promo-form__remove-btn"
            aria-label="Remove promo code"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <>
          <div className="atelier-promo-form__input-group">
            <Tag size={16} className="tag-icon" />
            <input
              type="text"
              placeholder="Enter privilege code"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value.toUpperCase())}
            />
            <button
              type="button"
              onClick={() => handleApply(inputVal)}
              disabled={!inputVal.trim()}
              className="apply-btn"
            >
              APPLY
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowCoupons((prev) => !prev)}
            className="atelier-promo-form__toggle-list"
          >
            {showCoupons ? 'Hide available privilege codes' : 'View available privilege codes'}
          </button>

          {showCoupons && (
            <div className="atelier-promo-form__coupons-list">
              {AVAILABLE_COUPONS.map((coupon) => (
                <div key={coupon.code} className="atelier-promo-form__coupon-card">
                  <div className="coupon-info">
                    <span className="code">{coupon.code}</span>
                    <p className="desc">{coupon.description}</p>
                    <span className="min-val">Min. order: ₹{coupon.minOrderValue}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleApply(coupon.code)}
                    className="quick-apply-btn"
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PromoCodeForm;
