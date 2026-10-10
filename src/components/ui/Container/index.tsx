import React, { HTMLAttributes, ReactNode } from 'react';
import './index.scss';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'narrow' | 'fluid';
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Container: React.FC<ContainerProps> = ({
  variant = 'default',
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const ComponentElement = Component as any;

  return (
    <ComponentElement className={`ui-container ui-container--${variant} ${className}`} {...props}>
      {children}
    </ComponentElement>
  );
};

export default Container;
