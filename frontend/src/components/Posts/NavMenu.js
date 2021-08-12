import React from 'react';
import { Link } from 'react-router-dom';
import Sprite from '../../assets/svg/feather-sprite.svg';

const NavMenu = () => {
  return (
    <ul className="posts__nav_menu">
      <li className="posts__nav_menu--item active">
        <Link className="posts__nav_menu--item-link" to="/posts">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#home`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Home</p>
        </Link>
      </li>

      <li className="posts__nav_menu--item">
        <Link className="posts__nav_menu--item-link" to="/posts">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#hash`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Explore</p>
        </Link>
      </li>

      <li className="posts__nav_menu--item">
        <Link className="posts__nav_menu--item-link" to="/posts">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#bell`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Notifications</p>
        </Link>
      </li>

      <li className="posts__nav_menu--item">
        <Link className="posts__nav_menu--item-link" to="/edit-profile">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#user`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Profile</p>
        </Link>
      </li>

      <li className="posts__nav_menu--item tweet">
        <Link className="posts__nav_menu--item-link" to="/posts">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#edit-3`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Tweet</p>
        </Link>
      </li>

      <button className="posts__nav_menu--button">Mweet</button>
    </ul>
  );
}

export default NavMenu;