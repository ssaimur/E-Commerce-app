import React from 'react';
import './filters.css';
import { getUnique } from '../helper';
import { useFilterContext } from '../contexts/filter_context';
import { FaCheck } from 'react-icons/fa';
import { formatPrice } from '../helper';

const Filters = () => {
  const {
    all_products,
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilter,
    clearFilter,
  } = useFilterContext();

  const categories = getUnique(all_products, 'category');
  const companies = getUnique(all_products, 'company');
  const colors = getUnique(all_products, 'colors');
  return (
    <div className='fitlers'>
      <form className='form-control' onSubmit={(e) => e.preventDefault()}>
        {/* search starts here */}
        <div className='form-search form-item'>
          <input
            type='text'
            placeholder='search'
            name='text'
            value={text}
            onChange={updateFilter}
          />
        </div>
        {/* start ends here */}
        <div className='form-under'>
          {/* category starts here */}
          <div className='form-category form-item'>
            <h5>category</h5>
            <div className='categories'>
              {categories.map((item, index) => {
                return (
                  <button
                    className={`${category === item && 'active'}`}
                    key={index}
                    onClick={updateFilter}
                    name='category'
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          {/* category ends here */}
          <div className='secondary-div'>
            {/* company starts here */}
            <div className='form-company form-item'>
              <h5>company</h5>
              <div className='companies'>
                <select name='company' id='company' onChange={updateFilter}>
                  {companies.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* company ends here */}

            {/* color starts here */}
            <div className='form-color form-item'>
              <h5>colors</h5>
              <div className='colors'>
                {colors.map((item, index) => {
                  if (item === 'all') {
                    return (
                      <button
                        className={`${color === 'all' ? 'all active' : 'all'}`}
                        key={index}
                        onClick={updateFilter}
                        data-color='all'
                        name='color'
                      >
                        all
                      </button>
                    );
                  }
                  return (
                    <button
                      className={` ${
                        color === item ? 'color active' : 'color'
                      }`}
                      key={index}
                      style={{ background: item }}
                      data-color={item}
                      onClick={updateFilter}
                      name='color'
                    >
                      {color === item && <FaCheck />}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* color ends here */}

            {/* price starts here */}
            <div className='form-price form-item'>
              <h5>price</h5>
              <p className='price'>{formatPrice(price)}</p>
              <input
                type='range'
                name='price'
                min={min_price}
                max={max_price}
                value={price}
                onChange={updateFilter}
              />
            </div>
            {/* price ends here */}

            {/* checkbox starts here */}
            <div className='form-shipping form-item'>
              <label htmlFor='shipping'>free shipping</label>
              <input
                type='checkbox'
                name='shipping'
                id='shipping'
                checked={shipping}
                onClick={updateFilter}
              />
            </div>
            {/* checkbox ends here */}
          </div>
        </div>
      </form>
      <button className='clear' onClick={clearFilter}>
        clear filters
      </button>
    </div>
  );
};

export default Filters;
