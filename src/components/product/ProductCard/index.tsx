import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../types';
import { useWishlistStore } from '../../../stores/useWishlistStore';
import { useCartStore } from '../../../stores/useCartStore';
import { useUIStore } from '../../../stores/useUIStore';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import './index.scss';

export interface ProductCardProps {
  product: Product;
  ranking?: number;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, ranking, className = '' }) => {
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const { addItem } = useCartStore();
  const { openQuickView, showToast } = useUIStore();

  const isFavorited = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const defaultVariant = product.variants?.[0] || {
      size: product.sizes?.[0] || 'Standard',
      color: product.colors?.[0]?.name || 'Standard',
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
        stock: product.stock,
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
    <article className={`atelier-product-card ${className}`}>
      <Link to={`/product/${product.slug}`} className="atelier-product-card__link">
        {/* Visual Media Container */}
        <div className="atelier-product-card__image-wrap">
          {ranking && <div className="atelier-product-card__ranking">{ranking}</div>}

          {/* Badges */}
          {product.badges && product.badges.length > 0 && (
            <div className="atelier-product-card__badges">
              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className={`atelier-product-card__badge atelier-product-card__badge--${badge.toLowerCase()}`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={handleWishlist}
            className={`atelier-product-card__wishlist-btn ${isFavorited ? 'is-active' : ''}`}
            aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart size={16} fill={isFavorited ? 'currentColor' : 'none'} />
          </button>

          {/* Images Stack */}
          <div className="atelier-product-card__images-stack">
            <img
              src={product.images[0]}
              alt={product.name}
              className="atelier-product-card__img-primary"
              loading="lazy"
            />
            {product.images[1] && (
              <img
                src={product.images[1]}
                alt={`${product.name} alternate view`}
                className="atelier-product-card__img-secondary"
                loading="lazy"
              />
            )}
          </div>

          {/* Quick Actions overlay on hover */}
          <div className="atelier-product-card__actions-overlay">
            <button
              type="button"
              onClick={handleQuickViewClick}
              className="atelier-product-card__action-btn"
            >
              <Eye size={15} />
              <span>Quick View</span>
            </button>
            <button
              type="button"
              onClick={handleQuickAdd}
              className="atelier-product-card__action-btn atelier-product-card__action-btn--primary"
            >
              <ShoppingBag size={15} />
              <span>Quick Add</span>
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="atelier-product-card__info">
          <div className="atelier-product-card__brand-row">
            <span className="atelier-product-card__brand">{product.brand}</span>
            <div className="atelier-product-card__rating">
              <Star size={12} fill="currentColor" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          </div>

          <h3 className="atelier-product-card__title">{product.name}</h3>

          {/* Color Swatch Dots */}
          {product.colors && product.colors.length > 1 && (
            <div className="atelier-product-card__swatches">
              {product.colors.slice(0, 4).map((c) => (
                <span
                  key={c.name}
                  className="atelier-product-card__swatch-dot"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="atelier-product-card__swatch-more">+{product.colors.length - 4}</span>
              )}
            </div>
          )}

          {/* Price Block */}
          <div className="atelier-product-card__price-row">
            <span className="atelier-product-card__current-price">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.mrp > product.price && (
              <>
                <span className="atelier-product-card__mrp-price">
                  ₹{product.mrp.toLocaleString('en-IN')}
                </span>
                <span className="atelier-product-card__discount-tag">
                  {product.discount}% OFF
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
