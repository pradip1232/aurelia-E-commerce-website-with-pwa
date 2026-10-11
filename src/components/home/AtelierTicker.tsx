import React from 'react';
import { Sparkles, Shield, Clock, Gem, Award, Truck } from 'lucide-react';
import './AtelierTicker.scss';

export const AtelierTicker: React.FC = () => {
  const tickerItems = [
    { icon: <Sparkles size={13} />, text: 'SPRING / SUMMER 2026 PRÊT-À-PORTER' },
    { icon: <Gem size={13} />, text: '100% ETHICALLY TRACEABLE NOBLE FIBERS' },
    { icon: <Truck size={13} />, text: 'COMPLIMENTARY WHITE-GLOVE AIR COURIER ACROSS INDIA' },
    { icon: <Award size={13} />, text: 'PRIVATE SALON PRIVILEGES • 20% OFF ABOVE ₹25,000 (CODE: LUXURY20)' },
    { icon: <Shield size={13} />, text: 'FLORENTINE & INDIAN ARTISANAL LINEAGE' },
    { icon: <Clock size={13} />, text: '48-HOUR EXPRESS CONCIERGE DISPATCH' },
  ];

  return (
    <div className="atelier-ticker-root" role="region" aria-label="Atelier Highlights Ticker">
      <div className="ticker-track">
        {/* Double list to create seamless infinite scrolling marquee */}
        <div className="ticker-content">
          {tickerItems.map((item, idx) => (
            <div key={`ticker-1-${idx}`} className="ticker-item">
              <span className="ticker-icon">{item.icon}</span>
              <span className="ticker-text">{item.text}</span>
              <span className="ticker-separator">✦</span>
            </div>
          ))}
        </div>
        <div className="ticker-content" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <div key={`ticker-2-${idx}`} className="ticker-item">
              <span className="ticker-icon">{item.icon}</span>
              <span className="ticker-text">{item.text}</span>
              <span className="ticker-separator">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
