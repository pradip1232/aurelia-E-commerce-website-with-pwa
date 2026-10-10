import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './index.scss';

export interface ScrollProgressProps {
  className?: string;
  position?: 'top' | 'bottom';
  height?: number;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  className = '',
  position = 'top',
  height = 2.5
}) => {
  const [progress, setProgress] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentScroll = window.scrollY;
            const percentage = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
            setProgress(percentage);
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
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div
      className={`animation-scroll-progress position-${position} ${className}`}
      style={{
        height: `${height}px`,
        top: position === 'top' ? 0 : 'auto',
        bottom: position === 'bottom' ? 0 : 'auto'
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgress;
