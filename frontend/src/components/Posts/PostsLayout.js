import React from 'react';
import { Link } from 'react-router-dom';
import CreateMweet from './Main/CreateMweet';
import Main from '../../containers/Posts/Main';
import Mweets from './Main/Mweets';

const PostsLayout = ({ user, posts, location, create }) => {
  return(
    <Main>
      <nav className="posts__main_nav">
        <Link to="/posts">Home</Link>
      </nav>
      { create ? <CreateMweet user={user} popUp={false} /> : ''}
      <Mweets user={user} posts={posts} location={location} create={create} />
    </Main>
  );
}

export default PostsLayout;