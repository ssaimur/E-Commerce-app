import React from 'react';
import './rating.css';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className='stars-comp'>
      <div>{tempStars}</div>
      <p>({reviews} customer reviews)</p>
    </div>
  );
};

export default Rating;
