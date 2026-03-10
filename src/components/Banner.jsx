import React from 'react';
import womanImg from '../assets/woman.png';

const Banner = () => {
  return (
    <div className="banner-container animate-up" style={{
      background: 'linear-gradient(135deg, #f8b400 0%, #ffcc33 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(1.5rem, 5vw, 3rem)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '3.5rem',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      minHeight: 'clamp(180px, 40vh, 260px)',
      boxShadow: '0 20px 40px rgba(248, 180, 0, 0.3)',
      width: '100%'
    }}>
      <div className="banner-text" style={{ maxWidth: 'clamp(60%, 70%, 100%)', zIndex: 2 }}>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          display: 'inline-block',
          padding: '0.4rem 1rem',
          borderRadius: '50px',
          fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
          fontWeight: 700,
          marginBottom: 'clamp(0.5rem, 3vw, 1.5rem)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          ✨ Special Offer
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 6vw, 2.8rem)', fontWeight: 900, lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-1px' }}>
          Get Discount Voucher
        </h2>
        <h2 style={{ fontSize: 'clamp(1.4rem, 6vw, 2.8rem)', fontWeight: 900, lineHeight: 1, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
          Up To <span style={{ color: '#1a1a1a', backgroundColor: 'white', padding: '0 0.4rem', borderRadius: '8px' }}>20%</span>
        </h2>
        <p className="banner-p" style={{ color: 'rgba(255,255,255,0.95)', fontSize: 'clamp(0.8rem, 2vw, 1rem)', fontWeight: 500, lineHeight: 1.6, maxWidth: '400px' }}>
          Satisfy your cravings with our premium selection. Fast delivery!
        </p>
      </div>
      
      <div className="banner-image" style={{
        position: 'absolute',
        right: '10px',
        bottom: '-10px',
        width: 'clamp(140px, 40%, 380px)',
        zIndex: 1,
        pointerEvents: 'none',
        transition: 'transform 0.5s ease'
      }}>
        <img
          src={womanImg}
          alt="Banner Visual"
          style={{ width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }}
        />
      </div>

      {/* Decorative Floating Elements */}
      <div className="banner-circle" style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>
      
      <style>{`
        @media (max-width: 650px) {
          .banner-container { padding: 1.5rem !important; }
          .banner-text { max-width: 85% !important; }
          .banner-p { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
          .banner-image { width: 140px !important; opacity: 0.9; right: -5px !important; }
        }
        @media (max-width: 400px) {
           .banner-container { min-height: 160px !important; }
           .banner-text h2 { font-size: 1.3rem !important; }
           .banner-image { display: none; }
           .banner-text { max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
};

export default Banner;
