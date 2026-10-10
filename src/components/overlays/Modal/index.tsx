import React, { useEffect, useCallback } from 'react';

import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useScrollLock } from '../../../hooks/useScrollLock';
import './index.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
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
      className="atelier-modal-overlay"
      onClick={closeOnBackdropClick ? onClose : undefined}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`atelier-modal-dialog atelier-modal-dialog--${size} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="atelier-modal-dialog__header">
          {title && <h3 className="atelier-modal-dialog__title">{title}</h3>}
          <button
            type="button"
            onClick={onClose}
            className="atelier-modal-dialog__close"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="atelier-modal-dialog__body">{children}</div>

        {footer && <div className="atelier-modal-dialog__footer">{footer}</div>}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default Modal;
