import React, { useEffect, useReducer, useContext } from 'react';
import reducer from '../reducers/filter_reducer';
import { useProductsContext } from './products_context';
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

const FilterContext = React.createContext();
const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { listOfProducts } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: listOfProducts });
  }, [listOfProducts]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTER, payload: { name, value } });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilter,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
