import React from 'react';
import { CreditCard, MapPin, Plus, Minus, Wallet, Trash2, X, ChevronRight, Sparkles, Clock, ShoppingBag } from 'lucide-react';

const RightPanel = ({ cart, removeFromCart, updateQty, isMobile, onClose, onCheckout }) => {
  const serviceCharge = 1.00;
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const total = subtotal + serviceCharge;

  return (
    <div className="right-panel-inner animate-fade" style={{ 
      padding: '2rem 1.5rem', 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      backgroundColor: 'white',
      position: 'relative'
    }}>
      <button onClick={onClose} style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem',
        background: '#f3f4f6', border: 'none', cursor: 'pointer',
        padding: '0.6rem', borderRadius: '50%', color: 'var(--text-main)', zIndex: 10,
        transition: 'var(--transition)'
      }} className="close-btn-hover">
        <X size={20} />
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
        <h4 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-main)' }}>Your Balance</h4>
        <Sparkles size={20} color="var(--primary)" />
      </div>

      <div className="balance-card-premium" style={{
        background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
        borderRadius: '24px',
        padding: '1.5rem',
        color: 'white',
        boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.6, display: 'block', marginBottom: '0.4rem' }}>Balance</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-1px' }}>$12,000.00</h2>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '14px', backdropFilter: 'blur(10px)' }}>
            <Wallet size={24} color="var(--primary)" />
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#4ade80', boxShadow: '0 0 10px #4ade80' }}></div>
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Active Status</span>
          </div>
          <button style={{ 
            background: 'var(--primary)', 
            border: 'none', 
            color: 'var(--text-main)', 
            padding: '0.6rem 1.25rem', 
            borderRadius: '12px', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            cursor: 'pointer',
            transition: 'var(--transition)'
          }} className="topup-btn">Top Up</button>
        </div>
      </div>

      <div className="address-section" style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '1.25rem', 
        borderRadius: '20px',
        marginBottom: '2rem',
        border: '1px solid #f0f0f0'
      }}>
        <div className="flex-between" style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 900 }}>Delivery Address</h4>
          <span style={{ color: 'var(--primary)', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 800 }}>Change</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ background: 'white', padding: '0.6rem', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <MapPin size={22} color="var(--primary)" />
          </div>
          <div>
            <h5 style={{ fontSize: '0.95rem', fontWeight: 800 }}>Elm Street, 23</h5>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Gourmet City, 12345</p>
          </div>
        </div>
      </div>

      <div className="order-menu" style={{ flex: 1, overflowY: 'auto', paddingRight: '0.25rem' }}>
        <div className="flex-between" style={{ marginBottom: '1.25rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 900 }}>Your Orders</h4>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>{cart.length} items</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Deliciousness awaits! Add items to your cart.</p>
            </div>
          ) : cart.map((item) => (
            <div key={item.id} className="cart-item-premium flex-between">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img src={item.img} alt={item.title} style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }} />
                <div>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)' }}>{item.title}</h5>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f5f5f5', padding: '0.2rem 0.5rem', borderRadius: '8px' }}>
                      <button onClick={() => updateQty(item.id, -1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.1rem' }}><Minus size={12} /></button>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.1rem' }}><Plus size={12} /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--text-main)' }}>${(item.price * item.qty).toFixed(2)}</span>
                <Trash2 size={16} color="#ef4444" style={{ cursor: 'pointer', opacity: 0.5 }} onClick={() => removeFromCart(item.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="checkout-summary" style={{
        backgroundColor: '#fafafa',
        borderRadius: '24px',
        padding: '1.5rem',
        marginTop: '1.5rem',
        border: '1px dashed #e0e0e0'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div className="flex-between">
            <span style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>Subtotal</span>
            <span style={{ fontWeight: 800 }}>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex-between">
            <span style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>Service Fee</span>
            <span style={{ fontWeight: 800 }}>$1.00</span>
          </div>
          <div style={{ height: '1px', background: '#eee', margin: '0.25rem 0' }}></div>
          <div className="flex-between">
            <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>Total</span>
            <span style={{ fontWeight: 950, fontSize: '1.7rem', color: 'var(--primary)', letterSpacing: '-1px' }}>${total.toFixed(2)}</span>
          </div>
        </div>
        
        <button 
          onClick={onCheckout}
          className="btn-primary"
          style={{ width: '100%', padding: '1rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
        >
          Check out <ChevronRight size={20} />
        </button>
      </div>

      <style>{`
        .close-btn-hover:hover { background: #fee2e2 !important; color: #ef4444 !important; transform: rotate(90deg); }
        .topup-btn:hover { transform: scale(1.05); filter: brightness(1.1); }
        .topup-btn:active { transform: scale(0.95); }
      `}</style>
    </div>
  );
};

export default RightPanel;
