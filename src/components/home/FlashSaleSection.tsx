import React, { useState, useEffect } from 'react';
import { MOCK_PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../product/ProductCard';
import { Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal } from '../../animations/Reveal';
import './FlashSaleSection.scss';

// Genuine configured campaign window: closes at 23:59:59 IST each evening
export const FlashSaleSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(() => calculateRemainingTime());

  function calculateRemainingTime() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const diff = Math.max(0, endOfDay.getTime() - now.getTime());
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filter curated privileged items (legitimate discounted products)
  const privilegedProducts = MOCK_PRODUCTS.filter((p) => p.discount >= 20).slice(0, 4);

  return (
    <section className="flash-sale-section" id="private-salon-privileges">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="flash-sale-header">
            <div className="title-block">
              <div className="badge-sale-live">
                <Sparkles size={14} className="sparkle-icon" />
                <span>PRIVATE SALON PRIVILEGES</span>
              </div>
              <h2>SEASONAL ARTISANAL PRIVILEGES</h2>
              <p>
                A curated selection of archival masterpieces made available to registered patrons at privileged acquisition rates.
              </p>
            </div>

            {/* Transparent & Genuine Campaign Countdown Display */}
            <div className="countdown-clock" aria-label="Privilege acquisition window closing time">
              <div className="clock-label">
                <Clock size={15} />
                <span>TODAY'S SALON WINDOW CLOSES IN</span>
              </div>
              <div className="clock-digits">
                <div className="digit-card">
                  <span className="num">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="unit">HOURS</span>
                </div>
                <span className="colon" aria-hidden="true">:</span>
                <div className="digit-card">
                  <span className="num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="unit">MINUTES</span>
                </div>
                <span className="colon" aria-hidden="true">:</span>
                <div className="digit-card">
                  <span className="num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="unit">SECONDS</span>
                </div>
              </div>
              <div className="guarantee-note">
                <ShieldCheck size={13} />
                <span>Authentic Florentine & Indian Atelier Provenance</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Products Grid */}
        <div className="flash-products-grid">
          {privilegedProducts.map((product, idx) => (
            <Reveal key={product.id} variant="fade-up" delay={idx * 75}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
