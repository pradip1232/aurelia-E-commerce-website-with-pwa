import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Smartphone, 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  Award, 
  CheckCircle2, 
  AlertCircle,
  Gift,
  Compass,
  Star
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useToastStore } from '../../store/useToastStore';
import './AuthPage.scss';

export const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { customerLogin } = useAuthStore();
  const { addToast } = useToastStore();

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Executive & Tech']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Interest tags
  const interestOptions = [
    '🎒 Academic & School',
    '💼 Executive & Tech',
    '✈️ Modular Travel',
    '👜 Crossbody & Slings',
    '🥋 Ballistic Tact'
  ];

  const toggleInterest = (tag: string) => {
    setSelectedInterests((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Password strength calculation
  const calculateStrength = (pass: string) => {
    let score = 0;
    if (!pass) return { score: 0, label: 'Empty', class: '' };
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score += 1;
    if (/\d/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 1:
        return { score: 1, label: 'Weak', class: 'weak', hint: 'Add uppercase letters & numbers' };
      case 2:
        return { score: 2, label: 'Fair', class: 'fair', hint: 'Add special characters like !@#$' };
      case 3:
        return { score: 3, label: 'Strong', class: 'strong', hint: 'Almost perfect' };
      case 4:
        return { score: 4, label: 'Atelier Grade', class: 'atelier', hint: 'Maximum cryptographic security' };
      default:
        return { score: 0, label: 'Too Short', class: 'weak', hint: 'Minimum 8 characters' };
    }
  };

  const strength = calculateStrength(password);
  const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      addToast({
        type: 'error',
        title: 'Passphrase Discrepancy',
        description: 'Your confirm password does not match the passphrase entered above.'
      });
      return;
    }

    if (!agreeTerms) {
      addToast({
        type: 'warning',
        title: 'Consent Required',
        description: 'Please accept the Vorano Concierge Terms and Privacy Code.'
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      customerLogin({
        name: fullName || 'New Collector',
        email: email || 'collector@voranoindia.com',
        phone: phone ? `+91 ${phone}` : '+91 98765 00000',
        loyaltyTier: 'SILVER',
        loyaltyPoints: 250 // Welcome bonus miles
      });

      addToast({
        type: 'success',
        title: 'Dossier Successfully Created',
        description: 'Welcome to Vorano India! 250 Carry Miles have been credited to your tier.'
      });

      navigate('/account');
    }, 800);
  };

  const handleSocialSignUp = (provider: 'Google' | 'Apple') => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      customerLogin({
        email: `new.collector@${provider.toLowerCase()}.com`,
        name: `${provider} Collector`,
        loyaltyTier: 'SILVER',
        loyaltyPoints: 250
      });
      addToast({
        type: 'success',
        title: `Registered with ${provider}`,
        description: 'Account created with 250 Welcome Carry Miles!'
      });
      navigate('/account');
    }, 600);
  };

  return (
    <div className="vorano-auth-wrapper">
      <div className="auth-container-card">
        {/* =================================================================== */}
        {/* LEFT COLUMN: EDITORIAL ART DIRECTION & PRIVILEGE SHOWCASE           */}
        {/* =================================================================== */}
        <div className="auth-showcase-column">
          <img 
            src="https://images.unsplash.com/photo-1546938576-6e6a64f317cc?q=80&w=1200&auto=format&fit=crop" 
            alt="Vorano India Atelier Workspace" 
            className="showcase-bg-image"
          />
          <div className="showcase-overlay-gradient" />

          <div className="showcase-content">
            {/* Top Brand Stack */}
            <div className="brand-mark-stack">
              <span className="brand-title">VORANO</span>
              <span className="brand-sub">INDIA</span>
              <span className="privilege-badge">
                <Gift size={12} />
                COLLECTOR CIRCLE REGISTRY
              </span>
            </div>

            {/* Middle Narrative */}
            <div className="showcase-narrative">
              <h2 className="narrative-title">
                Become a custodian of <em>enduring</em> engineering.
              </h2>
              <p className="narrative-subtitle">
                Register your personal collector profile to receive instant welcome benefits, lifetime warranty tracking, and private capsule invitations.
              </p>
            </div>

            {/* Exclusive Membership Perks */}
            <div className="perks-list">
              <div className="perk-item">
                <div className="perk-icon-wrap">
                  <Gift size={18} />
                </div>
                <div className="perk-info">
                  <strong>+250 Welcome Carry Miles</strong>
                  <span>Instant loyalty credit applied automatically to your collector dossier.</span>
                </div>
              </div>

              <div className="perk-item">
                <div className="perk-icon-wrap">
                  <ShieldCheck size={18} />
                </div>
                <div className="perk-info">
                  <strong>Digital Warranty Passport</strong>
                  <span>Serial numbers and repair histories cryptographically stored on your account.</span>
                </div>
              </div>

              <div className="perk-item">
                <div className="perk-icon-wrap">
                  <Compass size={18} />
                </div>
                <div className="perk-info">
                  <strong>Complimentary Bespoke Monogram</strong>
                  <span>Complimentary gold hot-foil or blind debossing on your first leather acquisition.</span>
                </div>
              </div>
            </div>

            {/* Editorial Statement */}
            <div className="showcase-quote-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#e2ba60" stroke="#e2ba60" />
                ))}
              </div>
              <p>
                “Joining the Vorano circle guarantees you never have to settle for disposable, spine-fatiguing bags ever again.”
              </p>
              <div className="quotee-info">
                <span className="quotee-name">Aarav S. — Design Director</span>
                <span className="quotee-badge">
                  <Sparkles size={12} /> Atelier Founding Council
                </span>
              </div>
            </div>

            {/* Bottom Atelier Footer */}
            <div className="showcase-footer">
              <span>EST. 2018</span>
              <span>BENGALURU • MUMBAI • NEW DELHI</span>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT COLUMN: INTERACTIVE FORM CONTAINER                            */}
        {/* =================================================================== */}
        <div className="auth-form-column">
          {/* Top Navigation Row */}
          <div className="form-top-nav">
            <Link to="/" className="back-to-shop-btn">
              <ArrowLeft size={16} />
              <span>Return to Storefront</span>
            </Link>

            <span style={{ fontSize: '0.76rem', color: '#15803d', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 size={13} />
              Instant Silver Tier Enrollment
            </span>
          </div>

          {/* Segmented Tab Switcher */}
          <div className="auth-tabs-segmented">
            <Link 
              to="/login" 
              className="tab-switch-btn"
            >
              Sign In
            </Link>
            <button 
              type="button" 
              className="tab-switch-btn active"
            >
              Create Account
              <span className="tab-badge">+250 Miles</span>
            </button>
          </div>

          {/* Form Header */}
          <div className="form-header-block">
            <span className="header-eyebrow">NEW COLLECTOR REGISTRY</span>
            <h1 className="header-title">Create Your Vorano Dossier</h1>
            <p className="header-desc">
              Complete your profile below to unlock architectural privileges and personal order tracking.
            </p>
          </div>

          {/* =============================================================== */}
          {/* SIGN UP FORM                                                    */}
          {/* =============================================================== */}
          <form onSubmit={handleSubmit} className="vorano-form">
            <div className="form-field-group">
              <label htmlFor="signup-name">Full Legal Name *</label>
              <div className="input-control-wrap">
                <User size={18} className="field-lead-icon" />
                <input 
                  id="signup-name"
                  type="text" 
                  required
                  placeholder="e.g. Vikramaditya Mehta"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-dual-row">
              <div className="form-field-group">
                <label htmlFor="signup-email">Email Address *</label>
                <div className="input-control-wrap">
                  <Mail size={18} className="field-lead-icon" />
                  <input 
                    id="signup-email"
                    type="email" 
                    required
                    placeholder="vikram@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label htmlFor="signup-phone">Mobile Number *</label>
                <div className="input-control-wrap">
                  <Smartphone size={18} className="field-lead-icon" />
                  <input 
                    id="signup-phone"
                    type="tel" 
                    required
                    maxLength={10}
                    placeholder="98765 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
              </div>
            </div>

            {/* Passphrase with Live Strength Meter */}
            <div className="form-field-group">
              <label htmlFor="signup-password">Choose Passphrase *</label>
              <div className="input-control-wrap">
                <Lock size={18} className="field-lead-icon" />
                <input 
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'} 
                  required
                  minLength={8}
                  placeholder="Minimum 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button" 
                  className="field-trail-action"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Live Strength Bars */}
              {password && (
                <div className="password-strength-box">
                  <div className="strength-meter-bars">
                    <span className={`bar ${strength.score >= 1 ? `active-${strength.class}` : ''}`} />
                    <span className={`bar ${strength.score >= 2 ? `active-${strength.class}` : ''}`} />
                    <span className={`bar ${strength.score >= 3 ? `active-${strength.class}` : ''}`} />
                    <span className={`bar ${strength.score >= 4 ? `active-${strength.class}` : ''}`} />
                  </div>
                  <div className="strength-meta-row">
                    <span className={`strength-label ${strength.class}`}>
                      Security: {strength.label}
                    </span>
                    <span className="strength-hint">{strength.hint}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Passphrase */}
            <div className="form-field-group">
              <label htmlFor="signup-confirm-password">Confirm Passphrase *</label>
              <div className="input-control-wrap">
                <Lock size={18} className="field-lead-icon" />
                <input 
                  id="signup-confirm-password"
                  type={showPassword ? 'text' : 'password'} 
                  required
                  placeholder="Re-enter your passphrase"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={passwordsMatch ? 'is-valid' : passwordsMismatch ? 'is-invalid' : ''}
                />
                {passwordsMatch && (
                  <span className="field-trail-action" title="Passphrases match">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                  </span>
                )}
                {passwordsMismatch && (
                  <span className="field-trail-action" title="Passphrases do not match">
                    <AlertCircle size={18} className="text-rose-600" />
                  </span>
                )}
              </div>
            </div>

            {/* Carrying Interest Preference Chips */}
            <div className="form-field-group">
              <label>Curate Your Carrying Profile</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
                {interestOptions.map((opt) => {
                  const isSelected = selectedInterests.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleInterest(opt)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '999px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        border: isSelected ? '1.5px solid #121316' : '1px solid #e5e7eb',
                        background: isSelected ? '#121316' : '#ffffff',
                        color: isSelected ? '#ffffff' : '#4b5563',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="form-checkbox-row">
              <input 
                id="agree-terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="agree-terms">
                I accept the Vorano India <Link to="/about">Terms of Craftsmanship</Link> and agree to the storage of my serial numbers under our digital privacy code.
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="vorano-auth-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" />
                  <span>Enrolling Collector Dossier...</span>
                </>
              ) : (
                <>
                  <span>Create Account &amp; Claim 250 Miles</span>
                  <ArrowRight size={17} />
                </>
              )}
            </button>
          </form>

          {/* Social SSO Divider */}
          <div className="auth-divider-block">
            <span>OR REGISTER WITH</span>
          </div>

          {/* Social SSO Buttons */}
          <div className="sso-buttons-grid">
            <button 
              type="button" 
              className="sso-btn"
              onClick={() => handleSocialSignUp('Google')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.67v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.16z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.98 0 12s.45 3.84 1.24 5.42l4.04-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span>Google Profile</span>
            </button>

            <button 
              type="button" 
              className="sso-btn"
              onClick={() => handleSocialSignUp('Apple')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.65-.8 1.09-1.92.97-3.04-1 .04-2.16.66-2.84 1.46-.59.69-1.12 1.82-.98 2.91 1.11.09 2.2-.53 2.85-1.33z"/>
              </svg>
              <span>Apple Pass</span>
            </button>
          </div>

          {/* Security Assurance */}
          <div className="auth-security-footer">
            <span className="security-pill">
              <ShieldCheck size={14} className="text-emerald-600" />
              256-Bit SSL Atelier Encryption
            </span>
            <span>•</span>
            <span className="security-pill">
              ISO 27001 Data Vault
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
