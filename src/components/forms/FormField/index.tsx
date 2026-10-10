import React from 'react';
import './index.scss';

export interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  error,
  hint,
  required = false,
  optional = false,
  children,
  className = '',
}) => {
  return (
    <div className={`atelier-form-field ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <div className="atelier-form-field__label-row">
          <label htmlFor={htmlFor} className="atelier-form-field__label">
            {label}
            {required && <span className="atelier-form-field__required" aria-hidden="true"> *</span>}
          </label>
          {optional && <span className="atelier-form-field__optional">Optional</span>}
        </div>
      )}
      <div className="atelier-form-field__control">{children}</div>
      {error ? (
        <p className="atelier-form-field__error" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="atelier-form-field__hint">{hint}</p>
      ) : null}
    </div>
  );
};

export default FormField;
