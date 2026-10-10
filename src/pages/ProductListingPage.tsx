import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS, CATEGORIES_CONFIG } from '../data/mockData';
import { ProductCard } from '../components/product/ProductCard';
import { SlidersHorizontal, ChevronDown, X, Grid, List } from 'lucide-react';
import './ProductListingPage.scss';

export const ProductListingPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();

  // Filters State
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number>(120000);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<string>('recommended');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Load more pagination state
  const [visibleCount, setVisibleCount] = useState(6);

  // Active Category Meta
  const currentCategory = CATEGORIES_CONFIG.find((c) => c.slug === categorySlug);
  const pageTitle = currentCategory
    ? currentCategory.name
    : categorySlug
    ? categorySlug.toUpperCase()
    : 'ALL CREATIONS';

  // Compute Available Filter Options
  const allBrands = useMemo(() => Array.from(new Set(MOCK_PRODUCTS.map((p) => p.brand))), []);
  const allSizes = useMemo(() => Array.from(new Set(MOCK_PRODUCTS.flatMap((p) => p.sizes))), []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      // Category match
      if (categorySlug && categorySlug !== 'new-arrivals') {
        if (product.category !== categorySlug) return false;
      }
      if (categorySlug === 'new-arrivals' && !product.badges.includes('NEW')) {
        return false;
      }

      // Brand match
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Size match
      if (selectedSizes.length > 0 && !selectedSizes.some((s) => product.sizes.includes(s))) {
        return false;
      }

      // Price match
      if (product.price > selectedPriceRange) {
        return false;
      }

      // Rating match
      if (minRating && product.rating < minRating) {
        return false;
      }

      // Stock
      if (inStockOnly && product.stock <= 0) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low-high') return a.price - b.price;
      if (sortBy === 'price-high-low') return b.price - a.price;
      if (sortBy === 'best-rated') return b.rating - a.rating;
      if (sortBy === 'discount') return b.discount - a.discount;
      return 0; // recommended
    });
  }, [categorySlug, selectedBrands, selectedSizes, selectedPriceRange, minRating, inStockOnly, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedPriceRange(120000);
    setMinRating(null);
    setInStockOnly(false);
  };

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    selectedSizes.length > 0 ||
    selectedPriceRange < 120000 ||
    minRating !== null ||
    inStockOnly;

  return (
    <div className="plp-page">
      {/* 1. Header Banner */}
      <div className="plp-hero-banner">
        <div className="container banner-inner">
          <nav className="plp-breadcrumb">
            <Link to="/">HOME</Link>
            <span>/</span>
            <Link to="/shop">SHOP</Link>
            {categorySlug && (
              <>
                <span>/</span>
                <span className="current">{pageTitle}</span>
              </>
            )}
          </nav>

          <h1 className="plp-heading">{pageTitle}</h1>
          <p className="plp-sub">
            {currentCategory?.description ||
              'Explore meticulously engineered pieces crafted from rare and noble materials.'}
          </p>
        </div>
      </div>

      <div className="container plp-layout-container">
        {/* 2. Controls Toolbar (Filter Toggle, Product Count, Sort Selector) */}
        <div className="plp-toolbar">
          <div className="toolbar-left">
            <button
              className="mobile-filter-trigger"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <SlidersHorizontal size={16} />
              <span>FILTERS {hasActiveFilters && `(Active)`}</span>
            </button>
            <span className="results-total">
              Showing <strong>{filteredProducts.length}</strong> creations
            </span>
          </div>

          <div className="toolbar-right">
            <div className="sort-wrapper">
              <label htmlFor="sort-select">SORT BY:</label>
              <div className="select-box">
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="recommended">Featured & Recommended</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="best-rated">Highest Customer Rating</option>
                  <option value="discount">Special Privilege Discount</option>
                </select>
                <ChevronDown size={14} className="chevron" />
              </div>
            </div>

            <div className="view-mode-toggle">
              <button
                className={`mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <Grid size={16} />
              </button>
              <button
                className={`mode-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Main Split Layout (Sidebar Filters + Products Grid) */}
        <div className="plp-body-grid">
          {/* Desktop Left Sidebar Filters */}
          <aside className={`plp-filters-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
            <div className="sidebar-header">
              <h3>FILTER CREATIONS</h3>
              {hasActiveFilters && (
                <button onClick={resetFilters} className="btn-reset">
                  Reset All
                </button>
              )}
              <button
                className="close-sidebar-btn"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Filter Group: Brands */}
            <div className="filter-group">
              <h4 className="group-title">MAISON & BRAND</h4>
              <div className="checkbox-list">
                {allBrands.map((brand) => (
                  <label key={brand} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedBrands([...selectedBrands, brand]);
                        } else {
                          setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                        }
                      }}
                    />
                    <span className="box" />
                    <span className="name">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Price Slider */}
            <div className="filter-group">
              <div className="title-price-val">
                <h4 className="group-title">MAX PRICE</h4>
                <span className="price-tag">₹{selectedPriceRange.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="120000"
                step="5000"
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                className="price-range-slider"
              />
              <div className="range-bounds">
                <span>₹5,000</span>
                <span>₹1,20,000</span>
              </div>
            </div>

            {/* Filter Group: Sizes */}
            <div className="filter-group">
              <h4 className="group-title">SIZE & PROPORTION</h4>
              <div className="size-chips-grid">
                {allSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size-filter-chip ${selectedSizes.includes(size) ? 'active' : ''}`}
                    onClick={() => {
                      if (selectedSizes.includes(size)) {
                        setSelectedSizes(selectedSizes.filter((s) => s !== size));
                      } else {
                        setSelectedSizes([...selectedSizes, size]);
                      }
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Group: Minimum Rating */}
            <div className="filter-group">
              <h4 className="group-title">CLIENT RATING</h4>
              <div className="rating-radio-list">
                {[4.8, 4.5, 4.0].map((r) => (
                  <label key={r} className="radio-label">
                    <input
                      type="radio"
                      name="minRating"
                      checked={minRating === r}
                      onChange={() => setMinRating(r)}
                    />
                    <span className="radio-circle" />
                    <span>{r} Stars & Above</span>
                  </label>
                ))}
                {minRating && (
                  <button onClick={() => setMinRating(null)} className="btn-clear-sub">
                    Clear rating
                  </button>
                )}
              </div>
            </div>

            {/* Filter Group: In Stock Only */}
            <div className="filter-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                />
                <span className="box" />
                <span className="name">In Stock & Immediate Dispatch</span>
              </label>
            </div>

            {/* Apply on Mobile button */}
            <div className="mobile-apply-bar">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="btn-apply-filters"
              >
                APPLY FILTERS ({filteredProducts.length})
              </button>
            </div>
          </aside>

          {/* Products Grid / Listing */}
          <main className="plp-products-content">
            {filteredProducts.length === 0 ? (
              <div className="plp-empty-state">
                <h3>No creations match your selected filters</h3>
                <p>Try resetting the price, brand, or size filters to view more creations.</p>
                <button onClick={resetFilters} className="btn-clear-all">
                  RESET ALL FILTERS
                </button>
              </div>
            ) : (
              <>
                <div className={`products-container ${viewMode}`}>
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Load More Pagination */}
                {visibleCount < filteredProducts.length && (
                  <div className="load-more-section">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 4)}
                      className="btn-load-more"
                    >
                      LOAD MORE CREATIONS
                    </button>
                    <span className="progress-note">
                      Showing {displayedProducts.length} of {filteredProducts.length} creations
                    </span>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

