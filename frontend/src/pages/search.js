import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsBySearch } from '../actions/posts';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const Search = ({ getPostsBySearch, match, user, posts, location  }) => {
  useEffect(() => getPostsBySearch(match.params.term), [getPostsBySearch, match.params.term]);
  
  return (
    <PostContainer user={user}>
      <PostsLayout user={user} posts={posts} location={location} />
    </PostContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    posts: Object.values(state.searchResults).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getPostsBySearch })(Search);