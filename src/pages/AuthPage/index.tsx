import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';
import { useUIStore } from '../../stores/useUIStore';
import {
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User as UserIcon,
  Crown,
  CheckCircle2,
  Sparkles,
  KeyRound,
  ChevronLeft,
  ChevronRight,
  Gem
} from 'lucide-react';
import './AuthPage.scss';

const BRAND_STORIES = [
  {
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    badge: 'PRIVATE ATELIER ACCESS',
    quote: '"An encounter with timeless elegance, reserved for those who cherish silent craftsmanship."',
    author: 'MAISON ARCHIVE & SALON SUITE'
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
    badge: 'HAUTE COUTURE SS26',
    quote: '"True luxury does not clamor for attention; it whispers through the noble purity of raw fiber."',
    author: 'FLORENCE & PARIS WORKSHOPS'
  },
  {
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85',
    badge: 'GENERATIONAL MASTERY',
    quote: '"Each seam carries the patient fingerprint of master artisans across Lyon and Tuscany."',
    author: 'HERITAGE TAILORING GUILD'
  }
];

export const AuthPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Mode & navigation
  const isInitialSignUp = location.pathname.includes('signup');
  const [isLoginMode, setIsLoginMode] = useState(!isInitialSignUp);

  // Carousel slide for left showcase
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuthStore();
  const { showToast } = useUIStore();

  const handleModeSwitch = (mode: 'login' | 'signup') => {
    setIsLoginMode(mode === 'login');
  };

  // Password strength calculator
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { score: 0, label: '', color: '' };
    let score = 0;
    if (pwd.length >= 6) score += 1;
    if (pwd.length >= 10) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    if (score <= 2) return { score: 1, label: 'Modest', color: '#eab308' };
    if (score <= 4) return { score: 2, label: 'Strong Atelier Security', color: '#2563eb' };
    return { score: 3, label: 'Exemplary Cryptographic Vault', color: '#15803d' };
  };

  const pwdStrength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      showToast('Please provide a valid email address', 'warning');
      return;
    }

    if (password.length < 6) {
      showToast('Security passphrase must contain at least 6 characters', 'warning');
      return;
    }

    if (!isLoginMode && !agreeTerms) {
      showToast('Please accept the private membership terms', 'warning');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      login(email, name || (isLoginMode ? 'Distinguished Member' : 'Private Member'));
      showToast(
        isLoginMode
          ? 'Welcome back to Aurelia Atelier. Private Dossier loaded.'
          : 'Welcome to the Aurelia Inner Circle. 500 Welcome Points awarded!'
      );
      navigate('/account');
    }, 600);
  };

  // Quick 1-click Demo Fill
  const handleQuickDemoFill = (role: 'vip' | 'guest') => {
    if (role === 'vip') {
      setEmail('kabir.singhania@aurelia.com');
      setName('Kabir Singhania');
      setPassword('AureliaVip2026!');
      setIsLoginMode(true);
      showToast('VIP Patron credentials loaded', 'info');
    } else {
      setEmail('elena.rostova@atelier.com');
      setName('Elena Rostova');
      setPassword('ElenaPrivate2026');
      setIsLoginMode(false);
      showToast('New Member credentials populated', 'info');
    }
  };

  const currentStory = BRAND_STORIES[activeStoryIdx];

  const handlePrevStory = () => {
    setActiveStoryIdx((prev) => (prev === 0 ? BRAND_STORIES.length - 1 : prev - 1));
  };

  const handleNextStory = () => {
    setActiveStoryIdx((prev) => (prev === BRAND_STORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="auth-showcase-page">
      <div className="auth-split-wrapper">
        {/* Left Column: Editorial Atmospheric Brand Showcase */}
        <div className="auth-brand-stage">
          <div className="stage-image-backdrop">
            <img
              src={currentStory.image}
              alt="Aurelia Private Salon"
              key={currentStory.image}
              className="fade-image"
            />
            <div className="stage-gradient-overlay" />
          </div>

          <div className="stage-content-overlay">
            <div className="stage-top-bar">
              <Link to="/" className="atelier-brand-mark">
                <span className="star">✦</span>
                <span className="brand-name">AURELIA ATELIER</span>
              </Link>
              <div className="atelier-crest">
                <Gem size={14} />
                <span>HAUTE MAISON</span>
              </div>
            </div>

            <div className="stage-quote-dossier">
              <div className="badge-pill">
                <Crown size={14} />
                <span>{currentStory.badge}</span>
              </div>
              <h2 key={currentStory.quote} className="editorial-quote">
                {currentStory.quote}
              </h2>
              <cite>{currentStory.author}</cite>

              {/* VIP Benefits Preview */}
              <div className="perks-checklist">
                <div className="perk-item">
                  <CheckCircle2 size={16} />
                  <span>Confidential private previews before seasonal releases</span>
                </div>
                <div className="perk-item">
                  <CheckCircle2 size={16} />
                  <span>Complimentary white-glove delivery & lifetime artisan repair</span>
                </div>
                <div className="perk-item">
                  <CheckCircle2 size={16} />
                  <span>Invitations to closed-door salon previews in Mumbai & Delhi</span>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="story-carousel-controls">
                <div className="carousel-indicators">
                  {BRAND_STORIES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Slide ${idx + 1}`}
                      className={`indicator-dot ${idx === activeStoryIdx ? 'active' : ''}`}
                      onClick={() => setActiveStoryIdx(idx)}
                    />
                  ))}
                </div>
                <div className="carousel-nav-arrows">
                  <button
                    type="button"
                    onClick={handlePrevStory}
                    className="arrow-btn"
                    aria-label="Previous story"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStory}
                    className="arrow-btn"
                    aria-label="Next story"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="stage-footer-note">
              <span>EST. 1928 • FLORENCE • PARIS • MUMBAI</span>
              <span className="bullet">•</span>
              <span>PATRON ARCHIVES RESERVED</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Auth Portal */}
        <div className="auth-portal-stage">
          <div className="portal-container">
            {/* Mode Switcher Tabs */}
            <div className="auth-tab-switch">
              <button
                type="button"
                className={`tab-btn ${isLoginMode ? 'active' : ''}`}
                onClick={() => handleModeSwitch('login')}
              >
                SIGN IN
              </button>
              <button
                type="button"
                className={`tab-btn ${!isLoginMode ? 'active' : ''}`}
                onClick={() => handleModeSwitch('signup')}
              >
                JOIN INNER CIRCLE
              </button>
            </div>

            {/* Portal Header */}
            <div className="portal-intro">
              <span className="eyebrow">
                <Sparkles size={13} className="eyebrow-icon" />
                {isLoginMode ? 'MEMBERSHIP AUTHENTICATION' : 'EXCLUSIVE PRIVILEGE'}
              </span>
              <h1>{isLoginMode ? 'Welcome Back' : 'Create Your Dossier'}</h1>
              <p>
                {isLoginMode
                  ? 'Access your private wardrobe, order tracking, and bespoke appointments.'
                  : 'Register to unlock complimentary concierge services, 500 welcome credits, and bespoke tailoring.'}
              </p>
            </div>

            {/* Demo Quick Fill Toolbar */}
            <div className="quick-demo-strip">
              <div className="demo-header">
                <KeyRound size={13} />
                <span className="demo-label">1-CLICK CONCIERGE DEMO:</span>
              </div>
              <div className="demo-actions">
                <button
                  type="button"
                  onClick={() => handleQuickDemoFill('vip')}
                  className="btn-demo-chip"
                >
                  <Crown size={12} />
                  <span>VIP Patron Login</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemoFill('guest')}
                  className="btn-demo-chip"
                >
                  <Sparkles size={12} />
                  <span>New Member Signup</span>
                </button>
              </div>
            </div>

            {/* Interactive Form */}
            <form onSubmit={handleSubmit} className="portal-form">
              {!isLoginMode && (
                <div className="form-field">
                  <label>FULL LEGAL NAME</label>
                  <div className="input-wrap">
                    <UserIcon size={18} className="field-icon" />
                    <input
                      type="text"
                      placeholder="Lady Eleanor Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={!isLoginMode}
                    />
                  </div>
                </div>
              )}

              <div className="form-field">
                <label>PERSONAL EMAIL ADDRESS</label>
                <div className="input-wrap">
                  <Mail size={18} className="field-icon" />
                  <input
                    type="email"
                    placeholder="patron@aurelia.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {!isLoginMode && (
                <div className="form-field">
                  <label>PHONE NUMBER (FOR SALON CONCIERGE)</label>
                  <div className="input-wrap">
                    <span className="phone-prefix">+91</span>
                    <input
                      type="tel"
                      placeholder="98200 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div className="form-field">
                <div className="field-top-row">
                  <label>SECURITY PASSPHRASE</label>
                  {isLoginMode && (
                    <button
                      type="button"
                      onClick={() => showToast('A reset link has been dispatched to your email', 'info')}
                      className="link-forgot-pass"
                    >
                      Forgot Passphrase?
                    </button>
                  )}
                </div>
                <div className="input-wrap">
                  <Lock size={18} className="field-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn-password-toggle"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* Password Strength Meter (Shown when typing password) */}
                {password.length > 0 && (
                  <div className="password-strength-indicator">
                    <div className="strength-bars">
                      <span className={`bar ${pwdStrength.score >= 1 ? 'filled lv1' : ''}`} />
                      <span className={`bar ${pwdStrength.score >= 2 ? 'filled lv2' : ''}`} />
                      <span className={`bar ${pwdStrength.score >= 3 ? 'filled lv3' : ''}`} />
                    </div>
                    <span className="strength-label" style={{ color: pwdStrength.color }}>
                      {pwdStrength.label}
                    </span>
                  </div>
                )}
              </div>

              {/* Login Extra Controls: Remember Me */}
              {isLoginMode && (
                <div className="login-remember-row">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className="checkmark" />
                    <span className="remember-text">Keep me signed in to this terminal</span>
                  </label>
                </div>
              )}

              {!isLoginMode && (
                <div className="terms-checkbox-row">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                    <span className="checkmark" />
                    <span className="terms-text">
                      I agree to the <Link to="/faq">Atelier Privacy Charter</Link> and wish to receive discrete private salon invitations.
                    </span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`btn-auth-submit ${isLoading ? 'loading' : ''}`}
              >
                <span>
                  {isLoading
                    ? 'AUTHENTICATING DOSSIER...'
                    : isLoginMode
                    ? 'ACCESS PRIVATE DOSSIER'
                    : 'CONFIRM ATELIER MEMBERSHIP'}
                </span>
                {!isLoading && <ArrowRight size={16} />}
              </button>
            </form>

            {/* Social / Alternative Sign-in */}
            <div className="portal-divider">
              <span>OR AUTHENTICATE WITH</span>
            </div>

            <div className="social-auth-grid">
              <button
                type="button"
                onClick={() => {
                  login('google.member@aurelia.com', 'Google Patron');
                  showToast('Signed in via Google One-Tap');
                  navigate('/account');
                }}
                className="btn-social-auth"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.14z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  login('apple.patron@aurelia.com', 'Apple Private Member');
                  showToast('Signed in via Apple Passkey');
                  navigate('/account');
                }}
                className="btn-social-auth"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73 1.01.08 2.01-.5 2.63-1.23z" />
                </svg>
                <span>Apple Passkey</span>
              </button>
            </div>

            {/* Guest Checkout Alternative link */}
            <div className="guest-alternative">
              <span>Shopping in discretion?</span>
              <Link to="/products" className="guest-link">
                Continue as Guest Shopper &rarr;
              </Link>
            </div>

            {/* Toggle Mode Footer */}
            <div className="portal-footer-switch">
              {isLoginMode ? (
                <p>
                  New to Aurelia Maison?{' '}
                  <button type="button" onClick={() => handleModeSwitch('signup')}>
                    Apply for Private Membership
                  </button>
                </p>
              ) : (
                <p>
                  Already have an existing dossier?{' '}
                  <button type="button" onClick={() => handleModeSwitch('login')}>
                    Sign in to your Account
                  </button>
                </p>
              )}
            </div>

            {/* Security Guarantee */}
            <div className="security-banner">
              <ShieldCheck size={16} />
              <span>256-Bit Cryptographic Vault • GDPR & ISO-27001 Certified Security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
