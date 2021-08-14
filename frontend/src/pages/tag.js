import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsBySearch } from '../actions/posts';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const Tag = ({ getPostsBySearch, match, user, posts, location  }) => {
  useEffect(() => getPostsBySearch(match.params.tag, true, user.id), 
  [getPostsBySearch, match.params.tag, user.id]);
  
  return (
    <PostContainer user={user} location={location}>
      <PostsLayout user={user} posts={posts} location={location} 
      search={match.params.tag || ''} />
    </PostContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    posts: Object.values(state.searchResults).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getPostsBySearch })(Tag);