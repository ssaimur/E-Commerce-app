import React from 'react';
import './intro.css';
import { Link } from 'react-router-dom';
import introBcg from '../images/hero-bcg.jpeg';
import introBcg2 from '../images/hero-bcg-2.jpeg';

const Intro = () => {
  return (
    <section className='intro'>
      <article className='title'>
        <h1>
          Design your <br />
          own comfort
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut natus
          totam voluptate eum maiores dolore corrupti? Consequuntur doloribus
          similique, distinctio et nisi consequatur, sunt animi in quos ducimus
          eius laborum..
        </p>
        <Link to='/products'>start shopping</Link>
      </article>
      <article className='show-off-images'>
        <img src={introBcg} className='main-image' alt='main image' />
        <img
          src={introBcg2}
          className='secondary-image'
          alt='secondary image'
        />
      </article>
    </section>
  );
};

export default Intro;
