import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES_CONFIG } from '../../data/mockData';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { Reveal } from '../../animations/Reveal';
import './CategoryGrid.scss';

type CategoryFilter = 'featured' | 'couture' | 'horlogerie' | 'maison' | 'all';

export const CategoryGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('featured');

  const getFilteredCategories = () => {
    switch (activeFilter) {
      case 'couture':
        return CATEGORIES_CONFIG.filter((c) =>
          ['men', 'women', 'footwear', 'kids'].includes(c.slug)
        );
      case 'horlogerie':
        return CATEGORIES_CONFIG.filter((c) =>
          ['timepieces', 'jewelry', 'eyewear'].includes(c.slug)
        );
      case 'maison':
        return CATEGORIES_CONFIG.filter((c) =>
          ['leathergoods', 'fragrance', 'home', 'beauty', 'electronics'].includes(c.slug)
        );
      case 'all':
        return CATEGORIES_CONFIG;
      case 'featured':
      default:
        // Featured selection: Men, Women, Leathergoods, Timepieces, Fine Jewellery, Haute Parfumerie
        return CATEGORIES_CONFIG.filter((c) =>
          ['men', 'women', 'leathergoods', 'timepieces', 'jewelry', 'fragrance'].includes(c.slug)
        );
    }
  };

  const categoriesToDisplay = getFilteredCategories();

  return (
    <section className="category-grid-section" id="curated-collections">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <div className="section-header-centered">
            <span className="section-eyebrow">
              <Sparkles size={14} className="icon-gold" />
              CURATED ATELIER SPHERES
            </span>
            <h2>THE ARCHITECTURAL COLLECTIONS</h2>
            <p>
              Explore thirteen distinct universes of craftsmanship, noble materials, and enduring design integrity.
            </p>

            {/* Filter Pills */}
            <div className="category-filter-pills" role="tablist">
              <button
                className={`pill-btn ${activeFilter === 'featured' ? 'active' : ''}`}
                onClick={() => setActiveFilter('featured')}
                role="tab"
                aria-selected={activeFilter === 'featured'}
              >
                FEATURED MOSAIC
              </button>
              <button
                className={`pill-btn ${activeFilter === 'couture' ? 'active' : ''}`}
                onClick={() => setActiveFilter('couture')}
                role="tab"
                aria-selected={activeFilter === 'couture'}
              >
                COUTURE & FOOTWEAR
              </button>
              <button
                className={`pill-btn ${activeFilter === 'horlogerie' ? 'active' : ''}`}
                onClick={() => setActiveFilter('horlogerie')}
                role="tab"
                aria-selected={activeFilter === 'horlogerie'}
              >
                TIMEPIECES & JEWELS
              </button>
              <button
                className={`pill-btn ${activeFilter === 'maison' ? 'active' : ''}`}
                onClick={() => setActiveFilter('maison')}
                role="tab"
                aria-selected={activeFilter === 'maison'}
              >
                LEATHERGOODS & MAISON
              </button>
              <button
                className={`pill-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
                role="tab"
                aria-selected={activeFilter === 'all'}
              >
                VIEW ALL 13 REALMS
              </button>
            </div>
          </div>
        </Reveal>

        {/* Editorial Mosaic Grid */}
        <div className={`editorial-category-mosaic mosaic-filter-${activeFilter}`}>
          {categoriesToDisplay.map((cat, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <Reveal
                key={cat.slug}
                variant="fade-up"
                delay={idx * 80}
                className={`mosaic-card-wrap ${isLarge && activeFilter === 'featured' ? 'card-featured-wide' : ''}`}
              >
                <Link
                  to={`/category/${cat.slug}`}
                  className="mosaic-card"
                  aria-label={`Explore ${cat.name} collection`}
                >
                  <div className="mosaic-image-wrapper">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="mosaic-img"
                    />
                    <div className="mosaic-curtain-reveal" />
                  </div>

                  <div className="mosaic-gradient" />

                  <div className="mosaic-meta">
                    <div className="mosaic-meta-top">
                      <span className="cat-badge">{cat.itemCount || 'Curated Collection'}</span>
                    </div>

                    <div className="mosaic-meta-bottom">
                      <span className="cat-caption">{cat.description}</span>
                      <div className="cat-title-row">
                        <h3>{cat.name}</h3>
                        <div className="arrow-circle" aria-hidden="true">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* All Categories Quick Links Bar */}
        <Reveal variant="fade-up" delay={200}>
          <div className="categories-quick-footer">
            <span className="quick-label">
              <Compass size={15} />
              DISCOVER EVERY UNIVERSE:
            </span>
            <div className="quick-tags">
              {CATEGORIES_CONFIG.map((c) => (
                <Link key={c.slug} to={`/category/${c.slug}`} className="quick-tag-pill">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
