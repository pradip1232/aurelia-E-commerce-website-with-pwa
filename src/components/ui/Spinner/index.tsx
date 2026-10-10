import React from 'react';
import './index.scss';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className = '', label = 'Loading…' }) => {
  return (
    <div
      className={`ui-spinner ui-spinner--${size} ${className}`}
      role="status"
      aria-label={label}
    />
  );
};

export default Spinner;
