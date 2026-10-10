import React, { useEffect, useRef } from 'react';
import { useUIStore } from '../../../stores/useUIStore';
import { MOCK_PRODUCTS, CATEGORIES_CONFIG } from '../../../data/mockData';
import { Search, X, TrendingUp, Clock, ArrowRight, Download, Smartphone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { usePWA } from '../../../pwa';
import { useScrollLock } from '../../../hooks/useScrollLock';
import './index.scss';

export const SearchOverlay: React.FC = () => {
  const {
    isSearchOpen,
    closeSearch,
    searchQuery,
    setSearchQuery,
    recentSearches,
    addRecentSearch,
    clearRecentSearches,
  } = useUIStore();

  const navigate = useNavigate();
  const { isInstallable, isInstalled, promptInstall } = usePWA();
  const inputRef = useRef<HTMLInputElement>(null);

  useScrollLock(isSearchOpen);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const query = searchQuery.trim().toLowerCase();
  const isAppSearch =
    query.includes('app') ||
    query.includes('download') ||
    query.includes('install') ||
    query.includes('pwa') ||
    query.includes('apk');

  const matchedProducts = query
    ? MOCK_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      )
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    addRecentSearch(searchQuery.trim());
    closeSearch();
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handleSelectRecent = (term: string) => {
    setSearchQuery(term);
    addRecentSearch(term);
    closeSearch();
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className="atelier-search-overlay" onClick={closeSearch} role="dialog" aria-modal="true">
      <div className="atelier-search-overlay__dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header Input */}
        <div className="atelier-search-overlay__header">
          <form onSubmit={handleSearchSubmit} className="atelier-search-overlay__form">
            <Search size={22} className="atelier-search-overlay__search-icon" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search by collection, garment, silhouette, or material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="atelier-search-overlay__input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="atelier-search-overlay__clear-btn"
                aria-label="Clear search input"
              >
                <X size={18} />
              </button>
            )}
          </form>
          <button
            type="button"
            onClick={closeSearch}
            className="atelier-search-overlay__close-btn"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        {/* Body Content */}
        <div className="atelier-search-overlay__body">
          {/* PWA Download Banner when installable or app-related query */}
          {((isInstallable && !isInstalled) || isAppSearch) && (
            <div className="atelier-search-overlay__app-promo">
              <div className="atelier-search-overlay__app-icon">
                <Smartphone size={24} />
              </div>
              <div className="atelier-search-overlay__app-info">
                <h4>AURELIA ATELIER MOBILE APP</h4>
                <p>Install our Progressive Web App for instant access, offline mode & push notifications.</p>
              </div>
              <button
                type="button"
                onClick={promptInstall}
                className="atelier-search-overlay__app-install-btn"
              >
                <Download size={15} />
                <span>INSTALL APP</span>
              </button>
            </div>
          )}

          {query ? (
            <div className="atelier-search-overlay__results">
              <div className="atelier-search-overlay__results-header">
                <h5>MATCHING CREATIONS ({matchedProducts.length})</h5>
                {matchedProducts.length > 0 && (
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="atelier-search-overlay__view-all"
                  >
                    View all results <ArrowRight size={13} />
                  </button>
                )}
              </div>

              {matchedProducts.length === 0 ? (
                <div className="atelier-search-overlay__empty">
                  <p>No bespoke creations found for "{searchQuery}".</p>
                  <span>Try searching for 'cashmere', 'silk', 'watch', 'jacket', or 'leather'.</span>
                </div>
              ) : (
                <div className="atelier-search-overlay__grid">
                  {matchedProducts.slice(0, 6).map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.slug}`}
                      onClick={closeSearch}
                      className="atelier-search-overlay__card"
                    >
                      <img src={product.images[0]} alt={product.name} />
                      <div className="atelier-search-overlay__card-info">
                        <span className="brand">{product.brand}</span>
                        <h6>{product.name}</h6>
                        <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="atelier-search-overlay__default-state">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="atelier-search-overlay__section">
                  <div className="atelier-search-overlay__section-header">
                    <h6>
                      <Clock size={14} /> RECENT SEARCHES
                    </h6>
                    <button type="button" onClick={clearRecentSearches} className="clear-link">
                      Clear
                    </button>
                  </div>
                  <div className="atelier-search-overlay__tags">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => handleSelectRecent(term)}
                        className="atelier-search-overlay__tag"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              <div className="atelier-search-overlay__section">
                <h6>
                  <TrendingUp size={14} /> TRENDING IN THE ATELIER
                </h6>
                <div className="atelier-search-overlay__tags">
                  {['Cashmere Knitwear', 'Trench Coats', 'Silk Evening Dress', 'Leather Loafers', 'Fine Chronograph', 'Tailored Suiting'].map(
                    (tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleSelectRecent(tag)}
                        className="atelier-search-overlay__tag atelier-search-overlay__tag--trending"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Browse Categories */}
              <div className="atelier-search-overlay__section">
                <h6>EXPLORE BY CATEGORY</h6>
                <div className="atelier-search-overlay__categories-grid">
                  {CATEGORIES_CONFIG.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/category/${cat.slug}`}
                      onClick={closeSearch}
                      className="atelier-search-overlay__cat-pill"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
