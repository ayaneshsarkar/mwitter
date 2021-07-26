import React from 'react';
import Sprite from '../../../../assets/svg/feather-sprite.svg';

const MediaInput = props => {
  const imageClick = () => {
    if(!props.video && !props.image && !props.embed) {
      props.imageRef.current.click();
    }
  }

  const videoClick = () => {
    if(!props.image && !props.video && !props.embed) {
      props.videoRef.current.click();
    }
  }

  const setEmbedStatus = () => {
    if(!props.image && !props.video) {
      props.setEmbedStatus(true);
    }
  }
  
  return (
    <div className="createPost__form__media">
      <ul className="mediaMenus">
        <li className="mediaMenus__item" onClick={imageClick}>
          <svg className="mediaMenus__item--link">
            <use xlinkHref={`${Sprite}#image`}></use>
          </svg>
        </li>

        <li className="mediaMenus__item" onClick={videoClick}>
          <svg className="mediaMenus__item--link">
            <use xlinkHref={`${Sprite}#youtube`}></use>
          </svg>
        </li>

        <li className="mediaMenus__item" onClick={setEmbedStatus}>
          <svg className="mediaMenus__item--link">
            <use xlinkHref={`${Sprite}#paperclip`}></use>
          </svg>
        </li>
      </ul>
      
      <button className="createPost__form__button" 
        disabled={props.btnDisable}
      >
        Mweet
      </button>
    </div>
  );
}

export default MediaInput;