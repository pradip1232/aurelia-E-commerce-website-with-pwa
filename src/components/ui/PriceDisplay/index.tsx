import React from 'react';
import './index.scss';

export interface PriceDisplayProps {
  price: number;
  mrp?: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
  showDiscount?: boolean;
  className?: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  mrp,
  currency = '₹',
  size = 'md',
  showDiscount = true,
  className = '',
}) => {
  const hasDiscount = mrp && mrp > price;
  const discountPercent = hasDiscount ? Math.round(((mrp - price) / mrp) * 100) : 0;

  return (
    <div className={`ui-price-display ui-price-display--${size} ${className}`}>
      <span className="current-price">
        {currency}
        {price.toLocaleString('en-IN')}
      </span>
      {hasDiscount && (
        <span className="original-mrp">
          {currency}
          {mrp.toLocaleString('en-IN')}
        </span>
      )}
      {hasDiscount && showDiscount && discountPercent > 0 && (
        <span className="discount-tag">{discountPercent}% OFF</span>
      )}
    </div>
  );
};

export default PriceDisplay;
