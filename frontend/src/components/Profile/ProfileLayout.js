import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../../containers/Posts/Main';
import ProfileCover from './ProfileCover';
import ProfileInfo from './ProfileInfo';
// import Mweets from './Main/Mweets';

const ProfileLayout = ({ user, posts, location, status, title }) => {
  return(
    <Main>
      <nav className="posts__main_nav">
        <Link to="/posts">{ title || 'Home' }</Link>
      </nav>

      <div className="profile">
        <ProfileCover user={user} />
        <ProfileInfo user={user ? user : null} status={status} />
      </div>

      {/* { posts && posts.length ? 
        <Mweets user={user} posts={posts} location={location} create={false} />
        : ''
      } */}
    </Main>
  );
}

export default ProfileLayout;