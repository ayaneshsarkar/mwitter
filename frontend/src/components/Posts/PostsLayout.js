import React from 'react';
import { Link } from 'react-router-dom';
import CreateMweet from './Main/CreateMweet';
import Main from '../../containers/Posts/Main';
import Mweets from './Main/Mweets';
import Mweet from './Main/Mweet';

const PostsLayout = ({ user, posts, post, location, create }) => {
  return(
    <Main>
      <nav className="posts__main_nav">
        <Link to="/posts">Home</Link>
      </nav>

      { create ? <CreateMweet user={user} popUp={false} /> : ''}

      { posts && posts.length ? 
        <Mweets user={user} posts={posts} location={location} create={create} />
        : ''
      }

      {post ? <Mweet user={user} mweet={post} location={location} single={true} /> : ''}
    </Main>
  );
}

export default PostsLayout;