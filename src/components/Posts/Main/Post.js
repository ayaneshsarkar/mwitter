import React from 'react';
import { Link } from 'react-router-dom'
import Avatar from '../../../assets/img/avatar.jpg';
import Img from '../../../assets/img/Sample.jpg';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const Post = () => {
  return (
    <div className="posts__allPosts">
      <div className="posts__post">
        <div className="posts__post--avatar">
          <div 
            className="posts__post--icon"
            style={{ backgroundImage: `url(${Avatar})` }}
            >
          </div>
        </div>

        <div className="posts__post--content">
          <div className="profile">
            <Link to="/posts" className="profile__info">
              <h4 className="profile__info--title">Donald J. Trump 🔴⚪</h4>
              <p className="profile__info--handle">@BayernTrump</p>
              <p className="dot">.</p>
              <p className="profile__info--time">5m</p>
            </Link>

            <div className="postDelete">
              <svg className="postDelete__icon">
                <use xlinkHref={`${Sprite}#trash`}></use>
              </svg>
            </div>
          </div>

          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, exercitationem. Voluptatibus dolorem dolore deserunt, eum temporibus soluta nostrum ab facere, amet eaque minus obcaecati laudantium.
          </p>

          <div 
            className="media"
            style={{ backgroundImage: `url(${Img})` }}
          >
            <img src={Img} alt="Sample" className="img" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Post;