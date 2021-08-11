import React from 'react';

const ProfileCover = ({ user, popUp }) => {
  const avatar = user.acf ? user.acf.avatar.sizes.cover : null;
  
  return (
    <div className={`profile__cover${popUp ? ' popUp' : ''}`} 
      style={{ backgroundImage: `url(${avatar || ''})` }}
    >
    </div>
  );
}

export default ProfileCover;