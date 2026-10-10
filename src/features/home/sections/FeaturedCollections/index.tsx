import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/animations/Reveal';
import { StaggerGroup } from '@/animations/StaggerGroup';
import './index.scss';

const COLLECTIONS = [
  {
    id: 'men',
    title: "MEN'S SARTORIAL BESPOKE",
    subtitle: 'Double-breasted coats, virgin wool tailoring, & pure Mongolian cashmere',
    link: '/category/men',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'tile-large',
    tag: 'THE TAILORED ATELIER',
  },
  {
    id: 'women',
    title: "WOMEN'S HAUTE COUTURE",
    subtitle: 'Mulberry silk draped gowns, sculptural blazers, and pure silhouettes',
    link: '/category/women',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    gridClass: 'tile-tall',
    tag: 'PRÊT-À-PORTER SS26',
  },
  {
    id: 'accessories',
    title: 'FINE HOROLOGY & TIMEPIECES',
    subtitle: 'Mechanical Swiss movements, sunray dials, and hand-burnished straps',
    link: '/category/accessories',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'tile-medium',
    tag: 'CALIBRE 1888',
  },
  {
    id: 'leather',
    title: 'HAUTE LEATHERCRAFT',
    subtitle: 'Full-grain vegetable calfskin luggage, portfolios, and master loafers',
    link: '/category/accessories',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'tile-medium',
    tag: 'ARTISANAL FLORENCE',
  },
];

export const FeaturedCollections: React.FC = () => {
  return (
    <section className="atelier-featured-collections" aria-label="Featured Collections">
      <div className="atelier-featured-collections__container">
        <Reveal variant="fade-up">
          <div className="atelier-featured-collections__header">
            <span className="eyebrow">CURATED CHAPTERS</span>
            <h2 className="title">THE CURATED ATELIER</h2>
            <p className="subtitle">
              Explore distinctive sartorial universes defined by uncompromising artisanal provenance.
            </p>
          </div>
        </Reveal>

        <StaggerGroup staggerDelay={0.12} className="atelier-featured-collections__mosaic">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              to={col.link}
              className={`atelier-featured-collections__tile ${col.gridClass}`}
            >
              <div className="tile-bg">
                <img src={col.image} alt={col.title} loading="lazy" />
                <div className="tile-overlay" />
              </div>

              <div className="tile-content">
                <span className="tile-tag">{col.tag}</span>
                <h3 className="tile-title">{col.title}</h3>
                <p className="tile-sub">{col.subtitle}</p>

                <div className="tile-action">
                  <span>DISCOVER COLLECTION</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </div>
              </div>
            </Link>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default FeaturedCollections;
