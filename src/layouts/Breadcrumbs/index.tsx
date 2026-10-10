import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './index.scss';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav className={`atelier-breadcrumbs ${className}`} aria-label="Breadcrumb">
      <ol className="atelier-breadcrumbs__list">
        <li className="atelier-breadcrumbs__item">
          <Link to="/" className="atelier-breadcrumbs__link">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="atelier-breadcrumbs__item">
              <ChevronRight size={12} className="atelier-breadcrumbs__separator" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="atelier-breadcrumbs__current" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className="atelier-breadcrumbs__link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
