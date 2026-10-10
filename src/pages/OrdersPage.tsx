import React, { useState } from 'react';
import { useOrderStore } from '../stores/useOrderStore';
import { useUIStore } from '../stores/useUIStore';
import { Truck, RotateCcw, XCircle, ArrowRight, Package, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import './OrdersPage.scss';

export const OrdersPage: React.FC = () => {
  const { orders, cancelOrder, returnOrder } = useOrderStore();
  const { showToast } = useUIStore();

  const [filterStatus, setFilterStatus] = useState<'ALL' | 'CONFIRMED' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED'>('ALL');

  // Return dialog state
  const [returningOrderId, setReturningOrderId] = useState<string | null>(null);
  const [returnReason, setReturnReason] = useState('Size not suitable');

  const filteredOrders = filterStatus === 'ALL'
    ? orders
    : orders.filter((o) => o.orderStatus === filterStatus);

  const handleCancel = (id: string) => {
    cancelOrder(id);
    showToast('Order has been cancelled');
  };

  const handleConfirmReturn = () => {
    if (!returningOrderId) return;
    returnOrder(returningOrderId, returnReason);
    showToast('Return request scheduled for doorstep pickup');
    setReturningOrderId(null);
  };

  return (
    <div className="orders-page">
      <div className="container">
        <div className="orders-header">
          <nav className="breadcrumb">
            <Link to="/">HOME</Link>
            <span>/</span>
            <Link to="/account">ACCOUNT</Link>
            <span>/</span>
            <span className="current">MY ORDERS</span>
          </nav>
          <h1>PURCHASE CHRONICLES</h1>
          <p>Review the status, white-glove transit logs, and delivery details of your acquisitions.</p>
        </div>

        {/* Filter Tabs */}
        <div className="orders-filter-tabs">
          <button
            className={`tab-btn ${filterStatus === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilterStatus('ALL')}
          >
            ALL PURCHASES ({orders.length})
          </button>
          <button
            className={`tab-btn ${filterStatus === 'CONFIRMED' ? 'active' : ''}`}
            onClick={() => setFilterStatus('CONFIRMED')}
          >
            PROCESSING
          </button>
          <button
            className={`tab-btn ${filterStatus === 'OUT_FOR_DELIVERY' ? 'active' : ''}`}
            onClick={() => setFilterStatus('OUT_FOR_DELIVERY')}
          >
            IN TRANSIT
          </button>
          <button
            className={`tab-btn ${filterStatus === 'DELIVERED' ? 'active' : ''}`}
            onClick={() => setFilterStatus('DELIVERED')}
          >
            DELIVERED
          </button>
        </div>

        {/* Orders Listing */}
        <div className="orders-list-container">
          {filteredOrders.length === 0 ? (
            <div className="no-orders-box">
              <Package size={48} className="icon" />
              <h3>No purchases recorded in this category</h3>
              <p>Explore our seasonal prêt-à-porter and bespoke releases.</p>
              <Link to="/shop" className="btn-shop">DISCOVER ATELIER</Link>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="order-history-card">
                <div className="card-top-bar">
                  <div className="meta-left">
                    <span className="ref-number">ORDER REF: <strong>{order.orderNumber}</strong></span>
                    <span className="date-tag">
                      <Calendar size={13} /> {order.date}
                    </span>
                  </div>
                  <div className="meta-right">
                    <span className={`status-pill status-${order.orderStatus.toLowerCase()}`}>
                      {order.orderStatus.replace(/_/g, ' ')}
                    </span>
                    <span className="order-total">₹{order.total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Items preview */}
                <div className="order-items-preview">
                  {order.items.map((item) => (
                    <div key={item.id} className="item-row">
                      <img src={item.image} alt={item.name} />
                      <div className="details">
                        <span className="brand">{item.brand}</span>
                        <h4 className="title">{item.name}</h4>
                        <span className="specs">
                          Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                        </span>
                        <span className="price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tracking Progress Timeline */}
                <div className="order-tracking-strip">
                  <div className="strip-header">
                    <Truck size={16} />
                    <span>CARRIER LOG: <strong>{order.trackingNumber}</strong></span>
                  </div>
                  <div className="timeline-steps">
                    {order.timeline.map((step, idx) => (
                      <div key={idx} className={`t-step ${step.completed ? 'completed' : ''}`}>
                        <div className="dot" />
                        <div className="info">
                          <strong>{step.status}</strong>
                          <span className="loc">{step.location}</span>
                          <span className="time">{step.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="card-actions-bar">
                  {order.orderStatus === 'CONFIRMED' && (
                    <button onClick={() => handleCancel(order.id)} className="btn-action danger">
                      <XCircle size={15} /> Cancel Order
                    </button>
                  )}
                  {order.orderStatus === 'DELIVERED' && (
                    <button onClick={() => setReturningOrderId(order.id)} className="btn-action">
                      <RotateCcw size={15} /> Request Return / Exchange
                    </button>
                  )}
                  <Link to={`/product/${order.items[0]?.productId || 'cashmere-wool-double-breasted-overcoat'}`} className="btn-action primary">
                    <span>Buy Similar Piece</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Return Request Modal */}
      {returningOrderId && (
        <div className="modal-backdrop" onClick={() => setReturningOrderId(null)}>
          <div className="modal-dialog return-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>REQUEST RETURN / EXCHANGE</h3>
            <p className="sub">Our concierge will arrange white-glove doorstep collection.</p>

            <div className="return-field">
              <label>Reason for Return</label>
              <select value={returnReason} onChange={(e) => setReturnReason(e.target.value)}>
                <option value="Size not suitable">Size & Proportion Not Suitable</option>
                <option value="Color nuance differs">Color Nuance Differs from Screen</option>
                <option value="Changed preference">Changed Style Preference</option>
                <option value="Packaging issue">Damaged Outer Packaging</option>
              </select>
            </div>

            <div className="return-actions">
              <button onClick={handleConfirmReturn} className="btn-confirm-return">
                Confirm Doorstep Pickup
              </button>
              <button onClick={() => setReturningOrderId(null)} className="btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
