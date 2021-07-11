import React from 'react';
import Avatar from '../../../../assets/img/avatar.jpg';

const ProfileAvatar = () => {
  return (
    <div className="createPost__profile">
      <div 
        className="createPost__profile--avatar"
        style={{ backgroundImage: `url(${Avatar})` }}
      ></div>
    </div>
  );
}

export default ProfileAvatar;