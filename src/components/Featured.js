import React from 'react';
import './featured.css';
import Loading from './Loading';
import Product from './Product';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../contexts/products_context';

const Featured = () => {
  const { isLoading, featuredProducts } = useProductsContext();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='featured'>
      <div className='featured-title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='featured-products feature'>
        {featuredProducts.slice(0, 3).map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
      <Link to='/products' className='all-btn'>
        all products
      </Link>
    </div>
  );
};

export default Featured;
