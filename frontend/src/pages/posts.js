import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/posts';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const MainApp = ({ getAllPosts, user, posts, location }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllPosts(), []);
  
  return (
    <PostContainer>
      <PostsLayout user={user} posts={posts} location={location} create={true} />
    </PostContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    posts: Object.values(state.posts).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getAllPosts })(MainApp);