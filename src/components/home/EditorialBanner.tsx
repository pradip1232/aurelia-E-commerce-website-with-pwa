import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './EditorialBanner.scss';

export const EditorialBanner: React.FC = () => {
  return (
    <section className="editorial-banner-section">
      <div className="container">
        <div className="editorial-split-box">
          <div className="editorial-media">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
              alt="Atelier Craftsmanship"
            />
            <div className="media-quote-badge">
              <Sparkles size={16} />
              <span>FLORENTINE ATELIER • EST. 1928</span>
            </div>
          </div>

          <div className="editorial-narrative">
            <span className="narrative-tag">THE PHILOSOPHY OF NOBLE LIVING</span>
            <h2>"TRUE LUXURY LIES IN THE PURITY OF PROPORTION AND HONESTY OF MATERIALS."</h2>
            <p>
              In our workshops, we reject disposable trends in favor of enduring form. From
              Mongolian mountain cashmere to hand-finished vegetable calfskin, every silhouette is
              architecturally engineered to age with distinction and grace.
            </p>

            <div className="narrative-pillars">
              <div className="pillar-item">
                <strong>100% TRACEABLE</strong>
                <span>Direct ethical provenance from origin farms</span>
              </div>
              <div className="pillar-item">
                <strong>LIMITED EDITIONS</strong>
                <span>Small batch releases to preserve exclusivity</span>
              </div>
            </div>

            <div className="narrative-cta">
              <Link to="/about" className="btn-read-story">
                <span>READ THE ATELIER CHRONICLES</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

