import React from 'react';
import history from '../../config/history';
import Sprite from '../../assets/svg/feather-sprite.svg';

const BackButton = () => {
  return (
    <div className="postNavIconBox" onClick={() => history.goBack()}>
      <svg className="postNavIcon">
        <use xlinkHref={`${Sprite}#arrow-left`}></use>
      </svg>
    </div>
  );
}

export default BackButton;