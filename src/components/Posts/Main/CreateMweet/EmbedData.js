import React from 'react';
import Sprite from '../../../../assets/svg/feather-sprite.svg';

const EmbedData = ({ embed }) => {
  return (
    <div className="createPost__embedBox">
      <div className="createPost__embedBox--embed">
        {/* Embed Image */}
        <div className="createPost__embedBox--embed-image">
          {embed.image ? <img src={embed.image} alt={embed.title} className="img" /> : ''}
        </div>

        <div className="createPost__embedBox--embed-content">
          <h3 className="title">{ embed.title }</h3>
          <div className="link">
            <svg className="icon">
              <use xlinkHref={`${Sprite}#paperclip`}></use>
            </svg>
            
            <p className="text">{ embed.url }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmbedData;