import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './index.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`ui-button ui-button--${variant} ui-button--${size} ${fullWidth ? 'ui-button--full-width' : ''} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <>
          <span className="btn-spinner" aria-hidden="true" />
          <span>Processing…</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="btn-left-icon">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="btn-right-icon">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
