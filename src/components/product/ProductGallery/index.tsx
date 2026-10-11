import React, { useState } from 'react';
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
      {/* Thumbnails on Desktop (Left Column) */}
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

      {/* Main Image Stage */}
      <div className="atelier-product-gallery__stage">
        <div className="atelier-product-gallery__main-image-wrap">
          <img
            src={images[activeIndex]}
            alt={`${productName} view ${activeIndex + 1}`}
            className="atelier-product-gallery__main-img"
          />
        </div>

        {/* Mobile Dot Indicators */}
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
