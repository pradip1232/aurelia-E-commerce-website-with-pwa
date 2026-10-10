import React, { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';
import './index.scss';

export interface ErrorStateProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  description = 'We encountered an unexpected error while retrieving data. Please try again.',
  action,
  className = '',
}) => {
  return (
    <div className={`ui-error-state ${className}`}>
      <div className="error-icon-circle">
        <AlertCircle size={32} />
      </div>
      <h3 className="error-title">{title}</h3>
      <p className="error-description">{description}</p>
      {action && <div className="error-action">{action}</div>}
    </div>
  );
};

export default ErrorState;
