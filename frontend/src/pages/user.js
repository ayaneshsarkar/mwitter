import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSingleUser } from '../actions/auth';
import { getAllPostsByAuthor } from '../actions/posts';
import ProfileLayout from '../components/Profile/ProfileLayout';
import PostContainer from '../containers/Posts/PostContainer';

const MainApp = ({ 
  getSingleUser, getAllPostsByAuthor, user, posts, status, location, match, currentUser 
}) => {

  useEffect(() => {
    getSingleUser(match.params.id);
    getAllPostsByAuthor(match.params.id);
  }, [getAllPostsByAuthor, getSingleUser, match.params.id]);
  
  if(user) {
    return (
      <PostContainer user={user} location={location}>
        <ProfileLayout user={user} posts={posts} location={location} title={user.name} 
        status={status} link={'/edit-profile'} currentUser={currentUser} />
      </PostContainer>
    );
  } else {
    return <></>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.singleUser.user,
    currentUser: state.auth.user,
    status: state.auth.loggedIn,
    posts: Object.values(state.posts).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getSingleUser, getAllPostsByAuthor })(MainApp);