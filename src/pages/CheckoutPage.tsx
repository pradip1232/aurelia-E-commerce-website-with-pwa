import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCartStore } from '../stores/useCartStore';
import { useAuthStore } from '../stores/useAuthStore';
import { useOrderStore } from '../stores/useOrderStore';
import { useUIStore } from '../stores/useUIStore';
import { DeliveryOption, Order } from '../types';
import {
  ShieldCheck,
  Lock,
  CreditCard,
  Plus,
  ArrowRight,
  ArrowLeft,
  Smartphone,
  Building,
  Wallet
} from 'lucide-react';
import './CheckoutPage.scss';

const DELIVERY_OPTIONS: DeliveryOption[] = [
  {
    id: 'del-express',
    name: 'Atelier White-Glove Air Courier',
    description: 'Direct air courier with personal signature verification',
    price: 0,
    estimatedArrival: 'In 2 Business Days'
  },
  {
    id: 'del-same-day',
    name: 'Same-Day Metro VIP Transit',
    description: 'Chauffeured dispatch directly from our nearest Flagship Salon',
    price: 500,
    estimatedArrival: 'Today by 8:00 PM'
  }
];

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, couponCode, couponDiscount, clearCart } = useCartStore();
  const { addresses, addAddress, user } = useAuthStore();
  const { addOrder } = useOrderStore();
  const { showToast } = useUIStore();

  // Multi-step: 1: ADDRESS -> 2: DELIVERY -> 3: PAYMENT -> 4: REVIEW
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [selectedAddressId, setSelectedAddressId] = useState<string>(addresses[0]?.id || '');
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryOption>(DELIVERY_OPTIONS[0]);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'CARD' | 'NETBANKING' | 'WALLET' | 'COD'>('UPI');
  const [upiId, setUpiId] = useState('kabir@oksbi');
  const [cardDetails, setCardDetails] = useState({ number: '•••• •••• •••• 8812', name: 'KABIR SINGHANIA', expiry: '08/29', cvv: '•••' });
  const [isProcessing, setIsProcessing] = useState(false);

  // Address creation modal state
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddr, setNewAddr] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    addressType: 'HOME' as 'HOME' | 'WORK' | 'OTHER'
  });

  const subtotal = getSubtotal();
  const shippingFee = selectedDelivery.price;
  const total = Math.max(0, subtotal - couponDiscount + shippingFee);

  if (items.length === 0) {
    return (
      <div className="container empty-checkout-wrap">
        <h2>Your bag is empty</h2>
        <p>Please select pieces before proceeding to checkout.</p>
        <Link to="/shop" className="btn-shop">DISCOVER ATELIER</Link>
      </div>
    );
  }

  const handleCreateAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddr.name || !newAddr.pincode || !newAddr.address) {
      showToast('Please fill all mandatory address fields', 'warning');
      return;
    }
    addAddress({ ...newAddr, isDefault: true });
    setIsAddingAddress(false);
    showToast('New shipping address saved');
  };

  const handlePlaceOrder = () => {
    const chosenAddress = addresses.find((a) => a.id === selectedAddressId) || addresses[0];
    if (!chosenAddress) {
      showToast('Please select a shipping address', 'warning');
      setCurrentStep(1);
      return;
    }

    setIsProcessing(true);

    // Simulate encrypted payment handshake
    setTimeout(() => {
      const orderId = `ord-${Date.now().toString().slice(-5)}`;
      const newOrder: Order = {
        id: orderId,
        orderNumber: `AUR-2026-${orderId.slice(-5)}`,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        items: [...items],
        subtotal,
        discount: 0,
        couponDiscount,
        shippingFee,
        tax: 0,
        total,
        couponCode: couponCode || undefined,
        shippingAddress: chosenAddress,
        deliveryOption: selectedDelivery,
        paymentMethod,
        paymentStatus: paymentMethod === 'COD' ? 'PENDING' : 'PAID',
        orderStatus: 'CONFIRMED',
        trackingNumber: `BLUEDART-AUR-${Math.floor(100000 + Math.random() * 900000)}`,
        timeline: [
          { status: 'Order Placed', date: 'Just Now', completed: true, location: 'Online Atelier' },
          { status: 'Order Confirmed', date: 'Just Now', completed: true, location: 'Atelier Logistics' },
          { status: 'Quality Assured & Boxed', date: 'Upcoming', completed: false, location: 'Mumbai Central Hub' },
          { status: 'White-Glove Dispatch', date: 'Upcoming', completed: false, location: 'In Transit' }
        ]
      };

      addOrder(newOrder);
      clearCart();
      setIsProcessing(false);
      navigate(`/order-success?orderId=${newOrder.id}`);
    }, 1200);
  };

  return (
    <div className="checkout-page">
      {/* Checkout Focused Header */}
      <div className="checkout-minimal-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <span>✦</span>
            <strong>AURELIA</strong>
          </Link>
          <div className="secure-badge">
            <Lock size={15} />
            <span>256-BIT ENCRYPTED CHECKOUT</span>
          </div>
        </div>
      </div>

      <div className="container checkout-content-container">
        {/* Step Progress Tracker */}
        <div className="checkout-steps-tracker">
          <button
            className={`step-btn ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}
            onClick={() => setCurrentStep(1)}
          >
            <span className="num">{currentStep > 1 ? '✓' : '1'}</span>
            <span className="label">ADDRESS</span>
          </button>
          <span className="step-sep" />
          <button
            className={`step-btn ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}
            onClick={() => setCurrentStep(2)}
          >
            <span className="num">{currentStep > 2 ? '✓' : '2'}</span>
            <span className="label">DELIVERY</span>
          </button>
          <span className="step-sep" />
          <button
            className={`step-btn ${currentStep === 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}
            onClick={() => setCurrentStep(3)}
          >
            <span className="num">{currentStep > 3 ? '✓' : '3'}</span>
            <span className="label">PAYMENT</span>
          </button>
          <span className="step-sep" />
          <button
            className={`step-btn ${currentStep === 4 ? 'active' : ''}`}
            onClick={() => setCurrentStep(4)}
          >
            <span className="num">4</span>
            <span className="label">REVIEW</span>
          </button>
        </div>

        <div className="checkout-layout-grid">
          {/* Step Panels */}
          <div className="checkout-step-panel">
            {/* STEP 1: SHIPPING ADDRESS */}
            {currentStep === 1 && (
              <div className="step-content address-step">
                <div className="step-title-row">
                  <h2>SELECT DELIVERY ADDRESS</h2>
                  <button onClick={() => setIsAddingAddress(!isAddingAddress)} className="btn-add-new-addr">
                    <Plus size={16} /> Add New Address
                  </button>
                </div>

                {isAddingAddress ? (
                  <form onSubmit={handleCreateAddress} className="new-address-form">
                    <h3>ENTER RESIDENCE OR WORK ADDRESS</h3>
                    <div className="form-grid">
                      <div className="field">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          required
                          value={newAddr.name}
                          onChange={(e) => setNewAddr({ ...newAddr, name: e.target.value })}
                        />
                      </div>
                      <div className="field">
                        <label>Contact Phone *</label>
                        <input
                          type="tel"
                          required
                          value={newAddr.phone}
                          onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                        />
                      </div>
                      <div className="field">
                        <label>Postal Pincode *</label>
                        <input
                          type="text"
                          required
                          maxLength={6}
                          value={newAddr.pincode}
                          onChange={(e) => setNewAddr({ ...newAddr, pincode: e.target.value })}
                        />
                      </div>
                      <div className="field">
                        <label>Locality / Area *</label>
                        <input
                          type="text"
                          required
                          value={newAddr.locality}
                          onChange={(e) => setNewAddr({ ...newAddr, locality: e.target.value })}
                        />
                      </div>
                      <div className="field full">
                        <label>Apartment, Suite, Street Address *</label>
                        <input
                          type="text"
                          required
                          value={newAddr.address}
                          onChange={(e) => setNewAddr({ ...newAddr, address: e.target.value })}
                        />
                      </div>
                      <div className="field">
                        <label>City *</label>
                        <input
                          type="text"
                          required
                          value={newAddr.city}
                          onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                        />
                      </div>
                      <div className="field">
                        <label>State *</label>
                        <input
                          type="text"
                          required
                          value={newAddr.state}
                          onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="form-actions">
                      <button type="submit" className="btn-save-addr">Save Address</button>
                      <button type="button" onClick={() => setIsAddingAddress(false)} className="btn-cancel">Cancel</button>
                    </div>
                  </form>
                ) : (
                  <div className="saved-addresses-list">
                    {addresses.map((addr) => (
                      <label
                        key={addr.id}
                        className={`address-card ${selectedAddressId === addr.id ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="selectedAddress"
                          checked={selectedAddressId === addr.id}
                          onChange={() => setSelectedAddressId(addr.id)}
                        />
                        <div className="addr-info">
                          <div className="top-meta">
                            <strong>{addr.name}</strong>
                            <span className="type-badge">{addr.addressType}</span>
                            {addr.isDefault && <span className="default-pill">DEFAULT</span>}
                          </div>
                          <p className="street">{addr.address}, {addr.locality}</p>
                          <p className="city">{addr.city}, {addr.state} - {addr.pincode}</p>
                          <p className="phone">Phone: {addr.phone}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                )}

                <div className="step-navigation-actions">
                  <button onClick={() => setCurrentStep(2)} className="btn-continue">
                    <span>CONTINUE TO DELIVERY</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: DELIVERY OPTIONS */}
            {currentStep === 2 && (
              <div className="step-content delivery-step">
                <h2>CHOOSE WHITE-GLOVE DISPATCH SPEED</h2>
                <div className="delivery-options-list">
                  {DELIVERY_OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      className={`delivery-card ${selectedDelivery.id === opt.id ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="deliveryOption"
                        checked={selectedDelivery.id === opt.id}
                        onChange={() => setSelectedDelivery(opt)}
                      />
                      <div className="opt-desc">
                        <div className="title-row">
                          <strong>{opt.name}</strong>
                          <span className="price-tag">
                            {opt.price === 0 ? 'COMPLIMENTARY' : `+₹${opt.price}`}
                          </span>
                        </div>
                        <p>{opt.description}</p>
                        <span className="arrival-tag">✦ Expected: {opt.estimatedArrival}</span>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="step-navigation-actions">
                  <button onClick={() => setCurrentStep(1)} className="btn-back">
                    <ArrowLeft size={16} /> Back to Address
                  </button>
                  <button onClick={() => setCurrentStep(3)} className="btn-continue">
                    <span>CONTINUE TO PAYMENT</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PAYMENT METHOD */}
            {currentStep === 3 && (
              <div className="step-content payment-step">
                <h2>SECURE PAYMENT SELECTION</h2>
                <div className="payment-tabs-layout">
                  <div className="payment-methods-sidebar">
                    <button
                      className={`method-btn ${paymentMethod === 'UPI' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('UPI')}
                    >
                      <Smartphone size={18} />
                      <span>Instant UPI / QR</span>
                    </button>
                    <button
                      className={`method-btn ${paymentMethod === 'CARD' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('CARD')}
                    >
                      <CreditCard size={18} />
                      <span>Credit / Debit Card</span>
                    </button>
                    <button
                      className={`method-btn ${paymentMethod === 'NETBANKING' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('NETBANKING')}
                    >
                      <Building size={18} />
                      <span>Net Banking</span>
                    </button>
                    <button
                      className={`method-btn ${paymentMethod === 'COD' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('COD')}
                    >
                      <Wallet size={18} />
                      <span>Cash on Delivery</span>
                    </button>
                  </div>

                  <div className="payment-details-panel">
                    {paymentMethod === 'UPI' && (
                      <div className="upi-pane">
                        <h4>PAY VIA ANY UPI APPLICATION</h4>
                        <p>Google Pay, PhonePe, Paytm, or BHIM</p>
                        <div className="upi-input-group">
                          <label>Enter Virtual Payment Address (UPI ID)</label>
                          <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            placeholder="username@bank"
                          />
                        </div>
                        <span className="note">A payment authorization request will be sent to your mobile device.</span>
                      </div>
                    )}

                    {paymentMethod === 'CARD' && (
                      <div className="card-pane">
                        <h4>ENTER CARD DETAILS</h4>
                        <div className="card-form">
                          <div className="field">
                            <label>Card Number</label>
                            <input
                              type="text"
                              value={cardDetails.number}
                              onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                            />
                          </div>
                          <div className="field">
                            <label>Name On Card</label>
                            <input
                              type="text"
                              value={cardDetails.name}
                              onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                            />
                          </div>
                          <div className="fields-row">
                            <div className="field">
                              <label>Expiry (MM/YY)</label>
                              <input
                                type="text"
                                value={cardDetails.expiry}
                                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                              />
                            </div>
                            <div className="field">
                              <label>CVV</label>
                              <input
                                type="password"
                                maxLength={3}
                                value={cardDetails.cvv}
                                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'NETBANKING' && (
                      <div className="netbanking-pane">
                        <h4>SELECT PREMIER BANKING PARTNER</h4>
                        <div className="banks-grid">
                          {['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'State Bank of India', 'Kotak Mahindra Bank', 'Citibank'].map((b) => (
                            <button key={b} type="button" className="bank-card">
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'COD' && (
                      <div className="cod-pane">
                        <h4>PAY ON DELIVERY</h4>
                        <p>
                          Pay securely via UPI QR or cash to our courier escort upon physical handover of
                          your presentation chest.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="step-navigation-actions">
                  <button onClick={() => setCurrentStep(2)} className="btn-back">
                    <ArrowLeft size={16} /> Back to Delivery
                  </button>
                  <button onClick={() => setCurrentStep(4)} className="btn-continue">
                    <span>REVIEW ORDER</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: REVIEW & PLACE ORDER */}
            {currentStep === 4 && (
              <div className="step-content review-step">
                <h2>CONFIRM YOUR ACQUISITION</h2>

                <div className="review-cards-list">
                  <div className="review-card">
                    <h4>SHIPPING DESTINATION</h4>
                    {addresses.find((a) => a.id === selectedAddressId) ? (
                      <p>
                        {addresses.find((a) => a.id === selectedAddressId)?.name} •{' '}
                        {addresses.find((a) => a.id === selectedAddressId)?.address},{' '}
                        {addresses.find((a) => a.id === selectedAddressId)?.city}
                      </p>
                    ) : (
                      <p>Primary Atelier Address</p>
                    )}
                    <button onClick={() => setCurrentStep(1)} className="btn-edit-step">Edit</button>
                  </div>

                  <div className="review-card">
                    <h4>SELECTED DISPATCH SPEED</h4>
                    <p>{selectedDelivery.name} ({selectedDelivery.estimatedArrival})</p>
                    <button onClick={() => setCurrentStep(2)} className="btn-edit-step">Edit</button>
                  </div>

                  <div className="review-card">
                    <h4>PAYMENT METHOD</h4>
                    <p>{paymentMethod} Authorization</p>
                    <button onClick={() => setCurrentStep(3)} className="btn-edit-step">Edit</button>
                  </div>
                </div>

                <div className="step-navigation-actions">
                  <button onClick={() => setCurrentStep(3)} className="btn-back">
                    <ArrowLeft size={16} /> Back to Payment
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="btn-place-order"
                  >
                    {isProcessing ? 'AUTHORIZING TRANSACTION...' : `PLACE LUXURY ORDER • ₹${total.toLocaleString('en-IN')}`}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Mini Order Summary */}
          <aside className="checkout-summary-column">
            <div className="summary-card">
              <h3>ORDER SUMMARY ({items.length})</h3>

              <div className="mini-items-scroll">
                {items.map((item) => (
                  <div key={item.id} className="mini-item">
                    <img src={item.image} alt={item.name} />
                    <div className="details">
                      <span className="brand">{item.brand}</span>
                      <span className="title">{item.name}</span>
                      <span className="specs">Qty: {item.quantity} • Size: {item.size}</span>
                      <span className="price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-math">
                <div className="row">
                  <span>Bag Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="row discount">
                    <span>Privilege Savings</span>
                    <span>-₹{couponDiscount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="row">
                  <span>Estimated Courier</span>
                  <span>{shippingFee === 0 ? 'COMPLIMENTARY' : `₹${shippingFee}`}</span>
                </div>
                <div className="row total-row">
                  <span>Final Investment</span>
                  <span className="total-val">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="security-note">
                <ShieldCheck size={16} />
                <span>Encrypted 256-Bit SSL Payment Handshake</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
