import React from 'react';
import PostNav from '../../components/Posts/Nav';
import PostWrapper from './PostWrapper';

const PostContainer = props => {
  return (
    <PostWrapper>
      <PostNav />
      <main className="main">
        { props.children }
      </main>
      <div className="rest"></div>
    </PostWrapper>
  );
}

export default PostContainer;