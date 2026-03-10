import React from 'react';
import { Search, Bell, Settings, User, ShoppingCart, Menu, Moon, Sun, SearchIcon } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Header = ({ onOpenSidebar, onOpenCart, cartCount }) => {
  return (
    <header className="header-container animate-fade" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      marginBottom: '3.5rem', 
      width: '100%',
      position: 'relative',
      zIndex: 10,
      gap: '2rem'
    }}>
      <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div className="profile-group" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ position: 'relative' }}>
            <img
              src={profileImg}
              alt="Profile"
              style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '18px', 
                objectFit: 'cover', 
                border: '3px solid white', 
                boxShadow: 'var(--shadow-md)'
              }}
            />
            <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '16px', height: '16px', background: '#4ade80', border: '3px solid white', borderRadius: '50%' }}></div>
          </div>
          <div className="profile-text">
            <h1 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 900, color: 'var(--text-main)', lineHeight: '1.1', letterSpacing: '-0.5px' }}>
              Hello, Patricia 👋
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
              Satisfy your hunger today!
            </p>
          </div>
        </div>
      </div>

      <div className="search-group" style={{ flex: 1, maxWidth: '500px' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <SearchIcon size={20} style={{ position: 'absolute', left: '1.25rem', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search for your favorite food..."
            style={{
              width: '100%',
              padding: '1rem 1.25rem 1rem 3.5rem',
              borderRadius: '20px',
              border: '1.5px solid transparent',
              backgroundColor: 'white',
              fontSize: '0.95rem',
              outline: 'none',
              fontWeight: 600,
              boxShadow: 'var(--shadow-md)',
              transition: 'var(--transition)'
            }}
          />
        </div>
      </div>

      <div className="header-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button className="icon-btn-ghost dashboard-action-btn">
          <Moon size={22} color="var(--text-muted)" />
        </button>
        <button className="icon-btn dashboard-action-btn" style={{ position: 'relative' }}>
          <Bell size={24} color="var(--text-main)" />
          <span style={{ position: 'absolute', top: '10px', right: '10px', width: '9px', height: '9px', background: '#ef4444', borderRadius: '50%', border: '2px solid white' }}></span>
        </button>
        
        <button className="icon-btn" onClick={onOpenCart} style={{ 
          position: 'relative', 
          padding: '0.8rem',
          borderRadius: '16px',
          backgroundColor: 'var(--text-main)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex'
        }}>
          <ShoppingCart size={24} color="white" />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: '-6px', right: '-6px', 
              background: 'var(--primary)', color: 'white', 
              borderRadius: '50%', width: '22px', height: '22px', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem',
              fontWeight: 900, border: '2.5px solid white'
            }}>{cartCount}</span>
          )}
        </button>
      </div>

      <style>{`
        .dashboard-action-btn {
           width: 50px;
           height: 50px;
           border-radius: 16px;
           display: flex;
           align-items: center;
           justify-content: center;
           cursor: pointer;
           border: none;
           background-color: white;
           box-shadow: var(--shadow-sm);
        }
        @media (max-width: 1024px) {
          .header-container { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
