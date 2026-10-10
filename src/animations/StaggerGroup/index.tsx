import React, { Children, cloneElement, isValidElement, ReactNode } from 'react';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './index.scss';

export interface StaggerGroupProps {
  children: ReactNode;
  staggerDelay?: number; // ms between each item
  baseDelay?: number; // ms before first item starts
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  staggerDelay = 90,
  baseDelay = 0,
  className = '',
  as: Component = 'div',
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });
  const prefersReduced = useReducedMotion();

  const childrenArray = Children.toArray(children);
  const ComponentElement = Component as any;

  return (
    <ComponentElement
      ref={ref}
      className={`animation-stagger-group ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {childrenArray.map((child, index) => {
        if (!isValidElement(child)) return child;

        const itemDelay = prefersReduced ? 0 : baseDelay + index * staggerDelay;
        const existingStyle = (child.props as any).style || {};

        return cloneElement(child as any, {
          style: {
            ...existingStyle,
            transitionDelay: `${itemDelay}ms`,
          },
        });
      })}
    </ComponentElement>
  );
};

export default StaggerGroup;
