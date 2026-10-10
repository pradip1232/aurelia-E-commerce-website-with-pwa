import React, { useState, useRef } from 'react';
import { MOCK_PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../product/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Reveal } from '../../animations/Reveal';
import './TrendingSection.scss';

type TrendingCategory = 'all' | 'men' | 'women' | 'timepieces' | 'leathergoods' | 'jewelry';

export const TrendingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TrendingCategory>('all');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProducts = activeTab === 'all'
    ? MOCK_PRODUCTS.filter((p) => p.badges.includes('BESTSELLER') || p.rating >= 4.8)
    : MOCK_PRODUCTS.filter((p) => p.category === activeTab);

  const displayProducts = filteredProducts.slice(0, 8);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="trending-section" id="trending-creations">
      <div className="container">
        {/* Header Row */}
        <Reveal variant="fade-up">
          <div className="trending-header-row">
            <div className="title-block">
              <span className="eyebrow">
                <Sparkles size={14} className="eyebrow-icon" />
                ACQUISITIONS OF DISTINCTION
              </span>
              <h2>TRENDING CREATIONS</h2>
              <p className="subtitle">
                The atelier's most coveted silhouettes, horological complications, and fine leathercraft.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="trending-tabs-wrap">
              <div className="trending-tabs" role="tablist">
                <button
                  className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                  role="tab"
                  aria-selected={activeTab === 'all'}
                >
                  ALL SIGNATURES
                </button>
                <button
                  className={`tab-btn ${activeTab === 'men' ? 'active' : ''}`}
                  onClick={() => setActiveTab('men')}
                  role="tab"
                  aria-selected={activeTab === 'men'}
                >
                  MEN'S
                </button>
                <button
                  className={`tab-btn ${activeTab === 'women' ? 'active' : ''}`}
                  onClick={() => setActiveTab('women')}
                  role="tab"
                  aria-selected={activeTab === 'women'}
                >
                  WOMEN'S
                </button>
                <button
                  className={`tab-btn ${activeTab === 'timepieces' ? 'active' : ''}`}
                  onClick={() => setActiveTab('timepieces')}
                  role="tab"
                  aria-selected={activeTab === 'timepieces'}
                >
                  TIMEPIECES
                </button>
                <button
                  className={`tab-btn ${activeTab === 'leathergoods' ? 'active' : ''}`}
                  onClick={() => setActiveTab('leathergoods')}
                  role="tab"
                  aria-selected={activeTab === 'leathergoods'}
                >
                  LEATHERGOODS
                </button>
                <button
                  className={`tab-btn ${activeTab === 'jewelry' ? 'active' : ''}`}
                  onClick={() => setActiveTab('jewelry')}
                  role="tab"
                  aria-selected={activeTab === 'jewelry'}
                >
                  JEWELLERY
                </button>
              </div>

              {/* View Mode & Carousel Scroll Controls */}
              <div className="trending-controls">
                <button
                  className={`mode-btn ${viewMode === 'carousel' ? 'active' : ''}`}
                  onClick={() => setViewMode('carousel')}
                  title="Carousel View"
                  aria-label="Switch to carousel view"
                >
                  <SlidersHorizontal size={15} />
                </button>
                <button
                  className={`mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                  aria-label="Switch to grid view"
                >
                  <LayoutGrid size={15} />
                </button>

                {viewMode === 'carousel' && (
                  <div className="scroll-arrows">
                    <button
                      onClick={() => scroll('left')}
                      className="arrow-nav-btn"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => scroll('right')}
                      className="arrow-nav-btn"
                      aria-label="Scroll right"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Products Display (Carousel vs Grid) */}
        {viewMode === 'carousel' ? (
          <div className="trending-carousel-container" ref={scrollRef}>
            <div className="trending-carousel-track">
              {displayProducts.map((product, idx) => (
                <div key={product.id} className="carousel-card-item">
                  <ProductCard product={product} ranking={idx + 1} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="trending-grid">
            {displayProducts.map((product, idx) => (
              <Reveal key={product.id} variant="fade-up" delay={idx * 60}>
                <ProductCard product={product} ranking={idx + 1} />
              </Reveal>
            ))}
          </div>
        )}

        {/* Section Footer CTA */}
        <Reveal variant="fade-up" delay={150}>
          <div className="section-footer-cta">
            <Link
              to={activeTab === 'all' ? '/shop' : `/category/${activeTab}`}
              className="btn-view-all"
            >
              <span>EXPLORE ALL {activeTab.toUpperCase()} CREATIONS</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
