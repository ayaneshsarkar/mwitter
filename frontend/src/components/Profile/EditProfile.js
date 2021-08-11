import React, { useState, useRef, useEffect } from 'react';
import Alert from '../../containers/Posts/Alert';
import ProfileCover from './ProfileCover';
import ProfileInfo from './ProfileInfo';

const EditProfile = ({ open, setClose, user, status }) => {
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [titleChange, setTitleChange] = useState(false);
  const [bioChange, setBioChange] = useState(false);

  const avatarRef = useRef(null);
  const coverRef = useRef(null);

  const setChange = (e, callback, changeCallback = null) => {
    if(changeCallback) changeCallback(true);

    if(e.target.files && e.target.files.length) {
      callback(e.target.files[0]);
    } else {
      callback(e.target.value);
    }
  }

  useEffect(() => {
    console.log(avatar);
    console.log(cover);
  }, [avatar, cover]);

  return (
    <Alert open={open} setClose={setClose}>
      <div className="alert profile">
        <ProfileCover user={user} popUp={true} coverRef={coverRef} status={status} 
          cover={cover} setCover={setCover}
        />
        <ProfileInfo user={user} status={status} popUp={true} avatarRef={avatarRef} 
          avatarFile={avatar}
        />

        <form className="form profileForm" encType="multipart/form-data"
        onSubmit={(e) => e.preventDefault()} >
          <div className="form--box full-width">
            <input type="text" name="name" className="form--input profile" 
              placeholder="Full Name" 
              onChange={(e) => setChange(e, setTitle, setTitleChange)}
              value={titleChange ? title : user.name} 
            />
            <label htmlFor="name" className="form--label profile">Full Name</label>
          </div>

          <div className="form--box full-width">
            <textarea rows="3" type="text" name="bio" className="form--input profile" 
              placeholder="Bio" style={{ resize: 'none' }} 
              onChange={(e) => setChange(e, setBio, setBioChange)} 
              value={bioChange ? bio : user.acf.bio}
            />
            <label htmlFor="name" className="form--label profile">Bio</label>
          </div>

          <input type="file" name="avatar" hidden onChange={(e) => setChange(e, setAvatar)} 
          ref={avatarRef} />
          <input type="file" name="cover" hidden onChange={(e) => setChange(e, setCover)}  
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