import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_CART_AMOUNT,
  CLEAR_CART_ITEMS,
  CART_TOTALS,
} from '../actions';

const getLocaleStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocaleStorage(),
  total_amount: 0,
  total_price: 0,
  shipping_fee: 796,
};

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_AMOUNT, payload: { id, value } });
  };

  const clearCartItems = () => {
    dispatch({ type: CLEAR_CART_ITEMS });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: CART_TOTALS });
  }, [state.cart]);

  // console.log(state.cart);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        toggleAmount,
        clearCartItems,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
