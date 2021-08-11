import React from 'react';

const ProfileCover = ({ user, popUp, coverRef }) => {
  const avatar = user.acf ? user.acf.avatar.sizes.cover : null;

  const clickCover = () => {
    if(popUp && coverRef) {
      coverRef.current.click();
    }
  }
  
  return (
    <div className={`profile__cover${popUp ? ' popUp' : ''}`} 
      style={{ backgroundImage: `url(${avatar || ''})` }}
      onClick={clickCover}
    >
    </div>
  );
}

export default ProfileCover;