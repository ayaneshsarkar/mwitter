import React from 'react';
import Sprite from '../../../assets/svg/feather-sprite.svg';
// import GIF from '../../../assets/svg/gif.svg';
import Avatar from '../../../assets/img/avatar.jpg';

const CreatePost = () => {
  return (
    <>
      <div className="createPost">
        <div className="createPost__profile">
          <div 
            className="createPost__profile--avatar"
            style={{ backgroundImage: `url(${Avatar})` }}
          ></div>
        </div>

        <form className="createPost__form" onClick={(e) => e.preventDefault()}>
          <textarea 
            name="post" 
            className="createPost__form__text" 
            placeholder="What's Happening?"
            rows="3"></textarea>

          <div className="createPost__form__media">
            <ul className="mediaMenus">
              <li className="mediaMenus__item">
                <svg className="mediaMenus__item--link">
                  <use xlinkHref={`${Sprite}#image`}></use>
                </svg>
              </li>

              <li className="mediaMenus__item">
                <svg className="mediaMenus__item--link">
                  <use xlinkHref={`${Sprite}#paperclip`}></use>
                </svg>
              </li>

              <li className="mediaMenus__item">
                <svg className="mediaMenus__item--link">
                  <use xlinkHref={`${Sprite}#youtube`}></use>
                </svg>
              </li>
            </ul>

            <button className="createPost__form__button" disabled>Mweet</button>
          </div>
        </form>
      </div>

      <div className="breaker"></div>
    </>
  );
}

export default CreatePost;