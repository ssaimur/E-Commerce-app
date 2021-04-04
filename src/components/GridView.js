import React from 'react';
import './gridView.css';
import Product from './Product';

const GridView = ({ products }) => {
  return (
    <div className='grid-view'>
      {products.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
};

export default GridView;
