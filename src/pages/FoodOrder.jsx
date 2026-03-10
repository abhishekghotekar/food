import React from 'react';
import PopularDishes from '../components/PopularDishes.jsx';
import Categories from '../components/Categories.jsx';
import { ChefHat } from 'lucide-react';

const FoodOrder = ({ onAddToCart }) => {
  return (
    <div className="food-order-page animate-fade">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ backgroundColor: 'var(--text-main)', color: 'white', padding: '0.75rem', borderRadius: '14px' }}>
          <ChefHat size={24} />
        </div>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '-0.5px' }}>Full Menu</h2>
          <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Explore our standard & seasonal dishes</p>
        </div>
      </div>
      
      <Categories />
      
      <div style={{ marginTop: '2rem' }}>
         <PopularDishes onAddToCart={onAddToCart} />
      </div>

      <div style={{ 
        marginTop: '4rem', 
        padding: '3rem', 
        backgroundColor: '#1a1a1a', 
        borderRadius: 'var(--radius-xl)', 
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Hungry for more?</h3>
        <p style={{ opacity: 0.7, marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>We add new unique dishes every week. Check back later for fresh surprises!</p>
        <button style={{ 
          backgroundColor: 'var(--primary)', 
          color: 'var(--text-main)', 
          padding: '1rem 2.5rem', 
          borderRadius: '16px', 
          border: 'none', 
          fontWeight: 800, 
          fontSize: '1rem', 
          cursor: 'pointer' 
        }}>See Upcoming Dishes</button>
        
        {/* Decor */}
        <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--primary)', opacity: 0.1, borderRadius: '50%' }}></div>
      </div>
    </div>
  );
};

export default FoodOrder;
