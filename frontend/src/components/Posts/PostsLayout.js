import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import CreateMweet from './Main/CreateMweet';
import Main from '../../containers/Posts/Main';
import Mweets from './Main/Mweets';
import Mweet from './Main/Mweet';
import TagList from './Tags/TagList';

const PostsLayout = (
  { user, title, posts, post, comments, location, create, tags, search, link }
) => {
  const [postNavWidth, setPostNavWidth] = useState(0);
  const postNavRef = useRef(null);

  useEffect(() => {
    const setWidth = () => {
      if(postNavRef && postNavRef.current && postNavRef.current.offsetWidth) {
        setPostNavWidth(postNavRef.current.offsetWidth);
      }
    }

    setWidth();
  }, []);

  // (postNavWidth + 20)/10}rem

  return(
    <Main navRef={postNavRef}>
      <nav className="posts__main_nav" 
        style={{ width: postNavWidth }}
      >
        {(location.pathname !== '/posts') ? <BackButton /> : ''}
        <Link to={link || "/posts"}>{ title || 'Home' }</Link>
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

      {tags ?
        <TagList tags={tags} postTags={true} /> 
        : ''
      }
    </Main>
  );
}

export default PostsLayout;