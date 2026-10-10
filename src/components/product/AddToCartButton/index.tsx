import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCartStore } from '../../../stores/useCartStore';
import { useUIStore } from '../../../stores/useUIStore';
import { Product } from '../../../types';
import './index.scss';

export interface AddToCartButtonProps {
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
  quantity?: number;
  fullWidth?: boolean;
  className?: string;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  selectedSize,
  selectedColor,
  quantity = 1,
  fullWidth = true,
  className = '',
}) => {
  const { addItem } = useCartStore();
  const { showToast } = useUIStore();
  const [isAdded, setIsAdded] = useState(false);

  const isOutOfStock = product.stock <= 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isOutOfStock) return;

    const size = selectedSize || product.sizes[0] || 'Standard';
    const color = selectedColor || product.colors[0]?.name || 'Standard';

    addItem(
      {
        productId: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        mrp: product.mrp,
        image: product.images[0],
        size,
        color,
        stock: product.stock,
      },
      quantity
    );

    setIsAdded(true);
    showToast(`Added ${product.name} to your bag`);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={isOutOfStock}
      className={`atelier-add-to-cart-btn ${fullWidth ? 'full-width' : ''} ${isAdded ? 'is-added' : ''} ${className}`}
      aria-label={isOutOfStock ? 'Out of stock' : isAdded ? 'Added to bag' : 'Add to bag'}
    >
      {isAdded ? (
        <>
          <Check size={18} />
          <span>ADDED TO BAG</span>
        </>
      ) : (
        <>
          <ShoppingBag size={18} />
          <span>{isOutOfStock ? 'OUT OF STOCK' : 'ADD TO BAG'}</span>
        </>
      )}
    </button>
  );
};

export default AddToCartButton;
