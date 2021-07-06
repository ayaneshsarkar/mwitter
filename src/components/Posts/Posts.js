import React from 'react';
import CreatePost from './Main/CreatePost';
import Main from '../../containers/Posts/Main';

const Posts = () => {
  return(
    <Main>
      <nav className="posts__main_nav">Home</nav>
      <CreatePost />
    </Main>
  );
}

export default Posts;