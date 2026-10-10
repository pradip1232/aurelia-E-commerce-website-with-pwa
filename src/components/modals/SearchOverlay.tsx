import React from 'react';
import { useUIStore } from '../../stores/useUIStore';
import { MOCK_PRODUCTS, CATEGORIES_CONFIG } from '../../data/mockData';
import { Search, X, TrendingUp, Clock, ArrowRight, Download, Smartphone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { usePWA } from '../../pwa';
import './SearchOverlay.scss';

export const SearchOverlay: React.FC = () => {
  const {
    isSearchOpen,
    closeSearch,
    searchQuery,
    setSearchQuery,
    recentSearches,
    addRecentSearch,
    clearRecentSearches
  } = useUIStore();

  const navigate = useNavigate();
  const { isInstallable, isInstalled, promptInstall } = usePWA();

  if (!isSearchOpen) return null;

  // Filter products by current query
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
    <div className="search-overlay-backdrop" onClick={closeSearch}>
      <div className="search-overlay-panel" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="search-bar-header">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <Search size={22} className="search-icon" />
            <input
              type="text"
              placeholder="Search prêt-à-porter, timepieces, fragrances, leathercraft..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-query-btn"
                onClick={() => setSearchQuery('')}
              >
                <X size={18} />
              </button>
            )}
          </form>

          {/* Download App Option inside Search Bar */}
          {!isInstalled && (
            <button
              type="button"
              className="search-bar-download-btn"
              onClick={() => {
                promptInstall();
              }}
              title="Download & Install App"
              aria-label="Download Aurelia App"
            >
              <Download size={15} />
              <span className="download-label">Download App</span>
            </button>
          )}

          <button className="close-search-btn" onClick={closeSearch}>
            ESC
          </button>
        </div>

        {/* Content Body */}
        <div className="search-overlay-content">
          {searchQuery.trim().length > 0 ? (
            /* Live Instant Search Results */
            <div className="instant-results-view">
              <div className="results-header">
                <span className="results-count">
                  Found <strong>{matchedProducts.length}</strong> creations for "{searchQuery}"
                </span>
                {matchedProducts.length > 0 && (
                  <button
                    onClick={() => {
                      addRecentSearch(searchQuery);
                      closeSearch();
                      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                    }}
                    className="view-all-link"
                  >
                    <span>View all matching products</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>

              {/* App Download Suggestion when searching for app/download/install */}
              {isAppSearch && !isInstalled && (
                <div className="search-app-download-card">
                  <div className="app-card-badge">
                    <span>✦</span>
                  </div>
                  <div className="app-card-info">
                    <span className="eyebrow">OFFICIAL PROGRESSIVE WEB APP</span>
                    <h4>AURELIA ATELIER</h4>
                    <p>Install on your device for one-tap access, offline boutique browsing, and instant loading.</p>
                  </div>
                  <button
                    type="button"
                    className="btn-card-install"
                    onClick={() => {
                      promptInstall();
                      closeSearch();
                    }}
                  >
                    <Download size={16} />
                    <span>Download App</span>
                  </button>
                </div>
              )}

              {matchedProducts.length === 0 && !isAppSearch ? (
                <div className="no-matches-box">
                  <p>No creations match your query "{searchQuery}".</p>
                  <span>Try exploring our curated categories below.</span>
                </div>
              ) : (
                <div className="instant-products-grid">
                  {matchedProducts.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.slug}`}
                      onClick={() => {
                        addRecentSearch(searchQuery);
                        closeSearch();
                      }}
                      className="instant-product-item"
                    >
                      <div className="thumb">
                        <img src={p.images[0]} alt={p.name} />
                      </div>
                      <div className="details">
                        <span className="brand">{p.brand}</span>
                        <h4 className="title">{p.name}</h4>
                        <span className="price">₹{p.price.toLocaleString('en-IN')}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Empty Query View: Recents, Trending, & Categories */
            <div className="discovery-sections">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="discovery-group">
                  <div className="group-title-row">
                    <div className="title-tag">
                      <Clock size={16} />
                      <span>RECENT SEARCHES</span>
                    </div>
                    <button onClick={clearRecentSearches} className="btn-clear-text">
                      Clear
                    </button>
                  </div>
                  <div className="pill-list">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        className="search-pill"
                        onClick={() => handleSelectRecent(term)}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              <div className="discovery-group">
                <div className="group-title-row">
                  <div className="title-tag">
                    <TrendingUp size={16} />
                    <span>TRENDING DISCOVERIES</span>
                  </div>
                </div>
                <div className="pill-list">
                  {['Cashmere Overcoat', 'Chronograph Calibre 1888', 'Silk Midi Dress', 'Suede Chelsea Boots', 'Titanium Headphones'].map((term) => (
                    <button
                      key={term}
                      className="search-pill trending"
                      onClick={() => handleSelectRecent(term)}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* App Download Promo in Discovery */}
              {!isInstalled && (
                <div className="discovery-group app-discovery-banner">
                  <div className="banner-inner">
                    <div className="banner-left">
                      <div className="banner-tag">
                        <Smartphone size={14} />
                        <span>STANDALONE EXPERIENCE</span>
                      </div>
                      <h5>Download Aurelia Atelier App</h5>
                      <p>Add to your home screen or desktop for an ultra-fast, offline-capable experience.</p>
                    </div>
                    <button
                      type="button"
                      className="btn-discovery-download"
                      onClick={() => {
                        promptInstall();
                        closeSearch();
                      }}
                    >
                      <Download size={16} />
                      <span>Download App</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Popular Categories */}
              <div className="discovery-group">
                <span className="section-label">CURATED CATEGORIES</span>
                <div className="categories-preview-grid">
                  {CATEGORIES_CONFIG.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/category/${cat.slug}`}
                      onClick={closeSearch}
                      className="cat-card"
                    >
                      <img src={cat.image} alt={cat.name} />
                      <div className="cat-overlay">
                        <h5>{cat.name}</h5>
                      </div>
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

