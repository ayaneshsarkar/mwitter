import React, { useState, useEffect } from 'react';
import Sprite from '../../../../assets/svg/feather-sprite.svg';

const MediaContent = props => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  
  const setActualMedia = (img, currentImage, callback) => {
    if(img instanceof File && img.name && !currentImage) {
      callback(img);
    } 
  }

  const setActualMediaOnChange = () => {
    setActualMedia(props.image, image, setImage);
    setActualMedia(props.video, video, setVideo);
  }

  const clearMedia = (callback, currentCallback) => {
    callback(null);
    currentCallback(null);
  }

  useEffect(() => setActualMediaOnChange());

  return (
    <>
      {(image) ? 
        <div className="createPost__mediaContent"
          style={{ backgroundImage: `url(${URL.createObjectURL(image)})` }}
        >
          <img 
            src={URL.createObjectURL(props.image)} 
            alt={props.image.name} 
            className="img" 
          />

          <div className="cross" onClick={() => clearMedia(setImage, props.setImage)}>
            <svg className="cross__content">
              <use xlinkHref={`${Sprite}#x`}></use>
            </svg>
          </div>
        </div> : (video) ?

        <div className="createPost__mediaContent">
          <video className="video" muted controls>
            <source src={URL.createObjectURL(video)} type={props.video.type} />
          </video>

          <div className="cross" onClick={() => clearMedia(setVideo, props.setVideo)}>
            <svg className="cross__content">
              <use xlinkHref={`${Sprite}#x`}></use>
            </svg>
          </div>
        </div> : ''
      }
    </>
  );
}

export default MediaContent;