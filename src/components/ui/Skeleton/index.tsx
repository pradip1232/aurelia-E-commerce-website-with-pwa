import React, { CSSProperties } from 'react';
import './index.scss';

export interface SkeletonProps {
  variant?: 'text' | 'rect' | 'circle';
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rect',
  width,
  height,
  className = '',
  style = {},
}) => {
  const customStyles: CSSProperties = {
    ...style,
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  return <div className={`ui-skeleton ui-skeleton--${variant} ${className}`} style={customStyles} />;
};

export default Skeleton;
