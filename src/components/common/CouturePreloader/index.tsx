import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, X, ChevronRight } from 'lucide-react';
import './index.scss';

interface CouturePreloaderProps {
  onComplete?: () => void;
}

const STEPS_META = [
  { id: 1, title: 'SCULPTING CHAPEAU', sub: 'Haute Millinery & Silk Velvet' },
  { id: 2, title: 'SILHOUETTE & JEWELS', sub: 'Atelier Pearls & Sovereign Gold' },
  { id: 3, title: 'TAILORING BODICE', sub: 'Architectural Cashmere Precision' },
  { id: 4, title: 'DRAPING SILK GOWN', sub: 'Mulberry Silk Fluted Pleats' },
  { id: 5, title: 'ATELIER LEATHERCRAFT', sub: 'Hand-burnished Quilted Minaudière' },
  { id: 6, title: 'RUNWAY STILETTOS', sub: 'Hand-lasted Italian Silhouette' },
  { id: 7, title: 'COLLECTION SS26 READY', sub: '✦ Welcome to Aurelia Atelier' },
];

export const CouturePreloader: React.FC<CouturePreloaderProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Close & unveil animation
  const handleDismiss = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('aurelia_couture_intro_seen', 'true');
      if (onComplete) onComplete();
    }, 700);
  }, [onComplete]);

  // Listen for manual replay events
  useEffect(() => {
    const handleReplay = () => {
      setIsVisible(true);
      setIsExiting(false);
      setCurrentStep(0);
      setProgress(0);
    };
    window.addEventListener('replay-couture-intro', handleReplay);
    return () => window.removeEventListener('replay-couture-intro', handleReplay);
  }, []);

  // Step-by-step assembly orchestration
  useEffect(() => {
    if (!isVisible || isExiting) return;

    const stepTimings = [
      { step: 1, progress: 16, delay: 200 },
      { step: 2, progress: 32, delay: 650 },
      { step: 3, progress: 50, delay: 1100 },
      { step: 4, progress: 68, delay: 1550 },
      { step: 5, progress: 84, delay: 2000 },
      { step: 6, progress: 95, delay: 2450 },
      { step: 7, progress: 100, delay: 2900 },
    ];

    const timers = stepTimings.map(({ step, progress: targetProgress, delay }) => {
      return setTimeout(() => {
        setCurrentStep(step);
        setProgress(targetProgress);
      }, delay);
    });

    // Auto unveil once complete
    const completionTimer = setTimeout(() => {
      handleDismiss();
    }, 3900);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completionTimer);
    };
  }, [isVisible, isExiting, handleDismiss]);

  if (!isVisible) return null;

  const currentMeta = STEPS_META[Math.min(Math.max(currentStep - 1, 0), STEPS_META.length - 1)];

  return (
    <div
      className={`couture-preloader-overlay ${isExiting ? 'is-exiting' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Atelier Haute Couture Presentation"
    >
      {/* Background Ambience Layers */}
      <div className="preloader-backdrop-gradient" />
      <div className="preloader-dust-stars" />

      {/* Top Header Controls */}
      <div className="preloader-header">
        <div className="atelier-brand-pill">
          <span className="brand-gem">✦</span>
          <span className="brand-name">AURELIA ATELIER</span>
          <span className="brand-season">SS26</span>
        </div>

        <button
          type="button"
          className="btn-skip-intro"
          onClick={handleDismiss}
          aria-label="Skip Introduction"
        >
          <span>SKIP INTRO</span>
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Centerpiece Showcase: The Animated Couture Girl Model */}
      <div className="preloader-model-stage">
        <div className="model-aura-glow" />

        <svg
          className={`couture-girl-svg step-${currentStep} ${currentStep >= 7 ? 'is-completed' : ''}`}
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldSheen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#fae19c" />
              <stop offset="100%" stopColor="#b38728" />
            </linearGradient>
            <linearGradient id="silkFabric" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e2029" />
              <stop offset="50%" stopColor="#121318" />
              <stop offset="100%" stopColor="#0a0a0d" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Runway Pedestal & Shadow Reflection */}
          <g className={`couture-part part-pedestal ${currentStep >= 1 ? 'is-visible' : ''}`}>
            <ellipse cx="200" cy="558" rx="100" ry="9" fill="rgba(212, 175, 55, 0.08)" />
            <ellipse
              cx="200"
              cy="558"
              rx="75"
              ry="6"
              fill="none"
              stroke="url(#goldSheen)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
          </g>

          {/* PART 6: Runway Stilettos & Poised Stance (Rendered behind gown slit) */}
          <g className={`couture-part part-6-stilettos ${currentStep >= 6 ? 'is-visible' : ''}`}>
            {/* Stepping Leg */}
            <path
              d="M 194,360 C 196,400 200,450 198,490 C 196,515 198,534 200,544"
              stroke="#e2be6c"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Front Stiletto Pump with Gold Sole */}
            <path
              d="M 194,541 C 200,543 210,546 221,546 C 224,545 225,543 221,540 C 211,538 202,535 198,533 Z"
              fill="#0e0f14"
              stroke="url(#goldSheen)"
              strokeWidth="1.6"
            />
            {/* Razor Stiletto Heel */}
            <line x1="196" y1="535" x2="195" y2="555" stroke="url(#goldSheen)" strokeWidth="2" />
            {/* Rear Leg In Stride */}
            <path
              d="M 166,495 C 168,515 170,535 172,546"
              stroke="#c5a059"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <line x1="170" y1="540" x2="169" y2="554" stroke="url(#goldSheen)" strokeWidth="1.8" />
          </g>

          {/* PART 4: The Cascading Mulberry Silk Gown */}
          <g className={`couture-part part-4-gown ${currentStep >= 4 ? 'is-visible' : ''}`}>
            {/* Gown Silk Body */}
            <path
              d="M 178,272 C 160,330 145,390 128,472 C 168,477 210,474 252,472 C 265,420 255,340 226,272 Z"
              fill="url(#silkFabric)"
              stroke="url(#goldSheen)"
              strokeWidth="2"
            />
            {/* Fluted Architectural Pleats */}
            <path
              d="M 185,275 C 175,340 160,410 148,470"
              stroke="#c5a059"
              strokeWidth="1.4"
              fill="none"
              strokeOpacity="0.85"
            />
            <path
              d="M 202,276 C 206,335 215,405 220,470"
              stroke="#c5a059"
              strokeWidth="1.4"
              fill="none"
              strokeOpacity="0.85"
            />
            <path
              d="M 218,275 C 230,340 242,410 248,470"
              stroke="#c5a059"
              strokeWidth="1.4"
              fill="none"
              strokeOpacity="0.85"
            />
            {/* High Slit Arch */}
            <path
              d="M 195,335 C 198,380 197,425 188,470"
              stroke="url(#goldSheen)"
              strokeWidth="1.8"
              fill="none"
            />
            {/* Gold Gown Hemline */}
            <path
              d="M 128,472 Q 190,480 252,472"
              stroke="url(#goldSheen)"
              strokeWidth="2.8"
              fill="none"
            />
          </g>

          {/* PART 3: Architectural Couture Bodice & Blazer */}
          <g className={`couture-part part-3-bodice ${currentStep >= 3 ? 'is-visible' : ''}`}>
            {/* Peplum Waistband */}
            <path
              d="M 175,248 Q 165,265 178,272 Q 202,276 226,272 Q 239,265 229,248 Z"
              fill="#181a22"
              stroke="url(#goldSheen)"
              strokeWidth="1.8"
            />
            {/* Pagoda Shoulders & Tailored Sleeves */}
            <path
              d="M 195,172 C 180,172 154,178 144,188 C 139,195 142,215 146,238 C 148,245 152,250 156,252"
              fill="#181a20"
              stroke="url(#goldSheen)"
              strokeWidth="2"
            />
            <path
              d="M 209,172 C 224,172 250,178 260,188 C 265,195 261,215 256,235 C 253,243 249,248 245,250"
              fill="#181a20"
              stroke="url(#goldSheen)"
              strokeWidth="2"
            />
            {/* V-Neck Lapels */}
            <path
              d="M 172,178 L 195,248 C 198,255 206,255 209,248 L 232,178 Z"
              fill="#131418"
              stroke="url(#goldSheen)"
              strokeWidth="1.6"
            />
            <path
              d="M 172,178 L 195,225 L 202,245 L 209,225 L 232,178"
              fill="none"
              stroke="#fae19c"
              strokeWidth="2"
            />
            {/* Gold Buttons */}
            <circle cx="198" cy="215" r="2.2" fill="#ffd700" />
            <circle cx="206" cy="215" r="2.2" fill="#ffd700" />
            <circle cx="199" cy="230" r="2.2" fill="#ffd700" />
            <circle cx="205" cy="230" r="2.2" fill="#ffd700" />
          </g>

          {/* PART 5: Atelier Quilted Leathercraft Minaudière */}
          <g className={`couture-part part-5-bag ${currentStep >= 5 ? 'is-visible' : ''}`}>
            {/* Arm Resting on Hip */}
            <path
              d="M 245,248 C 248,252 252,254 250,258"
              stroke="#e2be6c"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Golden Chain Loop */}
            <path
              d="M 249,255 Q 256,270 258,285"
              stroke="url(#goldSheen)"
              strokeWidth="1.8"
              strokeDasharray="3 2"
              fill="none"
            />
            {/* Handbag Case */}
            <rect
              x="250"
              y="280"
              width="38"
              height="28"
              rx="4"
              fill="#14151b"
              stroke="url(#goldSheen)"
              strokeWidth="2"
            />
            {/* Quilted Stitch Texture */}
            <line x1="250" y1="288" x2="280" y2="308" stroke="#333540" strokeWidth="1" />
            <line x1="258" y1="280" x2="288" y2="300" stroke="#333540" strokeWidth="1" />
            {/* Gold Turn-Lock Emblem */}
            <circle cx="269" cy="294" r="3.2" fill="#ffd700" />
          </g>

          {/* PART 2: Head Profile, Neck & Pearl Choker */}
          <g className={`couture-part part-2-head ${currentStep >= 2 ? 'is-visible' : ''}`}>
            {/* Chignon Hair */}
            <path
              d="M 180,118 C 172,135 178,150 188,145 C 195,152 208,148 212,135 C 215,125 210,118 180,118 Z"
              fill="#101116"
              stroke="url(#goldSheen)"
              strokeWidth="1.5"
            />
            {/* Aristocratic Neckline & Chin */}
            <path
              d="M 195,130 C 198,135 204,138 203,142 C 200,146 195,145 197,152 C 199,158 201,165 202,174"
              fill="none"
              stroke="#e2be6c"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M 203,142 Q 208,144 204,148 Q 200,152 197,152"
              fill="none"
              stroke="#e2be6c"
              strokeWidth="1.8"
            />
            {/* Pearl Choker */}
            <path
              d="M 193,170 Q 202,175 211,170"
              stroke="#ffffff"
              strokeWidth="3.2"
              strokeDasharray="3.2 2"
              fill="none"
            />
            <circle cx="202" cy="174" r="2.5" fill="#ffd700" filter="url(#goldGlow)" />
            {/* Pearl Droplet Earring */}
            <circle cx="188" cy="142" r="1.8" fill="#ffd700" />
            <line x1="188" y1="144" x2="188" y2="152" stroke="#ffd700" strokeWidth="1.4" />
            <circle cx="188" cy="153" r="2.5" fill="#ffffff" />
          </g>

          {/* PART 1: The Sculpted Wide-Brimmed Chapeau (Hat) */}
          <g className={`couture-part part-1-hat ${currentStep >= 1 ? 'is-visible' : ''}`}>
            {/* Crown Dome */}
            <path
              d="M 166,115 C 166,74 234,74 234,115 Z"
              fill="#18191e"
              stroke="url(#goldSheen)"
              strokeWidth="2.2"
            />
            {/* Wide Curving Brim */}
            <ellipse
              cx="200"
              cy="114"
              rx="88"
              ry="24"
              transform="rotate(-7 200 114)"
              fill="#1c1d24"
              stroke="url(#goldSheen)"
              strokeWidth="2.5"
            />
            {/* Golden Silk Ribbon Band */}
            <path
              d="M 164,112 Q 200,121 236,112"
              stroke="#fae19c"
              strokeWidth="4.2"
              fill="none"
            />
            {/* Flowing Ribbon Tail */}
            <path
              d="M 233,112 Q 256,132 249,158"
              stroke="url(#goldSheen)"
              strokeWidth="2.8"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* PART 7: Golden Sparkles & Atelier Aura */}
          <g className={`couture-part part-7-sparkles ${currentStep >= 7 ? 'is-visible' : ''}`}>
            <g transform="translate(110, 85)" className="twinkle-star star-1">
              <path d="M 0,-8 L 2,-2 L 8,0 L 2,2 L 0,8 L -2,2 L -8,0 L -2,-2 Z" fill="#ffd700" filter="url(#goldGlow)" />
            </g>
            <g transform="translate(295, 105)" className="twinkle-star star-2">
              <path d="M 0,-10 L 2.5,-2.5 L 10,0 L 2.5,2.5 L 0,10 L -2.5,2.5 L -10,0 L -2.5,-2.5 Z" fill="#ffd700" filter="url(#goldGlow)" />
            </g>
            <g transform="translate(95, 270)" className="twinkle-star star-3">
              <path d="M 0,-7 L 2,-2 L 7,0 L 2,2 L 0,7 L -2,2 L -7,0 L -2,-2 Z" fill="#fae19c" />
            </g>
            <g transform="translate(305, 290)" className="twinkle-star star-4">
              <path d="M 0,-9 L 2,-2 L 9,0 L 2,2 L 0,9 L -2,2 L -9,0 L -2,-2 Z" fill="#ffd700" filter="url(#goldGlow)" />
            </g>
            <g transform="translate(280, 460)" className="twinkle-star star-5">
              <path d="M 0,-8 L 2,-2 L 8,0 L 2,2 L 0,8 L -2,2 L -8,0 L -2,-2 Z" fill="#fae19c" />
            </g>
          </g>
        </svg>
      </div>

      {/* Bottom Progress & Metatags Footer */}
      <div className="preloader-footer">
        <div className="step-indicator-card">
          <div className="indicator-top-row">
            <span className="step-count">0{Math.min(currentStep, 7)} / 07</span>
            <span className="step-title">{currentMeta.title}</span>
            <span className="progress-percent">{progress}%</span>
          </div>

          <div className="preloader-progress-track">
            <div
              className="preloader-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="step-subtitle-row">
            <span className="step-sub">{currentMeta.sub}</span>
            <span className="atelier-stamp">HAUTE COUTURE INAUGURATION</span>
          </div>
        </div>
      </div>
    </div>
  );
};

