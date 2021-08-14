import React from 'react';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import PostNav from '../../containers/Posts/PostNav';

const Nav = ({ user, location }) => {
  return (
    <PostNav>
      <NavLogo />
      <NavMenu user={user} location={location} />
    </PostNav>
  );
}

export default Nav;