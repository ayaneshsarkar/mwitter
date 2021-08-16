import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/posts';
import history from '../config/history';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const MainApp = ({ getAllPosts, user, posts, location, status }) => {
  useEffect(() => {
    if(status) {
      getAllPosts(user.id)
    }
  }, [getAllPosts, status, user.id]);

  if(!status) {
    history.push('/');
    return <></>;
  } else {
    return (
      <PostContainer user={user} location={location}>
        <PostsLayout user={user} posts={posts} location={location} create={true} />
      </PostContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    status: state.auth.loggedIn,
    posts: Object.values(state.posts).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getAllPosts })(MainApp);