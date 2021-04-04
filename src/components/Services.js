import React from 'react';
import './services.css';
import { services } from '../constants';

const Services = () => {
  return (
    <div className='services'>
      <article className='services-header'>
        <h3>
          custom furniture <br /> built only for you
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </article>
      <div className='services-content'>
        {services.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <article className='each-service' key={id}>
              <span>{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
