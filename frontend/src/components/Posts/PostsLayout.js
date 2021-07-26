import React from 'react';
import { Link } from 'react-router-dom';
import CreateMweet from './Main/CreateMweet';
import Main from '../../containers/Posts/Main';
import Mweets from './Main/Mweets';

const PostsLayout = ({ user, posts, location }) => {
  return(
    <Main>
      <nav className="posts__main_nav">
        <Link to="/posts">Home</Link>
      </nav>
      <CreateMweet user={user} posts={posts} />
      <Mweets user={user} posts={posts} location={location} />
    </Main>
  );
}

export default PostsLayout;