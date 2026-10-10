import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft,
  Smartphone, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Star,
  Clock,
  KeyRound,
  X,
  Zap
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useToastStore } from '../../store/useToastStore';
import './AuthPage.scss';

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { customerLogin } = useAuthStore();
  const { addToast } = useToastStore();

  // Auth mode: 'password' | 'otp'
  const [authMethod, setAuthMethod] = useState<'password' | 'otp'>('password');

  // Password Login State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // OTP Login State
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(0);
  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Submitting & Feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  // OTP Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Demo auto-fill
  const handleAutofillDemo = () => {
    setEmail('ashish.ojha@example.com');
    setPassword('VoranoLuxe2026!');
    addToast({
      type: 'info',
      title: 'Demo Credentials Loaded',
      description: 'Loaded Ashish Ojha (GOLD Collector) credentials.'
    });
  };

  // Handle Password Submit
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      customerLogin({
        email: email || 'collector@voranoindia.com',
        name: email.includes('ashish') ? 'Ashish Ojha' : email.split('@')[0],
        loyaltyTier: 'GOLD',
        loyaltyPoints: 1240
      });

      addToast({
        type: 'success',
        title: 'Authentication Successful',
        description: 'Welcome back to the Vorano India Concierge.'
      });

      const redirectPath = (location.state as { from?: string })?.from || '/account';
      navigate(redirectPath);
    }, 700);
  };

  // Handle Send OTP
  const handleSendOtp = () => {
    if (!phone || phone.length < 10) {
      addToast({
        type: 'error',
        title: 'Invalid Mobile Number',
        description: 'Please enter a valid 10-digit Indian phone number.'
      });
      return;
    }

    setOtpSent(true);
    setCountdown(30);
    addToast({
      type: 'success',
      title: 'Secure OTP Dispatched',
      description: `6-digit security passcode transmitted to +91 ${phone}`
    });
    // Auto focus first OTP input
    setTimeout(() => otpInputsRef.current[0]?.focus(), 100);
  };

  // Handle OTP Box Input
  const handleOtpChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;

    const newOtp = [...otp];
    newOtp[index] = val.slice(-1);
    setOtp(newOtp);

    // Auto-advance
    if (val && index < 5) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  // Handle OTP Submit
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = otp.join('');
    if (enteredCode.length < 6) {
      addToast({
        type: 'error',
        title: 'Incomplete Passcode',
        description: 'Please enter the complete 6-digit verification code.'
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      customerLogin({
        phone: `+91 ${phone}`,
        name: 'Vorano Mobile Member',
        loyaltyTier: 'SILVER',
        loyaltyPoints: 500
      });

      addToast({
        type: 'success',
        title: 'Phone Verified',
        description: 'Welcome back to your Vorano account.'
      });

      navigate('/account');
    }, 700);
  };

  // Social SSO
  const handleSocialLogin = (provider: 'Google' | 'Apple') => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      customerLogin({
        email: `collector.${provider.toLowerCase()}@voranoindia.com`,
        name: `${provider} Verified Collector`,
        loyaltyTier: 'GOLD',
        loyaltyPoints: 1240
      });
      addToast({
        type: 'success',
        title: `Authenticated via ${provider}`,
        description: 'Secure SSO session established.'
      });
      navigate('/account');
    }, 600);
  };

  // Forgot password mock submit
  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotSent(true);
    addToast({
      type: 'success',
      title: 'Reset Directive Transmitted',
      description: `A secure restoration link was dispatched to ${forgotEmail}`
    });
  };

  return (
    <div className="vorano-auth-wrapper">
      <div className="auth-container-card">
        {/* =================================================================== */}
        {/* LEFT COLUMN: EDITORIAL ART DIRECTION & PRIVILEGE SHOWCASE           */}
        {/* =================================================================== */}
        <div className="auth-showcase-column">
          <img 
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop" 
            alt="Vorano India Atelier Craftsmanship" 
            className="showcase-bg-image"
          />
          <div className="showcase-overlay-gradient" />

          <div className="showcase-content">
            {/* Top Brand Stack */}
            <div className="brand-mark-stack">
              <span className="brand-title">VORANO</span>
              <span className="brand-sub">INDIA</span>
              <span className="privilege-badge">
                <Sparkles size={12} />
                ARCHITECTURAL CARRY PRIVILEGE
              </span>
            </div>

            {/* Middle Narrative */}
            <div className="showcase-narrative">
              <h2 className="narrative-title">
                Elevate your daily voyage with <em>uncompromising</em> craft.
              </h2>
              <p className="narrative-subtitle">
                Access your private concierge dossier, track live air waybills, and schedule complimentary atelier maintenance.
              </p>
            </div>

            {/* Luxury Member Perks */}
            <div className="perks-list">
              <div className="perk-item">
                <div className="perk-icon-wrap">
                  <ShieldCheck size={18} />
                </div>
                <div className="perk-info">
                  <strong>Lifetime Craftsmanship Shield</strong>
                  <span>Direct atelier repair coverage on all load vectors and YKK® AquaGuard® zips.</span>
                </div>
              </div>

              <div className="perk-item">
                <div className="perk-icon-wrap">
                  <Award size={18} />
                </div>
                <div className="perk-info">
                  <strong>Carry Miles Reward Program</strong>
                  <span>Earn 10 Carry Miles on every ₹100 spent, redeemable on bespoke limited drops.</span>
                </div>
              </div>

              <div className="perk-item">
                <div className="perk-icon-wrap">
                  <Clock size={18} />
                </div>
                <div className="perk-info">
                  <strong>Priority Air Express Logistics</strong>
                  <span>Complimentary express air fulfillment across all metro hubs nationwide.</span>
                </div>
              </div>
            </div>

            {/* Verified Collector Testimonial */}
            <div className="showcase-quote-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#e2ba60" stroke="#e2ba60" />
                ))}
              </div>
              <p>
                “The weight displacement of the Apex Pro is miraculous. My daily commute between BKC and Delhi feels effortlessly calibrated.”
              </p>
              <div className="quotee-info">
                <span className="quotee-name">Siddharth M. — Senior Architect</span>
                <span className="quotee-badge">
                  <CheckCircle2 size={12} /> Verified Collector
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

            <button 
              type="button" 
              className="demo-autofill-btn"
              onClick={handleAutofillDemo}
              title="One-click demo collector credentials"
            >
              <Zap size={13} />
              <span>Autofill Demo</span>
            </button>
          </div>

          {/* Segmented Tab Switcher */}
          <div className="auth-tabs-segmented">
            <button 
              type="button" 
              className="tab-switch-btn active"
            >
              Sign In
            </button>
            <Link 
              to="/signup" 
              className="tab-switch-btn"
            >
              Create Account
              <span className="tab-badge">+250 Miles</span>
            </Link>
          </div>

          {/* Form Header */}
          <div className="form-header-block">
            <span className="header-eyebrow">CLIENT RECOGNITION</span>
            <h1 className="header-title">Welcome to Vorano Concierge</h1>
            <p className="header-desc">
              Please identify yourself to access your personal collection dossier and order manifests.
            </p>
          </div>

          {/* Auth Method Selector */}
          <div className="auth-method-switcher">
            <button 
              type="button"
              className={`method-chip ${authMethod === 'password' ? 'active' : ''}`}
              onClick={() => setAuthMethod('password')}
            >
              <KeyRound size={15} />
              <span>Password Login</span>
            </button>

            <button 
              type="button"
              className={`method-chip ${authMethod === 'otp' ? 'active' : ''}`}
              onClick={() => setAuthMethod('otp')}
            >
              <Smartphone size={15} />
              <span>Instant Mobile OTP</span>
            </button>
          </div>

          {/* =============================================================== */}
          {/* 1. PASSWORD AUTH METHOD FORM                                    */}
          {/* =============================================================== */}
          {authMethod === 'password' ? (
            <form onSubmit={handlePasswordSubmit} className="vorano-form">
              <div className="form-field-group">
                <label htmlFor="signin-email">Personal or Corporate Email *</label>
                <div className="input-control-wrap">
                  <Mail size={18} className="field-lead-icon" />
                  <input 
                    id="signin-email"
                    type="email" 
                    required
                    placeholder="e.g. ashish.ojha@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label htmlFor="signin-password">
                  <span>Passphrase *</span>
                  <button 
                    type="button" 
                    className="forgot-link"
                    onClick={() => {
                      setForgotModalOpen(true);
                      setForgotSent(false);
                      setForgotEmail(email);
                    }}
                  >
                    Forgot Password?
                  </button>
                </label>
                <div className="input-control-wrap">
                  <Lock size={18} className="field-lead-icon" />
                  <input 
                    id="signin-password"
                    type={showPassword ? 'text' : 'password'} 
                    required
                    placeholder="Enter your security passphrase"
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
              </div>

              <div className="form-checkbox-row">
                <input 
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me">
                  Remember this secure workstation for 30 days
                </label>
              </div>

              <button 
                type="submit" 
                className="vorano-auth-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Concierge</span>
                    <ArrowRight size={17} />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* =============================================================== */
            /* 2. OTP AUTH METHOD FORM                                         */
            /* =============================================================== */
            <form onSubmit={handleOtpSubmit} className="vorano-form">
              <div className="form-field-group">
                <label htmlFor="signin-phone">Indian Mobile Number *</label>
                <div className="input-control-wrap">
                  <Smartphone size={18} className="field-lead-icon" />
                  <input 
                    id="signin-phone"
                    type="tel" 
                    required
                    maxLength={10}
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  />
                  {!otpSent && (
                    <button 
                      type="button" 
                      className="demo-autofill-btn"
                      style={{ position: 'absolute', right: 8 }}
                      onClick={handleSendOtp}
                    >
                      Get OTP
                    </button>
                  )}
                </div>
              </div>

              {otpSent && (
                <div className="otp-digit-container">
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#374151' }}>
                    Enter 6-Digit Passcode Sent to +91 {phone}
                  </label>
                  <div className="otp-boxes-grid">
                    {otp.map((digit, idx) => (
                      <input 
                        key={idx}
                        ref={(el) => (otpInputsRef.current[idx] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                      />
                    ))}
                  </div>

                  <div className="otp-countdown-row">
                    <span className="countdown-text">
                      {countdown > 0 ? `Resend code in ${countdown}s` : 'Code expired'}
                    </span>
                    <button 
                      type="button"
                      className="resend-otp-btn"
                      disabled={countdown > 0}
                      onClick={handleSendOtp}
                    >
                      Resend Passcode
                    </button>
                  </div>
                </div>
              )}

              {otpSent && (
                <button 
                  type="submit" 
                  className="vorano-auth-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>Verify &amp; Enter Concierge</span>
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>
              )}
            </form>
          )}

          {/* Social SSO Divider */}
          <div className="auth-divider-block">
            <span>OR CONTINUE WITH</span>
          </div>

          {/* Social SSO Buttons */}
          <div className="sso-buttons-grid">
            <button 
              type="button" 
              className="sso-btn"
              onClick={() => handleSocialLogin('Google')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.67v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.16z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.98 0 12s.45 3.84 1.24 5.42l4.04-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span>Google Account</span>
            </button>

            <button 
              type="button" 
              className="sso-btn"
              onClick={() => handleSocialLogin('Apple')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.65-.8 1.09-1.92.97-3.04-1 .04-2.16.66-2.84 1.46-.59.69-1.12 1.82-.98 2.91 1.11.09 2.2-.53 2.85-1.33z"/>
              </svg>
              <span>Apple ID</span>
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

      {/* =================================================================== */}
      {/* FORGOT PASSWORD MODAL                                               */}
      {/* =================================================================== */}
      {forgotModalOpen && (
        <div className="vorano-modal-backdrop" onClick={() => setForgotModalOpen(false)}>
          <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setForgotModalOpen(false)}
            >
              <X size={18} />
            </button>

            <div className="modal-head">
              <div className="modal-icon-wrap">
                <KeyRound size={22} />
              </div>
              <h3>Reset Your Passphrase</h3>
              <p>
                Enter the email address registered with your Vorano account. We will transmit a cryptographically signed reset token.
              </p>
            </div>

            {forgotSent ? (
              <div className="text-center py-4">
                <CheckCircle2 size={44} className="text-emerald-600 mx-auto mb-3" />
                <h4 style={{ fontWeight: 700, marginBottom: 6 }}>Instruction Transmitted</h4>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: 20 }}>
                  A restoration link has been dispatched to <strong>{forgotEmail}</strong>. Please check your inbox and junk folder.
                </p>
                <button 
                  type="button" 
                  className="btn btn-secondary w-full"
                  onClick={() => setForgotModalOpen(false)}
                >
                  Return to Sign In
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="vorano-form">
                <div className="form-field-group">
                  <label htmlFor="forgot-email">Account Email Address *</label>
                  <div className="input-control-wrap">
                    <Mail size={18} className="field-lead-icon" />
                    <input 
                      id="forgot-email"
                      type="email" 
                      required
                      placeholder="e.g. collector@voranoindia.com"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button type="submit" className="vorano-auth-submit-btn">
                  Transmit Restoration Link
                  <ArrowRight size={17} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
