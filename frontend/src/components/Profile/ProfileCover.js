import React from 'react';

const ProfileCover = ({ user }) => {
  const avatar = user.acf ? user.acf.avatar.sizes.cover : null;
  
  return (
    <div className="profile__cover" style={{ backgroundImage: `url(${avatar || ''})` }}></div>
  );
}

export default ProfileCover;