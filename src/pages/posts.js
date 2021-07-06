import React from 'react';
import PostNav from '../components/Posts/Nav';
import Main from '../containers/Posts';
import PostWrapper from '../containers/Posts/PostWrapper';

const Posts = () => {
  return (
    <PostWrapper>
      <PostNav />
      <Main></Main>
      <div className="fullVhHeight"></div>
    </PostWrapper>
  );
}

export default Posts;