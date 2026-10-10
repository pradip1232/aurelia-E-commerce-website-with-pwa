import React from 'react';
import './index.scss';

export interface DividerProps {
  variant?: 'light' | 'gold' | 'dark';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ variant = 'light', className = '' }) => {
  return <hr className={`ui-divider ui-divider--${variant} ${className}`} />;
};

export default Divider;
