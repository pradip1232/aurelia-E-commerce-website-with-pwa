import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/data/mockData';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Reveal } from '@/animations/Reveal';
import './index.scss';

const TABS = [
  { id: 'all', label: 'ALL CREATIONS' },
  { id: 'men', label: 'MEN' },
  { id: 'women', label: 'WOMEN' },
  { id: 'accessories', label: 'ACCESSORIES & HOROLOGY' },
];

export const TrendingCreations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all'
    ? MOCK_PRODUCTS.slice(0, 8)
    : MOCK_PRODUCTS.filter((p) => p.category === activeTab).slice(0, 8);

  return (
    <section className="atelier-trending" aria-label="Trending Creations">
      <div className="atelier-trending__container">
        <Reveal variant="fade-up">
          <div className="atelier-trending__header">
            <span className="eyebrow">HIGH SOUGHT-AFTER</span>
            <h2 className="title">TRENDING IN THE ATELIER</h2>
            <p className="subtitle">
              Sartorial masterpieces and limited creations commanding global attention.
            </p>
          </div>
        </Reveal>

        {/* Tab Switcher */}
        <Reveal variant="fade-up" delay={150}>
          <div className="atelier-trending__tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product Grid */}
        <div className="atelier-trending__grid-wrap">
          <ProductGrid products={filteredProducts} columns={4} />
        </div>

        {/* Explore All CTA */}
        <Reveal variant="fade-up" delay={200}>
          <div className="atelier-trending__footer">
            <Link to="/shop" className="explore-all-btn">
              <span>EXPLORE COMPLETE SHOWROOM</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrendingCreations;
