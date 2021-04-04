import React from 'react';
import './cartTotals.css';
import { useCartContext } from '../contexts/cart_context';
import { formatPrice } from '../helper';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { total_amount, total_price, shipping_fee } = useCartContext();
  return (
    <div className='cart-totals'>
      <div>
        <article className='art'>
          <h5>
            subtotal: <span>{formatPrice(total_price)}</span>
          </h5>
          <p>
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total: <span>{formatPrice(total_price + shipping_fee)}</span>
          </h4>
        </article>
        <Link className='button'>working on payment system</Link>
      </div>
    </div>
  );
};

export default CartTotals;
