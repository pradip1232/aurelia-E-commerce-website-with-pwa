import React from 'react';
import { Star } from 'lucide-react';
import { ScrollProgress } from '@/animations/ScrollProgress';
import { PageTransition } from '@/animations/PageTransition';
import { Reveal } from '@/animations/Reveal';
import { HeroSection } from '@/features/home/sections/HeroSection';
import { FeaturedCollections } from '@/features/home/sections/FeaturedCollections';
import { TrendingCreations } from '@/features/home/sections/TrendingCreations';
import { AtelierStory } from '@/features/home/sections/AtelierStory';
import { NewArrivals } from '@/features/home/sections/NewArrivals';
import { NewsletterSection } from '@/features/home/sections/NewsletterSection';
import './index.scss';

const TESTIMONIALS = [
  {
    initials: 'VS',
    author: 'Vikramaditya S.',
    location: 'Private Collector • Mumbai',
    quote:
      'The Cashmere Double-Breasted Overcoat is tailored beyond reproach. The shoulder construction has an innate softness that moves effortlessly.',
  },
  {
    initials: 'RD',
    author: 'Rohan Deshmukh',
    location: 'Haute Horlogerie Guild • New Delhi',
    quote:
      'The Calibre 1888 Chronographe arrived in a hand-crafted wooden presentation chest. Every bridge beveling reveals true artisanal dedication.',
  },
  {
    initials: 'AK',
    author: 'Aanya Kapoor',
    location: 'Creative Director • Bengaluru',
    quote:
      'Finding pure mulberry silk with this weight and fluidity is rare. Aurelia Atelier is redefining modern Indian luxury on the global stage.',
  },
];

export const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="atelier-home-page">
        {/* Scroll Progress Bar */}
        <ScrollProgress position="top" height={3} />

        {/* 1. Cinematic Hero Section */}
        <HeroSection />

        {/* 2. Asymmetric Featured Collections */}
        <FeaturedCollections />

        {/* 3. Catalog Trending Creations with Category Switcher */}
        <TrendingCreations />

        {/* 4. Atelier Narrative & Craftsmanship Statistics */}
        <AtelierStory />

        {/* 5. Just Released New Arrivals */}
        <NewArrivals />

        {/* 6. Voices of our Clientele / Testimonials */}
        <section className="atelier-home-page__testimonials" aria-label="Client Testimonials">
          <div className="atelier-home-page__container">
            <Reveal variant="fade-up">
              <div className="atelier-home-page__test-header">
                <span className="eyebrow">ACQUISITIONS OF DISTINCTION</span>
                <h2 className="title">VOICES OF OUR CLIENTELE</h2>
                <p className="subtitle">
                  Reflections from patrons who celebrate enduring craftsmanship and pure proportion.
                </p>
              </div>
            </Reveal>

            <div className="atelier-home-page__test-grid">
              {TESTIMONIALS.map((t, idx) => (
                <Reveal key={idx} variant="fade-up" delay={idx * 150}>
                  <div className="testimonial-card">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#eab308" color="#eab308" />
                      ))}
                    </div>
                    <blockquote className="quote">"{t.quote}"</blockquote>
                    <div className="author-row">
                      <div className="avatar">{t.initials}</div>
                      <div className="meta">
                        <strong>{t.author}</strong>
                        <span>{t.location}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Inner Circle Newsletter Signup */}
        <NewsletterSection />
      </div>
    </PageTransition>
  );
};

export default HomePage;
