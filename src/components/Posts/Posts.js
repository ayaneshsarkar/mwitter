import React from 'react';
import { Link } from 'react-router-dom';
import CreateMweet from './Main/CreateMweet';
import Main from '../../containers/Posts/Main';
import AllPosts from './Main/Mweets';

const Posts = () => {
  return(
    <Main>
      <nav className="posts__main_nav">
        <Link to="/posts">Home</Link>
      </nav>
      <CreateMweet />
      <AllPosts />
    </Main>
  );
}

export default Posts;