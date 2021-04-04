import React, { useState } from 'react';
import './addToCart.css';
import { FaCheck, FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/cart_context';

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  const increase = () => {
    setAmount((amount) => {
      let tempAmount = amount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((amount) => {
      let tempAmount = amount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <div className='add-to-cart'>
      <div className='cart-colors'>
        <span>colors :</span>
        <div>
          {colors.map((item, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: item }}
                className={'color'}
                onClick={() => setMainColor(colors[index])}
              >
                {mainColor === item && <FaCheck />}
              </button>
            );
          })}
        </div>
      </div>
      <div className='amounts'>
        <button type='button' className='amount-btn'>
          <FaMinus onClick={decrease} />
        </button>
        <h2>{amount}</h2>
        <button type='button' className='amount-btn'>
          <FaPlus onClick={increase} />
        </button>
      </div>
      <Link
        to='/cart'
        className='cart-btn'
        onClick={() => addToCart(id, mainColor, amount, product)}
      >
        add to cart
      </Link>
    </div>
  );
};

export default AddToCart;
