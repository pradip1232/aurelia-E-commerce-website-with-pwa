import React, { useState } from 'react';
import './index.scss';

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

export default FAQPage;
