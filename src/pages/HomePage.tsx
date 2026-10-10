import React from 'react';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { TrendingSection } from '../components/home/TrendingSection';
import { EditorialBanner } from '../components/home/EditorialBanner';
import { NewArrivalsSection } from '../components/home/NewArrivalsSection';
import { FlashSaleSection } from '../components/home/FlashSaleSection';
import { Reveal } from '../animations/Reveal';
import { Star, Quote, Award } from 'lucide-react';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page-view">
      {/* =========================================================================
          SECTION 1: CINEMATIC HERO CAMPAIGN
          Full-bleed high-resolution photography, split-text reveals, Ken Burns,
          mouse parallax, and accessible pause/play carousel controls.
          ========================================================================= */}
      <HeroCarousel />

      {/* =========================================================================
          SECTION 2: CURATED ATELIER COLLECTIONS
          13 catalog universes, interactive filter pills, staggered clip-path reveals,
          item counts, and responsive editorial mosaic.
          ========================================================================= */}
      <CategoryGrid />

      {/* =========================================================================
          SECTION 3: TRENDING CREATIONS
          Reusable product cards with INR pricing, wishlist, quick-view modal,
          category tabs, and smooth carousel / responsive grid toggle.
          ========================================================================= */}
      <TrendingSection />

      {/* =========================================================================
          SECTION 4: THE ATELIER STORY — EDITORIAL SHOWCASE
          Asymmetric luxury editorial layout, dual parallax craftsmanship imagery,
          craftsmanship pillars, metrics ticker, and link to About page.
          ========================================================================= */}
      <EditorialBanner />

      {/* =========================================================================
          SECTION 5: NEW ARRIVALS & EXCLUSIVE PRIVILEGES
          Spring 2026 inaugural releases, category filter navigation,
          curated privilege campaign banner with promotional code LUXURY20.
          ========================================================================= */}
      <NewArrivalsSection />

      {/* =========================================================================
          SEASONAL PRIVATE SALON PRIVILEGES
          Genuine configured campaign countdown timer (no fake urgency)
          offering authentic archival acquisitions.
          ========================================================================= */}
      <FlashSaleSection />

      {/* =========================================================================
          PATRON VOICES & ACQUISITIONS OF DISTINCTION
          Verified patron testimonials with provenance and ratings.
          ========================================================================= */}
      <section className="testimonials-section" id="patron-testimonials">
        <div className="container">
          <Reveal variant="fade-up">
            <div className="section-title-wrap">
              <span className="eyebrow">
                <Award size={14} className="eyebrow-icon" />
                ACQUISITIONS OF DISTINCTION
              </span>
              <h2>VOICES OF OUR CLIENTELE</h2>
              <p className="subtitle">
                Reflections from patrons who have welcomed Aurelia Atelier creations into their personal archives.
              </p>
            </div>
          </Reveal>

          <div className="testimonials-grid">
            <Reveal variant="fade-up" delay={50}>
              <div className="testimonial-card">
                <Quote size={24} className="quote-icon" />
                <div className="stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#c5a880" color="#c5a880" />
                  ))}
                </div>
                <p className="quote">
                  "The Cashmere Double-Breasted Overcoat is tailored beyond reproach. The shoulder
                  construction possesses an innate softness that moves effortlessly, rivaling Savile Row bespoke."
                </p>
                <div className="author-row">
                  <div className="avatar">VS</div>
                  <div className="meta">
                    <strong>Vikramaditya S.</strong>
                    <span>Private Collector • Mumbai</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={120}>
              <div className="testimonial-card">
                <Quote size={24} className="quote-icon" />
                <div className="stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#c5a880" color="#c5a880" />
                  ))}
                </div>
                <p className="quote">
                  "The Calibre 1888 Chronographe arrived in a hand-carved mahogany presentation chest.
                  The bridge beveling and obsidian dial reveal true haute horlogerie mastery."
                </p>
                <div className="author-row">
                  <div className="avatar">RD</div>
                  <div className="meta">
                    <strong>Rohan Deshmukh</strong>
                    <span>Horological Guild • New Delhi</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={190}>
              <div className="testimonial-card">
                <Quote size={24} className="quote-icon" />
                <div className="stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#c5a880" color="#c5a880" />
                  ))}
                </div>
                <p className="quote">
                  "Finding pure mulberry silk with this weight and fluidity is rare. Aurelia Atelier
                  is redefining Indian and international luxury with unquestioned architectural purity."
                </p>
                <div className="author-row">
                  <div className="avatar">AK</div>
                  <div className="meta">
                    <strong>Aanya Kapoor</strong>
                    <span>Creative Director • Bengaluru</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
