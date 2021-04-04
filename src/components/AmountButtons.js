import React from 'react';
import './amountButtons.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className='amount-buttons'>
      <button>
        <FaMinus onClick={decrease} />
      </button>
      <h2>{amount}</h2>
      <button>
        <FaPlus onClick={increase} />
      </button>
    </div>
  );
};

export default AmountButtons;
