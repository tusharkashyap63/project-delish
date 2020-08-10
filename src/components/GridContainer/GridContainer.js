import React from 'react';
import './GridContainer.scss';

export default function GridContainer(props) {
  return <div className='gridContainer'>{props.children}</div>;
}
