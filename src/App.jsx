import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Dashboard from './pages/Dashboard.jsx';
import FoodOrder from './pages/FoodOrder.jsx';
import RightPanel from './components/RightPanel.jsx';
import Toast from './components/Toast.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { Menu, ShoppingCart, Utensils } from 'lucide-react';
import profileImg from './assets/profile.png';

const MainLayout = ({ children, activeTab, setActiveTab, cart, addToCart, removeFromCart, updateQty, placeOrder, toast, setToast }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 1024);
      if (width > 1024) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      {/* Toast Notification Container */}
      {toast && (
        <Toast 
          message={toast.message} 
          subMessage={toast.subMessage} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {/* Mobile AppBar */}
      <div className="mobile-nav-bar animate-fade">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => setIsSidebarOpen(true)} className="icon-btn-ghost">
            <Menu size={26} color="var(--text-main)" />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
             <img src={profileImg} style={{ width: '42px', height: '42px', borderRadius: '14px', border: '2px solid white', boxShadow: 'var(--shadow-md)' }} alt="Profile" />
          </div>
        </div>
        
        <div style={{ 
          position: 'absolute', left: '50%', transform: 'translateX(-50%)', 
          fontWeight: 950, fontSize: '1.5rem', color: 'var(--text-main)', 
          letterSpacing: '-1.5px', display: 'flex', alignItems: 'center', gap: '4px'
        }}>
          <Utensils size={20} color="var(--primary)" /> GoMeal
        </div>

        <div style={{ display: 'flex', gap: '0.25rem' }}>
          <button onClick={() => setIsCartOpen(true)} style={{ 
            position: 'relative', background: 'var(--text-main)', border: 'none', 
            borderRadius: '14px', padding: '0.6rem', color: 'white'
          }}>
            <ShoppingCart size={22} />
            {cart.length > 0 && (
              <span style={{
                position: 'absolute', top: '-5px', right: '-5px', background: 'var(--primary)', 
                color: 'white', borderRadius: '50%', width: '22px', height: '22px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem',
                border: '2.5px solid white', fontWeight: 950
              }}>{cart.reduce((a, b) => a + b.qty, 0)}</span>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar-wrapper ${isSidebarOpen ? 'active' : ''}`}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isMobile={isMobile} 
          onClose={() => setIsSidebarOpen(false)} 
        />
      </aside>

      {/* Main UI Area */}
      <main className="main-content">
        <Header 
          onOpenSidebar={() => setIsSidebarOpen(true)} 
          onOpenCart={() => setIsCartOpen(true)} 
          cartCount={cart.reduce((a, b) => a + b.qty, 0)} 
        />
        <div key={activeTab} className="animate-fade">
          {children}
        </div>
      </main>

      {/* Right Drawer Panel (Cart) */}
      <aside className={`right-panel-wrapper ${isCartOpen ? 'active' : ''}`}>
        <RightPanel 
          cart={cart} 
          removeFromCart={removeFromCart} 
          updateQty={updateQty} 
          isMobile={true} 
          onClose={() => setIsCartOpen(false)} 
          onCheckout={placeOrder}
        />
      </aside>

      <div className={`overlay ${(isSidebarOpen || isCartOpen) ? 'active' : ''}`} onClick={() => { setIsSidebarOpen(false); setIsCartOpen(false); }} />
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [toast, setToast] = useState(null);
  const [cart, setCart] = useState([
    { id: 1, title: 'Pepperoni Pizza', qty: 1, price: 15.99, img: '/src/assets/pepperoni_pizza.png' },
    { id: 2, title: 'Cheese Burger', qty: 1, price: 8.50, img: '/src/assets/cheese_burger.png' },
  ]);

  const showToast = (message, subMessage, type = 'success') => {
    setToast({ message, subMessage, type });
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.title === product.title);
      if (existing) {
        return prev.map(item => item.title === product.title ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, id: Date.now(), qty: 1 }];
    });
    
    showToast(`${product.title} Added!`, 'Item successfully added to your cart.', 'cart');
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const placeOrder = () => {
    showToast('Order Placed! 🎉', 'Your delicious food is on the way!', 'success');
    setCart([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/*" 
          element={
            <MainLayout 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              updateQty={updateQty}
              placeOrder={placeOrder}
              toast={toast}
              setToast={setToast}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard onAddToCart={addToCart} />} />
                <Route path="/food-order" element={<FoodOrder onAddToCart={addToCart} />} />
                {/* Fallback */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </MainLayout>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;

