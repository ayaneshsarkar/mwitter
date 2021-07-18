import React, { useState, useEffect } from 'react';
import { isImage, isVideo } from '../../../../validation/formValidation';
import EmbedData from './EmbedData';
import Sprite from '../../../../assets/svg/feather-sprite.svg';

const MediaContent = props => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  
  const setActualMedia = (media, currentMedia, callback, error) => {
    if(media instanceof File && media.name && !currentMedia && !error) {
      callback(media);
    } 
  }

  const setActualMediaOnChange = () => {
    setActualMedia(props.image, image, setImage, props.imgErr);
    setActualMedia(props.video, video, setVideo, props.vidErr);

    if(props.imgErr && image) {
      setImage(null);
      props.setImage(null);
    }

    if(props.vidErr && video) {
      setVideo(null);
      props.setVideo(null);
    }
  }

  const setMediaErrors = () => {
    if(image) {
      const imgErr = isImage(image);
      if(imgErr) props.setImgErr(imgErr);

    } else if(video) {
      const videoErr = isVideo(video);
      if(videoErr) props.setVidErr(videoErr);
    }
  }

  const clearMedia = (callback, currentCallback) => {
    callback(null);
    currentCallback(null);
  }

  useEffect(() => {
    setActualMediaOnChange();
    setMediaErrors();
  });

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
        </div> : (!image && !video && !props.embedErr && props.embed && props.metaData) ?
        
        <EmbedData embed={props.metaData} setEmbed={props.setEmbed} /> : ''
      }
    </>
  );
}

export default MediaContent;