import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/auth';
import MweetAlert from './Main/MweetAlert';
import Sprite from '../../assets/svg/feather-sprite.svg';

const NavMenu = ({ user, location, logoutUser }) => {
  const [alert, setAlert] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  const openAlert = () => setAlert(true);
  
  const homeNav = () => location.pathname.includes('post') ? ' active' : '';
  const exploreNav = () => location.pathname === '/explore' ? ' active' : '';
  const profileNav = () => location.pathname === '/edit-profile' ? ' active' : '';

  return (
    <ul className="posts__nav_menu">
      {/* Home */}
      <li className={`posts__nav_menu--item${homeNav()}`}>
        <Link className="posts__nav_menu--item-link" to="/posts">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#home`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Home</p>
        </Link>
      </li>

      {/* Explore */}
      <li className={`posts__nav_menu--item${exploreNav()}`}>
        <Link className="posts__nav_menu--item-link" to="/explore">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#hash`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Explore</p>
        </Link>
      </li>


      {/* Edit Profile */}
      <li className={`posts__nav_menu--item${profileNav()}`}>
        <Link className="posts__nav_menu--item-link" to="/edit-profile">
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#user`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Profile</p>
        </Link>
      </li>

      {/* Notifications */}
      <li className="posts__nav_menu--item">
        <Link className="posts__nav_menu--item-link" to="/posts" 
          onClick={(e) => logout(e)} >
          <svg className="posts__nav_menu--item-link icon right-margin">
            <use xlinkHref={`${Sprite}#power`}></use>
          </svg>

          <p className="posts__nav_menu--item-link text">Logout</p>
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

export default connect(null, { logoutUser })(NavMenu);