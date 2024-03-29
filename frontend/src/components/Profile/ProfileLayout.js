import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../Posts/BackButton';
import Main from '../../containers/Posts/Main';
import ProfileCover from './ProfileCover';
import ProfileInfo from './ProfileInfo';
import Mweets from '../Posts/Main/Mweets';

const ProfileLayout = ({ user, posts, location, status, title, link, currentUser }) => {
  const [postNavWidth, setPostNavWidth] = useState(0);
  const postNavRef = useRef(null);

  useEffect(() => setWidth());

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
        <BackButton />
        <Link to={link || "/posts"}>{ title || 'Home' }</Link>
      </nav>

      <div className="profile">
        <ProfileCover user={user} />
        <ProfileInfo user={user ? user : null} status={status} currentUser={currentUser} />
      </div>

      { posts && posts.length ? 
        <Mweets user={user} posts={posts} location={location} create={true} 
        profile={true} />
        : ''
      }
    </Main>
  );
}

export default ProfileLayout;