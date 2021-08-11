import React, { useState, useEffect } from "react";
import Sprite from '../../assets/svg/feather-sprite.svg';

const ProfileInfo = ({ user, status }) => {
  const [avatar, setAvatar] = useState(null);
  const [bio, setBio] = useState('You do not have a Bio!');

  useEffect(() => {
    const getAcf = () => {
      if(user.acf && user.acf.avatar.sizes.large) {
        setAvatar(user.acf.avatar.sizes.large);
      }

      if(user.acf && user.acf.bio) {
        setBio(user.acf.bio);
      }
    }

    getAcf();
  }, [user.acf]);

  return (
    <div className="profile__container">
      <div className="profile__media">
        <div className="profile__avatar" style={{ backgroundImage: `url(${avatar || null})` }}>
        </div>

        { status &&
          <button className="profile__button">Edit Profile</button>
        }
      </div>

      <div className="profile__info">
        <div className="profile__info--user">
          <span className="profile__name">{ user ? user.name : '' }</span>
          <span className="profile__handle">@{ user ? user.slug : '' }</span>
        </div>

        <div className="profile__bio">{ bio }</div>

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
      </div>
    </div>
  );
}

export default ProfileInfo;