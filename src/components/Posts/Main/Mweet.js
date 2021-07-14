import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Img from '../../../assets/img/SamplePic.jpg';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const Mweet = ({ user, mweet }) => {
  const [contWidth, setContWidth] = useState(0);
  const checkUser = (user) => Object.keys(user).length;

  return (
    <div className="posts__post">
      <div className="posts__post--avatar">
        <div 
          className="posts__post--icon"
          style={{ 
            backgroundImage: `url(${checkUser(user) ? user.acf.avatar.sizes.large : ''})`
          }}
          >
        </div>
      </div>

      <div className="posts__post--content">
        <div className="profile">
          <Link to="/posts" className="profile__info">
            <h4 className="profile__info--title">
              { checkUser(user) ? user.name : '' }
              {/* Donald J. Trump 🔴⚪ */}
            </h4>
            <p className="profile__info--handle">
              @{ checkUser(user) ? user.slug : '' }
            </p>
            <p className="dot">.</p>
            <p className="profile__info--time">5m</p>
          </Link>

          {(checkUser(user) && (mweet.author === user.id)) ? 
            <div className="postDelete">
              <svg className="postDelete__icon">
                <use xlinkHref={`${Sprite}#trash`}></use>
              </svg>
            </div> : ''
          }
        </div>

        <p className="text">
          { mweet.acf.text }
        </p>

        <div
          className="media"
          onLoad={(e) => setContWidth(e.target.offsetWidth)}
          style={{ 
            backgroundImage: `url(${mweet.acf.image.sizes.large})`,
            paddingTop: mweet.acf.image.sizes['large-height'] / 
              mweet.acf.image.sizes['large-width'] * contWidth
          }}
        >
          <img src={Img} alt="Sample" className="img" />
        </div>

      </div>
    </div>
  );
}

export default Mweet;