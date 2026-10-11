import React, { useState } from 'react';
import MagicBento from '../ui/MagicBento';
import { Reveal } from '../../animations/Reveal';
import { LayoutGrid, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import './MagicBentoSection.scss';

export const MagicBentoSection: React.FC = () => {
  // Theme color options (Defaulting to our Atelier Champagne Gold theme)
  const [glowColor, setGlowColor] = useState<'gold' | 'sovereign' | 'amethyst'>('gold');

  const glowColorMap = {
    gold: '197, 168, 128',       // Aurelia Champagne Gold
    sovereign: '212, 175, 55',   // 24K Sovereign Gold
    amethyst: '132, 0, 255'      // ReactBits Original Purple
  };

  return (
    <section className="magic-bento-section" aria-label="Interactive Atelier Bento Realms">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="section-title-wrap">
            <span className="eyebrow">
              <LayoutGrid size={14} className="eyebrow-icon" />
              ATELIER PERSPECTIVES • INTERACTIVE BENTO
            </span>
            <h2>THE MAISON REALMS</h2>
            <p className="subtitle">
              Hover across our tactile bento composition to observe dynamic cursor spotlighting,
              3D gyroscopic tilt, starlight particles, and magnetic kinetic attraction in our signature gold palette.
            </p>
          </div>
        </Reveal>

        {/* Color Palette Toggle Bar */}
        <div className="bento-theme-bar">
          <div className="palette-pills" role="group" aria-label="Atmosphere color selector">
            <button
              type="button"
              className={`palette-pill ${glowColor === 'gold' ? 'active' : ''}`}
              onClick={() => setGlowColor('gold')}
            >
              <span className="color-dot gold-dot" />
              <span>CHAMPAGNE GOLD (MAISON THEME)</span>
            </button>
            <button
              type="button"
              className={`palette-pill ${glowColor === 'sovereign' ? 'active' : ''}`}
              onClick={() => setGlowColor('sovereign')}
            >
              <span className="color-dot sovereign-dot" />
              <span>SOVEREIGN 24K GOLD</span>
            </button>
            <button
              type="button"
              className={`palette-pill ${glowColor === 'amethyst' ? 'active' : ''}`}
              onClick={() => setGlowColor('amethyst')}
            >
              <span className="color-dot amethyst-dot" />
              <span>IMPERIAL AMETHYST (ORIGINAL)</span>
            </button>
          </div>

          <div className="bento-features-hint">
            <span>✦ 3D Gyroscope Tilt</span>
            <span>✦ Cursor Magnetism</span>
            <span>✦ Click Ripple Waves</span>
          </div>
        </div>

        {/* The MagicBento Component */}
        <div className="magic-bento-display">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor={glowColorMap[glowColor]}
          />
        </div>
      </div>
    </section>
  );
};

export default MagicBentoSection;
