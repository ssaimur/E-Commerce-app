import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_CART_AMOUNT,
  CLEAR_CART_ITEMS,
  CART_TOTALS,
} from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        let tempAmount = item.amount;
        if (item.id === id + color) {
          tempAmount += 1;
          return { ...item, amount: tempAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === TOGGLE_CART_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let tempAmount = item.amount;
        if (value === 'inc') {
          tempAmount += 1;
          if (tempAmount > item.max) {
            tempAmount = item.max;
          }
          return { ...item, amount: tempAmount };
        }
        if (value === 'dec') {
          tempAmount -= 1;
          if (tempAmount < 1) {
            tempAmount = 1;
          }
          return { ...item, amount: tempAmount };
        }
      }
      return item;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART_ITEMS) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE_FROM_CART) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === CART_TOTALS) {
    const { total_amount, total_price } = state.cart.reduce(
      (acc, curr) => {
        const { amount, price } = curr;
        acc.total_amount += amount;
        acc.total_price += price * amount;
        return acc;
      },
      {
        total_amount: 0,
        total_price: 0,
      }
    );
    return { ...state, total_amount, total_price };
  }

  throw new Error(`no matching ${action.type} - action type`);
};

export default cart_reducer;
