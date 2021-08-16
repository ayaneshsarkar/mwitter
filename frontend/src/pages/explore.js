import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllTags } from '../actions/tags';
import history from '../config/history';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const MainApp = ({ getAllTags, user, status, tags, location }) => {
  useEffect(() => {
    if(status) {
      getAllTags();
    }
  }, [getAllTags, status]);

  if(!status) {
    history.push('/');
    return <></>;
  } else {
    return (
      <PostContainer user={user} location={location}>
        <PostsLayout user={user} create={false} tags={tags} location={location} status={status} 
         title={'Explore'} link={'/explore'} />
      </PostContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    status: state.auth.loggedIn,
    tags: Object.values(state.tags)
  }
}

export default connect(mapStateToProps, { getAllTags })(MainApp);