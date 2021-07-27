import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { removePost } from '../../../actions/posts';
import history from '../../../config/history';
import Img from '../../../assets/img/SamplePic.jpg';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const Mweet = ({ user, mweet, location, removePost }) => {
  const [paddingTop, setPaddingTop] = useState(0);
  const checkUser = (user) => Object.keys(user).length;

  const deleteMweet = async id => {
    try {
      await removePost(id);
    } catch(err) {
      console.error(err.message);
    }
  }

  const getPaddingTop = (mweetData, containerWidth) => {
    if(location.pathname === '/posts' || location.pathname.includes('search')
    || location.pathname.includes('tag')) {
      setPaddingTop('50%');
    } else {
      setPaddingTop(
        mweetData.acf.image.sizes['large-height'] / 
        mweetData.acf.image.sizes['large-width'] * containerWidth
      );
    }
  }

  const getTag = (e) => {
    const tagName = e.target.tagName.toLowerCase();

    if(tagName === 'span') {
      const tag = e.target.textContent.slice(1, e.target.textContent.length);
      history.push(`/tag/${tag}`);
    }
  }

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
            </h4>
            <p className="profile__info--handle">
              @{ checkUser(user) ? user.slug : '' }
            </p>
            <p className="dot">.</p>
            <p className="profile__info--time">5m</p>
          </Link>

          {(checkUser(user) && (mweet.author === user.id)) ? 
            <div className="postDelete" onClick={() => deleteMweet(mweet.id)}>
              <svg className="postDelete__icon">
                <use xlinkHref={`${Sprite}#trash`}></use>
              </svg>
            </div> : ''
          }
        </div>

        <p 
          onClick={(e) => getTag(e)}
          className="text" dangerouslySetInnerHTML={{ __html: mweet.acf.text }}>
        </p>

        {mweet.acf.image ? 
          <div
          className="media"
          onLoad={(e) => getPaddingTop(mweet, e.target.offsetWidth)}
          style={{ 
            backgroundImage: `url(${mweet.acf.image.sizes.large})`, paddingTop
          }}
          >
            <img src={Img} alt="Sample" className="img" />
          </div> 
          : ''
        }

      </div>
    </div>
  );
}

export default connect(null, { removePost })(Mweet);