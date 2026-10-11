import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../../stores/useCartStore';
import { useUIStore } from '../../../stores/useUIStore';
import { CartItem } from '../../../types';
import './index.scss';

export interface AddToCartButtonProps {
  item: Omit<CartItem, 'quantity'>;
  quantity?: number;
  disabled?: boolean;
  className?: string;
  onSuccess?: () => void;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  item,
  quantity = 1,
  disabled = false,
  className = '',
  onSuccess
}) => {
  const { addItem } = useCartStore();
  const { showToast } = useUIStore();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled || item.stock === 0) return;

    addItem(item, quantity);
    showToast(`Added ${item.name} to your bag`, 'success');
    onSuccess?.();
  };

  const isOutOfStock = item.stock === 0;

  return (
    <button
      type="button"
      className={`atelier-add-to-cart-btn ${isOutOfStock ? 'is-out-of-stock' : ''} ${className}`}
      onClick={handleAdd}
      disabled={disabled || isOutOfStock}
      aria-label={isOutOfStock ? 'Out of stock' : `Add ${item.name} to shopping bag`}
    >
      <ShoppingBag size={16} />
      <span>{isOutOfStock ? 'OUT OF STOCK' : 'ADD TO BAG'}</span>
    </button>
  );
};

export default AddToCartButton;
