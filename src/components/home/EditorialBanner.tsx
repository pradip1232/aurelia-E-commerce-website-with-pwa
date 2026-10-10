import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Feather, Award } from 'lucide-react';
import { Reveal } from '../../animations/Reveal';
import { Parallax } from '../../animations/Parallax';
import './EditorialBanner.scss';

export const EditorialBanner: React.FC = () => {
  return (
    <section className="editorial-banner-section" id="atelier-story">
      <div className="container">
        <div className="editorial-asymmetric-layout">
          {/* Visual Showcase Side with Dual Parallax Imagery */}
          <div className="editorial-media-column">
            <Reveal variant="fade-up" duration={700}>
              <div className="media-primary-wrapper">
                <Parallax speed={0.06}>
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                    alt="Atelier Craftsmanship and Pattern Making"
                    className="media-primary-img"
                    loading="lazy"
                  />
                </Parallax>
                <div className="media-overlay-gradient" />
              </div>
            </Reveal>

            {/* Inset Secondary Detail Image */}
            <Reveal variant="fade-left" delay={200} duration={800} className="media-secondary-wrapper">
              <Parallax speed={-0.08}>
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
                  alt="Noble fabric texture and silk weaves"
                  className="media-secondary-img"
                  loading="lazy"
                />
              </Parallax>
              <div className="media-badge-seal">
                <Sparkles size={16} />
                <span>FLORENTINE ATELIER • EST. 1928</span>
              </div>
            </Reveal>
          </div>

          {/* Narrative Column */}
          <div className="editorial-narrative-column">
            <Reveal variant="fade-up" delay={100}>
              <div className="narrative-content-card">
                <span className="narrative-tag">
                  <Feather size={14} className="feather-icon" />
                  THE PHILOSOPHY OF NOBLE LIVING
                </span>

                <h2 className="narrative-heading">
                  "TRUE LUXURY LIES IN THE PURITY OF PROPORTION AND HONESTY OF NOBLE MATERIALS."
                </h2>

                <p className="narrative-lead">
                  In an era dominated by transient fashion cycles, Aurelia Atelier honors the enduring sanctity of the handcrafted object.
                  From wild Mongolian mountain cashmere combed exclusively in high-altitude pastures to vegetable-burnished Tuscan saddle calfskin,
                  every piece is conceived as a future heirloom.
                </p>

                <p className="narrative-body">
                  Each creation passes through the hands of master artisans whose lineage spans generations. Over sixty hours of meticulous hand-finishing,
                  hand-rolled silk edges, and bespoke gold monogramming ensure an acquisition that grows more distinguished with each passing decade.
                </p>

                {/* Craftsmanship Pillars */}
                <div className="narrative-pillars-grid">
                  <div className="pillar-item">
                    <div className="pillar-icon-box">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="pillar-text">
                      <strong>100% ETHICAL TRACEABILITY</strong>
                      <span>Direct audited provenance from origin cruelty-free cooperatives.</span>
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-icon-box">
                      <Award size={20} />
                    </div>
                    <div className="pillar-text">
                      <strong>BESPOKE EDITIONS</strong>
                      <span>Strict numbered editions to preserve authenticity and rarity.</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Metrics Ticker */}
                <div className="editorial-metrics-ticker">
                  <div className="metric-cell">
                    <span className="metric-number">98+</span>
                    <span className="metric-label">Master Craftsmen</span>
                  </div>
                  <div className="metric-cell">
                    <span className="metric-number">100%</span>
                    <span className="metric-label">Noble Fibers</span>
                  </div>
                  <div className="metric-cell">
                    <span className="metric-number">48H</span>
                    <span className="metric-label">White-Glove Dispatch</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="narrative-action-wrap">
                  <Link to="/about" className="btn-read-chronicles">
                    <span>EXPLORE THE ATELIER CHRONICLES</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
