import React, { forwardRef } from 'react';
import { Check } from 'lucide-react';
import './index.scss';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  description?: React.ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  description,
  error,
  id,
  className = '',
  disabled,
  checked,
  ...rest
}, ref) => {
  const checkboxId = id || (typeof label === 'string' ? `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className={`atelier-checkbox-wrap ${error ? 'has-error' : ''} ${disabled ? 'is-disabled' : ''} ${className}`}>
      <label htmlFor={checkboxId} className="atelier-checkbox-container">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          checked={checked}
          disabled={disabled}
          className="atelier-checkbox-input"
          {...rest}
        />
        <span className="atelier-checkbox-custom" aria-hidden="true">
          <Check size={12} className="atelier-checkbox-icon" />
        </span>
        <div className="atelier-checkbox-text">
          <span className="atelier-checkbox-label">{label}</span>
          {description && <span className="atelier-checkbox-desc">{description}</span>}
        </div>
      </label>
      {error && <p className="atelier-checkbox-error" role="alert">{error}</p>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
