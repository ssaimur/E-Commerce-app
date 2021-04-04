import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  PRODUCT_INIT,
  PRODUCT_SUCCESS,
  PRODUCT_FAILED,
  SINGLE_PRODUCT_INIT,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAILED,
} from '../actions';

const productsReducer = (state, action) => {
  if (action.type === SHOW_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === HIDE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  // fetching all products starts here

  if (action.type === PRODUCT_INIT) {
    return { ...state, isLoading: true };
  }
  if (action.type === PRODUCT_SUCCESS) {
    const featuredProducts = action.payload.filter(
      (item) => item.featured === true
    );
    return {
      ...state,
      isLoading: false,
      listOfProducts: action.payload,
      featuredProducts,
    };
  }
  if (action.type === PRODUCT_FAILED) {
    return { ...state, isLoading: false, productsError: true };
  }

  // fetching all products ends here

  // fetching single product starts here

  if (action.type === SINGLE_PRODUCT_INIT) {
    return { ...state, isSingleLoading: true };
  }
  if (action.type === SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      isSingleLoading: false,
      singleProduct: action.payload,
    };
  }
  if (action.type === SINGLE_PRODUCT_FAILED) {
    return { ...state, isSingleLoading: false, singleProductError: true };
  }

  // fetching single products ends here

  throw new Error(`No matching "${action.type}" - action type`);
};

export default productsReducer;
