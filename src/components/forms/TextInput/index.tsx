import React, { forwardRef } from 'react';
import './index.scss';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  fullWidth = true,
  className = '',
  id,
  disabled,
  ...rest
}, ref) => {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className={`atelier-text-input-wrap ${fullWidth ? 'full-width' : ''} ${error ? 'has-error' : ''} ${disabled ? 'is-disabled' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="atelier-text-input__label">
          {label}
          {rest.required && <span className="atelier-text-input__required">*</span>}
        </label>
      )}

      <div className="atelier-text-input__field-wrapper">
        {leftIcon && <span className="atelier-text-input__icon atelier-text-input__icon--left">{leftIcon}</span>}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={`atelier-text-input ${leftIcon ? 'has-left-icon' : ''} ${rightIcon ? 'has-right-icon' : ''}`}
          {...rest}
        />
        {rightIcon && <span className="atelier-text-input__icon atelier-text-input__icon--right">{rightIcon}</span>}
      </div>

      {error ? (
        <p className="atelier-text-input__error" role="alert">{error}</p>
      ) : hint ? (
        <p className="atelier-text-input__hint">{hint}</p>
      ) : null}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
