import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data/mockData';
import { useCartStore } from '../stores/useCartStore';
import { useWishlistStore } from '../stores/useWishlistStore';
import { useUIStore } from '../stores/useUIStore';
import { ProductCard } from '../components/product/ProductCard';
import Stack from '../components/ui/Stack';
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
  Plus
} from 'lucide-react';
import './ProductDetailPage.scss';

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

    // Lens dimensions (e.g. 140x140)
    const lensWidth = 140;
    const lensHeight = 140;

    let lensX = x - lensWidth / 2;
    let lensY = y - lensHeight / 2;

    // Clamp inside boundary
    lensX = Math.max(0, Math.min(lensX, rect.width - lensWidth));
    lensY = Math.max(0, Math.min(lensY, rect.height - lensHeight));

    const percentX = (lensX / (rect.width - lensWidth)) * 100;
    const percentY = (lensY / (rect.height - lensHeight)) * 100;

    setZoomPos({
      x: lensX,
      y: lensY,
      percentX,
      percentY
    });
  };

  const handleMouseEnter = () => {
    // Only enable zoom on desktop/pointer screens
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
        stock: product.stock
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
    setPincodeResult(`Delivery available by ${new Date(Date.now() + 2 * 86400000).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })} • White-Glove Courier Included`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: product.name, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Creation link copied to clipboard');
    }
  };

  // Related products recommendation
  const relatedProducts = MOCK_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pdp-page">
      {/* 1. Breadcrumbs */}
      <div className="container pdp-breadcrumb-container">
        <nav className="pdp-breadcrumbs">
          <Link to="/">HOME</Link>
          <span>/</span>
          <Link to={`/category/${product.category}`}>{product.category.toUpperCase()}</Link>
          <span>/</span>
          <span className="current">{product.name}</span>
        </nav>
      </div>

      <div className="container pdp-showcase-container">
        <div className="pdp-layout-grid">
          {/* 2. Gallery Showcase (Desktop Vertical Thumbs + Main High-Res) */}
          <div className="pdp-gallery-column">
            {/* Mobile Multiple Image Stack (Fanned Card Stack) */}
            {product.images.length > 1 && (
              <div className="pdp-mobile-image-stack">
                <div style={{ width: 230, height: 230, margin: '0 auto', position: 'relative' }}>
                  <Stack
                    layout="fan"
                    sendToBackOnClick={true}
                    cards={product.images.map((src, i) => (
                      <img key={src} src={src} alt={`${product.name} perspective ${i + 1}`} />
                    ))}
                    onChange={setActiveImageIndex}
                  />
                </div>
                <div className="mobile-stack-hint">
                  <span>✦ Tap card to fan next angle ({activeImageIndex + 1}/{product.images.length})</span>
                </div>
              </div>
            )}

            {/* Thumbnails (Desktop) */}
            <div className="vertical-thumbnails">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  className={`thumb-btn ${idx === activeImageIndex ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} />
                </button>
              ))}
            </div>

            {/* Main Stage View with Amazon-style Hover Zoom */}
            <div
              className={`main-stage-image ${isZooming ? 'is-zooming' : ''}`}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="main-display-img"
              />

              {/* Floating Zoom Lens (Hover Box) */}
              {isZooming && (
                <div
                  className="zoom-lens"
                  style={{
                    transform: `translate(${zoomPos.x}px, ${zoomPos.y}px)`
                  }}
                />
              )}

              <button onClick={handleShare} className="btn-share" aria-label="Share creation">
                <Share2 size={18} />
              </button>

              {/* Amazon-style High-Resolution Side Zoom Box */}
              {isZooming && (
                <div className="zoom-preview-window">
                  <div
                    className="zoom-preview-image"
                    style={{
                      backgroundImage: `url(${product.images[activeImageIndex] || product.images[0]})`,
                      backgroundPosition: `${zoomPos.percentX}% ${zoomPos.percentY}%`
                    }}
                  />
                  <div className="zoom-badge">
                    <span>HIGH RESOLUTION 2.5X ZOOM</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3. Product Details & Selection Column */}
          <div className="pdp-details-column">
            <span className="atelier-brand-tag">{product.brand}</span>
            <h1 className="pdp-product-title">{product.name}</h1>

            {/* Rating & Review Summary */}
            <div className="pdp-rating-row">
              <div className="stars-pill">
                <Star size={14} fill="currentColor" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
              <span className="review-count">{product.reviewCount} Certified Client Reviews</span>
              <span className="bullet">•</span>
              <span className="in-stock-badge">
                <Check size={14} /> In Stock & Immediate Dispatch
              </span>
            </div>

            {/* Pricing Matrix */}
            <div className="pdp-price-box">
              <div className="price-primary">
                <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
                {product.mrp > product.price && (
                  <>
                    <span className="mrp-price">₹{product.mrp.toLocaleString('en-IN')}</span>
                    <span className="discount-pill">{product.discount}% PRIVILEGE OFF</span>
                  </>
                )}
              </div>
              <span className="tax-inclusive">Inclusive of all luxury duties and bespoke taxes</span>
            </div>

            {/* Exclusive Atelier Offers */}
            <div className="pdp-offers-box">
              <div className="offers-title">
                <Sparkles size={16} />
                <span>ATELIER PRIVILEGES</span>
              </div>
              <ul className="offers-list">
                {product.offers.map((offer, idx) => (
                  <li key={idx}>✦ {offer}</li>
                ))}
              </ul>
            </div>

            {/* Color Variant Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="pdp-selector-block">
                <div className="selector-header">
                  <span>FINISH / COLOR:</span>
                  <strong>{selectedColor}</strong>
                </div>
                <div className="color-swatches-row">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`color-swatch-circle ${c.name === selectedColor ? 'selected' : ''}`}
                      title={c.name}
                    >
                      <span className="swatch-fill" style={{ backgroundColor: c.hex }} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Variant Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="pdp-selector-block">
                <div className="selector-header">
                  <span>SIZE:</span>
                  <strong>{selectedSize}</strong>
                </div>
                <div className="size-chips-row">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`size-chip-btn ${s === selectedSize ? 'selected' : ''}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Main CTA Buttons */}
            <div className="pdp-purchase-actions">
              <div className="pdp-qty-stepper">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="qty-val">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button onClick={handleAddToCart} className="btn-add-to-bag">
                ACQUIRE FOR BAG • ₹{(product.price * quantity).toLocaleString('en-IN')}
              </button>

              <button
                onClick={() => {
                  toggleWishlist(product.id);
                  showToast(isFavorited ? 'Removed from wishlist' : 'Saved to wishlist', 'info');
                }}
                className={`btn-pdp-wishlist ${isFavorited ? 'favorited' : ''}`}
                aria-label="Save to Wishlist"
              >
                <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Postal Delivery Verification */}
            <div className="pdp-pincode-verifier">
              <div className="pincode-header">
                <MapPin size={16} />
                <span>CHECK WHITE-GLOVE ESTIMATED DELIVERY</span>
              </div>
              <form onSubmit={handleCheckPincode} className="pincode-form">
                <input
                  type="text"
                  placeholder="Enter 6-digit postal code"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <button type="submit">CHECK</button>
              </form>
              {pincodeResult && <p className="pincode-success-msg">{pincodeResult}</p>}
            </div>

            {/* Luxury Assurances */}
            <div className="pdp-assurances-grid">
              <div className="item">
                <Truck size={18} />
                <div>
                  <strong>COMPLIMENTARY AIR TRANSIT</strong>
                  <span>Insured express delivery nationwide</span>
                </div>
              </div>
              <div className="item">
                <RotateCcw size={18} />
                <div>
                  <strong>EFFORTLESS 14-DAY RETURNS</strong>
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

        {/* 4. Product Deep-Dive Tabs (Description, Specifications, Shipping, Reviews) */}
        <div className="pdp-tabs-section">
          <div className="tabs-header-bar">
            <button
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              DESCRIPTION & DETAILS
            </button>
            <button
              className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('specifications')}
            >
              CRAFT & SPECIFICATIONS
            </button>
            <button
              className={`tab-btn ${activeTab === 'delivery' ? 'active' : ''}`}
              onClick={() => setActiveTab('delivery')}
            >
              DELIVERY & RETURNS
            </button>
            <button
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
        <button onClick={handleAddToCart} className="btn-mobile-acquire">
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};
