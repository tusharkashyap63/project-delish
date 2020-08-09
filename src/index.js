import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DishProvider } from './DishContext';

ReactDOM.render(
  <DishProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DishProvider>,
  document.getElementById('root')
);
