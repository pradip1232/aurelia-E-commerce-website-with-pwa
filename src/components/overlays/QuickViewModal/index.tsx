import React, { useState } from 'react';

import { useCartStore } from '../../../stores/useCartStore';
import { useWishlistStore } from '../../../stores/useWishlistStore';
import { useUIStore } from '../../../stores/useUIStore';
import { X, Heart, Star, Check, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollLock } from '../../../hooks/useScrollLock';
import './index.scss';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, showToast } = useUIStore();
  const { addItem } = useCartStore();
  const { isInWishlist, toggleWishlist } = useWishlistStore();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useScrollLock(!!quickViewProduct);

  if (!quickViewProduct) return null;

  const currentSize = selectedSize || quickViewProduct.sizes[0] || 'Standard';
  const currentColor = selectedColor || quickViewProduct.colors[0]?.name || 'Standard';
  const isFavorited = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addItem(
      {
        productId: quickViewProduct.id,
        name: quickViewProduct.name,
        brand: quickViewProduct.brand,
        price: quickViewProduct.price,
        mrp: quickViewProduct.mrp,
        image: quickViewProduct.images[0],
        size: currentSize,
        color: currentColor,
        stock: quickViewProduct.stock,
      },
      1
    );

    showToast(`Added ${quickViewProduct.name} to your bag`);
    closeQuickView();
  };

  return (
    <div className="atelier-quickview-backdrop" onClick={closeQuickView} role="dialog" aria-modal="true">
      <div className="atelier-quickview-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="atelier-quickview-close-btn"
          onClick={closeQuickView}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="atelier-quickview-body">
          {/* Gallery Preview */}
          <div className="atelier-quickview-gallery">
            <div className="atelier-quickview-main-image">
              <img
                src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
              />
            </div>
            {quickViewProduct.images.length > 1 && (
              <div className="atelier-quickview-thumbnails">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`atelier-quickview-thumb-btn ${activeImageIndex === idx ? 'is-active' : ''}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Quick Configuration */}
          <div className="atelier-quickview-info">
            <div className="atelier-quickview-header-meta">
              <span className="brand">{quickViewProduct.brand}</span>
              <div className="rating">
                <Star size={13} className="star-icon" fill="currentColor" />
                <span>{quickViewProduct.rating}</span>
                <span className="reviews">({quickViewProduct.reviewCount} verified reviews)</span>
              </div>
            </div>

            <h3 className="atelier-quickview-title">{quickViewProduct.name}</h3>

            <div className="atelier-quickview-price-row">
              <span className="current-price">₹{quickViewProduct.price.toLocaleString('en-IN')}</span>
              {quickViewProduct.mrp > quickViewProduct.price && (
                <>
                  <span className="mrp-price">₹{quickViewProduct.mrp.toLocaleString('en-IN')}</span>
                  <span className="discount-tag">
                    {Math.round(((quickViewProduct.mrp - quickViewProduct.price) / quickViewProduct.mrp) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="atelier-quickview-description">{quickViewProduct.description}</p>

            {/* Color Selection */}
            {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
              <div className="atelier-quickview-option-group">
                <label className="option-label">
                  COLOR: <strong>{currentColor}</strong>
                </label>
                <div className="color-swatches">
                  {quickViewProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`color-swatch-btn ${currentColor === c.name ? 'is-active' : ''}`}
                      title={c.name}
                      style={{ backgroundColor: c.hex }}
                    >
                      {currentColor === c.name && <Check size={12} className="swatch-check" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {quickViewProduct.sizes && quickViewProduct.sizes.length > 0 && (
              <div className="atelier-quickview-option-group">
                <div className="label-with-guide">
                  <label className="option-label">
                    SELECT SIZE: <strong>{currentSize}</strong>
                  </label>
                </div>
                <div className="size-selector">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`size-btn ${currentSize === s ? 'is-active' : ''}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="atelier-quickview-actions">
              <button
                type="button"
                onClick={handleAddToCart}
                className="atelier-quickview-add-btn"
                disabled={quickViewProduct.stock <= 0}
              >
                {quickViewProduct.stock <= 0 ? 'BESPOKE WAITLIST ONLY' : 'ADD TO BAG'}
              </button>

              <button
                type="button"
                onClick={() => {
                  toggleWishlist(quickViewProduct.id);
                  showToast(isFavorited ? 'Removed from wishlist' : 'Saved to wishlist');
                }}
                className={`atelier-quickview-wishlist-btn ${isFavorited ? 'is-favorited' : ''}`}
                aria-label="Toggle wishlist"
              >
                <Heart size={18} fill={isFavorited ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Reassurances */}
            <div className="atelier-quickview-perks">
              <div className="perk-item">
                <Truck size={14} />
                <span>Complimentary white-glove express delivery</span>
              </div>
              <div className="perk-item">
                <ShieldCheck size={14} />
                <span>100% Cryptographically verified authenticity</span>
              </div>
            </div>

            <div className="atelier-quickview-footer-link">
              <Link to={`/product/${quickViewProduct.slug}`} onClick={closeQuickView}>
                View full craftsmanship specifications & provenance details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
