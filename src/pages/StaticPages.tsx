import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  Award,
  Sparkles,
  Shield,
  Feather,
  Compass,
  ArrowRight,
  Globe2,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useUIStore } from '../stores/useUIStore';
import { Link } from 'react-router-dom';
import './StaticPages.scss';

export const AboutPage: React.FC = () => {
  const [activeHeritageTab, setActiveHeritageTab] = useState<'provenance' | 'artisans' | 'sustainability'>('provenance');

  return (
    <div className="static-page about-page">
      {/* 1. Hero Exhibition */}
      <section className="about-hero-section">
        <div className="container">
          <div className="hero-text-block">
            <span className="eyebrow">ESTABLISHED 1928 • FLORENCE & MUMBAI</span>
            <h1 className="hero-title">THE ARCHITECTURE OF SILENT LUXURY</h1>
            <p className="hero-lead">
              Aurelia Atelier was founded on a singular manifesto: true luxury never shouts.
              It reveals itself through the architectural honesty of proportion, the tactile memory
              of noble raw fibers, and the indelible imprint of hands that have mastered their trade across generations.
            </p>
          </div>
        </div>
        <div className="about-hero-banner">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85"
            alt="Aurelia Atelier Editorial Showcase"
          />
          <div className="hero-quote-overlay">
            <blockquote>
              "We do not create for seasonal trends. We craft heirloom pieces destined to be cherished, preserved, and handed down."
            </blockquote>
            <cite>— Maestro Julian Vance, Head of Haute Tailoring</cite>
          </div>
        </div>
      </section>

      {/* 2. Key Atelier Figures & Stats */}
      <section className="about-stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">98</span>
            <span className="stat-unit">Years</span>
            <p>Of heritage textile innovation and continuous bespoke tailoring lineage.</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-unit">Traceable</span>
            <p>Single-origin Mongolian cashmere and ethical mulberry silk from Lyon certified at source.</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">42</span>
            <span className="stat-unit">Hours</span>
            <p>Average bench-crafting dedicated by master artisans to finish each structured coat.</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">0%</span>
            <span className="stat-unit">Overproduction</span>
            <p>Limited, numbered atelier editions crafted strictly in balanced micro-batches.</p>
          </div>
        </div>
      </section>

      {/* 3. The Pillars of Craftsmanship */}
      <section className="about-craft-pillars">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">UNCOMPROMISING STANDARDS</span>
            <h2>THE THREE PILLARS OF OUR MAISON</h2>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <Feather size={28} />
              </div>
              <h3>NOBLE NATURAL FIBERS</h3>
              <p>
                We reject all synthetic polyesters and petroleum-based textiles. Every thread is selected
                from 100% pure organic cashmere, Grade-6A mulberry raw silk, vegetable-tanned full grain leather,
                and rare Egyptian Giza 45 long-staple cotton.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Award size={28} />
              </div>
              <h3>GENERATIONAL MASTERY</h3>
              <p>
                Our craft is preserved by multi-generational families in Tuscany, Lyon, and Kyoto. Each seam
                is hand-basted, collars are hand-padded with horsehair canvas, and horn buttons are sewn
                with artisanal crow-foot stitching.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Shield size={28} />
              </div>
              <h3>CRYPTO AUTHENTICITY</h3>
              <p>
                Every Aurelia creation is registered into our private blockchain ledger with an encrypted NFC
                identity chip embedded seamlessly in the inner pocket, guaranteeing provenance and life-long atelier repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Provenance Journey */}
      <section className="about-interactive-tabs">
        <div className="container">
          <div className="tabs-nav-bar">
            <button
              className={`tab-btn ${activeHeritageTab === 'provenance' ? 'active' : ''}`}
              onClick={() => setActiveHeritageTab('provenance')}
            >
              <Globe2 size={16} />
              <span>TERROIR & PROVENANCE</span>
            </button>
            <button
              className={`tab-btn ${activeHeritageTab === 'artisans' ? 'active' : ''}`}
              onClick={() => setActiveHeritageTab('artisans')}
            >
              <Sparkles size={16} />
              <span>THE ARTISAN GUILD</span>
            </button>
            <button
              className={`tab-btn ${activeHeritageTab === 'sustainability' ? 'active' : ''}`}
              onClick={() => setActiveHeritageTab('sustainability')}
            >
              <Compass size={16} />
              <span>SUSTAINABILITY & ETHICS</span>
            </button>
          </div>

          <div className="tab-pane-content">
            {activeHeritageTab === 'provenance' && (
              <div className="tab-split-layout">
                <div className="split-text">
                  <h3>Sourced from the World's Most Revered Terroirs</h3>
                  <p>
                    Just as fine wine mirrors its soil, luxury garments reflect their origin.
                    Our cashmere originates from high-plateau free-range Mongolian goats, combed gently by hand
                    during spring molting season to preserve fleece fineness under 14.5 microns.
                  </p>
                  <p>
                    Our leathers come exclusively from certified humane Tuscan cooperatives utilizing
                    mimosa and chestnut bark infusions in slow wooden drums, creating rich patinas that mature beautifully over decades.
                  </p>
                  <div className="origin-tags">
                    <span>✦ Inner Mongolia (Cashmere)</span>
                    <span>✦ Lyon, France (Mulberry Silk)</span>
                    <span>✦ Santa Croce, Tuscany (Vachetta Leather)</span>
                  </div>
                </div>
                <div className="split-media">
                  <img
                    src="https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=900&q=80"
                    alt="Atelier fabric selection"
                  />
                </div>
              </div>
            )}

            {activeHeritageTab === 'artisans' && (
              <div className="tab-split-layout">
                <div className="split-text">
                  <h3>Human Touch Over Machine Speed</h3>
                  <p>
                    In an age of automated fast fashion, Aurelia champions the irreplaceable intuition of master
                    tailors. Over 300 individual manual steps go into the construction of a single tailored blazer.
                  </p>
                  <p>
                    Each garment carries a discrete embroidered monogram denoting the private guild number of the
                    artisan who shaped it, creating an authentic human bond between maker and wearer.
                  </p>
                  <div className="origin-tags">
                    <span>✦ 40+ Guild Craftsmen</span>
                    <span>✦ Fair-Wage Certified</span>
                    <span>✦ Apprentice Preservation Programs</span>
                  </div>
                </div>
                <div className="split-media">
                  <img
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80"
                    alt="Master artisan tailoring garment"
                  />
                </div>
              </div>
            )}

            {activeHeritageTab === 'sustainability' && (
              <div className="tab-split-layout">
                <div className="split-text">
                  <h3>Restorative Circularity & Lifetime Care</h3>
                  <p>
                    We believe the most sustainable product is one that never enters a landfill. Every purchase includes
                    complimentary lifetime stitch repair, re-lining, and conditioning at our private salons.
                  </p>
                  <p>
                    Our packaging is 100% plastic-free, made of recycled mulberry paper, unbleached organic cotton dust bags,
                    and vegetable ink seals.
                  </p>
                  <div className="origin-tags">
                    <span>✦ 100% Biodegradable Packaging</span>
                    <span>✦ Lifetime Repair Commitment</span>
                    <span>✦ Zero Chemical Effluent Dyes</span>
                  </div>
                </div>
                <div className="split-media">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
                    alt="Sustainable boutique interior"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Bottom Atelier Invitation */}
      <section className="about-cta-section">
        <div className="container text-center">
          <h2>EXPERIENCE THE COLLECTION IN PERSON</h2>
          <p>Schedule a private viewing at our flagship salon or consult directly with our senior styling team.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary-luxury">
              <span>BOOK PRIVATE SALON APPOINTMENT</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/shop" className="btn-secondary-luxury">
              <span>EXPLORE THE CURRENT ATELIER</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const { showToast } = useUIStore();
  const [submitted, setSubmitted] = useState(false);
  const [activeService, setActiveService] = useState<'consultation' | 'salon' | 'custom' | 'order'>('consultation');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Bespoke Order Consultation',
    preferredDate: '',
    salonLocation: 'Flagship Mumbai - Colaba',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your inquiry has been relayed to our Private Client Concierge');
  };

  return (
    <div className="static-page contact-page">
      {/* 1. Header Banner */}
      <div className="contact-hero-banner">
        <div className="container">
          <span className="eyebrow">CLIENT SERVICES & PRIVATE CONCIERGE</span>
          <h1>AT YOUR PERSONAL SERVICE</h1>
          <p className="lead-text">
            Whether arranging a discreet salon preview, personal bespoke fittings, monogramming requests,
            or global insured courier tracking, our senior client advisors are available 7 days a week.
          </p>
        </div>
      </div>

      <div className="container contact-main-container">
        {/* Quick Contact Bar Cards */}
        <div className="contact-channels-grid">
          <div className="channel-card">
            <div className="icon-wrap"><Phone size={22} /></div>
            <h4>DIRECT CLIENT LINE</h4>
            <p>Immediate concierge advisory for current clients.</p>
            <a href="tel:+912289001200" className="link-action">+91 (022) 8900 1200</a>
            <span className="note">Mon — Sat: 10:00 AM – 8:00 PM IST</span>
          </div>

          <div className="channel-card">
            <div className="icon-wrap"><Mail size={22} /></div>
            <h4>DIGITAL CORRESPONDENCE</h4>
            <p>Private inquiries, editorial press, and bespoke orders.</p>
            <a href="mailto:concierge@aurelia-atelier.com" className="link-action">concierge@aurelia-atelier.com</a>
            <span className="note">Average response time: &lt; 2 Hours</span>
          </div>

          <div className="channel-card">
            <div className="icon-wrap"><MessageSquare size={22} /></div>
            <h4>WHATSAPP CONCIERGE</h4>
            <p>Real-time visual catalog browsing & VIP assistance.</p>
            <a href="https://wa.me/919820144521" target="_blank" rel="noreferrer" className="link-action">+91 98201 44521</a>
            <span className="note">Instant encrypted chat available</span>
          </div>

          <div className="channel-card">
            <div className="icon-wrap"><Calendar size={22} /></div>
            <h4>PRIVATE SALON ACCESS</h4>
            <p>Champagne welcome & private fitting suite reservations.</p>
            <button onClick={() => setActiveService('salon')} className="link-action-btn">Schedule Salon Visit</button>
            <span className="note">By prior appointment only</span>
          </div>
        </div>

        {/* 2. Main Consultation Form + Salons */}
        <div className="contact-interactive-grid">
          {/* Form */}
          <div className="contact-form-box">
            <div className="form-header">
              <h3>SCHEDULE AN INQUIRY OR APPOINTMENT</h3>
              <p>Please select your request type below to be connected with the appropriate specialist.</p>
            </div>

            {/* Service selector tabs */}
            <div className="service-tabs">
              <button
                type="button"
                className={`tab-chip ${activeService === 'consultation' ? 'active' : ''}`}
                onClick={() => {
                  setActiveService('consultation');
                  setFormData({ ...formData, serviceType: 'Bespoke Order Consultation' });
                }}
              >
                Atelier Consultation
              </button>
              <button
                type="button"
                className={`tab-chip ${activeService === 'salon' ? 'active' : ''}`}
                onClick={() => {
                  setActiveService('salon');
                  setFormData({ ...formData, serviceType: 'Private Salon Appointment' });
                }}
              >
                Salon Suite Visit
              </button>
              <button
                type="button"
                className={`tab-chip ${activeService === 'custom' ? 'active' : ''}`}
                onClick={() => {
                  setActiveService('custom');
                  setFormData({ ...formData, serviceType: 'Custom Monogram & Sizing' });
                }}
              >
                Bespoke Monogramming
              </button>
              <button
                type="button"
                className={`tab-chip ${activeService === 'order' ? 'active' : ''}`}
                onClick={() => {
                  setActiveService('order');
                  setFormData({ ...formData, serviceType: 'Order & Shipping Tracking' });
                }}
              >
                Logistics & Care
              </button>
            </div>

            {submitted ? (
              <div className="contact-success-msg">
                <div className="check-badge">
                  <Check size={32} />
                </div>
                <h3>INQUIRY CONFIRMED</h3>
                <p>
                  Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Your consultation dossier has been routed to our Senior Private Client Advisor.
                  You will receive a confirmation call and calendar invitation shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-reset-inquiry"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="concierge-form">
                <div className="form-row">
                  <div className="field">
                    <label>YOUR FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alistair Croft"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label>EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alistair@croft-holdings.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label>PHONE NUMBER (FOR SMS / WHATSAPP)</label>
                    <input
                      type="tel"
                      placeholder="+91 98200 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="field">
                    <label>PREFERRED SALON OR REGION</label>
                    <select
                      value={formData.salonLocation}
                      onChange={(e) => setFormData({ ...formData, salonLocation: e.target.value })}
                    >
                      <option value="Flagship Mumbai - Colaba">Flagship Mumbai (The Royal Pavilions, Colaba)</option>
                      <option value="New Delhi - Chanakyapuri">New Delhi (The Heritage Arcade, Chanakyapuri)</option>
                      <option value="Bengaluru - Lavelle Road">Bengaluru (Atelier Penthouse, Lavelle Road)</option>
                      <option value="Virtual Video Suite">Virtual Video Consultation (Worldwide)</option>
                    </select>
                  </div>
                </div>

                {activeService === 'salon' && (
                  <div className="form-row">
                    <div className="field full-width">
                      <label>PREFERRED APPOINTMENT DATE</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                <div className="field full-width">
                  <label>YOUR INQUIRY OR SPECIAL REQUEST DETAILS *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify particular creations, bespoke size alterations, or special timings..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-send-inquiry">
                  <span>DISPATCH CONCIERGE DOSSIER</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>

          {/* Salon Locations Column */}
          <div className="salons-directory-box">
            <h3 className="salons-title">ATELIER SALONS</h3>
            <p className="salons-sub">Walk-ins welcome based on suite availability. Prior booking advised.</p>

            <div className="salons-list">
              <div className="salon-entry">
                <div className="salon-header">
                  <MapPin size={18} />
                  <strong>MUMBAI FLAGSHIP & ARCHIVE</strong>
                </div>
                <p className="salon-addr">Level 3, The Royal Pavilions, Apollo Bunder, Colaba, Mumbai 400001</p>
                <div className="salon-meta">
                  <span>✦ Private Valet Available</span>
                  <span>✦ Champagne Bar</span>
                  <span>✦ Monogram Studio</span>
                </div>
                <div className="salon-hours">
                  <Clock size={14} />
                  <span>Mon — Sat: 11:00 AM – 8:30 PM IST</span>
                </div>
              </div>

              <div className="salon-entry">
                <div className="salon-header">
                  <MapPin size={18} />
                  <strong>NEW DELHI EMBASSY SALON</strong>
                </div>
                <p className="salon-addr">Villa 7, The Heritage Arcade, Diplomatic Enclave, Chanakyapuri, New Delhi 110021</p>
                <div className="salon-meta">
                  <span>✦ Haute Horology Suite</span>
                  <span>✦ Tailoring Master Resident</span>
                </div>
                <div className="salon-hours">
                  <Clock size={14} />
                  <span>Mon — Sun: 11:00 AM – 8:00 PM IST</span>
                </div>
              </div>

              <div className="salon-entry">
                <div className="salon-header">
                  <MapPin size={18} />
                  <strong>BENGALURU PENTHOUSE SALON</strong>
                </div>
                <p className="salon-addr">Penthouse Floor, The Lavelle Pavilion, Lavelle Road, Bengaluru 560001</p>
                <div className="salon-meta">
                  <span>✦ Acoustic Listening Salon</span>
                  <span>✦ Rooftop Terrace</span>
                </div>
                <div className="salon-hours">
                  <Clock size={14} />
                  <span>Tue — Sun: 11:00 AM – 7:30 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does Aurelia ensure authentic provenance?',
      a: 'Every piece is crafted in certified European and Japanese workshops. Each item ships with an embossed cryptographic authenticity certificate recorded in our private atelier archives.'
    },
    {
      q: 'What are the delivery timelines for metro cities?',
      a: 'Orders in major metro hubs (Mumbai, New Delhi, Bengaluru) are delivered within 24 to 48 hours via dedicated white-glove air courier in climate-controlled chests.'
    },
    {
      q: 'What is your returns and exchange policy?',
      a: 'We offer complimentary 14-day doorstep collections on unworn creations in original packaging with zero questions asked.'
    },
    {
      q: 'Do you provide bespoke tailoring or custom monogramming?',
      a: 'Yes. Complimentary monogramming is available on all cashmere outerwear and leathercraft. Private tailoring appointments can be scheduled via our Concierge.'
    }
  ];

  return (
    <div className="static-page faq-page">
      <div className="container static-container">
        <span className="eyebrow">KNOWLEDGE BASE</span>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <p className="lead-text">Answers regarding orders, delivery, care guidelines, and atelier policies.</p>

        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                <span className="sign">{openIndex === idx ? '−' : '+'}</span>
              </div>
              {openIndex === idx && <p className="faq-answer">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="container text-center">
        <span className="num-404">404</span>
        <h1>PAGE HAS DEPARTED</h1>
        <p>The creation or corridor you are looking for has been relocated in our archives.</p>
        <a href="/" className="btn-home">RETURN TO ATELIER HOMEPAGE</a>
      </div>
    </div>
  );
};

