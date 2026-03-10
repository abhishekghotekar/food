import React from 'react';
import Banner from '../components/Banner.jsx';
import Categories from '../components/Categories.jsx';
import PopularDishes from '../components/PopularDishes.jsx';

const Dashboard = ({ onAddToCart }) => {
  return (
    <>
      <Banner />
      <Categories />
      <PopularDishes onAddToCart={onAddToCart} />
    </>
  );
};

export default Dashboard;
