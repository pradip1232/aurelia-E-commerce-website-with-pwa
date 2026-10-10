import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlistStore } from '../../../stores/useWishlistStore';
import { useUIStore } from '../../../stores/useUIStore';
import './index.scss';

export interface WishlistButtonProps {
  productId: string;
  size?: number;
  className?: string;
  showText?: boolean;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({
  productId,
  size = 18,
  className = '',
  showText = false,
}) => {
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const { showToast } = useUIStore();
  const isFavorited = isInWishlist(productId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(productId);
    showToast(isFavorited ? 'Removed from saved creations' : 'Saved to your creations', 'info');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`atelier-wishlist-btn ${isFavorited ? 'is-active' : ''} ${className}`}
      aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
      title={isFavorited ? 'Remove from saved' : 'Save piece'}
    >
      <Heart size={size} fill={isFavorited ? 'currentColor' : 'none'} />
      {showText && <span>{isFavorited ? 'SAVED' : 'SAVE TO WISHLIST'}</span>}
    </button>
  );
};

export default WishlistButton;
