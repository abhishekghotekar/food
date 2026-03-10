import React from 'react';
import { Star, Plus, Heart, Zap, Clock } from 'lucide-react';
import fishBurgerImg from '../assets/fish_burger.png';
import beefBurgerImg from '../assets/beef_burger.png';
import cheeseBurgerImg from '../assets/cheese_burger.png';
import pepperoniPizzaImg from '../assets/pepperoni_pizza.png';
import veganPizzaImg from '../assets/vegan_pizza.png';

const PopularDishes = ({ onAddToCart }) => {
  const dishes = [
    { title: 'Fish Burger', price: 5.59, img: fishBurgerImg, discount: '15% Off', rating: 4.8, reviews: 120, time: '15-20 min' },
    { title: 'Beef Burger', price: 12.99, img: beefBurgerImg, discount: '20% Off', rating: 4.9, reviews: 340, time: '20-25 min' },
    { title: 'Cheese Burger', price: 8.50, img: cheeseBurgerImg, discount: '10% Off', rating: 4.7, reviews: 210, time: '10-15 min' },
    { title: 'Pepperoni Pizza', price: 15.99, img: pepperoniPizzaImg, discount: '15% Off', rating: 4.9, reviews: 540, time: '25-30 min' },
    { title: 'Vegan Pizza', price: 14.50, img: veganPizzaImg, discount: '5% Off', rating: 4.6, reviews: 180, time: '20-25 min' },
  ];

  return (
    <section className="popular-dishes animate-up" style={{ marginBottom: '4rem' }}>
      <div className="flex-between" style={{ marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 1.8rem)', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.5px' }}>Popular Dishes</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.25rem' }}>The most loved meals by our community</p>
        </div>
        <button style={{ 
          background: 'rgba(248, 180, 0, 0.1)', 
          border: 'none', 
          color: 'var(--primary)', 
          fontWeight: 800, 
          padding: '0.75rem 1.5rem',
          borderRadius: '16px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontSize: '0.95rem'
        }}>
          View all <Zap size={18} fill="var(--primary)" />
        </button>
      </div>
      
      <div className="popular-dishes-grid">
        {dishes.map((dish, idx) => (
          <div key={idx} className="dish-card-premium" style={{
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            cursor: 'pointer',
            transition: 'var(--transition)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #f2f2f2',
            height: '100%'
          }}>
            <div style={{
              position: 'absolute',
              top: '1.25rem',
              left: '1.25rem',
              backgroundColor: '#ff4d4d',
              color: 'white',
              fontSize: '0.8rem',
              fontWeight: 900,
              padding: '0.5rem 1rem',
              borderRadius: '12px',
              zIndex: 1,
              boxShadow: '0 8px 15px rgba(255, 77, 77, 0.25)'
            }}>
              {dish.discount}
            </div>
            
            <div className="heart-icon" style={{ 
              position: 'absolute', 
              top: '1.25rem', 
              right: '1.25rem', 
              backgroundColor: '#fff1f1',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              color: '#ff4d4d', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              transition: 'var(--transition)'
            }}>
              <Heart size={22} fill="#ff4d4d" />
            </div>

            <div className="img-container" style={{ 
              width: '100%', 
              height: '200px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '1.5rem',
              padding: '1rem',
              transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
              <img src={dish.img} alt={dish.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffb400' }}>
                  <Star size={18} fill="#ffb400" />
                  <span style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--text-main)' }}>{dish.rating}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)' }}>
                  <Clock size={16} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{dish.time}</span>
                </div>
              </div>
              
              <h4 style={{ fontSize: '1.3rem', fontWeight: 950, marginBottom: '0.75rem', color: 'var(--text-main)', lineHeight: 1.2 }}>{dish.title}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 500 }}>Delicious fresh ingredients made with love.</p>
              
              <div className="flex-between">
                <div>
                  <span style={{ fontSize: '1.6rem', fontWeight: 950, color: 'var(--text-main)' }}>${dish.price}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(dish);
                  }}
                  className="add-btn-premium"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    width: '50px',
                    height: '50px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: 'none',
                    boxShadow: '0 8px 20px rgba(248, 180, 0, 0.35)',
                    transition: 'var(--transition)'
                  }}
                >
                  <Plus size={28} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .dish-card-premium:hover {
          transform: translateY(-12px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
          border-color: var(--primary);
        }
        .dish-card-premium:hover .img-container {
          transform: scale(1.15) rotate(8deg);
        }
        .add-btn-premium:hover {
          transform: rotate(90deg) scale(1.1);
          background: var(--text-main);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .heart-icon:hover {
          transform: scale(1.2) rotate(-5deg);
          background: #ff4d4d;
          color: white;
          box-shadow: 0 8px 20px rgba(255, 77, 77, 0.3);
        }
      `}</style>
    </section>
  );
};

export default PopularDishes;
