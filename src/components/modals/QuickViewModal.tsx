import React, { useState } from 'react';
import { useCartStore } from '../../stores/useCartStore';
import { useWishlistStore } from '../../stores/useWishlistStore';
import { useUIStore } from '../../stores/useUIStore';
import { X, Heart, Star, Check, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './QuickViewModal.scss';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, showToast } = useUIStore();
  const { addItem } = useCartStore();
  const { isInWishlist, toggleWishlist } = useWishlistStore();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
        stock: quickViewProduct.stock
      },
      1
    );

    showToast(`Added ${quickViewProduct.name} to your bag`);
    closeQuickView();
  };

  return (
    <div className="modal-backdrop" onClick={closeQuickView} role="dialog" aria-modal="true">
      <div className="modal-dialog quickview-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={closeQuickView} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="quickview-body">
          {/* Gallery Preview */}
          <div className="quickview-gallery">
            <div className="main-preview">
              <img
                src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
              />
            </div>
            {quickViewProduct.images.length > 1 && (
              <div className="gallery-thumbs">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${idx === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <img src={img} alt={`Thumb ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Selectors */}
          <div className="quickview-details">
            <span className="brand-eyebrow">{quickViewProduct.brand}</span>
            <h2 className="product-heading">{quickViewProduct.name}</h2>

            <div className="rating-stock-row">
              <div className="rating-badge">
                <Star size={14} fill="currentColor" />
                <span>{quickViewProduct.rating.toFixed(1)}</span>
                <span className="count">({quickViewProduct.reviewCount} reviews)</span>
              </div>
              <span className="stock-indicator">
                <Check size={14} /> In Stock & Ready to Ship
              </span>
            </div>

            <div className="price-container">
              <span className="current">₹{quickViewProduct.price.toLocaleString('en-IN')}</span>
              {quickViewProduct.mrp > quickViewProduct.price && (
                <>
                  <span className="mrp">₹{quickViewProduct.mrp.toLocaleString('en-IN')}</span>
                  <span className="discount">{quickViewProduct.discount}% OFF</span>
                </>
              )}
            </div>

            <p className="summary-desc">{quickViewProduct.description}</p>

            {/* Colors */}
            {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
              <div className="selector-group">
                <label className="selector-label">
                  COLOR: <strong>{currentColor}</strong>
                </label>
                <div className="color-options">
                  {quickViewProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`color-pill ${c.name === currentColor ? 'selected' : ''}`}
                      title={c.name}
                    >
                      <span className="dot" style={{ backgroundColor: c.hex }} />
                      <span className="name">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {quickViewProduct.sizes && quickViewProduct.sizes.length > 0 && (
              <div className="selector-group">
                <label className="selector-label">
                  SIZE: <strong>{currentSize}</strong>
                </label>
                <div className="size-options">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`size-chip ${s === currentSize ? 'selected' : ''}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="quickview-actions">
              <button onClick={handleAddToCart} className="btn-add-bag">
                ADD TO BAG
              </button>
              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className={`btn-wishlist ${isFavorited ? 'favorited' : ''}`}
                aria-label="Wishlist"
              >
                <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className="full-link-wrap">
              <Link
                to={`/product/${quickViewProduct.slug}`}
                onClick={closeQuickView}
                className="view-full-pdp-link"
              >
                View Full Product Details & Specifications →
              </Link>
            </div>

            {/* Assurance footer */}
            <div className="quickview-assurances">
              <div className="assurance-item">
                <Truck size={16} />
                <span>Complimentary Delivery & Express Return</span>
              </div>
              <div className="assurance-item">
                <ShieldCheck size={16} />
                <span>Authentic Luxury Certificate Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

