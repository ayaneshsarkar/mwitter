import React, { useState, useEffect } from 'react';
import Alert from '../../../containers/Posts/Alert';
import AlertHeader from '../AlertHeader';
import MweetBox from './CreateMweet';

const MweetAlert = ({ open, setClose, user }) => {
  const [mweetClose, setMweetClose] = useState(false);

  useEffect(() => {
    const closeAlert = () => mweetClose ? setClose(false) : null;
    closeAlert();
  }, [mweetClose, setClose]);

  return (
    <Alert open={open} setClose={setClose} fullScreen={true}>
      <div className="alert mweetBox">
        <AlertHeader setClose={setClose} />
        <div className="posts__main">
          <MweetBox user={user} popUp={true} popUpClose={setMweetClose} />
        </div>
      </div>
    </Alert>
  );
}

export default MweetAlert;