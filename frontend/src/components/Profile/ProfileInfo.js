import React, { useState, useEffect } from "react";
import EditProfile from "./EditProfile";
import Sprite from '../../assets/svg/feather-sprite.svg';

const ProfileInfo = ({ user, status, popUp, avatarRef, avatarFile }) => {
  const [editAlert, setEditAlert] = useState(false);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const getAcf = () => {
      if(user.acf && user.acf.avatar && user.acf.avatar.sizes.large) {
        setAvatar(user.acf.avatar.sizes.large);
      }
    }

    getAcf();
  }, [user.acf]);

  const clickAvatar = () => {
    if(popUp && avatarRef) {
      avatarRef.current.click();
    }
  }

  return (
    <div className={`profile__container${popUp ? ' popUp' : ''}`}>
      <div className="profile__media">
        <div className="profile__avatar" 
        style={!popUp ? 
          { backgroundImage: `url(${avatar || null})` } :
          { backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 65%, rgba(0, 0, 0, 0.7)), url(${avatarFile ? URL.createObjectURL(avatarFile) : (avatar || null)})` }
        }>
          {popUp && <div className="clickIconBox" onClick={clickAvatar}>
            <svg className="clickIcon">
              <use xlinkHref={`${Sprite}#camera`}></use>
            </svg>
          </div>}
        </div>

        { (status && !popUp) &&
          <>
            <button className="profile__button" onClick={() => setEditAlert(true)}>
              Edit Profile
            </button>
            <EditProfile open={editAlert} setClose={setEditAlert} user={user} status={status} />
          </>
        }
      </div>

      {!popUp && <div className="profile__maininfo">
        <div className="profile__maininfo--user">
          <span className="profile__name">{ user ? user.name : '' }</span>
          <span className="profile__handle">@{ user ? user.slug : '' }</span>
        </div>

        <div className="profile__bio">
          { user.description || 'You do not have a Bio!' }
        </div>

        <div className="profile__join d-flex-center">
          <svg className="profile__join--icon">
            <use xlinkHref={`${Sprite}#calendar`}></use>
          </svg>

          <span className="profile__join--time">Joined February 2021</span>
        </div>

        <div className="profile__follow d-flex-center">
          <div className="profile__follow--following d-flex-center">
            <span className="imp">50</span>
            <span>Following</span>
          </div>

          <div className="profile__follow--followers d-flex-center">
            <span className="imp">500</span>
            <span>Followers</span>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default ProfileInfo;