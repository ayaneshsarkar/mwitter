import React from 'react';
import Alert from '../../../containers/Posts/Alert';
import CommentBox from './CreateMweet';

const CommentAlert = ({ open, setClose, user, id }) => {
  return (
    <Alert open={open} setClose={setClose}>
      <div className="alert commentBox">
        <div className="posts__main">
          <CommentBox user={user} popUp={true} comment={true} id={id} />
        </div>
      </div>
    </Alert>
  );
}

export default CommentAlert;