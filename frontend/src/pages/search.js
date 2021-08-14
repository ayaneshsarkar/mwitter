import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsBySearch } from '../actions/posts';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const Search = ({ getPostsBySearch, match, user, posts, location  }) => {
  useEffect(() => getPostsBySearch(match.params.term, user.id), 
  [getPostsBySearch, match.params.term, user.id]);
  
  return (
    <PostContainer user={user} location={location}>
      <PostsLayout search={match.params.term || ''} user={user} posts={posts} 
      location={location} />
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