import React from 'react';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { FlashSaleSection } from '../components/home/FlashSaleSection';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { TrendingSection } from '../components/home/TrendingSection';
import { EditorialBanner } from '../components/home/EditorialBanner';
import { MOCK_PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/product/ProductCard';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  const newArrivals = MOCK_PRODUCTS.filter((p) => p.badges.includes('NEW')).slice(0, 4);

  return (
    <div className="home-page-view">
      {/* 1. Full-Bleed Hero Carousel */}
      <HeroCarousel />

      {/* 2. Trending Signatures Carousel */}
      <TrendingSection />

      {/* 3. Flash Sale Section with Real Timer */}
      <FlashSaleSection />

      {/* 4. Atelier Category Mosaic */}
      <CategoryGrid />

      {/* 5. Editorial Philosophy Banner */}
      <EditorialBanner />

      {/* 6. New Arrivals Showcase */}
      <section className="new-arrivals-home-section">
        <div className="container">
          <div className="arrivals-header-row">
            <div>
              <span className="eyebrow">FRESH FROM THE WORKSHOPS</span>
              <h2>NEW ARRIVALS • SPRING 2026</h2>
            </div>
            <Link to="/new-arrivals" className="link-all">
              <span>EXPLORE ALL NEW</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="arrivals-grid">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="eyebrow">ACQUISITIONS OF DISTINCTION</span>
            <h2>VOICES OF OUR CLIENTELE</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#eab308" color="#eab308" />
                ))}
              </div>
              <p className="quote">
                "The Cashmere Double-Breasted Overcoat is tailored beyond reproach. The shoulder
                construction has an innate softness that moves effortlessly."
              </p>
              <div className="author-row">
                <div className="avatar">VS</div>
                <div className="meta">
                  <strong>Vikramaditya S.</strong>
                  <span>Private Collector • Mumbai</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#eab308" color="#eab308" />
                ))}
              </div>
              <p className="quote">
                "The Calibre 1888 Chronographe arrived in a hand-crafted wooden presentation chest.
                Every bridge beveling reveals true artisanal dedication."
              </p>
              <div className="author-row">
                <div className="avatar">RD</div>
                <div className="meta">
                  <strong>Rohan Deshmukh</strong>
                  <span>Haute Horlogerie Guild • New Delhi</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#eab308" color="#eab308" />
                ))}
              </div>
              <p className="quote">
                "Finding pure mulberry silk with this weight and fluidity is rare. Aurelia Atelier
                is redefining modern Indian luxury on the global stage."
              </p>
              <div className="author-row">
                <div className="avatar">AK</div>
                <div className="meta">
                  <strong>Aanya Kapoor</strong>
                  <span>Creative Director • Bengaluru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

