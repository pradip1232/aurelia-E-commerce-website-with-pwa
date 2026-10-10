import React, { CSSProperties, ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './index.scss';

export type RevealVariant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';

export interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 650,
  threshold = 0.15,
  once = true,
  className = '',
  style = {},
  as: Component = 'div',
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    freezeOnceVisible: once,
  });
  const prefersReduced = useReducedMotion();

  const combinedStyles: CSSProperties = {
    ...style,
    transitionDuration: prefersReduced ? '0ms' : `${duration}ms`,
    transitionDelay: prefersReduced ? '0ms' : `${delay}ms`,
  };

  const ComponentElement = Component as any;

  return (
    <ComponentElement
      ref={ref}
      className={`animation-reveal animation-reveal--${variant} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={combinedStyles}
    >
      {children}
    </ComponentElement>
  );
};

export default Reveal;
