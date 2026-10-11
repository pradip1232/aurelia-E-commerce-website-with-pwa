import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Reveal } from '../../animations/Reveal';
import './RunwayLookbook.scss';

interface RunwayLook {
  id: number;
  lookNumber: string;
  season: string;
  headline: string;
  description: string;
  image: string;
  category: string;
  link: string;
  pieces: { name: string; price: string }[];
}

const RUNWAY_LOOKS: RunwayLook[] = [
  {
    id: 1,
    lookNumber: 'LOOK 01',
    season: 'SS26 PRÊT-À-PORTER',
    headline: 'THE FLORENTINE GRAND OVERCOAT & OBSIDIAN HORLOGERIE',
    description: 'Double-breasted Mongolian cashmere sculpted with soft unstructured Neapolitan shoulders, paired with our hand-bevelled Calibre 1888 chronographe.',
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1400&q=85',
    category: "Men's Couture & Timepieces",
    link: '/category/men',
    pieces: [
      { name: 'Double-Breasted Cashmere Overcoat', price: '₹34,999' },
      { name: 'Calibre 1888 Obsidian Tourbillon', price: '₹42,999' },
      { name: 'Hand-Rolled Jacquard Silk Tie', price: '₹4,999' }
    ]
  },
  {
    id: 2,
    lookNumber: 'LOOK 02',
    season: 'SS26 PRÊT-À-PORTER',
    headline: 'ARCHITECTURAL MULBERRY SILK & SOVEREIGN EMERALDS',
    description: 'Bias-cut 22-momme pure mulberry silk in muted champagne, complemented by certified 18K sovereign gold clasping untreated Zambian emeralds.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85',
    category: "Women's Atelier & Fine Jewels",
    link: '/category/women',
    pieces: [
      { name: 'Sculpted Mulberry Silk Slip Dress', price: '₹22,999' },
      { name: '18K Sovereign Emerald Pendant', price: '₹48,999' },
      { name: 'Pastiche Lambskin Evening Minaudière', price: '₹18,499' }
    ]
  },
  {
    id: 3,
    lookNumber: 'LOOK 03',
    season: 'SS26 PRÊT-À-PORTER',
    headline: 'TUSCAN BRIDLE SADDLE LEATHER & EQUESTRIAN REFINEMENT',
    description: 'Full-grain vegetable-tanned bridle leather hand-waxed with linen thread, paired with hand-lasted Goodyear-welted oxfords engineered for lifetime wear.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1400&q=85',
    category: 'Leathergoods & Footwear',
    link: '/category/leathergoods',
    pieces: [
      { name: 'The Sovereign Weekender Trunk', price: '₹28,999' },
      { name: 'Hand-Lasted Italian Derby Shoes', price: '₹14,999' },
      { name: 'Burnished Brass Buckle Belt', price: '₹5,499' }
    ]
  }
];

export const RunwayLookbook: React.FC = () => {
  const [activeLookIdx, setActiveLookIdx] = useState(0);

  const activeLook = RUNWAY_LOOKS[activeLookIdx];

  const handlePrev = () => {
    setActiveLookIdx((prev) => (prev === 0 ? RUNWAY_LOOKS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveLookIdx((prev) => (prev + 1) % RUNWAY_LOOKS.length);
  };

  return (
    <section className="runway-lookbook-section" id="runway-lookbook">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <div className="lookbook-header-row">
            <div className="title-block">
              <span className="eyebrow">
                <Sparkles size={14} className="sparkle-icon" />
                SPRING / SUMMER 2026 RUNWAY
              </span>
              <h2>L'ATELIER EN MOUVEMENT</h2>
              <p className="subtitle">
                An intimate editorial exploration of movement, fluid proportions, and textural dialogue.
              </p>
            </div>

            <div className="lookbook-nav-controls">
              <div className="look-index-counter">
                <span className="current">0{activeLookIdx + 1}</span>
                <span className="sep">/</span>
                <span className="total">0{RUNWAY_LOOKS.length}</span>
              </div>
              <div className="nav-btn-group">
                <button
                  onClick={handlePrev}
                  className="lookbook-arrow-btn"
                  aria-label="Previous runway look"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="lookbook-arrow-btn"
                  aria-label="Next runway look"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Featured Runway Stage */}
        <div className="runway-stage-layout">
          {/* Main Editorial Visual Display */}
          <div className="runway-visual-frame" key={`look-img-${activeLook.id}`}>
            <img
              src={activeLook.image}
              alt={activeLook.headline}
              className="runway-look-img"
              loading="lazy"
            />
            <div className="look-badge-overlay">
              <span className="pill-look">{activeLook.lookNumber}</span>
              <span className="pill-season">{activeLook.season}</span>
            </div>
            <div className="look-gradient-shadow" />
          </div>

          {/* Narrative & Shoppable Look Breakdown */}
          <div className="runway-details-card" key={`look-meta-${activeLook.id}`}>
            <div className="details-header">
              <span className="category-tag">{activeLook.category}</span>
              <h3 className="look-headline">{activeLook.headline}</h3>
              <p className="look-desc">{activeLook.description}</p>
            </div>

            {/* Shoppable Pieces in Look */}
            <div className="pieces-breakdown-box">
              <span className="box-title">
                <Eye size={13} />
                PIECES FEATURED IN THIS ENSEMBLE:
              </span>
              <ul className="pieces-list">
                {activeLook.pieces.map((piece, pIdx) => (
                  <li key={pIdx} className="piece-item">
                    <span className="piece-name">{piece.name}</span>
                    <span className="piece-price">{piece.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTAs */}
            <div className="look-actions-row">
              <Link to={activeLook.link} className="btn-shop-look">
                <span>SHOP THIS ENSEMBLE</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/shop" className="btn-all-runway">
                <span>VIEW FULL RUNWAY</span>
              </Link>
            </div>

            {/* Look Selector Indicator Pills */}
            <div className="look-selector-tabs">
              {RUNWAY_LOOKS.map((look, idx) => (
                <button
                  key={look.id}
                  className={`tab-look-selector ${idx === activeLookIdx ? 'active' : ''}`}
                  onClick={() => setActiveLookIdx(idx)}
                >
                  <span className="num">{look.lookNumber}</span>
                  <span className="title">{look.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
