import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useOrderStore } from '../stores/useOrderStore';
import { CartItem } from '../types';
import { CheckCircle2, Truck, ArrowRight, MapPin } from 'lucide-react';
import './OrderSuccessPage.scss';

export const OrderSuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const { getOrderById, orders } = useOrderStore();

  const order = (orderId ? getOrderById(orderId) : null) || orders[0];

  if (!order) {
    return (
      <div className="container order-not-found">
        <h2>Order Confirmation</h2>
        <p>No active order found. Please browse our collections.</p>
        <Link to="/shop" className="btn-shop">VISIT CATALOGUE</Link>
      </div>
    );
  }

  return (
    <div className="order-success-page">
      <div className="container success-container">
        {/* Confirmed Banner */}
        <div className="confirmed-badge-box">
          <div className="check-icon-circle">
            <CheckCircle2 size={42} />
          </div>
          <span className="eyebrow">ACQUISITION RATIFIED</span>
          <h1>ORDER CONFIRMED</h1>
          <p className="order-number">
            ORDER REFERENCE: <strong>{order.orderNumber}</strong>
          </p>
          <p className="thank-you-note">
            An encrypted confirmation letter and digital invoice have been dispatched to your email.
            Our master packaging team is preparing your presentation chest.
          </p>
        </div>

        {/* Order Details Grid */}
        <div className="confirmed-details-card">
          <div className="details-header">
            <div>
              <span className="label">DATE OF ORDER</span>
              <strong>{order.date}</strong>
            </div>
            <div>
              <span className="label">TOTAL INVESTMENT</span>
              <strong>₹{order.total.toLocaleString('en-IN')}</strong>
            </div>
            <div>
              <span className="label">PAYMENT METHOD</span>
              <strong>{order.paymentMethod} ({order.paymentStatus})</strong>
            </div>
            <div>
              <span className="label">DISPATCH CARRIER</span>
              <strong>{order.trackingNumber}</strong>
            </div>
          </div>

          {/* Purchased Items List */}
          <div className="confirmed-items-list">
            <h4>ACQUIRED CREATIONS ({order.items.length})</h4>
            <div className="items-grid">
              {order.items.map((item: CartItem) => (
                <div key={item.id} className="item-row">
                  <img src={item.image} alt={item.name} />
                  <div className="meta">
                    <span className="brand">{item.brand}</span>
                    <span className="title">{item.name}</span>
                    <span className="specs">
                      Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                    </span>
                    <span className="price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address Meta */}
          <div className="shipping-destination-box">
            <MapPin size={20} className="pin-icon" />
            <div>
              <h5>DELIVERING TO</h5>
              <p>
                <strong>{order.shippingAddress.name}</strong> • {order.shippingAddress.address},{' '}
                {order.shippingAddress.locality}, {order.shippingAddress.city}, {order.shippingAddress.state} -{' '}
                {order.shippingAddress.pincode}
              </p>
              <span className="delivery-speed">
                Speed: {order.deliveryOption.name} ({order.deliveryOption.estimatedArrival})
              </span>
            </div>
          </div>

          {/* Post Order Actions */}
          <div className="post-order-actions">
            <Link to={`/orders`} className="btn-track-order">
              <Truck size={16} />
              <span>TRACK SHIPMENT IN ORDERS</span>
            </Link>
            <Link to="/shop" className="btn-continue-shopping">
              <span>EXPLORE MORE CREATIONS</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
