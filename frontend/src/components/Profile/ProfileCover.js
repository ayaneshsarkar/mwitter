import React from 'react';
import Sprite from '../../assets/svg/feather-sprite.svg';

const ProfileCover = ({ user, popUp, coverRef, status, cover, setCover }) => {
  const avatar = user.acf ? user.acf.avatar.sizes.cover : null;

  const clickCover = () => {
    if(popUp && coverRef) {
      coverRef.current.click();
    }
  }
  
  return (
    <div className={`profile__cover${popUp ? ' popUp' : ''}`} 
      style=
      {(cover) ? 
        { backgroundImage: 
          `linear-gradient(to right, rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0.7)), url(${cover ? URL.createObjectURL(cover) : (avatar || '') })` 
        } :
        { backgroundImage: `url(${avatar || ''})` }
      }
    >
      {(popUp && status) && <div className="clickIconContainer">
        <div className="clickIconBox" onClick={clickCover}>
          <svg className="clickIcon">
            <use xlinkHref={`${Sprite}#camera`}></use>
          </svg>
        </div>

        <div className="clickIconBox" onClick={() => setCover(null)}>
          <svg className="clickIcon">
            <use xlinkHref={`${Sprite}#x`}></use>
          </svg>
        </div>
      </div>}
    </div>
  );
}

export default ProfileCover;