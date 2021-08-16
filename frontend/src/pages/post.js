import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSinglePost } from '../actions/posts';
import Head from '../containers/Head';
import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const MainApp = ({ getSinglePost, user, post, comments, location, match, status }) => {
  useEffect(() => {
    if(status) {
      getSinglePost(match.params.id, user.id);
    }
  }, [getSinglePost, match.params.id, status, user.id]);

  if(!status) {
    return <></>;
  } else {
    return (
      <>
        <Head title={'Mwitter / Mweet'} 
        description="This is Mwitter, social media of All Individuals." />

        <PostContainer user={user} location={location}>
          <PostsLayout user={user} post={post} location={location} create={false} 
          comments={comments} title={"Mweet"} link={post ? `/post/${post.id}` : ''} />
        </PostContainer>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    status: state.auth.loggedIn,
    post: state.posts[ownProps.match.params.id],
    comments: Object.values(state.comments).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getSinglePost })(MainApp);