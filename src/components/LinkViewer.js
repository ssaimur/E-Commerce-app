import React from 'react';
import './linkViewer.css';
import { Link } from 'react-router-dom';

const LinkViewer = ({ title, check }) => {
  return (
    <div className='link-viewer'>
      <h3>
        <Link to='/'>home</Link>
        {check && <Link to='/products'> / Products</Link>} / {title}
      </h3>
    </div>
  );
};

export default LinkViewer;
