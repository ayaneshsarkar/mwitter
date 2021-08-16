import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsBySearch } from '../actions/posts';
import history from '../config/history';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const Search = ({ getPostsBySearch, match, user, posts, location, status }) => {
  useEffect(() => {
    if(status) {
      getPostsBySearch(match.params.term, user.id);
    }
  }, 
  [getPostsBySearch, match.params.term, user.id, status]);

  if(!status) {
    history.push('/');
    return <></>;
  } else {
    return (
      <PostContainer user={user} location={location}>
        <PostsLayout search={match.params.term || ''} user={user} posts={posts} 
        location={location} />
      </PostContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    status: state.auth.loggedIn,
    posts: Object.values(state.searchResults).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getPostsBySearch })(Search);