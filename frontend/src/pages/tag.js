import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsBySearch } from '../actions/posts';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const Tag = ({ getPostsBySearch, match, user, posts, location  }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getPostsBySearch(match.params.tag, true), []);
  
  return (
    <PostContainer>
      <PostsLayout user={user} posts={posts} location={location} />
    </PostContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    posts: Object.values(state.posts).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getPostsBySearch })(Tag);