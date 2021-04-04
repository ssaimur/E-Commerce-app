import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  UPDATE_FILTER,
  CLEAR_FILTER,
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((item) => item.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: action.payload,
      filtered_products: action.payload,
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRID_VIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LIST_VIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let sortedProducts = [];
    if (sort === 'price-lowest') {
      sortedProducts = filtered_products.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-highest') {
      sortedProducts = filtered_products.sort((a, b) => b.price - a.price);
    }
    if (sort === 'name-a') {
      sortedProducts = filtered_products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (sort === 'name-z') {
      sortedProducts = filtered_products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    return { ...state, filtered_products: sortedProducts };
  }

  if (action.type === UPDATE_FILTER) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((item) => {
        return item.name.toLowerCase().startsWith(text);
      });
    }
    if (category !== 'all') {
      tempProducts = tempProducts.filter((item) => {
        return item.category === category;
      });
    }
    if (company !== 'all') {
      tempProducts = tempProducts.filter((item) => {
        return item.company === company;
      });
    }
    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    tempProducts = tempProducts.filter((item) => item.price <= price);
    if (shipping === true) {
      tempProducts = tempProducts.filter((item) => {
        return item.shipping === true;
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type == CLEAR_FILTER) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  throw new Error(`No matching ${action.type} - action type`);
};

export default filter_reducer;
