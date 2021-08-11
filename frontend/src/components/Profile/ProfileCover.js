import React from 'react';
import Sprite from '../../assets/svg/feather-sprite.svg';

const ProfileCover = ({ user, popUp, coverRef, status, cover, setCover }) => {
  const coverImg = user.acf ? user.acf.cover.sizes.large : null;

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
          `linear-gradient(to right, rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0.7)), url(${cover ? URL.createObjectURL(cover) : (coverImg || '') })` 
        } :
        { backgroundImage: `url(${coverImg || ''})` }
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