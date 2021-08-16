import React, { useState, useEffect } from 'react';

const ProfileAvatar = ({ user }) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => getAvatar(user), [user]);

  const getAvatar = (user) => {
    if(user && user.acf && user.acf.avatar) {
      setAvatar(user.acf.avatar.sizes.large);
    }
  }


  return (
    <div className="createPost__profile">
      {(user && user.acf && avatar) && <div 
        className="createPost__profile--avatar"
        style={{ 
          backgroundImage: `url(${avatar ? user.acf.avatar.sizes.large : ''})` 
        }}
      ></div>}
    </div>
  );
}

export default ProfileAvatar;