import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProductListingPage } from './pages/ProductListingPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { OrdersPage } from './pages/OrdersPage';
import { WishlistPage } from './pages/WishlistPage';
import { AccountPage } from './pages/AccountPage';
import { AuthPage } from './pages/AuthPage';
import { AboutPage, ContactPage, FAQPage, NotFoundPage } from './pages/StaticPages';
import './styles/variables.scss';
import { MainLayout } from './layouts/MainLayout';
import {
  HomePage,
  ProductListingPage,
  ProductDetailPage,
  CartPage,
  CheckoutPage,
  OrderSuccessPage,
  OrdersPage,
  WishlistPage,
  AccountPage,
  AuthPage,
  AboutPage,
  ContactPage,
  FAQPage,
  NotFoundPage,
} from './pages';
import './styles/main.scss';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<MainLayout />}>
        {/* Core Discovery Routes */}
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ProductListingPage />} />
        <Route path="category/:categorySlug" element={<ProductListingPage />} />
        <Route path="new-arrivals" element={<ProductListingPage />} />
        <Route path="offers" element={<ProductListingPage />} />
        <Route path="search" element={<ProductListingPage />} />

        {/* Product Detail Showroom */}
        <Route path="product/:slug" element={<ProductDetailPage />} />

        {/* Wishlist & Bag */}
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="cart" element={<CartPage />} />

        {/* Orders & Tracking */}
        <Route path="orders" element={<OrdersPage />} />
        <Route path="orders/:id" element={<OrdersPage />} />
        <Route path="track-order/:id" element={<OrdersPage />} />

        {/* Customer Account & Auth */}
        <Route path="account" element={<AccountPage />} />
        <Route path="login" element={<AuthPage />} />
        <Route path="signup" element={<AuthPage />} />

        {/* Atelier Static & Support Pages */}
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="support" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="returns" element={<FAQPage />} />

        {/* 404 Fallback */}
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Standalone Distraction-Free Multi-Step Checkout */}
      <Route path="/checkout/*" element={<CheckoutPage />} />
      <Route path="/order-success" element={<OrderSuccessPage />} />
    </Routes>
  );
};

export default App;
