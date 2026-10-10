import React, { ReactNode } from 'react';
import './index.scss';

export type BadgeVariant = 'new' | 'bestseller' | 'sale' | 'exclusive' | 'gold' | 'outline';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'new', children, className = '' }) => {
  return <span className={`ui-badge ui-badge--${variant} ${className}`}>{children}</span>;
};

export default Badge;
