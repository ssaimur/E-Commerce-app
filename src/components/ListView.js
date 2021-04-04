import React from 'react';
import './listView.css';
import { formatPrice } from '../helper';
import { Link } from 'react-router-dom';

const ListView = ({ products }) => {
  return (
    <div className='list-view'>
      {products.map((item) => {
        const { id, image, name, price, description } = item;
        return (
          <article className='each-item' key={id}>
            <img src={image} alt={name} />
            <div className='details'>
              <h4>{name}</h4>
              <h5>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`products/${id}`}>Details</Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
