import React, { useState, useEffect } from 'react';
import Alert from '../containers/Posts/Alert';
import Sprite from '../assets/svg/feather-sprite.svg';

const LightBox = ({ open, setClose, image }) => {
  const [sendOpen, setSendOpen] = useState(false);

  useEffect(() => {
    const manageAlert = sendOpen => {
      if(sendOpen) {
        setClose(false);
        setSendOpen(false);
      }
    }

    manageAlert(sendOpen);
  }, [open, sendOpen, setClose]);

  return (
    <Alert open={open} setClose={setClose} fullScreen={true}>
      <div className="alert lightbox"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <div className="imgBox"></div> */}

        <div className="lightBoxCross">
          <svg className="lightBoxIcon" onClick={() => setSendOpen(true)}>
            <use xlinkHref={`${Sprite}#x`}></use>
          </svg>
        </div>
      </div>
    </Alert>
  );
}

export default LightBox;