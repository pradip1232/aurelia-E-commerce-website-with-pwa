import React, { useState } from 'react';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';
import { Reveal } from '../../animations/Reveal';
import { Feather, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CraftsmanshipStackSection.scss';

export const CraftsmanshipStackSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'pillars' | 'demo'>('pillars');

  return (
    <section className="craftsmanship-stack-section" aria-label="Atelier Craftsmanship Scroll Stack">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="section-title-wrap">
            <span className="eyebrow">
              <Feather size={14} className="eyebrow-icon" />
              L'ART DE LA MAISON • SCROLL-DRIVEN STACK
            </span>
            <h2>PILLARS OF HAUTE CRAFTSMANSHIP</h2>
            <p className="subtitle">
              Scroll down through the deck to observe each archival pillar pin, scale, and settle
              into the foundation of Aurelia Atelier.
            </p>
          </div>
        </Reveal>

        {/* View Toggle Bar */}
        <div className="stack-toggle-bar">
          <div className="mode-pills" role="group" aria-label="Card content switcher">
            <button
              type="button"
              className={`mode-pill ${viewMode === 'pillars' ? 'active' : ''}`}
              onClick={() => setViewMode('pillars')}
            >
              <Sparkles size={13} />
              <span>ATELIER PILLARS (4 ARCHIVES)</span>
            </button>
            <button
              type="button"
              className={`mode-pill ${viewMode === 'demo' ? 'active' : ''}`}
              onClick={() => setViewMode('demo')}
            >
              <Layers size={13} />
              <span>INTERACTIVE DEMO DECK (3 CARDS)</span>
            </button>
          </div>
          <span className="stack-hint">✦ Scroll within deck to pin & stack cards</span>
        </div>

        {/* Fixed 600px Height Container as requested */}
        <div className="scroll-stack-wrapper" style={{ height: 600 }}>
          {viewMode === 'pillars' ? (
            <ScrollStack itemDistance={120} itemStackDistance={28} dimAmount={0.25} itemScale={0.05}>
              <ScrollStackItem className="theme-atelier pillar-card-1">
                <div className="card-badge">PILLAR I • BESPOKE TAILORING</div>
                <h3>Mongolian Cashmere & Floating Canvas</h3>
                <p>
                  Every overcoat and tuxedo jacket begins with uncompromised horsehair and camel-hair canvas, hand-basted
                  across 48 hours to ensure a silhouette that molds organically to the patron over decades.
                </p>
                <div className="card-highlights">
                  <span>✦ 100% Grade-A Mongolian Cashmere</span>
                  <span>✦ Savile Row Hand-Stitched Lapels</span>
                  <span>✦ Lifetime Garment Provenance Guarantee</span>
                </div>
              </ScrollStackItem>

              <ScrollStackItem className="theme-atelier pillar-card-2">
                <div className="card-badge">PILLAR II • TEXTILE POETRY</div>
                <h3>22-Momme Mulberry Silk & Liquid Drape</h3>
                <p>
                  Sourced exclusively from heritage sericulture houses in Como and Varanasi. Woven on slow-speed jacquard looms
                  to preserve natural fibroin proteins, providing incomparable luster and fluid drape.
                </p>
                <div className="card-highlights">
                  <span>✦ Double-Sided Twill & Satin Weave</span>
                  <span>✦ Hand-Rolled French Hems</span>
                  <span>✦ Botanical & Mineral Vegetable Dyes</span>
                </div>
              </ScrollStackItem>

              <ScrollStackItem className="theme-atelier pillar-card-3">
                <div className="card-badge">PILLAR III • MAROQUINERIE</div>
                <h3>Full-Grain Calfskin & Solid Brass Hardware</h3>
                <p>
                  Hand-burnished with beeswax and natural oils. Saddle-stitched using waxed French linen thread that will
                  never unravel, anchored by solid 24K gold-plated brass locksets forged in Florence.
                </p>
                <div className="card-highlights">
                  <span>✦ French & Tuscan Full-Grain Boxcalf</span>
                  <span>✦ Traditional Two-Needle Saddle Stitch</span>
                  <span>✦ Hand-Buffed Edge Burnishing</span>
                </div>
              </ScrollStackItem>

              <ScrollStackItem className="theme-atelier pillar-card-4">
                <div className="card-badge">PILLAR IV • HAUTE HORLOGERIE</div>
                <h3>Calibre Precision & Bespoke Tourbillons</h3>
                <p>
                  Each timepiece is assembled by a single Master Horloger in Geneva. Hand-chamfered anglage bridges, obsidian
                  dials, and column-wheel chronographs celebrating horological permanence.
                </p>
                <div className="card-highlights">
                  <span>✦ COSC Certified Chronometer Accuracy</span>
                  <span>✦ Hand-Finished Côtes de Genève</span>
                  <span>✦ Individually Numbered Collector's Seal</span>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          ) : (
            <ScrollStack itemDistance={100} itemStackDistance={24} dimAmount={0.2} itemScale={0.05}>
              <ScrollStackItem itemClassName="demo-card demo-card-1">
                <h2>Card 1</h2>
                <p>This is the first card in the stack</p>
                <div className="demo-footer">
                  <span className="demo-tag">First Tier • Foundation</span>
                </div>
              </ScrollStackItem>
              <ScrollStackItem itemClassName="demo-card demo-card-2">
                <h2>Card 2</h2>
                <p>This is the second card in the stack</p>
                <div className="demo-footer">
                  <span className="demo-tag">Second Tier • Elevation</span>
                </div>
              </ScrollStackItem>
              <ScrollStackItem itemClassName="demo-card demo-card-3">
                <h2>Card 3</h2>
                <p>This is the third card in the stack</p>
                <div className="demo-footer">
                  <span className="demo-tag">Third Tier • Pinnacle</span>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="stack-bottom-actions">
          <Link to="/about" className="learn-more-link">
            <span>DISCOVER THE ATELIER WORKSHOPS</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipStackSection;

