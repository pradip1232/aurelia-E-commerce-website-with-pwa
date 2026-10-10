import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroCarousel.scss';

const HERO_SLIDES = [
  {
    id: 1,
    title: 'THE BESPOKE ATELIER SS26',
    subtext: 'Double-breasted cashmere overcoats, pure mulberry silk, and architectural silhouettes.',
    ctaText: 'DISCOVER MEN',
    ctaLink: '/category/men',
    secondaryCta: 'EXPLORE WOMEN',
    secondaryLink: '/category/women',
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1800&q=85',
    tag: 'SPRING / SUMMER 2026'
  },
  {
    id: 2,
    title: 'HAUTE HORLOGERIE CALIBRE 1888',
    subtext: 'Mechanical Swiss movements, sunray obsidian dials, and hand-burnished alligator straps.',
    ctaText: 'EXPLORE TIMEPIECES',
    ctaLink: '/category/accessories',
    secondaryCta: 'VIEW LOOKBOOK',
    secondaryLink: '/new-arrivals',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=85',
    tag: 'LIMITED MASTERPIECE'
  },
  {
    id: 3,
    title: 'CONTEMPORARY ACOUSTICS',
    subtext: 'Beryllium acoustic drivers, titanium casing, and unadulterated high-fidelity soundstage.',
    ctaText: 'EXPERIENCE AUDIO',
    ctaLink: '/category/electronics',
    secondaryCta: 'DISCOVER ESSENTIALS',
    secondaryLink: '/shop',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1800&q=85',
    tag: 'NEW LAUNCH'
  }
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="hero-carousel-section">
      <div className="hero-background-wrap">
        <img src={slide.image} alt={slide.title} className="hero-bg-img" key={slide.id} />
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container hero-content-container">
        <div className="hero-copy-block" key={`copy-${slide.id}`}>
          <span className="hero-tag-pill">{slide.tag}</span>
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-subtext">{slide.subtext}</p>

          <div className="hero-actions-row">
            <Link to={slide.ctaLink} className="hero-btn primary-btn">
              <span>{slide.ctaText}</span>
              <ArrowRight size={16} />
            </Link>
            <Link to={slide.secondaryLink} className="hero-btn secondary-btn">
              <span>{slide.secondaryCta}</span>
            </Link>
          </div>
        </div>

        {/* Carousel Slide Indicators & Arrows */}
        <div className="carousel-controls">
          <div className="dots-list">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={`dot-btn ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="arrows-group">
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))
              }
              aria-label="Previous slide"
              className="arrow-btn"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              aria-label="Next slide"
              className="arrow-btn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

