import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  Award,
  Sparkles,
  Shield,
  Feather,
  Compass,
  ArrowRight,
  Globe2,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useUIStore } from '../../stores/useUIStore';
import { Link } from 'react-router-dom';
import './index.scss';

export const AboutPage: React.FC = () => {
  const [activeHeritageTab, setActiveHeritageTab] = useState<'provenance' | 'artisans' | 'sustainability'>('provenance');

  return (
    <div className="static-page about-page">
      {/* 1. Hero Exhibition */}
      <section className="about-hero-section">
        <div className="container">
          <div className="hero-text-block">
            <span className="eyebrow">ESTABLISHED 1928 • FLORENCE & MUMBAI</span>
            <h1 className="hero-title">THE ARCHITECTURE OF SILENT LUXURY</h1>
            <p className="hero-lead">
              Aurelia Atelier was founded on a singular manifesto: true luxury never shouts.
              It reveals itself through the architectural honesty of proportion, the tactile memory
              of noble raw fibers, and the indelible imprint of hands that have mastered their trade across generations.
            </p>
          </div>
        </div>
        <div className="about-hero-banner">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85"
            alt="Aurelia Atelier Editorial Showcase"
          />
          <div className="hero-quote-overlay">
            <blockquote>
              "We do not create for seasonal trends. We craft heirloom pieces destined to be cherished, preserved, and handed down."
            </blockquote>
            <cite>— Maestro Julian Vance, Head of Haute Tailoring</cite>
          </div>
        </div>
      </section>

      {/* 2. Key Atelier Figures & Stats */}
      <section className="about-stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">98</span>
            <span className="stat-unit">Years</span>
            <p>Of heritage textile innovation and continuous bespoke tailoring lineage.</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-unit">Traceable</span>
            <p>Single-origin Mongolian cashmere and ethical mulberry silk from Lyon certified at source.</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">42</span>
            <span className="stat-unit">Hours</span>
            <p>Average bench-crafting dedicated by master artisans to finish each structured coat.</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">0%</span>
            <span className="stat-unit">Overproduction</span>
            <p>Limited, numbered atelier editions crafted strictly in balanced micro-batches.</p>
          </div>
        </div>
      </section>

      {/* 3. The Pillars of Craftsmanship */}
      <section className="about-craft-pillars">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">UNCOMPROMISING STANDARDS</span>
            <h2>THE THREE PILLARS OF OUR MAISON</h2>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <Feather size={28} />
              </div>
              <h3>NOBLE NATURAL FIBERS</h3>
              <p>
                We reject all synthetic polyesters and petroleum-based textiles. Every thread is selected
                from 100% pure organic cashmere, Grade-6A mulberry raw silk, vegetable-tanned full grain leather,
                and rare Egyptian Giza 45 long-staple cotton.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Award size={28} />
              </div>
              <h3>GENERATIONAL MASTERY</h3>
              <p>
                Our craft is preserved by multi-generational families in Tuscany, Lyon, and Kyoto. Each seam
                is hand-basted, collars are hand-padded with horsehair canvas, and horn buttons are sewn
                with artisanal crow-foot stitching.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Shield size={28} />
              </div>
              <h3>CRYPTO AUTHENTICITY</h3>
              <p>
                Every Aurelia creation is registered into our private blockchain ledger with an encrypted NFC
                identity chip embedded seamlessly in the inner pocket, guaranteeing provenance and life-long atelier repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Provenance Journey */}
      <section className="about-interactive-tabs">
        <div className="container">
          <div className="tabs-nav-bar">
            <button
              className={`tab-btn ${activeHeritageTab === 'provenance' ? 'active' : ''}`}
              onClick={() => setActiveHeritageTab('provenance')}
            >
              <Globe2 size={16} />
              <span>TERROIR & PROVENANCE</span>
            </button>
            <button
              className={`tab-btn ${activeHeritageTab === 'artisans' ? 'active' : ''}`}
              onClick={() => setActiveHeritageTab('artisans')}
            >
              <Sparkles size={16} />
              <span>THE ARTISAN GUILD</span>
            </button>
            <button
              className={`tab-btn ${activeHeritageTab === 'sustainability' ? 'active' : ''}`}
              onClick={() => setActiveHeritageTab('sustainability')}
            >
              <Compass size={16} />
              <span>SUSTAINABILITY & ETHICS</span>
            </button>
          </div>

          <div className="tab-pane-content">
            {activeHeritageTab === 'provenance' && (
              <div className="tab-split-layout">
                <div className="split-text">
                  <h3>Sourced from the World's Most Revered Terroirs</h3>
                  <p>
                    Just as fine wine mirrors its soil, luxury garments reflect their origin.
                    Our cashmere originates from high-plateau free-range Mongolian goats, combed gently by hand
                    during spring molting season to preserve fleece fineness under 14.5 microns.
                  </p>
                  <p>
                    Our leathers come exclusively from certified humane Tuscan cooperatives utilizing
                    mimosa and chestnut bark infusions in slow wooden drums, creating rich patinas that mature beautifully over decades.
                  </p>
                  <div className="origin-tags">
                    <span>✦ Inner Mongolia (Cashmere)</span>
                    <span>✦ Lyon, France (Mulberry Silk)</span>
                    <span>✦ Santa Croce, Tuscany (Vachetta Leather)</span>
                  </div>
                </div>
                <div className="split-media">
                  <img
                    src="https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=900&q=80"
                    alt="Atelier fabric selection"
                  />
                </div>
              </div>
            )}

            {activeHeritageTab === 'artisans' && (
              <div className="tab-split-layout">
                <div className="split-text">
                  <h3>Human Touch Over Machine Speed</h3>
                  <p>
                    In an age of automated fast fashion, Aurelia champions the irreplaceable intuition of master
                    tailors. Over 300 individual manual steps go into the construction of a single tailored blazer.
                  </p>
                  <p>
                    Each garment carries a discrete embroidered monogram denoting the private guild number of the
                    artisan who shaped it, creating an authentic human bond between maker and wearer.
                  </p>
                  <div className="origin-tags">
                    <span>✦ 40+ Guild Craftsmen</span>
                    <span>✦ Fair-Wage Certified</span>
                    <span>✦ Apprentice Preservation Programs</span>
                  </div>
                </div>
                <div className="split-media">
                  <img
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80"
                    alt="Master artisan tailoring garment"
                  />
                </div>
              </div>
            )}

            {activeHeritageTab === 'sustainability' && (
              <div className="tab-split-layout">
                <div className="split-text">
                  <h3>Restorative Circularity & Lifetime Care</h3>
                  <p>
                    We believe the most sustainable product is one that never enters a landfill. Every purchase includes
                    complimentary lifetime stitch repair, re-lining, and conditioning at our private salons.
                  </p>
                  <p>
                    Our packaging is 100% plastic-free, made of recycled mulberry paper, unbleached organic cotton dust bags,
                    and vegetable ink seals.
                  </p>
                  <div className="origin-tags">
                    <span>✦ 100% Biodegradable Packaging</span>
                    <span>✦ Lifetime Repair Commitment</span>
                    <span>✦ Zero Chemical Effluent Dyes</span>
                  </div>
                </div>
                <div className="split-media">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
                    alt="Sustainable boutique interior"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Bottom Atelier Invitation */}
      <section className="about-cta-section">
        <div className="container text-center">
          <h2>EXPERIENCE THE COLLECTION IN PERSON</h2>
          <p>Schedule a private viewing at our flagship salon or consult directly with our senior styling team.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary-luxury">
              <span>BOOK PRIVATE SALON APPOINTMENT</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/shop" className="btn-secondary-luxury">
              <span>EXPLORE THE CURRENT ATELIER</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
