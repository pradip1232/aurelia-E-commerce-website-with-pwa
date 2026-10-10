import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../product/ProductCard';
import { ArrowRight, Sparkles, Tag, Check, Copy } from 'lucide-react';
import { Reveal } from '../../animations/Reveal';
import { useUIStore } from '../../stores/useUIStore';
import './NewArrivalsSection.scss';

type NewArrivalsFilter = 'all' | 'couture' | 'timepieces' | 'leathergoods' | 'jewelry';

export const NewArrivalsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<NewArrivalsFilter>('all');
  const [copiedCode, setCopiedCode] = useState(false);
  const { showToast } = useUIStore();

  const allNewProducts = MOCK_PRODUCTS.filter((p) => p.badges.includes('NEW'));

  const filteredProducts = allNewProducts.filter((product) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'couture') return ['men', 'women'].includes(product.category);
    if (activeCategory === 'timepieces') return product.category === 'timepieces';
    if (activeCategory === 'leathergoods') return product.category === 'leathergoods';
    if (activeCategory === 'jewelry') return product.category === 'jewelry';
    return true;
  });

  const displayProducts = filteredProducts.slice(0, 8);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    showToast(`Privilege code ${code} copied to clipboard`, 'success');
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section className="new-arrivals-exclusive-section" id="new-arrivals-showcase">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <div className="arrivals-header-row">
            <div className="title-block">
              <span className="eyebrow">
                <Sparkles size={14} className="sparkle-icon" />
                FRESH FROM THE WORKSHOPS • SPRING 2026
              </span>
              <h2>NEW ARRIVALS & EXCLUSIVE PRIVILEGES</h2>
              <p className="subtitle">
                The inaugural release of our Spring / Summer silhouettes, freshly arrived from our Florentine and Indian ateliers.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="arrivals-filter-tabs" role="tablist">
              <button
                className={`tab-pill ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
                role="tab"
                aria-selected={activeCategory === 'all'}
              >
                ALL NEW ({allNewProducts.length})
              </button>
              <button
                className={`tab-pill ${activeCategory === 'couture' ? 'active' : ''}`}
                onClick={() => setActiveCategory('couture')}
                role="tab"
                aria-selected={activeCategory === 'couture'}
              >
                COUTURE
              </button>
              <button
                className={`tab-pill ${activeCategory === 'timepieces' ? 'active' : ''}`}
                onClick={() => setActiveCategory('timepieces')}
                role="tab"
                aria-selected={activeCategory === 'timepieces'}
              >
                HORLOGERIE
              </button>
              <button
                className={`tab-pill ${activeCategory === 'leathergoods' ? 'active' : ''}`}
                onClick={() => setActiveCategory('leathergoods')}
                role="tab"
                aria-selected={activeCategory === 'leathergoods'}
              >
                LEATHERGOODS
              </button>
              <button
                className={`tab-pill ${activeCategory === 'jewelry' ? 'active' : ''}`}
                onClick={() => setActiveCategory('jewelry')}
                role="tab"
                aria-selected={activeCategory === 'jewelry'}
              >
                FINE JEWELS
              </button>
            </div>
          </div>
        </Reveal>

        {/* Product Grid */}
        <div className="arrivals-grid">
          {displayProducts.map((product, idx) => (
            <Reveal key={product.id} variant="fade-up" delay={idx * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {/* Exclusive Privilege Offer Banner */}
        <Reveal variant="fade-up" delay={150}>
          <div className="exclusive-privilege-banner">
            <div className="privilege-content">
              <div className="privilege-badge">
                <Tag size={14} />
                <span>SEASONAL CLIENT PRIVILEGE</span>
              </div>
              <h3>COMPLIMENTARY 20% PRIVILEGE ON ORDERS OVER ₹25,000</h3>
              <p>
                Experience our bespoke white-glove packaging, handwritten provenance certificate, and complimentary express air delivery across India.
              </p>

              <div className="privilege-actions">
                <button
                  className="code-pill-btn"
                  onClick={() => handleCopyCode('LUXURY20')}
                  title="Click to copy privilege code"
                >
                  <span className="code-label">PROMO CODE:</span>
                  <span className="code-value">LUXURY20</span>
                  {copiedCode ? <Check size={14} className="check-icon" /> : <Copy size={14} />}
                </button>

                <Link to="/new-arrivals" className="btn-shop-privilege">
                  <span>SHOP NEW ARRIVALS</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="privilege-decoration" aria-hidden="true">
              <span className="seal-text">AURELIA ATELIER • SPRING 2026</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
