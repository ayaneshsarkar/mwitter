import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSinglePost } from '../actions/posts';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const MainApp = ({ getSinglePost, user, post, location, match }) => {
  useEffect(() => getSinglePost(match.params.id), [getSinglePost, match.params.id]);
  
  return (
    <PostContainer>
      <PostsLayout user={user} post={post} location={location} create={false} />
    </PostContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    post: Object.values(state.posts).sort((a, b) => b.id - a.id)[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { getSinglePost })(MainApp);