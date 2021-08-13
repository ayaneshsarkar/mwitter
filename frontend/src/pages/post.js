import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSinglePost } from '../actions/posts';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const MainApp = ({ getSinglePost, user, post, comments, location, match }) => {
  useEffect(() => getSinglePost(match.params.id), [getSinglePost, match.params.id]);

  return (
    <PostContainer user={user}>
      <PostsLayout user={user} post={post} location={location} create={false} 
      comments={comments} title={"Mweet"} link={post ? `/post/${post.id}` : ''} />
    </PostContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    post: state.posts[ownProps.match.params.id],
    comments: Object.values(state.comments).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getSinglePost })(MainApp);