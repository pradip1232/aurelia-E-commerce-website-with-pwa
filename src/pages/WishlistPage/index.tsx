import React from 'react';
import { useWishlistStore } from '../../stores/useWishlistStore';
import { useCartStore } from '../../stores/useCartStore';
import { useUIStore } from '../../stores/useUIStore';
import { MOCK_PRODUCTS } from '../../data/mockData';
import { ProductCard } from '../../components/product/ProductCard';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './index.scss';

export const WishlistPage: React.FC = () => {
  const { wishlistProductIds, clearWishlist } = useWishlistStore();
  const { addItem } = useCartStore();
  const { showToast } = useUIStore();

  const wishlistedProducts = MOCK_PRODUCTS.filter((p) => wishlistProductIds.includes(p.id));

  const handleMoveAllToBag = () => {
    wishlistedProducts.forEach((p) => {
      addItem({
        productId: p.id,
        name: p.name,
        brand: p.brand,
        price: p.price,
        mrp: p.mrp,
        image: p.images[0],
        size: p.sizes[0] || 'Standard',
        color: p.colors[0]?.name || 'Standard',
        stock: p.stock
      }, 1);
    });
    showToast(`Added ${wishlistedProducts.length} pieces to your bag`);
  };

  if (wishlistProductIds.length === 0) {
    return (
      <div className="wishlist-empty-view">
        <div className="container empty-content">
          <div className="icon-circle">
            <Heart size={44} />
          </div>
          <h1>YOUR PRIVATE WISHLIST IS EMPTY</h1>
          <p>
            Curate pieces that capture your eye. Save your desired creations here for future
            acquisitions or private consultations.
          </p>
          <Link to="/shop" className="btn-explore">
            EXPLORE THE ATELIER
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="wishlist-header">
          <div className="title-block">
            <nav className="breadcrumb">
              <Link to="/">HOME</Link>
              <span>/</span>
              <span className="current">WISHLIST</span>
            </nav>
            <h1>MY SAVED CREATIONS</h1>
            <span className="count-tag">{wishlistedProducts.length} DESIRED PIECES</span>
          </div>

          <div className="header-actions">
            <button onClick={handleMoveAllToBag} className="btn-move-all">
              <ShoppingBag size={16} />
              <span>MOVE ALL TO BAG</span>
            </button>
            <button onClick={clearWishlist} className="btn-clear-wishlist">
              Clear All
            </button>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="wishlist-grid">
          {wishlistedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
