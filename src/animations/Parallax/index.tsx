import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './index.scss';

export interface ParallaxProps {
  children: ReactNode;
  speed?: number; // e.g. -0.15 to 0.15
  className?: string;
  style?: React.CSSProperties;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.08,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
              const middle = rect.top + rect.height / 2 - windowHeight / 2;
              setOffsetY(middle * speed);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, prefersReduced]);

  return (
    <div ref={containerRef} className={`animation-parallax ${className}`} style={style}>
      <div
        className="parallax-inner"
        style={{
          transform: prefersReduced ? 'none' : `translate3d(0, ${offsetY}px, 0)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Parallax;
