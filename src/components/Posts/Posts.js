import React from 'react';
import CreatePost from './Main/CreatePost';
import Main from '../../containers/Posts/Main';
import AllPosts from './Main/Posts';

const Posts = () => {
  return(
    <Main>
      <nav className="posts__main_nav">Home</nav>
      <CreatePost />
      <AllPosts />
    </Main>
  );
}

export default Posts;