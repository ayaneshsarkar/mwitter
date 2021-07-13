import React from 'react';
import Sprite from '../../../../assets/svg/feather-sprite.svg';

const MediaContent = props => {
  return (
    <>
      {(props.image instanceof File) ? 
        <div className="createPost__mediaContent"
          style={{ backgroundImage: `url(${URL.createObjectURL(props.image)})` }}
        >
          <img 
            src={URL.createObjectURL(props.image)} 
            alt={props.image.name} 
            className="img" 
          />

          <div className="cross" onClick={() => props.setImage({})}>
            <svg className="cross__content">
              <use xlinkHref={`${Sprite}#x`}></use>
            </svg>
          </div>
        </div> : (props.video instanceof File) ?

        <div className="createPost__mediaContent">
          <video className="video" muted controls>
            <source src={URL.createObjectURL(props.video)} type={props.video.type} />
          </video>

          <div className="cross" onClick={() => props.setVideo({})}>
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