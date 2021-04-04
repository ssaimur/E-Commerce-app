import React from 'react';
import './sort.css';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../contexts/filter_context';

const Sort = () => {
  const {
    setGridView,
    setListView,
    grid_view,
    filtered_products,
    updateSort,
    sort,
  } = useFilterContext();
  console.log(sort);
  return (
    <div className='sorting'>
      <div className='btn-container'>
        <button className={`${grid_view && 'active'}`} onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button className={`${!grid_view && 'active'}`} onClick={setListView}>
          <BsList />
        </button>
      </div>
      <p className='text-container'>
        {filtered_products.length} products found
      </p>
      <hr />
      <form className='form-container'>
        <label htmlFor='sort'>sort by </label>
        <select name='sort' id='sort' value={sort} onChange={updateSort}>
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z -a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
