import React from 'react';
import './Hero.scss';

export default function Hero({ hero, children }) {
  return <div className={hero}>{children}</div>;
}

Hero.defaultProps = {
  hero: 'default-hero',
};
