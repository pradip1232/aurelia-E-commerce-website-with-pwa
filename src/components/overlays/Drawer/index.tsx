import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useScrollLock } from '../../../hooks/useScrollLock';
import './index.scss';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  placement?: 'left' | 'right' | 'bottom';
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  placement = 'right',
  title,
  children,
  footer,
  size = 'md',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className = '',
}) => {
  useScrollLock(isOpen);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose();
      }
    },
    [closeOnEscape, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const content = (
    <div
      className="atelier-drawer-overlay"
      onClick={closeOnBackdropClick ? onClose : undefined}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`atelier-drawer-panel atelier-drawer-panel--${placement} atelier-drawer-panel--${size} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="atelier-drawer-panel__header">
          {title && <h3 className="atelier-drawer-panel__title">{title}</h3>}
          <button
            type="button"
            onClick={onClose}
            className="atelier-drawer-panel__close"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="atelier-drawer-panel__body">{children}</div>

        {footer && <div className="atelier-drawer-panel__footer">{footer}</div>}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default Drawer;
