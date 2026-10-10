import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';
import './index.scss';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id: string;
  type?: ToastType;
  message: string;
  duration?: number;
  onDismiss: (id: string) => void;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  type = 'info',
  message,
  duration = 4000,
  onDismiss,
  className = '',
}) => {
  useEffect(() => {
    if (duration <= 0) return;
    const timer = setTimeout(() => {
      onDismiss(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [id, duration, onDismiss]);

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={18} className="atelier-toast__icon atelier-toast__icon--success" />;
      case 'error':
        return <AlertCircle size={18} className="atelier-toast__icon atelier-toast__icon--error" />;
      case 'warning':
        return <AlertTriangle size={18} className="atelier-toast__icon atelier-toast__icon--warning" />;
      case 'info':
      default:
        return <Info size={18} className="atelier-toast__icon atelier-toast__icon--info" />;
    }
  };

  return (
    <div className={`atelier-toast atelier-toast--${type} ${className}`} role="status" aria-live="polite">
      <div className="atelier-toast__content">
        {renderIcon()}
        <span className="atelier-toast__message">{message}</span>
      </div>
      <button
        type="button"
        onClick={() => onDismiss(id)}
        className="atelier-toast__close"
        aria-label="Dismiss notification"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default Toast;
