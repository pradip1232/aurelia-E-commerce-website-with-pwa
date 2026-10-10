import React, { useMemo } from 'react';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './index.scss';

export interface TextRevealProps {
  text: string;
  delay?: number; // ms initial delay
  wordDelay?: number; // ms stagger between words
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  delay = 100,
  wordDelay = 45,
  className = '',
  as: Component = 'span',
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15, freezeOnceVisible: true });
  const prefersReduced = useReducedMotion();

  const words = useMemo(() => text.split(' '), [text]);

  const ComponentElement = Component as any;

  return (
    <ComponentElement
      ref={ref}
      className={`animation-text-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      aria-label={text}
    >
      {words.map((word, index) => {
        const itemDelay = prefersReduced ? 0 : delay + index * wordDelay;

        return (
          <span key={`${word}-${index}`} className="word-wrap" aria-hidden="true">
            <span
              className="word-inner"
              style={{
                transitionDelay: `${itemDelay}ms`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </ComponentElement>
  );
};

export default TextReveal;
