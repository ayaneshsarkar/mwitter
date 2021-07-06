import React from 'react';
import PostNav from '../components/Posts/Nav';
import Posts from '../components/Posts/Posts';
import PostWrapper from '../containers/Posts/PostWrapper';

const MainApp = () => {
  return (
    <PostWrapper>
      <PostNav />
      <Posts />
      <div className="fullVhHeight"></div>
    </PostWrapper>
  );
}

export default MainApp;