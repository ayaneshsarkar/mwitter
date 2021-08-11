import React, { useState, useRef } from 'react';
import Alert from '../../containers/Posts/Alert';
import ProfileCover from './ProfileCover';
import ProfileInfo from './ProfileInfo';

const EditProfile = ({ open, setClose, user, status }) => {
  const [, setAvatar] = useState(null);
  const [, setCover] = useState(null);

  const avatarRef = useRef(null);
  const coverRef = useRef(null);

  const setFile = (e, callback) => callback(e.target.files[0]);

  return (
    <Alert open={open} setClose={setClose}>
      <div className="alert profile">
        <ProfileCover user={user} popUp={true} coverRef={coverRef} />
        <ProfileInfo user={user} status={status} popUp={true} avatarRef={avatarRef} />

        <form className="form profileForm" encType="multipart/form-data"
        onSubmit={(e) => e.preventDefault()} >
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

          <input type="file" name="avatar" hidden onChange={(e) => setFile(e, setAvatar)} 
          ref={avatarRef} />
          <input type="file" name="cover" hidden onChange={(e) => setFile(e, setCover)}  
          ref={coverRef} />

          <div className="form--box profileButton">
            <button type="submit" className="form--button profile">Save</button>
          </div>
        </form>
      </div>
    </Alert>
  )
};

export default EditProfile;