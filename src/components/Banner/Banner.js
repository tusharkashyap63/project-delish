import React from 'react';
import './Banner.scss';

export default function Banner({ title, subtitle, dark }) {
  return (
    <div className='banner'>
      <h1
        className={dark ? 'banner__title banner__title--dark' : 'banner__title'}
      >
        {title}
      </h1>
      <p className='banner__subtitle'>{subtitle}</p>
    </div>
  );
}
