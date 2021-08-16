import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <nav className="navbar home">
      <div className="wrapper home nav">
        <Link className="home logo" to="/">
          Mwitter
        </Link>

        <ul className="nav__menu home">
          <li className="nav__menu_item">
            <Link className="nav__menu_item-link" to="/">
              About
            </Link>
          </li>

          <li className="nav__menu_item">
            <Link className="nav__menu_item-link" to="/posts">
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNav;