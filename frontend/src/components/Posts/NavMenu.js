import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MweetAlert from './Main/MweetAlert';
import Sprite from '../../assets/svg/feather-sprite.svg';

const NavMenu = ({ user }) => {
  const [alert, setAlert] = useState(false);

  const openAlert = () => setAlert(true);

  return (
    <ul className="posts__nav_menu">
      {/* Home */}
      <li className="posts__nav_menu--item active">
        <Link className="posts__nav_menu--item-link" to="/posts">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#home`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Home</p>
        </Link>
      </li>

      {/* Explore */}
      <li className="posts__nav_menu--item">
        <Link className="posts__nav_menu--item-link" to="/explore">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#hash`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Explore</p>
        </Link>
      </li>

      {/* Notifications */}
      <li className="posts__nav_menu--item">
        <Link className="posts__nav_menu--item-link" to="/posts">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#bell`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Notifications</p>
        </Link>
      </li>

      {/* Edit Profile */}
      <li className="posts__nav_menu--item">
        <Link className="posts__nav_menu--item-link" to="/edit-profile">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#user`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Profile</p>
        </Link>
      </li>

      {/* Create Mweet */}
      <li className="posts__nav_menu--item tweet" onClick={openAlert}>
        <Link className="posts__nav_menu--item-link" to="/posts">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#edit-3`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Tweet</p>
        </Link>
      </li>

      <button onClick={openAlert} className="posts__nav_menu--button">Mweet</button>

      <MweetAlert open={alert} setClose={setAlert} user={user} />
    </ul>
  );
}

export default NavMenu;