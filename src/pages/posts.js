import React from 'react';
import PostNav from '../components/Posts/Nav';
import Posts from '../components/Posts/Posts';
import PostWrapper from '../containers/Posts/PostWrapper';

const MainApp = () => {
  return (
    <PostWrapper>
      <PostNav />
      <main className="main">
        <Posts />
        <div className="rest"></div>
      </main>
    </PostWrapper>
  );
}

export default MainApp;