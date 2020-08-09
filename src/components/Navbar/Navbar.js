import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar__link'>
        Delish
      </Link>
      <ul className='navbar__links'>
        <li>
          <NavLink
            exact
            to='/'
            className='navbar__link'
            activeClassName='navbar__link--active'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/menu'
            className='navbar__link'
            activeClassName='navbar__link--active'
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to='/blog'
            className='navbar__link'
            activeClassName='navbar__link--active'
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <Link to='/' className='navbar__link'>
        Sign up
      </Link>
    </nav>
  );
}
