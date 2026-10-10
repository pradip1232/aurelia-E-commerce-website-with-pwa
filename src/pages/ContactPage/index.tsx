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
import { useUIStore } from '../../stores/useUIStore';
import { Link } from 'react-router-dom';
import './index.scss';

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

export default ContactPage;
