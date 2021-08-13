import React from 'react';
import PostNav from '../../components/Posts/Nav';
import PostWrapper from './PostWrapper';
import Tags from '../../components/Posts/Tags';

const PostContainer = props => {
  return (
    <PostWrapper>
      <PostNav user={props.user} />
      <main className="main">
        { props.children }
      </main>
      <Tags />
    </PostWrapper>
  );
}

export default PostContainer;