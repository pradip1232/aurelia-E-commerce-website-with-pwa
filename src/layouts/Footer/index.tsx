import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUIStore } from '../../stores/useUIStore';
import { ArrowRight, ShieldCheck, RefreshCw, Check } from 'lucide-react';
import './index.scss';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useUIStore();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please provide a valid email address', 'warning');
      return;
    }
    setSubscribed(true);
    showToast('Welcome to the Aurelia Inner Circle');
    setEmail('');
  };

  return (
    <footer className={`atelier-footer ${className}`}>
      {/* 1. Value Propositions Banner */}
      <div className="atelier-footer__assurances">
        <div className="atelier-footer__assurances-inner">
          <div className="atelier-footer__assurance-box">
            <span className="atelier-footer__assurance-icon">✦</span>
            <div className="atelier-footer__assurance-text">
              <h4>EXEMPLARY CRAFTSMANSHIP</h4>
              <p>Each piece created by certified master artisans across Florence, Lyon, and Tokyo.</p>
            </div>
          </div>

          <div className="atelier-footer__assurance-box">
            <ShieldCheck size={28} className="atelier-footer__assurance-icon-lucide" />
            <div className="atelier-footer__assurance-text">
              <h4>AUTHENTICITY CERTIFIED</h4>
              <p>Guaranteed authentic with tamper-proof cryptographic origin certificates.</p>
            </div>
          </div>

          <div className="atelier-footer__assurance-box">
            <RefreshCw size={26} className="atelier-footer__assurance-icon-lucide" />
            <div className="atelier-footer__assurance-text">
              <h4>COMPLIMENTARY CONCIERGE</h4>
              <p>White-glove courier delivery, custom monogramming, and effortless 14-day returns.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Newsletter Subscription */}
      <div className="atelier-footer__newsletter">
        <div className="atelier-footer__newsletter-inner">
          <div className="atelier-footer__newsletter-copy">
            <span className="atelier-footer__newsletter-eyebrow">THE PRIVATE ATELIER</span>
            <h3>JOIN THE INNER CIRCLE</h3>
            <p>
              Receive confidential invitations to seasonal private sales, limited bespoke releases, and
              curated editorial essays.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="atelier-footer__newsletter-form">
            {subscribed ? (
              <div className="atelier-footer__subscribed-msg">
                <Check size={18} />
                <span>You have been registered for private invitations.</span>
              </div>
            ) : (
              <div className="atelier-footer__input-wrap">
                <input
                  type="email"
                  placeholder="Enter your personal email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Subscribe to newsletter">
                  <span>JOIN</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
            <span className="atelier-footer__privacy-note">
              We respect your privacy. Unsubscribe anytime with immediate effect.
            </span>
          </form>
        </div>
      </div>

      {/* 3. Main Footer Links */}
      <div className="atelier-footer__links-section">
        <div className="atelier-footer__links-inner">
          {/* Brand Info Column */}
          <div className="atelier-footer__brand-col">
            <div className="atelier-footer__brand-title">
              <span className="atelier-footer__brand-symbol">✦</span>
              <span className="atelier-footer__brand-name">AURELIA ATELIER</span>
            </div>
            <p className="atelier-footer__brand-desc">
              VORANO INDIA Private Luxury Maison. Elevating timeless couture, refined accessories, and
              curated living through uncompromising craftsmanship and pure aesthetic poise.
            </p>
            <div className="atelier-footer__socials">
              <a href="#instagram" aria-label="Instagram">Instagram</a>
              <a href="#vogue" aria-label="Editorial Journal">Editorial</a>
              <a href="#pinterest" aria-label="Pinterest Lookbook">Lookbook</a>
              <a href="#concierge" aria-label="Private Concierge">Concierge</a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="atelier-footer__nav-col">
            <h5>THE ATELIER</h5>
            <ul>
              <li><Link to="/about">Heritage & Craft</Link></li>
              <li><Link to="/about">Artisans & Provenance</Link></li>
              <li><Link to="/shop">SS26 Runway Collection</Link></li>
              <li><Link to="/about">Sustainable Luxury</Link></li>
              <li><Link to="/contact">Press & Editorial</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="atelier-footer__nav-col">
            <h5>CLIENT PRIVILEGES</h5>
            <ul>
              <li><Link to="/account">Private Account</Link></li>
              <li><Link to="/contact">Book Private Viewing</Link></li>
              <li><Link to="/contact">Bespoke Monogramming</Link></li>
              <li><Link to="/wishlist">Saved Creations</Link></li>
              <li><Link to="/orders">Track Consignment</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="atelier-footer__nav-col">
            <h5>SERVICES & CARE</h5>
            <ul>
              <li><Link to="/faq">Complimentary Shipping</Link></li>
              <li><Link to="/faq">Returns & Exchanges</Link></li>
              <li><Link to="/contact">Restoration & Repair</Link></li>
              <li><Link to="/faq">Authenticity Guarantee</Link></li>
              <li><Link to="/contact">Contact Concierge</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Bottom Legal Bar */}
      <div className="atelier-footer__bottom">
        <div className="atelier-footer__bottom-inner">
          <p>© {new Date().getFullYear()} AURELIA ATELIER — VORANO INDIA. All rights reserved.</p>
          <div className="atelier-footer__legal-links">
            <Link to="/faq">Privacy Policy</Link>
            <Link to="/faq">Terms of Sale</Link>
            <Link to="/faq">Cookie Preferences</Link>
            <Link to="/faq">Security Standards</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
