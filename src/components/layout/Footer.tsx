import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUIStore } from '../../stores/useUIStore';
import { ArrowRight, ShieldCheck, RefreshCw, Check } from 'lucide-react';
import './Footer.scss';

export const Footer: React.FC = () => {
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
    <footer className="site-footer">
      {/* 1. Value Propositions Banner */}
      <div className="footer-assurances">
        <div className="container assurances-grid">
          <div className="assurance-box">
            <span className="icon">✦</span>
            <div className="text">
              <h4>EXEMPLARY CRAFTSMANSHIP</h4>
              <p>Each piece created by certified master artisans across Florence, Lyon, and Tokyo.</p>
            </div>
          </div>

          <div className="assurance-box">
            <ShieldCheck size={28} className="icon-lucide" />
            <div className="text">
              <h4>AUTHENTICITY CERTIFIED</h4>
              <p>Guaranteed authentic with tamper-proof cryptographic origin certificates.</p>
            </div>
          </div>

          <div className="assurance-box">
            <RefreshCw size={26} className="icon-lucide" />
            <div className="text">
              <h4>COMPLIMENTARY CONCIERGE</h4>
              <p>White-glove courier delivery, custom monogramming, and effortless 14-day returns.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Newsletter Subscription */}
      <div className="newsletter-section">
        <div className="container newsletter-inner">
          <div className="newsletter-copy">
            <span className="eyebrow">THE PRIVATE ATELIER</span>
            <h3>JOIN THE INNER CIRCLE</h3>
            <p>
              Receive confidential invitations to seasonal private sales, limited bespoke releases, and
              curated editorial essays.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            {subscribed ? (
              <div className="subscribed-success">
                <Check size={18} />
                <span>You have been registered for private invitations.</span>
              </div>
            ) : (
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your personal email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="submit-btn" aria-label="Join newsletter">
                  <span>JOIN</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* 3. Main Footer Links Directory */}
      <div className="footer-directory">
        <div className="container directory-grid">
          <div className="brand-col">
            <Link to="/" className="footer-logo">
              <span className="logo-symbol">✦</span>
              <span className="logo-text">AURELIA</span>
            </Link>
            <p className="brand-credo">
              An independent luxury maison dedicated to timeless aesthetics, noble raw materials, and
              uncompromising European tailoring.
            </p>
            <div className="social-links">
              <a href="#instagram" target="_blank" rel="noreferrer">Instagram</a>
              <span className="sep">•</span>
              <a href="#editorial" target="_blank" rel="noreferrer">Editorial</a>
              <span className="sep">•</span>
              <a href="#journal" target="_blank" rel="noreferrer">Journal</a>
            </div>
          </div>

          <div className="links-col">
            <h5 className="col-title">COLLECTIONS</h5>
            <ul>
              <li><Link to="/category/men">Sartorial Men</Link></li>
              <li><Link to="/category/women">Haute Women</Link></li>
              <li><Link to="/category/accessories">Fine Horology</Link></li>
              <li><Link to="/category/electronics">Acoustics</Link></li>
              <li><Link to="/category/home">Home Scents</Link></li>
              <li><Link to="/new-arrivals">New SS26 Editions</Link></li>
            </ul>
          </div>

          <div className="links-col">
            <h5 className="col-title">CLIENT SERVICES</h5>
            <ul>
              <li><Link to="/contact">Contact Concierge</Link></li>
              <li><Link to="/orders">Track Your Shipment</Link></li>
              <li><Link to="/returns">Returns & Exchanges</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/contact">Custom Monogramming</Link></li>
              <li><Link to="/contact">Bespoke Appointments</Link></li>
            </ul>
          </div>

          <div className="links-col">
            <h5 className="col-title">THE MAISON</h5>
            <ul>
              <li><Link to="/about">Our Philosophy</Link></li>
              <li><Link to="/about">Artisan Partners</Link></li>
              <li><Link to="/about">Sustainable Commitments</Link></li>
              <li><Link to="/contact">Private Salons</Link></li>
              <li><Link to="/contact">Careers at Aurelia</Link></li>
              <li><Link to="/faq">Privacy & Security</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Bottom Legal & Currency Bar */}
      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p className="copyright">
            © {new Date().getFullYear()} AURELIA ATELIER MAISON S.A. ALL RIGHTS RESERVED.
          </p>
          <div className="payment-badges">
            <span>UPI</span>
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMEX</span>
            <span>NET BANKING</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

