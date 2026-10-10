import React, { useState } from 'react';
import { X } from 'lucide-react';
import './index.scss';

export interface AnnouncementBarProps {
  message?: string;
  linkText?: string;
  linkUrl?: string;
  onDismiss?: () => void;
  className?: string;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  message = 'COMPLIMENTARY WHITE-GLOVE AIR DELIVERY ON ORDERS ABOVE ₹999 • DISCOVER SS26 PRÊT-À-PORTER',
  linkText,
  linkUrl,
  onDismiss,
  className = '',
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  return (
    <aside className={`atelier-announcement-bar ${className}`} aria-label="Announcement">
      <div className="atelier-announcement-bar__inner">
        <p className="atelier-announcement-bar__text">
          <span>{message}</span>
          {linkText && linkUrl && (
            <a href={linkUrl} className="atelier-announcement-bar__link">
              {linkText}
            </a>
          )}
        </p>
        <button
          type="button"
          onClick={handleDismiss}
          className="atelier-announcement-bar__dismiss"
          aria-label="Dismiss announcement"
        >
          <X size={14} />
        </button>
      </div>
    </aside>
  );
};

export default AnnouncementBar;
