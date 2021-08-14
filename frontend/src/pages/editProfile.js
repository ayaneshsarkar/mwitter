import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/posts';
import ProfileLayout from '../components/Profile/ProfileLayout';
import PostContainer from '../containers/Posts/PostContainer';

const MainApp = ({ getAllPosts, user, posts, status, location }) => {
  useEffect(() => getAllPosts(user.id), [getAllPosts, user.id]);
  
  return (
    <PostContainer user={user} location={location}>
      <ProfileLayout user={user} posts={posts} location={location} title={user.name} 
      status={status} link={'/edit-profile'} />
    </PostContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    status: state.auth.loggedIn,
    posts: Object.values(state.posts).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getAllPosts })(MainApp);