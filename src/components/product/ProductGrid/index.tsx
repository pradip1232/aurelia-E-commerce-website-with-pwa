import React from 'react';

import { Product } from '../../../types';
import { ProductCard } from '../ProductCard';
import { Skeleton } from '../../ui/Skeleton';
import { EmptyState } from '../../ui/EmptyState';
import './index.scss';

export interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  columns?: 2 | 3 | 4;
  showRanking?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  isLoading = false,
  columns = 4,
  showRanking = false,
  emptyTitle = 'No creations found',
  emptyDescription = 'Try adjusting your selection or search filters.',
  className = '',
}) => {
  if (isLoading) {
    return (
      <div className={`atelier-product-grid atelier-product-grid--cols-${columns} ${className}`}>
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx} className="atelier-product-grid__skeleton-card">
            <Skeleton height="320px" className="atelier-product-grid__skeleton-img" />
            <Skeleton width="40%" height="12px" className="atelier-product-grid__skeleton-line" />
            <Skeleton width="80%" height="16px" className="atelier-product-grid__skeleton-line" />
            <Skeleton width="50%" height="16px" className="atelier-product-grid__skeleton-line" />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className={`atelier-product-grid atelier-product-grid--cols-${columns} ${className}`}>
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          ranking={showRanking ? idx + 1 : undefined}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
