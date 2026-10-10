import React, { useState, useEffect } from 'react';
import { MOCK_PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../product/ProductCard';
import { Zap, Clock } from 'lucide-react';
import './FlashSaleSection.scss';

export const FlashSaleSection: React.FC = () => {
  // Live ticking countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 42,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show sale items
  const saleProducts = MOCK_PRODUCTS.filter((p) => p.discount > 22).slice(0, 4);

  return (
    <section className="flash-sale-section">
      <div className="container">
        <div className="flash-sale-header">
          <div className="title-block">
            <div className="badge-sale-live">
              <Zap size={14} className="zap-icon" />
              <span>PRIVATE SALON PRIVILEGES</span>
            </div>
            <h2>SEASONAL FLASH EDITIONS</h2>
            <p>Exclusive 24-hour acquisition windows on limited artisanal releases.</p>
          </div>

          {/* Real Working Countdown Display */}
          <div className="countdown-clock">
            <div className="clock-label">
              <Clock size={16} />
              <span>OFFER CLOSES IN</span>
            </div>
            <div className="clock-digits">
              <div className="digit-card">
                <span className="num">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="unit">HOURS</span>
              </div>
              <span className="colon">:</span>
              <div className="digit-card">
                <span className="num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="unit">MINUTES</span>
              </div>
              <span className="colon">:</span>
              <div className="digit-card">
                <span className="num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="unit">SECONDS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flash-products-grid">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

