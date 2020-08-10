import React, { useState } from 'react';
import Title from '../Title/Title';
import './Footer.scss';
import { FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className='footer'>
      <Title color='var(--color-text)'>Register for Updates</Title>
      <form
        className='footer__form'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className='footer__input'
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='EMAIL'
        />
        <button className='footer__button' type='submit'>
          <FaArrowRight />
        </button>
      </form>
    </footer>
  );
}
