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

  // Collapsible accordion state for compact filter sidebar
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    brand: false,
    price: false,
    size: false,
    rating: true, // collapsed by default to keep the sidebar short
  });

  const toggleSection = (section: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const SIZE_ORDER = [
    'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL',
    '36', '37', '38', '38R', '39', '40', '40R', '41', '42', '42R', '43', '44', '44R', '45', '46',
    'One Size', 'Standard',
  ];

  // Compute Available Filter Options (Sorted Alphabetically & Logically)
  const allBrands = useMemo(() => {
    return Array.from(new Set(MOCK_PRODUCTS.map((p) => p.brand))).sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: 'base' })
    );
  }, []);

  const allSizes = useMemo(() => {
    const uniqueSizes = Array.from(new Set(MOCK_PRODUCTS.flatMap((p) => p.sizes)));
    return uniqueSizes.sort((a, b) => {
      const idxA = SIZE_ORDER.indexOf(a);
      const idxB = SIZE_ORDER.indexOf(b);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
  }, []);

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
            {hasActiveFilters && (
              <button onClick={resetFilters} className="btn-toolbar-clear">
                Clear Filters
              </button>
            )}
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
          {/* Desktop Left Sidebar Filters (Shorter, Collapsible & Sorted) */}
          <aside className={`plp-filters-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
            <div className="sidebar-header">
              <h3>FILTERS</h3>
              {hasActiveFilters && (
                <button onClick={resetFilters} className="btn-reset">
                  Reset All
                </button>
              )}
              <button
                className="close-sidebar-btn"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Filter Group: Brands (Sorted A-Z & Scrollable) */}
            <div className="filter-group">
              <div className="group-title-row">
                <button
                  type="button"
                  className="group-title-btn"
                  onClick={() => toggleSection('brand')}
                  aria-expanded={!collapsedSections.brand}
                >
                  <span className="group-title">
                    MAISON & BRAND
                    {selectedBrands.length > 0 && (
                      <span className="active-badge">{selectedBrands.length}</span>
                    )}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`accordion-chevron ${collapsedSections.brand ? 'collapsed' : ''}`}
                  />
                </button>
                {selectedBrands.length > 0 && (
                  <button
                    type="button"
                    className="group-clear-btn"
                    onClick={() => setSelectedBrands([])}
                    title="Clear brand selections"
                  >
                    Clear
                  </button>
                )}
              </div>

              {!collapsedSections.brand && (
                <div className="checkbox-list scrollable-list">
                  {allBrands.map((brand) => (
                    <label key={brand} className="checkbox-label" title={brand}>
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
              )}
            </div>

            {/* Filter Group: Price Slider (Collapsible) */}
            <div className="filter-group">
              <div className="group-title-row">
                <button
                  type="button"
                  className="group-title-btn"
                  onClick={() => toggleSection('price')}
                  aria-expanded={!collapsedSections.price}
                >
                  <span className="group-title">
                    MAX PRICE
                    {selectedPriceRange < 120000 && (
                      <span className="active-badge">₹{(selectedPriceRange / 1000).toFixed(0)}k</span>
                    )}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`accordion-chevron ${collapsedSections.price ? 'collapsed' : ''}`}
                  />
                </button>
                {selectedPriceRange < 120000 && (
                  <button
                    type="button"
                    className="group-clear-btn"
                    onClick={() => setSelectedPriceRange(120000)}
                    title="Reset max price"
                  >
                    Clear
                  </button>
                )}
              </div>

              {!collapsedSections.price && (
                <div className="price-content">
                  <div className="price-tag-row">
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
                    <span>₹5k</span>
                    <span>₹120k</span>
                  </div>
                </div>
              )}
            </div>

            {/* Filter Group: Sizes (Sorted & Compact Pills) */}
            <div className="filter-group">
              <div className="group-title-row">
                <button
                  type="button"
                  className="group-title-btn"
                  onClick={() => toggleSection('size')}
                  aria-expanded={!collapsedSections.size}
                >
                  <span className="group-title">
                    SIZE & FIT
                    {selectedSizes.length > 0 && (
                      <span className="active-badge">{selectedSizes.length}</span>
                    )}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`accordion-chevron ${collapsedSections.size ? 'collapsed' : ''}`}
                  />
                </button>
                {selectedSizes.length > 0 && (
                  <button
                    type="button"
                    className="group-clear-btn"
                    onClick={() => setSelectedSizes([])}
                    title="Clear size selections"
                  >
                    Clear
                  </button>
                )}
              </div>

              {!collapsedSections.size && (
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
              )}
            </div>

            {/* Filter Group: Minimum Rating (Collapsible) */}
            <div className="filter-group">
              <div className="group-title-row">
                <button
                  type="button"
                  className="group-title-btn"
                  onClick={() => toggleSection('rating')}
                  aria-expanded={!collapsedSections.rating}
                >
                  <span className="group-title">
                    CLIENT RATING
                    {minRating !== null && (
                      <span className="active-badge">{minRating}★+</span>
                    )}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`accordion-chevron ${collapsedSections.rating ? 'collapsed' : ''}`}
                  />
                </button>
                {minRating !== null && (
                  <button
                    type="button"
                    className="group-clear-btn"
                    onClick={() => setMinRating(null)}
                    title="Clear rating filter"
                  >
                    Clear
                  </button>
                )}
              </div>

              {!collapsedSections.rating && (
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
              )}
            </div>

            {/* Filter Group: In Stock Only */}
            <div className="filter-group in-stock-group">
              <div className="in-stock-row">
                <label className="checkbox-label compact">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                  />
                  <span className="box" />
                  <span className="name">In Stock & Immediate Dispatch</span>
                </label>
                {inStockOnly && (
                  <button
                    type="button"
                    className="group-clear-btn"
                    onClick={() => setInStockOnly(false)}
                    title="Clear stock filter"
                  >
                    Clear
                  </button>
                )}
              </div>
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
            {/* Active Filter Chips Bar */}
            {hasActiveFilters && (
              <div className="active-filters-chips-bar">
                <span className="active-filters-label">Active:</span>
                <div className="chips-list">
                  {selectedBrands.map((brand) => (
                    <span key={brand} className="filter-chip">
                      <span>{brand}</span>
                      <button
                        type="button"
                        onClick={() => setSelectedBrands(selectedBrands.filter((b) => b !== brand))}
                        aria-label={`Remove brand ${brand}`}
                        title={`Remove ${brand}`}
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}

                  {selectedPriceRange < 120000 && (
                    <span className="filter-chip">
                      <span>Under ₹{selectedPriceRange.toLocaleString('en-IN')}</span>
                      <button
                        type="button"
                        onClick={() => setSelectedPriceRange(120000)}
                        aria-label="Remove price filter"
                        title="Remove price filter"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  )}

                  {selectedSizes.map((size) => (
                    <span key={size} className="filter-chip">
                      <span>Size: {size}</span>
                      <button
                        type="button"
                        onClick={() => setSelectedSizes(selectedSizes.filter((s) => s !== size))}
                        aria-label={`Remove size ${size}`}
                        title={`Remove size ${size}`}
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}

                  {minRating !== null && (
                    <span className="filter-chip">
                      <span>{minRating}★ & Above</span>
                      <button
                        type="button"
                        onClick={() => setMinRating(null)}
                        aria-label="Remove rating filter"
                        title="Remove rating filter"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  )}

                  {inStockOnly && (
                    <span className="filter-chip">
                      <span>In Stock</span>
                      <button
                        type="button"
                        onClick={() => setInStockOnly(false)}
                        aria-label="Remove stock filter"
                        title="Remove stock filter"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="btn-clear-all-chips"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}
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

