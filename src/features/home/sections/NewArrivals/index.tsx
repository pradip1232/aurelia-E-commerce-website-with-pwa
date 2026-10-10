import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/data/mockData';
import { ProductCard } from '@/components/product/ProductCard';
import { Reveal } from '@/animations/Reveal';
import './index.scss';

export const NewArrivals: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter latest creations or items tagged with NEW
  const newArrivalProducts = MOCK_PRODUCTS.filter(
    (p) => p.badges?.includes('NEW') || p.tags?.includes('luxury')
  ).slice(0, 8);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="atelier-new-arrivals" aria-label="New Arrivals">
      <div className="atelier-new-arrivals__container">
        <div className="atelier-new-arrivals__header-row">
          <Reveal variant="fade-up">
            <div>
              <span className="eyebrow">JUST RELEASED</span>
              <h2 className="title">NEW ATELIER ARRIVALS</h2>
              <p className="subtitle">
                The latest bespoke creations and runway prêtes-à-porter silhouettes.
              </p>
            </div>
          </Reveal>

          {/* Carousel Arrows */}
          <div className="carousel-nav">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="carousel-arrow"
              aria-label="Previous creations"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="carousel-arrow"
              aria-label="Next creations"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Products Slider */}
        <div className="atelier-new-arrivals__slider" ref={scrollContainerRef}>
          {newArrivalProducts.map((product) => (
            <div key={product.id} className="slider-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Bottom Link */}
        <div className="atelier-new-arrivals__footer">
          <Link to="/new-arrivals" className="view-all-link">
            <span>VIEW ALL NEW ARRIVALS</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
