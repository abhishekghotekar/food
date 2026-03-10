import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShoppingBag, Sparkles } from 'lucide-react';

const Toast = ({ message, type, onClose, subMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast-premium animate-up" style={{
      position: 'fixed',
      top: '2rem',
      right: '2rem',
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '1.25rem 2rem',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',
      boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
      zIndex: 9999,
      border: '1px solid rgba(255,255,255,0.1)',
      minWidth: '320px'
    }}>
      <div style={{
        backgroundColor: 'var(--primary)',
        width: '48px',
        height: '48px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#1a1a1a',
        flexShrink: 0
      }}>
        {type === 'success' ? <CheckCircle2 size={24} /> : <ShoppingBag size={24} />}
      </div>
      
      <div style={{ flex: 1 }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '2px' }}>{message}</h4>
        <p style={{ fontSize: '0.85rem', opacity: 0.7, fontWeight: 600 }}>{subMessage}</p>
      </div>

      <button onClick={onClose} style={{
        background: 'none',
        border: 'none',
        color: 'white',
        opacity: 0.5,
        cursor: 'pointer',
        padding: '0.5rem'
      }}>
        <X size={20} />
      </button>

      {/* Progress Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '24px',
        right: '24px',
        height: '3px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <div className="toast-progress" style={{
          height: '100%',
          backgroundColor: 'var(--primary)',
          width: '100%'
        }}></div>
      </div>
      
      <style>{`
        .toast-progress {
          animation: progress 4s linear forwards;
        }
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default Toast;
