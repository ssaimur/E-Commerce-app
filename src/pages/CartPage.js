import React from 'react';
import './cartPage.css';
import LinkViewer from '../components/LinkViewer';
import CartContent from '../components/CartContent';
import { useCartContext } from '../contexts/cart_context';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <div className='empty-cart-page'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='empty-button'>
            fill it
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className='cart'>
      <LinkViewer title='cart' />
      <div className='cart-page'>
        <CartContent />
      </div>
    </div>
  );
};

export default CartPage;
