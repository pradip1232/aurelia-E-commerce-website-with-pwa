import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './index.scss';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  fullWidth?: boolean;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  hint,
  options,
  fullWidth = true,
  placeholder,
  className = '',
  id,
  disabled,
  ...rest
}, ref) => {
  const selectId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className={`atelier-select-wrap ${fullWidth ? 'full-width' : ''} ${error ? 'has-error' : ''} ${disabled ? 'is-disabled' : ''} ${className}`}>
      {label && (
        <label htmlFor={selectId} className="atelier-select__label">
          {label}
          {rest.required && <span className="atelier-select__required">*</span>}
        </label>
      )}

      <div className="atelier-select__field-wrapper">
        <select
          ref={ref}
          id={selectId}
          disabled={disabled}
          className="atelier-select"
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="atelier-select__chevron" aria-hidden="true">
          <ChevronDown size={16} />
        </span>
      </div>

      {error ? (
        <p className="atelier-select__error" role="alert">{error}</p>
      ) : hint ? (
        <p className="atelier-select__hint">{hint}</p>
      ) : null}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
