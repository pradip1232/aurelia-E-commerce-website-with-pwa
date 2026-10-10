import React, { forwardRef, useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';
import './index.scss';

export interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({
  label,
  error,
  hint,
  fullWidth = true,
  className = '',
  id,
  disabled,
  ...rest
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || (label ? `password-${label.toLowerCase().replace(/\s+/g, '-')}` : 'password-input');

  return (
    <div className={`atelier-password-input-wrap ${fullWidth ? 'full-width' : ''} ${error ? 'has-error' : ''} ${disabled ? 'is-disabled' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="atelier-password-input__label">
          {label}
          {rest.required && <span className="atelier-password-input__required">*</span>}
        </label>
      )}

      <div className="atelier-password-input__field-wrapper">
        <input
          ref={ref}
          id={inputId}
          type={showPassword ? 'text' : 'password'}
          disabled={disabled}
          className="atelier-password-input"
          {...rest}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="atelier-password-input__toggle-btn"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          tabIndex={-1}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error ? (
        <p className="atelier-password-input__error" role="alert">{error}</p>
      ) : hint ? (
        <p className="atelier-password-input__hint">{hint}</p>
      ) : null}
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
