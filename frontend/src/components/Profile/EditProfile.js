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

        <form className="form profileForm" encType="multipart/form-data">
          <div className="form--box full-width">
            <input type="text" name="name" className="form--input profile" 
            placeholder="Full Name" value={user.name || ''} />
            <label htmlFor="name" className="form--label profile">Full Name</label>
          </div>

          <div className="form--box full-width">
            <textarea rows="3" type="text" name="bio" className="form--input profile" 
            placeholder="Bio" value={''} style={{ resize: 'none' }} />
            <label htmlFor="name" className="form--label profile">Bio</label>
          </div>

          <div className="form--box profileButton">
            <button className="form--button">Save</button>
          </div>
        </form>
      </div>
    </Alert>
  )
};

export default EditProfile;