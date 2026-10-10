import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS, CATEGORIES_CONFIG } from '@/data/mockData';
import { ProductCard } from '@/components/product/ProductCard';
import { Breadcrumbs } from '@/layouts/Breadcrumbs';
import { PageTransition } from '@/animations/PageTransition';
import { Reveal } from '@/animations/Reveal';
import { SlidersHorizontal, ChevronDown, X, Grid, List } from 'lucide-react';
import './index.scss';

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
  const [visibleCount, setVisibleCount] = useState(8);

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
      if (minRating !== null && product.rating < minRating) {
        return false;
      }

      // In stock
      if (inStockOnly && product.stock <= 0) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.badges.includes('NEW') ? 1 : -1;
      return 0; // recommended
    });
  }, [categorySlug, selectedBrands, selectedSizes, selectedPriceRange, minRating, inStockOnly, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const resetAllFilters = () => {
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
    <PageTransition>
      <div className="atelier-plp-page">
        {/* Banner */}
        <section className="atelier-plp-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: 'Shop', href: '/shop' },
                ...(categorySlug ? [{ label: pageTitle }] : []),
              ]}
            />
            <Reveal variant="fade-up">
              <h1 className="atelier-plp-hero__title">{pageTitle}</h1>
              <p className="atelier-plp-hero__subtitle">
                {currentCategory?.description ||
                  'Explore our curated collections of luxury craftsmanship, rare horology, and noble essentials.'}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Catalog Main Flow */}
        <div className="container atelier-plp-layout">
          {/* Desktop Filter Sidebar */}
          <aside className="atelier-plp-sidebar">
            <div className="sidebar-header">
              <h3>FILTERS</h3>
              {hasActiveFilters && (
                <button type="button" onClick={resetAllFilters} className="clear-all-btn">
                  Reset
                </button>
              )}
            </div>

            {/* Filter by Brand */}
            <div className="filter-group">
              <h4>MAISON & BRAND</h4>
              <div className="filter-list">
                {allBrands.map((brand) => (
                  <label key={brand} className="filter-checkbox-row">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={(e) => {
                        if (e.target.checked) setSelectedBrands([...selectedBrands, brand]);
                        else setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                      }}
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Price */}
            <div className="filter-group">
              <div className="price-header">
                <h4>MAXIMUM INVESTMENT</h4>
                <span className="price-val">₹{selectedPriceRange.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={120000}
                step={2000}
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                className="price-slider"
              />
            </div>

            {/* Filter by Size */}
            <div className="filter-group">
              <h4>SIZES</h4>
              <div className="size-pill-grid">
                {allSizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => {
                      if (selectedSizes.includes(sz)) setSelectedSizes(selectedSizes.filter((s) => s !== sz));
                      else setSelectedSizes([...selectedSizes, sz]);
                    }}
                    className={`size-filter-pill ${selectedSizes.includes(sz) ? 'is-active' : ''}`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="filter-group">
              <h4>AVAILABILITY</h4>
              <label className="filter-checkbox-row">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                />
                <span>In Stock & Ready for Courier</span>
              </label>
            </div>
          </aside>

          {/* Product Gallery Section */}
          <main className="atelier-plp-gallery">
            {/* Toolbar */}
            <div className="gallery-toolbar">
              <div className="toolbar-left">
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="mobile-filter-trigger"
                >
                  <SlidersHorizontal size={16} />
                  <span>Filters {hasActiveFilters && `(${selectedBrands.length + selectedSizes.length})`}</span>
                </button>
                <span className="product-count">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'Creation' : 'Creations'}
                </span>
              </div>

              <div className="toolbar-right">
                <div className="sort-wrap">
                  <span className="sort-label">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    <option value="recommended">Curated / Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Patron Rating</option>
                    <option value="newest">Seasonal New Drops</option>
                  </select>
                </div>

                <div className="view-mode-toggle">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className={`mode-btn ${viewMode === 'grid' ? 'is-active' : ''}`}
                    aria-label="Grid layout"
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    className={`mode-btn ${viewMode === 'list' ? 'is-active' : ''}`}
                    aria-label="List layout"
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Pills */}
            {hasActiveFilters && (
              <div className="active-filter-pills">
                {selectedBrands.map((b) => (
                  <span key={b} className="active-pill">
                    {b}
                    <button type="button" onClick={() => setSelectedBrands(selectedBrands.filter((x) => x !== b))}>
                      <X size={12} />
                    </button>
                  </span>
                ))}
                {selectedSizes.map((s) => (
                  <span key={s} className="active-pill">
                    Size: {s}
                    <button type="button" onClick={() => setSelectedSizes(selectedSizes.filter((x) => x !== s))}>
                      <X size={12} />
                    </button>
                  </span>
                ))}
                {selectedPriceRange < 120000 && (
                  <span className="active-pill">
                    Under ₹{selectedPriceRange.toLocaleString('en-IN')}
                    <button type="button" onClick={() => setSelectedPriceRange(120000)}>
                      <X size={12} />
                    </button>
                  </span>
                )}
                <button type="button" onClick={resetAllFilters} className="clear-all-inline">
                  Clear all
                </button>
              </div>
            )}

            {/* Grid */}
            {displayedProducts.length === 0 ? (
              <div className="no-products-view">
                <h3>No creations match your current criteria</h3>
                <p>Try resetting some of your selected filters to view other atelier pieces.</p>
                <button type="button" onClick={resetAllFilters} className="reset-btn">
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={`products-container ${viewMode === 'list' ? 'is-list-view' : 'is-grid-view'}`}>
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Load More Button */}
            {visibleCount < filteredProducts.length && (
              <div className="load-more-wrap">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="load-more-btn"
                >
                  LOAD MORE CREATIONS ({filteredProducts.length - visibleCount} REMAINING)
                </button>
              </div>
            )}
          </main>
        </div>

        {/* Mobile Filter Drawer */}
        {isMobileFilterOpen && (
          <div className="mobile-filter-backdrop" onClick={() => setIsMobileFilterOpen(false)}>
            <div className="mobile-filter-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="drawer-header">
                <h3>FILTERS</h3>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="drawer-close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="drawer-body">
                {/* Mobile Brands */}
                <div className="filter-group">
                  <h4>MAISON & BRAND</h4>
                  <div className="filter-list">
                    {allBrands.map((brand) => (
                      <label key={brand} className="filter-checkbox-row">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={(e) => {
                            if (e.target.checked) setSelectedBrands([...selectedBrands, brand]);
                            else setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                          }}
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mobile Price */}
                <div className="filter-group">
                  <div className="price-header">
                    <h4>MAXIMUM INVESTMENT</h4>
                    <span className="price-val">₹{selectedPriceRange.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={120000}
                    step={2000}
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                    className="price-slider"
                  />
                </div>

                {/* Mobile Sizes */}
                <div className="filter-group">
                  <h4>SIZES</h4>
                  <div className="size-pill-grid">
                    {allSizes.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => {
                          if (selectedSizes.includes(sz)) setSelectedSizes(selectedSizes.filter((s) => s !== sz));
                          else setSelectedSizes([...selectedSizes, sz]);
                        }}
                        className={`size-filter-pill ${selectedSizes.includes(sz) ? 'is-active' : ''}`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="drawer-footer">
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="drawer-reset-btn"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="drawer-apply-btn"
                >
                  Show {filteredProducts.length} Creations
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default ProductListingPage;
