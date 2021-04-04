import React from 'react';
import './cartContent.css';
import CartItem from './CartItem';
import CartColumns from './CartColumns';
import CartTotals from './CartTotals';
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/cart_context';

const CartContent = () => {
  const { cart, clearCartItems } = useCartContext();
  return (
    <div className='cart-content'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='cart-content-link'>
        <Link className='link-button' to='/products'>
          continue shopping
        </Link>
        <button
          className='link-button clear-button'
          type='button'
          onClick={clearCartItems}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </div>
  );
};

export default CartContent;
