import React from 'react';

const ProfileAvatar = ({ user }) => {
  // Check If User Exists
  const checkUser = (user) => Object.keys(user).length;

  return (
    <div className="createPost__profile">
      <div 
        className="createPost__profile--avatar"
        style={{ 
          backgroundImage: `url(${checkUser(user) ? user.acf.avatar.sizes.large : ''})` 
        }}
      ></div>
    </div>
  );
}

export default ProfileAvatar;