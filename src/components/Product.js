import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../helper';

const Product = ({ image, name, price, id }) => {
  return (
    <div className='product'>
      <Link to={`products/${id}`}>
        <div className='body'>
          <img src={image} alt={name} />
          <Link to={`products/${id}`} className='link'>
            <FaSearch />
          </Link>
        </div>
      </Link>
      <div className='footer'>
        <p className='footer-name'>{name}</p>
        <p className='footer-price'>{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default Product;
