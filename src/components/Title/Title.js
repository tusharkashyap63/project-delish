import React from 'react';
import './Title.scss';

export default function Title({ color, children }) {
  return (
    <h2 style={{ color: color }} className='title'>
      {children}
    </h2>
  );
}

Title.defaultProps = {
  color: 'var(--color-secondary)',
};
