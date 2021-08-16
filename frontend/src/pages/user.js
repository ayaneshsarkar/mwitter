import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSingleUser } from '../actions/auth';
import { getAllPostsByAuthor } from '../actions/posts';
import Head from '../containers/Head';
import ProfileLayout from '../components/Profile/ProfileLayout';
import PostContainer from '../containers/Posts/PostContainer';

const MainApp = ({ 
  getSingleUser, getAllPostsByAuthor, user, posts, status, location, match, currentUser 
}) => {

  useEffect(() => {
    if(status) {
      getSingleUser(match.params.id);
      getAllPostsByAuthor(match.params.id);
    }
  }, [getAllPostsByAuthor, getSingleUser, match.params.id, status]);
  
  if(user) {
    return (
      <>
        <Head title={'Mwitter / User'} 
        description="This is Mwitter, social media of All Individuals." />

        <PostContainer user={user} location={location}>
          <ProfileLayout user={user} posts={posts} location={location} title={user.name} 
          status={status} link={'/edit-profile'} currentUser={currentUser} />
        </PostContainer>
      </>
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