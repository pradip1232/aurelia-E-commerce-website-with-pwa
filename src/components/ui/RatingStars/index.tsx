import React from 'react';
import { Star } from 'lucide-react';
import './index.scss';

export interface RatingStarsProps {
  rating: number; // 0 to 5
  max?: number;
  size?: number;
  reviewCount?: number;
  showScore?: boolean;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  max = 5,
  size = 14,
  reviewCount,
  showScore = true,
  className = '',
}) => {
  return (
    <div className={`ui-rating-stars ${className}`} aria-label={`Rating: ${rating} out of ${max}`}>
      {Array.from({ length: max }, (_, index) => {
        const isFilled = index + 1 <= Math.round(rating);
        return (
          <Star
            key={index}
            size={size}
            className={`star-icon ${isFilled ? 'filled' : ''}`}
            fill={isFilled ? 'currentColor' : 'none'}
          />
        );
      })}
      {showScore && <span className="rating-score">{rating.toFixed(1)}</span>}
      {reviewCount !== undefined && (
        <span className="rating-count">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
};

export default RatingStars;
