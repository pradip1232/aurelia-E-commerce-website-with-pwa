import React, { ReactNode } from 'react';
import './index.scss';

export interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, className = '' }) => {
  return <div className={`animation-page-transition ${className}`}>{children}</div>;
};

export default PageTransition;
