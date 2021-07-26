import React from 'react';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import PostNav from '../../containers/Posts/PostNav';

const Nav = () => {
  return (
    <PostNav>
      <NavLogo />
      <NavMenu />
    </PostNav>
  );
}

export default Nav;