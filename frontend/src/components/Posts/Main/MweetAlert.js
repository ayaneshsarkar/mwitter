import React from 'react';
import Alert from '../../../containers/Posts/Alert';
import MweetBox from './CreateMweet';

const MweetAlert = ({ open, setClose, user }) => {
  return (
    <Alert open={open} setClose={setClose}>
      <div className="alert mweetBox">
        <div className="posts__main">
          <MweetBox user={user} popUp={true} />
        </div>
      </div>
    </Alert>
  );
}

export default MweetAlert;