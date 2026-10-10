import React, { HTMLAttributes, ReactNode } from 'react';
import './index.scss';

export type TypographyVariant =
  | 'display-1'
  | 'display-2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'eyebrow'
  | 'body'
  | 'caption';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
}

const defaultElementMap: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  'display-1': 'h1',
  'display-2': 'h2',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  eyebrow: 'span',
  body: 'p',
  caption: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  children,
  className = '',
  ...props
}) => {
  const Component = as || defaultElementMap[variant] || 'p';
  const ComponentElement = Component as any;

  return (
    <ComponentElement className={`ui-typography ui-typography--${variant} ${className}`} {...props}>
      {children}
    </ComponentElement>
  );
};

export default Typography;
