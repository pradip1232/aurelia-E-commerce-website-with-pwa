import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useUIStore } from '@/stores/useUIStore';
import { Reveal } from '@/animations/Reveal';
import './index.scss';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useUIStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'warning');
      return;
    }
    setIsSubscribed(true);
    showToast('Privilege registered. Welcome to the Inner Circle.');
    setEmail('');
  };

  return (
    <section className="atelier-newsletter-sec" aria-label="Inner Circle Newsletter">
      <div className="atelier-newsletter-sec__container">
        <Reveal variant="fade-up">
          <div className="atelier-newsletter-sec__card">
            <span className="eyebrow">CONFIDENTIAL ACCESS</span>
            <h2 className="title">JOIN THE PRIVATE INNER CIRCLE</h2>
            <p className="description">
              Receive confidential invitations to seasonal private sales, limited bespoke releases,
              and private client appointments.
            </p>

            <form onSubmit={handleSubmit} className="atelier-newsletter-sec__form">
              {isSubscribed ? (
                <div className="subscribed-success">
                  <Check size={18} />
                  <span>You have been registered for private invitations.</span>
                </div>
              ) : (
                <div className="input-row">
                  <input
                    type="email"
                    placeholder="Enter your personal email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" aria-label="Join Inner Circle">
                    <span>JOIN</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              )}
              <span className="privacy-text">
                Discreet and respectful communications only. Unsubscribe at any time.
              </span>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default NewsletterSection;
