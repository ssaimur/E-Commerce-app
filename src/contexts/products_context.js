import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/products_reducer';
import { products_url } from '../constants';
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

const ProductsContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  productsError: false,
  featuredProducts: [],
  listOfProducts: [],
  isSingleLoading: false,
  singleProductError: false,
  singleProduct: {},
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: PRODUCT_INIT });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_FAILED });
    }
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: SINGLE_PRODUCT_INIT });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SINGLE_PRODUCT_FAILED });
    }
  };

  useEffect(() => {
    getProducts(products_url);
  }, []);

  const showSidebar = () => {
    dispatch({ type: SHOW_SIDEBAR });
  };
  const hideSidebar = () => {
    dispatch({ type: HIDE_SIDEBAR });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, showSidebar, hideSidebar, getSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
