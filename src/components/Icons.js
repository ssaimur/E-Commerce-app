import React from 'react';
import './icons.css';
import { Link } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io';
import { FaUserPlus } from 'react-icons/fa';
import { useProductsContext } from '../contexts/products_context';
import { useCartContext } from '../contexts/cart_context';

const Icons = () => {
  const { total_amount } = useCartContext();
  const { hideSidebar } = useProductsContext();
  return (
    <>
      <div className='cart-icon icon'>
        <Link to='/cart' onClick={hideSidebar}>
          <p>cart</p>
          <span className='cart-item'>
            <IoMdCart />
            <span className='item'>{total_amount}</span>
          </span>
        </Link>
      </div>
      <div className='user-icon icon'>
        <button>
          <p>login</p>
          <FaUserPlus />
        </button>
      </div>
    </>
  );
};

export default Icons;
