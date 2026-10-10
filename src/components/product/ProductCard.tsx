import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { useWishlistStore } from '../../stores/useWishlistStore';
import { useCartStore } from '../../stores/useCartStore';
import { useUIStore } from '../../stores/useUIStore';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  ranking?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, ranking }) => {
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const { addItem } = useCartStore();
  const { openQuickView, showToast } = useUIStore();

  const isFavorited = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Default to first variant
    const defaultVariant = product.variants[0] || {
      size: product.sizes[0] || 'Standard',
      color: product.colors[0]?.name || 'Standard'
    };

    addItem(
      {
        productId: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        mrp: product.mrp,
        image: product.images[0],
        size: defaultVariant.size,
        color: defaultVariant.color,
        stock: product.stock
      },
      1
    );

    showToast(`Added ${product.name} to your bag`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    showToast(isFavorited ? 'Removed from wishlist' : 'Added to your wishlist', 'info');
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card-link">
        {/* Visual Media Container */}
        <div className="product-image-wrap">
          {ranking && <div className="product-ranking">{ranking}</div>}

          {/* Badges */}
          {product.badges && product.badges.length > 0 && (
            <div className="product-badges">
              {product.badges.map((badge) => (
                <span key={badge} className={`badge-pill badge-${badge.toLowerCase()}`}>
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className={`wishlist-btn ${isFavorited ? 'active' : ''}`}
            aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart size={18} fill={isFavorited ? 'currentColor' : 'none'} />
          </button>

          {/* Images (Primary & Hover Alternate) */}
          <div className="images-stack">
            <img
              src={product.images[0]}
              alt={product.name}
              className="img-primary"
              loading="lazy"
            />
            {product.images[1] && (
              <img
                src={product.images[1]}
                alt={`${product.name} alternate view`}
                className="img-secondary"
                loading="lazy"
              />
            )}
          </div>

          {/* Quick Actions overlay on hover */}
          <div className="card-actions-overlay">
            <button onClick={handleQuickViewClick} className="action-btn quick-view-btn">
              <Eye size={16} />
              <span>Quick View</span>
            </button>
            <button onClick={handleQuickAdd} className="action-btn quick-add-btn">
              <ShoppingBag size={16} />
              <span>Quick Add</span>
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="product-info">
          <div className="brand-rating-row">
            <span className="product-brand">{product.brand}</span>
            <div className="product-rating">
              <Star size={13} fill="currentColor" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          </div>

          <h3 className="product-title">{product.name}</h3>

          {/* Color Swatch Dots */}
          {product.colors && product.colors.length > 1 && (
            <div className="color-swatches">
              {product.colors.map((c) => (
                <span
                  key={c.name}
                  className="swatch-dot"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
              <span className="swatch-count">+{product.colors.length}</span>
            </div>
          )}

          {/* Price Block in Indian Rupee format */}
          <div className="price-row">
            <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
            {product.mrp > product.price && (
              <>
                <span className="mrp-price">₹{product.mrp.toLocaleString('en-IN')}</span>
                <span className="discount-tag">{product.discount}% OFF</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

