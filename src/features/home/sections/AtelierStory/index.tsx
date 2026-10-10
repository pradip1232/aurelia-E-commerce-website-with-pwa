import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from '@/animations/Reveal';
import { Parallax } from '@/animations/Parallax';
import { AnimatedCounter } from '@/animations/AnimatedCounter';
import './index.scss';

export const AtelierStory: React.FC = () => {
  return (
    <section className="atelier-story" aria-label="The Atelier Story">
      <div className="atelier-story__container">
        <div className="atelier-story__grid">
          {/* Left Media Column with Parallax & Badge */}
          <div className="atelier-story__media-col">
            <Parallax speed={0.15} className="atelier-story__parallax-wrap">
              <div className="atelier-story__image-card">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                  alt="Master Artisan in Florence Atelier"
                  loading="lazy"
                />
              </div>
            </Parallax>

            {/* Overlapping Floating Stamp */}
            <div className="atelier-story__seal-stamp">
              <Sparkles size={18} className="seal-icon" />
              <div className="seal-text">
                <span className="seal-city">FLORENCE • LYON • TOKYO</span>
                <span className="seal-year">MAISON EST. 1928</span>
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="atelier-story__content-col">
            <Reveal variant="fade-up">
              <span className="atelier-story__eyebrow">OUR HERITAGE & PROVENANCE</span>
              <h2 className="atelier-story__title">
                "TRUE LUXURY LIES IN THE PURITY OF PROPORTION AND HONESTY OF NOBLE MATERIALS."
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={150}>
              <p className="atelier-story__lead">
                In our sovereign workshops, we reject ephemeral disposable fashion. Every garment and
                leather artifact is sculpted by third-generation master artisans who treat tailoring as
                an enduring architectural science.
              </p>
              <p className="atelier-story__body">
                From ultra-fine Grade-A Mongolian mountain cashmere to hand-burnished vegetable calfskin
                and hand-set Swiss calibres, our creations are designed to accumulate patina and dignity
                over decades.
              </p>
            </Reveal>

            {/* Metrics Grid with Animated Counters */}
            <div className="atelier-story__stats-grid">
              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={98} duration={2200} />
                  <span>+</span>
                </div>
                <span className="stat-label">MASTER ARTISANS</span>
              </div>

              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={100} duration={2000} />
                  <span>%</span>
                </div>
                <span className="stat-label">TRACEABLE PROVENANCE</span>
              </div>

              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={14} duration={2500} />
                </div>
                <span className="stat-label">SOVEREIGN SALONS</span>
              </div>

              <div className="stat-card">
                <div className="stat-number">
                  <AnimatedCounter end={38} duration={2400} />
                  <span>h</span>
                </div>
                <span className="stat-label">HAND-CRAFT PER PIECE</span>
              </div>
            </div>

            {/* Action */}
            <Reveal variant="fade-up" delay={250}>
              <div className="atelier-story__action">
                <Link to="/about" className="atelier-story__btn">
                  <span>DISCOVER THE ATELIER CHRONICLES</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtelierStory;
