import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <nav className="navbar home">
      <div className="wrapper home nav">
        <Link className="home logo" to="/">
          Octa Posts
        </Link>

        <ul className="nav__menu home">
          <li className="nav__menu_item">
            <Link className="nav__menu_item-link" to="/">
              About
            </Link>
          </li>

          <li className="nav__menu_item">
            <Link className="nav__menu_item-link" to="/">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNav;