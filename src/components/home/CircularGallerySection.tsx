import React, { useState } from 'react';
import { CircularCarousel, CircularCarouselItem, CircularCarouselPreset } from '../ui/CircularCarousel';
import { Reveal } from '../../animations/Reveal';
import { Compass, Sparkles, Eye, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CircularGallerySection.scss';

// Curated Aurelia Atelier Creations for the 3D Carousel
const ATELIER_3D_ITEMS: CircularCarouselItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80',
    alt: 'Mongolian Cashmere Tailored Overcoat',
    title: 'Cashmere Overcoat',
    subtitle: "Men's Couture • ₹34,999",
    price: '₹34,999',
    link: '/category/men'
  },
  {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    alt: 'Mulberry Silk Architectural Slip Dress',
    title: 'Silk Slip Dress',
    subtitle: "Women's Atelier • ₹28,500",
    price: '₹28,500',
    link: '/category/women'
  },
  {
    src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    alt: 'Sovereign Burnished Calfskin Trunk',
    title: 'Sovereign Trunk',
    subtitle: 'Leathergoods • ₹46,000',
    price: '₹46,000',
    link: '/category/leathergoods'
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    alt: 'Calibre 1888 Obsidian Chronographe',
    title: 'Calibre 1888 Horlogerie',
    subtitle: 'Haute Horlogerie • ₹89,000',
    price: '₹89,000',
    link: '/category/timepieces'
  },
  {
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    alt: '18K Sovereign Gold Emerald Pendant',
    title: 'Emerald Pendant',
    subtitle: 'Fine Jewellery • ₹54,000',
    price: '₹54,000',
    link: '/category/jewelry'
  },
  {
    src: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    alt: 'Italian Goodyear-Welted Monkstrap',
    title: 'Goodyear Monkstrap',
    subtitle: 'Hand-Lasted Footwear • ₹22,500',
    price: '₹22,500',
    link: '/category/footwear'
  },
  {
    src: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80',
    alt: 'Jacquard Twill Pure Silk Carré',
    title: 'Silk Carré Scarf',
    subtitle: 'Silk & Accessories • ₹11,200',
    price: '₹11,200',
    link: '/category/accessories'
  },
  {
    src: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    alt: 'Archival Royal Cambodian Oud Parfum',
    title: 'Archival Oud Parfum',
    subtitle: 'Haute Parfumerie • ₹18,900',
    price: '₹18,900',
    link: '/category/accessories'
  }
];

// Exact reactbits demo items requested
const EDITORIAL_SAMPLE_ITEMS: CircularCarouselItem[] = [
  { src: '/images/valley.jpg', alt: 'Mist drifting through a valley', title: 'Valley', subtitle: 'Landscape' },
  { src: '/images/portrait.jpg', alt: 'A studio portrait', title: 'Portrait', subtitle: 'Studio' },
  { src: '/images/towers.jpg', alt: 'Glass towers from street level', title: 'Towers', subtitle: 'Architecture' }
];

export const CircularGallerySection: React.FC = () => {
  const [selectedSet, setSelectedSet] = useState<'atelier' | 'editorial'>('atelier');
  const [preset, setPreset] = useState<CircularCarouselPreset>('cylinder');

  const activeItems = selectedSet === 'atelier' ? ATELIER_3D_ITEMS : EDITORIAL_SAMPLE_ITEMS;

  return (
    <section className="circular-gallery-section" aria-label="3D Interactive Circular Gallery">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="section-title-wrap">
            <span className="eyebrow">
              <Compass size={14} className="eyebrow-icon" />
              HAUTE ROTUNDA • 3D PERSPECTIVE
            </span>
            <h2>THE CIRCULAR ARCHIVE</h2>
            <p className="subtitle">
              Explore our masterworks in continuous cylindrical dimension. Drag freely along the orbit,
              click any creation to snap into focus, or let our kinetic momentum glide through the collection.
            </p>
          </div>
        </Reveal>

        {/* Interactive Controls Bar */}
        <div className="gallery-controls-bar">
          <div className="collection-toggles" role="group" aria-label="Collection selection">
            <button
              type="button"
              className={`toggle-btn ${selectedSet === 'atelier' ? 'active' : ''}`}
              onClick={() => setSelectedSet('atelier')}
            >
              <Sparkles size={13} />
              <span>SS26 ATELIER MASTERWORKS ({ATELIER_3D_ITEMS.length})</span>
            </button>
            <button
              type="button"
              className={`toggle-btn ${selectedSet === 'editorial' ? 'active' : ''}`}
              onClick={() => setSelectedSet('editorial')}
            >
              <Eye size={13} />
              <span>EDITORIAL PERSPECTIVES ({EDITORIAL_SAMPLE_ITEMS.length})</span>
            </button>
          </div>

          <div className="preset-toggles" role="group" aria-label="3D Preset geometry">
            <span className="preset-label">
              <Layers size={13} />
              3D GEOMETRY:
            </span>
            {(['cylinder', 'orbit', 'wheel', 'panorama'] as CircularCarouselPreset[]).map((p) => (
              <button
                key={p}
                type="button"
                className={`preset-btn ${preset === p ? 'active' : ''}`}
                onClick={() => setPreset(p)}
              >
                {p.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* The 3D Circular Carousel Stage */}
        <div className="circular-carousel-stage">
          <div style={{ width: '100%', height: '560px', position: 'relative' }}>
            <CircularCarousel
              items={activeItems}
              preset={preset}
              intro="rise"
              cardWidth={220}
              aspectRatio={1}
              speed={14}
              captions
            />
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="gallery-bottom-actions">
          <div className="gallery-hint">
            <span>✦ Drag or swipe horizontally to spin</span>
            <span>✦ Click card to focus</span>
            <span>✦ Momentum physics enabled</span>
          </div>

          <Link to="/products" className="view-all-link">
            <span>EXPLORE ENTIRE CATALOGUE</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CircularGallerySection;
