import React from 'react';

const PostWrapper = props => {
  return (
    <div className="posts">
      { props.children }
    </div>
  );
}

export default PostWrapper;