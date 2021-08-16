import React from 'react';
import Alert from '../containers/Posts/Alert';
import Sprite from '../assets/svg/feather-sprite.svg';

const PostValidationAlert = ({ error, open, setClose, optionalErr, home }) => {
  return (
    <Alert open={open} setClose={setClose} transition={true} optionalErr={optionalErr}
    home={home} >
      <div className={`alert postErrors${home ? ' home' : ''}`}>
        <div className="postError">
          <div className="postError__iconBox">
            <svg className="postError__icon">
              <use xlinkHref={`${Sprite}#x-circle`}></use>
            </svg>
          </div>

          <h4 className="postError__text">{ error }</h4>
        </div>
      </div>
    </Alert>
  );
}

export default PostValidationAlert;