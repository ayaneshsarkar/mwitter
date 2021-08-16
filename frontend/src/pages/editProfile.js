import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPostsByAuthor } from '../actions/posts';
import ProfileLayout from '../components/Profile/ProfileLayout';
import PostContainer from '../containers/Posts/PostContainer';

const MainApp = ({ getAllPostsByAuthor, user, posts, status, location }) => {
  console.log(user.id)
  useEffect(() => {
    if(user && user.id) {
      getAllPostsByAuthor(user.id);
    }
  }, [getAllPostsByAuthor, user, user.id]);

  if(user && user.id) {
    return (
      <PostContainer user={user} location={location}>
        <ProfileLayout user={user} posts={posts} location={location} title={user.name} 
        status={status} link={'/edit-profile'} currentUser={user} />
      </PostContainer>
    );
  } else {
    return <></>
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    status: state.auth.loggedIn,
    posts: Object.values(state.posts).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getAllPostsByAuthor })(MainApp);