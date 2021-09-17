import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from '../config/history';
import PostValidationAlert from '../alerts/PostValidationAlert';

const HomeNav = ({ status }) => {
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState('');

  const openAlert = (e, status) => {
    e.preventDefault();
    
    if(!status) {
      setError('You Have To Be Logged In To Visit This Page!');
      setAlert(true);
    } else {
      history.push('/posts');
    }
  }

  return (
    <nav className="navbar home">
      <div className="wrapper home nav">
        <Link className="home logo" to="/">
          Mwitter
        </Link>

        <ul className="nav__menu home">
          <li className="nav__menu_item">
            <Link className="nav__menu_item-link active" to="/">
              Home
            </Link>
          </li>

          <li className="nav__menu_item" >
            <Link className="nav__menu_item-link" to="/posts" 
            onClick={(e) => openAlert(e, status)}>
              Mweets
            </Link>
          </li>
        </ul>
      </div>

      <PostValidationAlert open={alert} setClose={setAlert} transition={true}
      home={true} error={error}  />
    </nav>
  );
}

export default HomeNav;