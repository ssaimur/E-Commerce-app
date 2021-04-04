import React from 'react';
import './productList.css';
import GridView from './GridView';
import ListView from './ListView';
import { useFilterContext } from '../contexts/filter_context';
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h4 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h4>
    );
  }
  if (!grid_view) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
