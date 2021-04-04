import React from 'react';
import './cartItem.css';
import { formatPrice } from '../helper';
import { FaTrash } from 'react-icons/fa';
import AmountButtons from './AmountButtons';
import { useCartContext } from '../contexts/cart_context';

const CartItem = ({ id, name, color, amount, image, price }) => {
  const { toggleAmount, removeFromCart } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };
  const decrease = () => {
    toggleAmount(id, 'dec');
  };
  return (
    <div className='cart-items'>
      <div className='cart-title'>
        <img src={image} alt={name} />
        <div className='title-info'>
          <h5 className='title-name'>{name}</h5>
          <p className='title-color'>
            color :
            <span style={{ backgroundColor: color }} />
          </p>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button className='remove-buttons' onClick={() => removeFromCart(id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
