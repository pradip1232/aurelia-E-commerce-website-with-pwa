import React from 'react';
import { Check } from 'lucide-react';
import './index.scss';

export interface ProductColorItem {
  name: string;
  hex: string;
}

export interface VariantSelectorProps {
  sizes?: string[];
  colors?: ProductColorItem[];
  selectedSize?: string;
  selectedColor?: string;
  onSizeChange?: (size: string) => void;
  onColorChange?: (color: string) => void;
  onOpenSizeGuide?: () => void;
  className?: string;
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({
  sizes = [],
  colors = [],
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
  onOpenSizeGuide,
  className = '',
}) => {
  return (
    <div className={`atelier-variant-selector ${className}`}>
      {/* Colors */}
      {colors.length > 0 && (
        <div className="atelier-variant-selector__group">
          <div className="atelier-variant-selector__label-row">
            <span className="atelier-variant-selector__label">
              COLOR: <strong>{selectedColor || colors[0]?.name}</strong>
            </span>
          </div>
          <div className="atelier-variant-selector__colors">
            {colors.map((c) => {
              const isSelected = selectedColor ? selectedColor === c.name : colors[0]?.name === c.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => onColorChange?.(c.name)}
                  className={`atelier-variant-selector__color-dot ${isSelected ? 'is-selected' : ''}`}
                  title={c.name}
                  style={{ backgroundColor: c.hex }}
                  aria-label={`Select color ${c.name}`}
                >
                  {isSelected && <Check size={12} className="check-icon" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Sizes */}
      {sizes.length > 0 && (
        <div className="atelier-variant-selector__group">
          <div className="atelier-variant-selector__label-row">
            <span className="atelier-variant-selector__label">
              SIZE: <strong>{selectedSize || sizes[0]}</strong>
            </span>
            {onOpenSizeGuide && (
              <button
                type="button"
                onClick={onOpenSizeGuide}
                className="atelier-variant-selector__size-guide"
              >
                Size Guide
              </button>
            )}
          </div>
          <div className="atelier-variant-selector__sizes">
            {sizes.map((s) => {
              const isSelected = selectedSize ? selectedSize === s : sizes[0] === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => onSizeChange?.(s)}
                  className={`atelier-variant-selector__size-btn ${isSelected ? 'is-selected' : ''}`}
                  aria-label={`Select size ${s}`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default VariantSelector;
