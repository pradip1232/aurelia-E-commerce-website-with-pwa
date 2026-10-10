import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Reveal } from '@/animations/Reveal';
import { TextReveal } from '@/animations/TextReveal';
import { MagneticButton } from '@/animations/MagneticButton';
import './index.scss';

export const HeroSection: React.FC = () => {
  return (
    <section className="atelier-hero" aria-label="Hero Showcase">
      <div className="atelier-hero__bg-wrap">
        <img
          src="https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=2000&q=85"
          alt="Aurelia Atelier SS26 Prêt-à-Porter Haute Couture"
          className="atelier-hero__bg-img"
        />
        <div className="atelier-hero__overlay" />
      </div>

      <div className="atelier-hero__content-wrap">
        <div className="atelier-hero__container">
          {/* Eyebrow tag */}
          <Reveal variant="fade-down" delay={100}>
            <div className="atelier-hero__eyebrow">
              <span className="atelier-hero__eyebrow-symbol">✦</span>
              <span className="atelier-hero__eyebrow-text">SS26 PRÊT-À-PORTER & BESPOKE COUTURE</span>
              <span className="atelier-hero__eyebrow-symbol">✦</span>
            </div>
          </Reveal>

          {/* Main Cinematic Title */}
          <h1 className="atelier-hero__title">
            <TextReveal text="THE ARCHITECTURE OF" delay={200} wordDelay={50} />
            <span className="atelier-hero__title-accent">
              <TextReveal text="NOBLE ELEGANCE" delay={400} wordDelay={50} />
            </span>
          </h1>

          {/* Subtitle */}
          <Reveal variant="fade-up" delay={500}>
            <p className="atelier-hero__subtitle">
              Masterfully sculpted from ultra-fine Mongolian cashmere, mulberry silk, and architectural
              tailoring. Created for the discerning patron of enduring luxury.
            </p>
          </Reveal>

          {/* Dual CTAs */}
          <Reveal variant="fade-up" delay={700}>
            <div className="atelier-hero__actions">
              <MagneticButton>
                <Link to="/shop" className="atelier-hero__cta atelier-hero__cta--primary">
                  <span>DISCOVER SS26</span>
                  <ArrowRight size={16} />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link to="/about" className="atelier-hero__cta atelier-hero__cta--secondary">
                  <span>THE ATELIER STORY</span>
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="atelier-hero__scroll-indicator" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown size={14} className="bounce-arrow" />
      </div>
    </section>
  );
};

export default HeroSection;
