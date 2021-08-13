import React from 'react';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import PostNav from '../../containers/Posts/PostNav';

const Nav = ({ user }) => {
  return (
    <PostNav>
      <NavLogo />
      <NavMenu user={user} />
    </PostNav>
  );
}

export default Nav;