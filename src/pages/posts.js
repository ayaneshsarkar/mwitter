import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/posts';
import PostNav from '../components/Posts/Nav';
import PostsLayout from '../components/Posts/PostsLayout';
import PostWrapper from '../containers/Posts/PostWrapper';

const MainApp = ({ getAllPosts, user, posts }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllPosts(), []);
  
  return (
    <PostWrapper>
      <PostNav />
      <main className="main">
        <PostsLayout user={user} posts={posts} />
        <div className="rest"></div>
      </main>
    </PostWrapper>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    posts: Object.keys(state.posts)
  }
}

export default connect(mapStateToProps, { getAllPosts })(MainApp);