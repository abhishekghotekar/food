import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Utensils, Heart, MessageCircle, History, Receipt, Settings, X, LogOut, ChevronRight } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isMobile, onClose }) => {
  const navigate = useNavigate();
  const menuItems = [
    { icon: <LayoutDashboard size={22} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Utensils size={22} />, label: 'Food Order', path: '/food-order' },
    { icon: <Heart size={22} />, label: 'Favorite', path: '/favorites' },
    { icon: <MessageCircle size={22} />, label: 'Message', path: '/messages' },
    { icon: <History size={22} />, label: 'Order History', path: '/history' },
    { icon: <Receipt size={22} />, label: 'Bills', path: '/bills' },
    { icon: <Settings size={22} />, label: 'Setting', path: '/settings' },
  ];

  const handleTabClick = (item) => {
    setActiveTab(item.label);
    navigate(item.path);
    if(isMobile) onClose();
  };

  return (
    <div className="sidebar-inner" style={{ 
      padding: '2rem 1.75rem', 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      position: 'relative',
      backgroundColor: 'white'
    }}>
      {/* Increased touch area and better positioning for mobile close button */}
      {isMobile && (
        <button onClick={onClose} style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: '#f9fafb', border: 'none', cursor: 'pointer',
          padding: '0.75rem', borderRadius: '50%', color: 'var(--text-main)', zIndex: 10,
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
        }}>
          <X size={20} />
        </button>
      )}

      <div className="logo" style={{ 
        fontSize: '1.8rem', 
        fontWeight: 900, 
        marginBottom: '2.5rem', 
        color: 'var(--text-main)', 
        letterSpacing: '-1.5px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        marginTop: isMobile ? '1rem' : '0'
      }}>
        <div style={{ backgroundColor: 'var(--primary)', width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <Utensils size={22} />
        </div>
        GoMeal
      </div>
      
      <nav style={{ flex: 1 }}>
        <ul style={{ listStyle: 'none' }}>
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              onClick={() => handleTabClick(item)}
              className="sidebar-item-premium"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1.25rem',
                marginBottom: '0.5rem',
                borderRadius: '16px',
                cursor: 'pointer',
                backgroundColor: activeTab === item.label ? 'var(--text-main)' : 'transparent',
                color: activeTab === item.label ? 'white' : 'var(--text-muted)',
                transition: 'var(--transition)',
                fontWeight: 700,
                boxShadow: activeTab === item.label ? '0 8px 15px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {React.cloneElement(item.icon, { color: activeTab === item.label ? 'var(--primary)' : 'currentColor', size: 20 })}
                <span style={{ fontSize: '0.95rem' }}>{item.label}</span>
              </div>
              {activeTab === item.label && <ChevronRight size={14} color="var(--primary)" />}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer" style={{ marginTop: '1.5rem' }}>
        <div className="upgrade-card-premium" style={{
          background: 'linear-gradient(135deg, #f8b400 0%, #ffcc33 100%)',
          padding: '1.25rem',
          borderRadius: 'var(--radius-lg)',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          boxShadow: 'var(--shadow-primary)'
        }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.3rem', fontWeight: 900, color: '#1a1a1a' }}>Premium Account</h4>
            <p style={{ fontSize: '0.75rem', color: '#1a1a1a', opacity: 0.8, marginBottom: '1rem', fontWeight: 600 }}>Unlimited free delivery!</p>
            <button style={{
              backgroundColor: '#1a1a1a',
              color: 'white',
              border: 'none',
              padding: '0.6rem 1rem',
              borderRadius: '10px',
              fontSize: '0.8rem',
              fontWeight: 800,
              cursor: 'pointer',
              width: '100%',
              transition: 'var(--transition)'
            }} className="upgrade-btn">Upgrade Now</button>
          </div>
        </div>

        <div 
          onClick={() => navigate('/login')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            padding: '0.75rem 1rem', 
            borderRadius: '14px', 
            cursor: 'pointer', 
            color: '#ff4d4d',
            fontWeight: 800,
            transition: 'var(--transition)',
            fontSize: '0.9rem'
          }} className="logout-btn">
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>

      <style>{`
        .sidebar-item-premium:hover:not(.active) {
          background-color: #f9fafb;
          color: var(--text-main);
          transform: translateX(5px);
        }
        .upgrade-btn:hover { background: #333; transform: scale(1.02); }
        .logout-btn:hover { background: #fff1f1; }
      `}</style>
    </div>
  );
};

export default Sidebar;

