import React, { useState, useEffect } from 'react';
import Alert from '../../../containers/Posts/Alert';
import AlertHeader from '../AlertHeader';
import CommentBox from './CreateMweet';

const CommentAlert = ({ open, setClose, user, id, location }) => {
  const [commentClose, setCommentClose] = useState(false);

  useEffect(() => {
    const closeAlert = () => commentClose ? setClose(false) : null;
    closeAlert();
  }, [commentClose, setClose]);

  return (
    <Alert open={open} setClose={setClose} fullScreen={true}>
      <div className="alert commentBox">
        <AlertHeader setClose={setClose} />
        <div className="posts__main">
          <CommentBox user={user} popUp={true} comment={true} id={id} 
          popUpClose={setCommentClose} location={location.pathname} />
        </div>
      </div>
    </Alert>
  );
}

export default CommentAlert;