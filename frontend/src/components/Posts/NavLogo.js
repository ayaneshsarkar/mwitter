import React from 'react';
import { Link } from 'react-router-dom';
import Sprite from '../../assets/svg/feather-sprite.svg';

const NavLogo = () => {
  return (
    <Link to="/posts" className="posts__nav--logo">
      <svg className="posts__nav--logo-link">
        <use xlinkHref={`${Sprite}#twitter`}></use>
      </svg>
    </Link>
  );
}

export default NavLogo;