import React from 'react';
import { Link } from 'react-router-dom';
import '../../blocks/header/header.css';

function Nav({ loggedIn, email, handleLogout }) {
  return (
    <>
      {loggedIn && (
        <ul className='header__nav'>
          <li className='header__nav-email'>{email}</li>
          <li>
            <Link className='header__nav-logout' onClick={handleLogout} to='/signin'>
              Log out
            </Link>
          </li>
        </ul>)}
    </>
  );
}

export default Nav;