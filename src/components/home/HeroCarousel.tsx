import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, Sparkles } from 'lucide-react';
import './HeroCarousel.scss';

export interface HeroSlide {
  id: number;
  tag: string;
  title: string;
  subtext: string;
  image: string;
  mobileImage?: string;
  ctaText: string;
  ctaLink: string;
  secondaryCta: string;
  secondaryLink: string;
  accent: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: 'HAUTE PRÊT-À-PORTER • SS26',
    title: 'THE ARCHITECTURAL SILHOUETTE',
    subtext: 'Double-breasted Mongolian cashmere, pure mulberry silk, and uncompromising sartorial precision crafted for contemporary royalty.',
    image: '/images/campaigns/hero-banner-ss26.png',
    mobileImage: '/images/campaigns/hero-banner-ss26.png',
    ctaText: 'DISCOVER CAMPAIGN',
    ctaLink: '/shop',
    secondaryCta: 'EXPLORE COUTURE',
    secondaryLink: '/category/women',
    accent: '#d4af37'
  },
  {
    id: 2,
    tag: 'HAUTE HORLOGERIE • CALIBRE 1888',
    title: 'OBSIDIAN CHRONOGRAPHE TOURBILLON',
    subtext: 'Hand-bevelled Geneva striping, 72-hour power reserve, and Florentine hand-burnished alligator leather straps.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1920&q=85',
    ctaText: 'EXPLORE TIMEPIECES',
    ctaLink: '/category/timepieces',
    secondaryCta: 'PRIVATE SALON',
    secondaryLink: '/contact',
    accent: '#c9a227'
  },
  {
    id: 3,
    tag: 'MAISON LEATHERCRAFT',
    title: 'THE SOVEREIGN TRAVEL TRUNK',
    subtext: 'Full-grain Tuscan saddle leather with hand-waxed linen stitching and solid brushed gold lock hardware.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1920&q=85',
    ctaText: 'ACQUIRE LEATHERGOODS',
    ctaLink: '/category/leathergoods',
    secondaryCta: 'BESPOKE SERVICES',
    secondaryLink: '/about',
    accent: '#c5a059'
  },
  {
    id: 4,
    tag: 'FINE JEWELLERY & HIGH ART',
    title: '18K SOVEREIGN GOLD & EMERALDS',
    subtext: 'Zambian untreated emeralds nestled within certified recycled sovereign gold, forged by master goldsmiths.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85',
    ctaText: 'DISCOVER JEWELLERY',
    ctaLink: '/category/jewelry',
    secondaryCta: 'VIEW LOOKBOOK',
    secondaryLink: '/new-arrivals',
    accent: '#d4af37'
  }
];

const AUTOPLAY_INTERVAL = 6500;

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const touchStartX = useRef<number | null>(null);

  const slide = HERO_SLIDES[currentSlide];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    setProgress(0);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  // Autoplay and Progress Bar Timer
  useEffect(() => {
    if (!isPlaying) return;

    const stepMs = 50;
    const increment = (stepMs / AUTOPLAY_INTERVAL) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Subtle Mouse Parallax Effect on Hero
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 16;
    const y = ((clientY - top) / height - 0.5) * 16;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Touch Swipe for Mobile Devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;

    if (deltaX > 45) {
      nextSlide();
    } else if (deltaX < -45) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="hero-carousel-section"
      role="region"
      aria-roledescription="carousel"
      aria-label="Aurelia Atelier Editorial Campaigns"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides Stack with Parallax & Ken-Burns */}
      <div className="hero-background-wrap">
        {HERO_SLIDES.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={s.id}
              className={`hero-slide-layer ${isActive ? 'is-active' : ''}`}
              aria-hidden={!isActive}
              style={{
                transform: isActive
                  ? `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0) scale(${1.03})`
                  : 'scale(1)'
              }}
            >
              <picture>
                {s.mobileImage && <source media="(max-width: 768px)" srcSet={s.mobileImage} />}
                <img
                  src={s.image}
                  alt={s.title}
                  className="hero-bg-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </picture>
              <div className="hero-gradient-overlay" />
              <div className="hero-grain-overlay" />
            </div>
          );
        })}
      </div>

      {/* Main Editorial Copy Box */}
      <div className="container hero-content-container">
        <div className="hero-copy-block" key={`slide-${slide.id}`}>
          <div className="hero-tag-wrap">
            <span className="hero-tag-pill">
              <Sparkles size={13} className="sparkle-icon" />
              {slide.tag}
            </span>
          </div>

          <h1 className="hero-title" aria-label={slide.title}>
            {slide.title.split(' ').map((word, wIdx) => (
              <span key={wIdx} className="split-word">
                <span
                  className="split-word-inner"
                  style={{ animationDelay: `${wIdx * 90 + 120}ms` }}
                >
                  {word}{' '}
                </span>
              </span>
            ))}
          </h1>

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

        {/* Cinematic Carousel Controls Bar */}
        <div className="carousel-controls-bar">
          {/* Slide Numbers */}
          <div className="slide-counter" aria-live="polite">
            <span className="current-num">0{currentSlide + 1}</span>
            <span className="counter-sep">/</span>
            <span className="total-num">0{HERO_SLIDES.length}</span>
          </div>

          {/* Progress Indicators */}
          <div className="dots-list" role="tablist">
            {HERO_SLIDES.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Slide ${idx + 1}: ${s.title}`}
                  className={`dot-btn ${isActive ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                >
                  <span className="dot-rail">
                    {isActive && (
                      <span
                        className="dot-progress-fill"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Pause / Play and Arrows Group */}
          <div className="controls-actions">
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? 'Pause campaign carousel' : 'Play campaign carousel'}
              className="action-icon-btn pause-toggle-btn"
              title={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>

            <button
              onClick={prevSlide}
              aria-label="Previous campaign slide"
              className="action-icon-btn nav-arrow-btn"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next campaign slide"
              className="action-icon-btn nav-arrow-btn"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
