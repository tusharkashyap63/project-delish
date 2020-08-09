import React from 'react';
import './DishCard.scss';

export default function DishCard({ dish }) {
  return (
    <div className='dishCard'>
      <div className='dishCard__imgContainer'>
        <img src={dish.images[0]} alt={dish.name} className='dishCard__img' />
      </div>
      <div className='dishCard__content'>
        <h4 className='dishCard__name'>{dish.name}</h4>
        <p className='dishCard__serves'>Serves: {dish.serves}</p>
      </div>
    </div>
  );
}
