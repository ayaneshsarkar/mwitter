import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsBySearch } from '../actions/posts';
import Head from '../containers/Head';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const Tag = ({ getPostsBySearch, match, user, posts, location, status }) => {
  useEffect(() => {
    if(status) {
      getPostsBySearch(match.params.tag, true, user.id)
    }
  }, [getPostsBySearch, match.params.tag, status, user.id]);

  if(!status) {
    return <></>;
  } else {
    return (
      <>
        <Head title={'Mwitter / Search'} 
        description="This is Mwitter, social media of All Individuals." />
        
        <PostContainer user={user} location={location}>
          <PostsLayout user={user} posts={posts} location={location} 
          search={match.params.tag || ''} />
        </PostContainer>
      </>
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

export default connect(mapStateToProps, { getPostsBySearch })(Tag);