import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <h3 className='contact-title'>Join our newsletter and get 20% off</h3>
      <div className='contact-body'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          pariatur porro aut iste obcaecati ipsa totam animi excepturi dicta
          laboriosam?
        </p>
        <form className='contact-form'>
          <input
            type='email'
            className='contact-form-input'
            placeholder='Enter your email'
          />
          <button type='submit' className='contact-form-submit'>
            subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
