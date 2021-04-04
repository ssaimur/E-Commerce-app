import React from 'react';
import './productPage.css';
import LinkViewer from '../components/LinkViewer';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import Sort from '../components/Sort';

const ProductPage = () => {
  return (
    <div className='product-page'>
      <LinkViewer title='Products' />
      <div className='product-page-body'>
        <Filters />
        <div className='product-view'>
          <Sort />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
