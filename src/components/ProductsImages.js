import React, { useState } from 'react';
import './productsImages.css';

const ProductsImages = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <div className='main-image'>
      <img src={main.url} alt='' className='image' />
      <div className='gallery'>
        {images.map((item, index) => {
          return (
            <img
              key={index}
              src={item.url}
              className={`${main === item && 'img-active'}`}
              alt=''
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsImages;
