import React, { useState } from 'react';
import { Pizza, Beef, Coffee, Soup, UtensilsCrossed, Fish, Cookie, Sparkles } from 'lucide-react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('Bakery');

  const categories = [
    { name: 'Bakery', icon: <Cookie size={24} /> },
    { name: 'Burger', icon: <Beef size={24} /> },
    { name: 'Beverage', icon: <Coffee size={24} /> },
    { name: 'Chicken', icon: <UtensilsCrossed size={24} /> },
    { name: 'Pizza', icon: <Pizza size={24} /> },
    { name: 'Seafood', icon: <Fish size={24} /> },
  ];

  return (
    <section className="categories-section animate-up" style={{ marginBottom: '4rem' }}>
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-main)' }}>Menu Categories</h2>
          <Sparkles size={20} color="var(--primary)" />
        </div>
        <button style={{ 
          background: 'none', 
          border: 'none', 
          color: 'var(--text-muted)', 
          fontSize: '0.9rem', 
          cursor: 'pointer', 
          fontWeight: 700,
          transition: 'var(--transition)'
        }} className="view-all-btn">
          Explore all Categories
        </button>
      </div>
      
      <div className="categories-list" style={{ 
        display: 'flex', 
        gap: '1.25rem', 
        overflowX: 'auto', 
        paddingBottom: '1.5rem',
        paddingLeft: '0.2rem',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}>
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => setActiveCategory(cat.name)}
            style={{
              padding: '1.5rem 1rem',
              minWidth: '110px',
              backgroundColor: activeCategory === cat.name ? 'white' : 'transparent',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              boxShadow: activeCategory === cat.name ? 'var(--shadow-md)' : 'none',
              cursor: 'pointer',
              border: '2px solid',
              borderColor: activeCategory === cat.name ? 'var(--primary)' : '#f0f0f0',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            className="category-card-premium"
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '20px',
              backgroundColor: activeCategory === cat.name ? 'var(--primary)' : 'white',
              color: activeCategory === cat.name ? 'white' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: activeCategory === cat.name ? '0 10px 20px rgba(248, 180, 0, 0.3)' : 'var(--shadow-sm)',
              transition: 'var(--transition)'
            }} className="category-icon-wrapper">
              {cat.icon}
            </div>
            <span style={{ 
              fontSize: '1rem', 
              fontWeight: 800, 
              color: activeCategory === cat.name ? 'var(--text-main)' : 'var(--text-muted)',
              transition: 'var(--transition)'
            }}>
              {cat.name}
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        .categories-list::-webkit-scrollbar { display: none; }
        .category-card-premium:hover {
          background-color: white !important;
          border-color: var(--primary) !important;
          transform: translateY(-8px);
          box-shadow: var(--shadow-md) !important;
        }
        .category-card-premium:hover .category-icon-wrapper {
          transform: rotate(10deg);
        }
        .view-all-btn:hover { color: var(--primary); transform: translateX(5px); }
      `}</style>
    </section>
  );
};

export default Categories;
