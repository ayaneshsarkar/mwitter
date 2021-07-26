import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/posts';
import PostNav from '../components/Posts/Nav';
import PostsLayout from '../components/Posts/PostsLayout';
import PostWrapper from '../containers/Posts/PostWrapper';

const MainApp = ({ getAllPosts, user, posts, location }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllPosts(), []);
  
  return (
    <PostWrapper>
      <PostNav />
      <main className="main">
        <PostsLayout user={user} posts={posts} location={location} />
        <div className="rest"></div>
      </main>
    </PostWrapper>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    posts: Object.values(state.posts).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getAllPosts })(MainApp);