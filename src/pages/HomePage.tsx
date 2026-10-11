import React, { useState } from 'react';
import {
  HeroCarousel,
  AtelierTicker,
  CategoryGrid,
  TrendingSection,
  RunwayLookbook,
  EditorialBanner,
  CraftsmanshipStackSection,
  MagicBentoSection,
  NewArrivalsSection,
  FlashSaleSection,
  MaisonAssurances
} from '../components/home';
import { Reveal } from '../animations/Reveal';
import { Star, Quote, Award, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUIStore } from '../stores/useUIStore';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  const [salonEmail, setSalonEmail] = useState('');
  const [salonJoined, setSalonJoined] = useState(false);
  const { showToast } = useUIStore();

  const handleJoinSalon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!salonEmail || !salonEmail.includes('@')) {
      showToast('Please enter a valid private client email', 'warning');
      return;
    }
    setSalonJoined(true);
    showToast('Your private salon invitation has been registered', 'success');
    setSalonEmail('');
  };

  return (
    <div className="home-page-view">
      {/* =========================================================================
          1. CINEMATIC HERO CAMPAIGN (SS26 HAUTE PRÊT-À-PORTER)
          ========================================================================= */}
      <HeroCarousel />

      {/* =========================================================================
          2. CONTINUOUS ATELIER TICKER & SALON MARQUEE
          ========================================================================= */}
      <AtelierTicker />

      {/* =========================================================================
          3. CURATED ATELIER SPHERES (13 CATEGORY REALMS & MOSAIC)
          ========================================================================= */}
      <CategoryGrid />

      {/* =========================================================================
          4. TRENDING SIGNATURES & HAUTE CREATIONS (INTERACTIVE CATALOG)
          ========================================================================= */}
      <TrendingSection />

      {/* =========================================================================
          5. SS26 RUNWAY LOOKBOOK: L'ATELIER EN MOUVEMENT
          ========================================================================= */}
      <RunwayLookbook />

      {/* =========================================================================
          6. THE ATELIER STORY — HERITAGE, CRAFTSMANSHIP & METRICS
          ========================================================================= */}
      <EditorialBanner />

      {/* =========================================================================
          8. PILLARS OF HAUTE CRAFTSMANSHIP (SCROLL STACK ARCHIVE)
          ========================================================================= */}
      <CraftsmanshipStackSection />

      {/* =========================================================================
          9. THE MAISON REALMS (INTERACTIVE MAGIC BENTO GRID)
          ========================================================================= */}
      <MagicBentoSection />

      {/* =========================================================================
          10. NEW RUNWAY DROPS & EXCLUSIVE CLIENT PRIVILEGES
          ========================================================================= */}
      <NewArrivalsSection />

      {/* =========================================================================
          8. PRIVATE SALON ACQUISITIONS (GENUINE COUNTDOWN WINDOW)
          ========================================================================= */}
      <FlashSaleSection />

      {/* =========================================================================
          9. MAISON ASSURANCES & WHITE-GLOVE CONCIERGE SERVICES
          ========================================================================= */}
      <MaisonAssurances />

      {/* =========================================================================
          10. VOICES OF OUR CLIENTELE (PROVENANCE & PATRON REVIEWS)
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
                Reflections from patrons and collectors who have welcomed Aurelia Atelier creations into their personal archives.
              </p>
            </div>
          </Reveal>

          <div className="testimonials-grid">
            <Reveal variant="fade-up" delay={50}>
              <div className="testimonial-card">
                <Quote size={28} className="quote-icon" />
                <div className="stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#c5a880" color="#c5a880" />
                  ))}
                </div>
                <p className="quote">
                  "The Double-Breasted Mongolian Cashmere Overcoat is tailored beyond reproach. The shoulder
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
                <Quote size={28} className="quote-icon" />
                <div className="stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#c5a880" color="#c5a880" />
                  ))}
                </div>
                <p className="quote">
                  "The Calibre 1888 Chronographe arrived in a hand-carved mahogany presentation chest with signed parchment provenance.
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
                <Quote size={28} className="quote-icon" />
                <div className="stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#c5a880" color="#c5a880" />
                  ))}
                </div>
                <p className="quote">
                  "Finding pure 22-momme mulberry silk with this weight and architectural fluidity is rare in India. Aurelia Atelier
                  is establishing an uncompromising benchmark for modern luxury."
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

      {/* =========================================================================
          11. PRIVATE SALON VIP INVITATION (INNER CIRCLE CONCIERGE)
          ========================================================================= */}
      <section className="private-salon-invite-section" aria-label="Private Salon Registration">
        <div className="container">
          <Reveal variant="fade-up">
            <div className="salon-invite-card">
              <div className="salon-content">
                <span className="salon-eyebrow">
                  <Sparkles size={13} />
                  CONFIDENTIAL INVITATION
                </span>
                <h3>ENTER THE ATELIER INNER CIRCLE</h3>
                <p>
                  Receive private invitations to confidential runway previews, bespoke trunk shows, and dedicated styling concierge access.
                </p>

                {salonJoined ? (
                  <div className="salon-success-message">
                    <CheckCircle2 size={18} className="check-gold" />
                    <span>Your private invitation request has been logged with our Concierge Salon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleJoinSalon} className="salon-form">
                    <input
                      type="email"
                      value={salonEmail}
                      onChange={(e) => setSalonEmail(e.target.value)}
                      placeholder="Enter your confidential email address"
                      required
                      aria-label="Email for private salon invitation"
                    />
                    <button type="submit" className="salon-submit-btn">
                      <span>REQUEST SALON ENTRY</span>
                      <ArrowRight size={15} />
                    </button>
                  </form>
                )}

                <div className="salon-perks-row">
                  <span>✦ Confidential Pre-Orders</span>
                  <span>✦ Personal Wardrobe Concierge</span>
                  <span>✦ Private Trunk Show Access</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
