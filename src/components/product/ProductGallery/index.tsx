import React, { useState } from 'react';
import Stack from '../../ui/Stack';
import './index.scss';

export interface ProductGalleryProps {
  images: string[];
  productName: string;
  className?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className={`atelier-product-gallery ${className}`}>
      {/* Mobile-Only Multiple Image Fanned Stack */}
      {images.length > 1 && (
        <div className="atelier-product-gallery__mobile-stack">
          <div style={{ width: 230, height: 230, margin: '0 auto', position: 'relative' }}>
            <Stack
              layout="fan"
              sendToBackOnClick={true}
              cards={images.map((src, i) => (
                <img key={src} src={src} alt={`${productName} view ${i + 1}`} />
              ))}
              onChange={setActiveIndex}
            />
          </div>
          <p className="mobile-stack-hint">
            <span>✦ Tap card to fan next view ({activeIndex + 1}/{images.length})</span>
          </p>
        </div>
      )}

      {/* Desktop Thumbnails (Left Column) */}
      {images.length > 1 && (
        <div className="atelier-product-gallery__thumbnails">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`atelier-product-gallery__thumb-btn ${activeIndex === idx ? 'is-active' : ''}`}
              aria-label={`View image ${idx + 1}`}
            >
              <img src={img} alt={`${productName} thumbnail ${idx + 1}`} />
            </button>
          ))}
        </div>
      )}

      {/* Desktop & Single-Image Stage */}
      <div className={`atelier-product-gallery__stage ${images.length > 1 ? 'hide-on-mobile' : ''}`}>
        <div className="atelier-product-gallery__main-image-wrap">
          <img
            src={images[activeIndex] || images[0]}
            alt={`${productName} view ${activeIndex + 1}`}
            className="atelier-product-gallery__main-img"
          />
        </div>

        {/* Mobile Dot Indicators for fallback */}
        {images.length > 1 && (
          <div className="atelier-product-gallery__dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`atelier-product-gallery__dot ${activeIndex === idx ? 'is-active' : ''}`}
                aria-label={`Jump to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
