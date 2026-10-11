import React from 'react';
import { ShieldCheck, Truck, Sparkles, UserCheck } from 'lucide-react';
import { Reveal } from '../../animations/Reveal';
import './MaisonAssurances.scss';

export const MaisonAssurances: React.FC = () => {
  const assurances = [
    {
      icon: <Truck size={24} />,
      title: 'WHITE-GLOVE AIR CONCIERGE',
      subtitle: 'Complimentary insured express air courier delivery to all pin codes in India with signature on receipt.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'BESPOKE MONOGRAMMING',
      subtitle: 'Complimentary hand-stamped gold foil personalization on all leather satchels, trunks, and wallets.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'CERTIFIED ORIGIN PROVENANCE',
      subtitle: 'Every creation arrives with an authenticated, tamper-proof parchment certificate of artisanal provenance.'
    },
    {
      icon: <UserCheck size={24} />,
      title: 'PRIVATE ATELIER STYLING',
      subtitle: 'Direct access to our senior private wardrobe curators for bespoke sizing and styling consultations.'
    }
  ];

  return (
    <section className="maison-assurances-section" aria-label="Maison Privileges & Assurances">
      <div className="container">
        <div className="assurances-grid-layout">
          {assurances.map((item, idx) => (
            <Reveal key={idx} variant="fade-up" delay={idx * 60}>
              <div className="assurance-card">
                <div className="assurance-icon-circle">
                  {item.icon}
                </div>
                <div className="assurance-content">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
