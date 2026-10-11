import React, { useState } from 'react';
import Stack from '../ui/Stack';
import { Layers, Sparkles } from 'lucide-react';
import './MobileImageStack.scss';

export interface MobileImageStackProps {
  images: string[];
  altPrefix?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  onImageChange?: (index: number) => void;
}

export const MobileImageStack: React.FC<MobileImageStackProps> = ({
  images,
  altPrefix = 'Product perspective',
  width = 230,
  height = 230,
  className = '',
  onImageChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  // If only 1 image, render standard single image display
  if (images.length === 1) {
    return (
      <div className={`mobile-single-image-wrap ${className}`}>
        <img src={images[0]} alt={altPrefix} className="mobile-single-img" />
      </div>
    );
  }

  const handleChange = (idx: number) => {
    setCurrentIndex(idx);
    onImageChange?.(idx);
  };

  return (
    <div className={`mobile-image-stack-container ${className}`}>
      {/* 230x230 Fanned Card Stack Stage as specified */}
      <div
        className="mobile-image-stack-stage"
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          position: 'relative'
        }}
      >
        <Stack
          layout="fan"
          sendToBackOnClick={true}
          cards={images.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt={`${altPrefix} angle ${i + 1}`}
              draggable={false}
            />
          ))}
          onChange={handleChange}
        />
      </div>

      <div className="mobile-image-stack-footer">
        <span className="mobile-image-stack-hint">
          <Layers size={12} />
          <span>Tap to fan through angles</span>
        </span>
        <span className="mobile-image-stack-counter">
          {currentIndex + 1} of {images.length} views
        </span>
      </div>
    </div>
  );
};

export default MobileImageStack;
