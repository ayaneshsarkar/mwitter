import React from 'react';
import Sprite from '../../assets/svg/feather-sprite.svg';

const AlertHeader = ({ setClose, profile }) => {
  return (
    <div className={`alertHeader${profile ? ' profileAlert' : ''}`}>
      <div className="iconBox" onClick={() => setClose(false)}>
        <svg className="icon">
          <use xlinkHref={`${Sprite}#x`}></use>
        </svg>
      </div>
    </div>
  );
}

export default AlertHeader;