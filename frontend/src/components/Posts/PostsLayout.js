import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateMweet from './Main/CreateMweet';
import Main from '../../containers/Posts/Main';
import Mweets from './Main/Mweets';
import Mweet from './Main/Mweet';

const PostsLayout = ({ user, posts, post, comments, location, create }) => {
  const [postNavWidth, setPostNavWidth] = useState(0);
  const postNavRef = useRef(null);

  useEffect(() => setWidth(), []);

  const setWidth = () => {
    if(postNavRef && postNavRef.current && postNavRef.current.offsetWidth) {
      setPostNavWidth(postNavRef.current.offsetWidth);
    }
  }

  // (postNavWidth + 20)/10}rem

  return(
    <Main navRef={postNavRef}>
      <nav className="posts__main_nav" 
        style={{ width: postNavWidth }}
      >
        <Link to="/posts">Home</Link>
      </nav>

      { create ? <CreateMweet user={user} popUp={false} /> : ''}

      { posts && posts.length ? 
        <Mweets user={user} posts={posts} location={location} create={create} />
        : ''
      }

      {post ? <Mweet user={user} mweet={post} location={location} single={true} /> : ''}

      { comments && comments.length ?
        <Mweets user={user} posts={comments} location={location} create={true} comments={true} 
        /> : '' 
      }
    </Main>
  );
}

export default PostsLayout;