import React from 'react';
import Alert from '../../containers/Posts/Alert';
import ProfileCover from './ProfileCover';
import ProfileInfo from './ProfileInfo';

const EditProfile = ({ open, setClose, user, status }) => {
  return (
    <Alert open={open} setClose={setClose}>
      <div className="alert profile">
        <ProfileCover user={user} popUp={true} />
        <ProfileInfo user={user} status={status} popUp={true} />
      </div>
    </Alert>
  )
};

export default EditProfile;