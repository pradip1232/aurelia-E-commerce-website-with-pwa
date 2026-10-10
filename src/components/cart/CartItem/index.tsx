import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../../types';
import './index.scss';

export interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  className?: string;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
  className = '',
}) => {
  return (
    <div className={`atelier-cart-item ${className}`}>
      <div className="atelier-cart-item__thumbnail">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="atelier-cart-item__details">
        <div className="atelier-cart-item__header">
          <span className="atelier-cart-item__brand">{item.brand}</span>
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="atelier-cart-item__remove-btn"
            title="Remove item"
            aria-label="Remove item"
          >
            <Trash2 size={15} />
          </button>
        </div>

        <h4 className="atelier-cart-item__title">{item.name}</h4>

        <div className="atelier-cart-item__variants">
          <span>Size: {item.size}</span>
          <span className="bullet">•</span>
          <span>Color: {item.color}</span>
        </div>

        <div className="atelier-cart-item__footer">
          <div className="atelier-cart-item__stepper">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, -1)}
              aria-label="Decrease quantity"
              disabled={item.quantity <= 1}
            >
              <Minus size={13} />
            </button>
            <span className="quantity-value">{item.quantity}</span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, 1)}
              aria-label="Increase quantity"
            >
              <Plus size={13} />
            </button>
          </div>

          <div className="atelier-cart-item__price">
            <span className="total-price">
              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
            </span>
            {item.quantity > 1 && (
              <span className="unit-price">
                (₹{item.price.toLocaleString('en-IN')} each)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
