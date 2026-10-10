import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '@/data/mockData';
import { useCartStore } from '@/stores/useCartStore';
import { useWishlistStore } from '@/stores/useWishlistStore';
import { useUIStore } from '@/stores/useUIStore';
import { ProductCard } from '@/components/product/ProductCard';
import { Breadcrumbs } from '@/layouts/Breadcrumbs';
import { PageTransition } from '@/animations/PageTransition';
import {
  Heart,
  Star,
  Check,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  MapPin,
  Share2,
  Minus,
  Plus,
} from 'lucide-react';
import './index.scss';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug) || MOCK_PRODUCTS[0];

  const { addItem } = useCartStore();
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const { showToast } = useUIStore();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [pincodeResult, setPincodeResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'delivery' | 'reviews'>('description');
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, percentX: 0, percentY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const stage = e.currentTarget;
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lensWidth = 140;
    const lensHeight = 140;

    let lensX = x - lensWidth / 2;
    let lensY = y - lensHeight / 2;

    lensX = Math.max(0, Math.min(lensX, rect.width - lensWidth));
    lensY = Math.max(0, Math.min(lensY, rect.height - lensHeight));

    const percentX = (lensX / (rect.width - lensWidth)) * 100;
    const percentY = (lensY / (rect.height - lensHeight)) * 100;

    setZoomPos({
      x: lensX,
      y: lensY,
      percentX,
      percentY,
    });
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsZooming(true);
    }
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItem(
      {
        productId: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        mrp: product.mrp,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        stock: product.stock,
      },
      quantity
    );
    showToast(`Added ${quantity}x ${product.name} to your bag`);
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length < 6) {
      showToast('Please enter a valid 6-digit postal code', 'warning');
      return;
    }
    setPincodeResult(
      `Delivery available by ${new Date(Date.now() + 2 * 86400000).toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })} • White-Glove Courier Included`
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: product.name, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Creation link copied to clipboard');
    }
  };

  const relatedProducts = MOCK_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <PageTransition>
      <div className="pdp-page">
        {/* 1. Breadcrumbs */}
        <div className="container pdp-breadcrumb-container">
          <Breadcrumbs
            items={[
              { label: product.category.toUpperCase(), href: `/category/${product.category}` },
              { label: product.name },
            ]}
          />
        </div>

        <div className="container pdp-showcase-container">
          <div className="pdp-layout-grid">
            {/* 2. Gallery Showcase (Desktop Vertical Thumbs + Main High-Res) */}
            <div className="pdp-gallery-column">
              {/* Thumbnails */}
              <div className="vertical-thumbnails">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`thumb-btn ${idx === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View creation angle ${idx + 1}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} />
                  </button>
                ))}
              </div>

              {/* Main Stage View with Hover Optical Zoom */}
              <div
                className={`main-stage-image ${isZooming ? 'is-zooming' : ''}`}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="stage-img-base"
                />

                {/* Optical Zoom Lens */}
                {isZooming && (
                  <div
                    className="optical-zoom-lens"
                    style={{
                      left: `${zoomPos.x}px`,
                      top: `${zoomPos.y}px`,
                    }}
                  />
                )}

                {/* Floating Badges */}
                <div className="stage-badges">
                  {product.badges.map((b) => (
                    <span key={b} className={`badge ${b.toLowerCase()}`}>
                      {b}
                    </span>
                  ))}
                </div>

                {/* Zoom Popout Window (Desktop Only) */}
                {isZooming && (
                  <div className="zoom-popout-window">
                    <img
                      src={product.images[activeImageIndex] || product.images[0]}
                      alt="Zoom detail"
                      className="zoom-popout-image"
                      style={{
                        transformOrigin: `${zoomPos.percentX}% ${zoomPos.percentY}%`,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* 3. Product Specifications & Order Box */}
            <div className="pdp-details-column">
              {/* Brand, Rating, Share */}
              <div className="details-header-meta">
                <span className="brand-name">{product.brand}</span>
                <div className="header-actions">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="action-pill-btn"
                    title="Share this creation"
                  >
                    <Share2 size={15} />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              <h1 className="pdp-title">{product.name}</h1>

              {/* Review Stars & SKU */}
              <div className="rating-sku-row">
                <div className="rating-stars">
                  <Star size={14} fill="#eab308" color="#eab308" />
                  <span className="rating-val">{product.rating.toFixed(1)}</span>
                  <span className="reviews-count">({product.reviewCount} verified client reviews)</span>
                </div>
                <span className="sku-tag">SKU: {product.sku}</span>
              </div>

              {/* Price Row */}
              <div className="pdp-price-row">
                <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
                {product.mrp > product.price && (
                  <>
                    <span className="mrp-price">₹{product.mrp.toLocaleString('en-IN')}</span>
                    <span className="discount-badge">{product.discount}% PRIVILEGE OFF</span>
                  </>
                )}
                <span className="tax-inclusive-tag">Taxes Included</span>
              </div>

              <div className="divider-line" />

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="option-block">
                  <div className="option-label">
                    <span>COLOR PALETTE:</span>
                    <strong className="selected-val">{selectedColor}</strong>
                  </div>
                  <div className="colors-grid">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c.name)}
                        className={`color-btn ${selectedColor === c.name ? 'active' : ''}`}
                        title={c.name}
                        style={{ backgroundColor: c.hex }}
                      >
                        {selectedColor === c.name && <Check size={14} className="check-mark" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="option-block">
                  <div className="option-label">
                    <span>BESPOKE SIZE:</span>
                    <strong className="selected-val">{selectedSize}</strong>
                  </div>
                  <div className="sizes-grid">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`size-btn ${selectedSize === s ? 'active' : ''}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper & Acquisition Buttons */}
              <div className="purchase-cta-row">
                <div className="qty-stepper">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-display">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                    disabled={quantity >= product.stock}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="btn-acquire"
                  disabled={product.stock <= 0}
                >
                  {product.stock <= 0 ? 'BESPOKE WAITLIST' : 'ADD TO BAG'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    toggleWishlist(product.id);
                    showToast(isFavorited ? 'Removed from wishlist' : 'Saved to wishlist');
                  }}
                  className={`btn-wishlist-pdp ${isFavorited ? 'active' : ''}`}
                  title={isFavorited ? 'Remove from wishlist' : 'Save creation'}
                >
                  <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Pincode & Delivery Checker */}
              <div className="pincode-checker-box">
                <div className="pincode-header">
                  <MapPin size={16} />
                  <span>CHECK CONCIERGE DELIVERY TIMELINES</span>
                </div>
                <form onSubmit={handleCheckPincode} className="pincode-form">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 6-digit postal code"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  />
                  <button type="submit">VERIFY</button>
                </form>
                {pincodeResult && <p className="pincode-status-text">{pincodeResult}</p>}
              </div>

              {/* Reassurances */}
              <div className="pdp-assurances-list">
                <div className="item">
                  <Truck size={18} />
                  <div>
                    <strong>COMPLIMENTARY WHITE-GLOVE TRANSIT</strong>
                    <span>Insured priority dispatch across all regions</span>
                  </div>
                </div>
                <div className="item">
                  <RotateCcw size={18} />
                  <div>
                    <strong>14-DAY BESPOKE EXCHANGES</strong>
                    <span>Doorstep pickup with zero questions asked</span>
                  </div>
                </div>
                <div className="item">
                  <ShieldCheck size={18} />
                  <div>
                    <strong>AUTHENTICITY PROVENANCE</strong>
                    <span>Directly curated from certified master ateliers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Product Deep-Dive Tabs */}
          <div className="pdp-tabs-section">
            <div className="tabs-header-bar">
              <button
                type="button"
                className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                DESCRIPTION & DETAILS
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('specifications')}
              >
                CRAFT & SPECIFICATIONS
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'delivery' ? 'active' : ''}`}
                onClick={() => setActiveTab('delivery')}
              >
                DELIVERY & RETURNS
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                CLIENT REVIEWS ({product.reviewCount})
              </button>
            </div>

            <div className="tab-content-panel">
              {activeTab === 'description' && (
                <div className="tab-pane-description">
                  <p className="lead-paragraph">{product.description}</p>
                  <div className="description-bullets">
                    <h4>CREATION HIGHLIGHTS</h4>
                    <ul>
                      <li>Handcrafted by senior master artisans adhering to heritage traditions.</li>
                      <li>Sourced with ethical sustainability certification and complete farm traceability.</li>
                      <li>Includes custom velvet presentation pouch and protective climate dust bag.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="tab-pane-specs">
                  <table className="specs-table">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, val]) => (
                        <tr key={key}>
                          <th>{key}</th>
                          <td>{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'delivery' && (
                <div className="tab-pane-delivery">
                  <h4>WHITE-GLOVE DISPATCH COMMITMENT</h4>
                  <p>
                    Every creation is packaged in our signature climate-resistant presentation chest,
                    sealed with bespoke wax emblems, and escorted via insured high-priority air transit.
                  </p>
                  <ul>
                    <li>Metro Cities: Delivered within 24 to 48 hours.</li>
                    <li>Nationwide: Delivered within 3 to 4 business days.</li>
                    <li>Complimentary Return: 14 days from delivery with instant reverse pickup.</li>
                  </ul>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="tab-pane-reviews">
                  <div className="reviews-summary-bar">
                    <div className="big-rating">
                      <span className="score">{product.rating.toFixed(1)}</span>
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="#eab308" color="#eab308" />
                        ))}
                      </div>
                      <span className="base">Based on {product.reviewCount} verified purchases</span>
                    </div>
                  </div>

                  <div className="reviews-list">
                    {product.reviews.map((rev) => (
                      <div key={rev.id} className="review-item-card">
                        <div className="author-row">
                          <strong>{rev.userName}</strong>
                          {rev.verified && <span className="verified-badge">✓ Certified Owner</span>}
                          <span className="date">{rev.date}</span>
                        </div>
                        <div className="stars">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} size={14} fill="#eab308" color="#eab308" />
                          ))}
                        </div>
                        <p className="comment">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 5. Related Creations Carousel */}
          <div className="pdp-related-section">
            <div className="section-title">
              <span className="eyebrow">HARMONIOUS ENSEMBLES</span>
              <h2>YOU MAY ALSO APPRECIATE</h2>
            </div>
            <div className="related-grid">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>

        {/* 6. Sticky Mobile Purchase Bar */}
        <div className="mobile-sticky-purchase-bar">
          <div className="price-info">
            <span className="label">TOTAL</span>
            <span className="price">₹{(product.price * quantity).toLocaleString('en-IN')}</span>
          </div>
          <button type="button" onClick={handleAddToCart} className="btn-mobile-acquire">
            ADD TO BAG
          </button>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetailPage;
