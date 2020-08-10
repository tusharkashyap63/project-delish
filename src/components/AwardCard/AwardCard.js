import React from 'react';
import './AwardCard.scss';

export default function AwardCard({ award }) {
  return (
    <div className='awardCard'>
      <div className='awardCard__icon'>{award.icon}</div>
      <h3 className='awardCard__title'>{award.title}</h3>
      <p className='awardCard__year'>{award.year}</p>
    </div>
  );
}
