import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './index.scss';

export interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ threshold = 350, className = '' }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`atelier-scroll-to-top ${className}`}
      aria-label="Scroll to top of page"
      title="Back to Top"
    >
      <ArrowUp size={16} />
      <span className="atelier-scroll-to-top__label">TOP</span>
    </button>
  );
};

export default ScrollToTop;
