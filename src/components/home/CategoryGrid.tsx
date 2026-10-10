import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES_CONFIG } from '../../data/mockData';
import { ArrowUpRight } from 'lucide-react';
import './CategoryGrid.scss';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="category-grid-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-eyebrow">CURATED SPHERES</span>
          <h2>SHOP BY ATELIER UNIVERSE</h2>
          <p>Explore distinct universes of craftsmanship, noble fabrics, and design integrity.</p>
        </div>

        <div className="editorial-category-mosaic">
          {CATEGORIES_CONFIG.slice(1, 7).map((cat, idx) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className={`mosaic-card mosaic-item-${idx + 1}`}
            >
              <img src={cat.image} alt={cat.name} loading="lazy" />
              <div className="mosaic-gradient" />
              <div className="mosaic-meta">
                <span className="cat-caption">{cat.description}</span>
                <div className="cat-title-row">
                  <h3>{cat.name}</h3>
                  <div className="arrow-circle">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

