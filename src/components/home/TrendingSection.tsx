import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../product/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './TrendingSection.scss';

export const TrendingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'men' | 'women' | 'accessories'>('all');

  const filteredProducts = activeTab === 'all'
    ? MOCK_PRODUCTS
    : MOCK_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section className="trending-section">
      <div className="container">
        <div className="trending-header-row">
          <div className="title-block">
            <span className="eyebrow">CURATED SIGNATURES</span>
            <h2>TRENDING CREATIONS</h2>
          </div>

          {/* Category Tabs */}
          <div className="trending-tabs">
            <button
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              ALL CREATIONS
            </button>
            <button
              className={`tab-btn ${activeTab === 'men' ? 'active' : ''}`}
              onClick={() => setActiveTab('men')}
            >
              MEN
            </button>
            <button
              className={`tab-btn ${activeTab === 'women' ? 'active' : ''}`}
              onClick={() => setActiveTab('women')}
            >
              WOMEN
            </button>
            <button
              className={`tab-btn ${activeTab === 'accessories' ? 'active' : ''}`}
              onClick={() => setActiveTab('accessories')}
            >
              ACCESSORIES
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="trending-grid">
          {filteredProducts.slice(0, 4).map((product, idx) => (
            <ProductCard key={product.id} product={product} ranking={idx + 1} />
          ))}
        </div>

        <div className="section-footer-cta">
          <Link to="/shop" className="btn-view-all">
            <span>VIEW COMPLETE CATALOGUE</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

