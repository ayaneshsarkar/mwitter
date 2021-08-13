import React from 'react';
import Sprite from '../../assets/svg/feather-sprite.svg';

const AlertHeader = ({ setClose }) => {
  return (
    <div className="alertHeader">
      <div className="iconBox" onClick={() => setClose(false)}>
        <svg className="icon">
          <use xlinkHref={`${Sprite}#x`}></use>
        </svg>
      </div>
    </div>
  );
}

export default AlertHeader;