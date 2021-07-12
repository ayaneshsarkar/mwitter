import React from 'react';
import Alert from '../../../../containers/Posts/Alert';
import Sprite from '../../../../assets/svg/feather-sprite.svg';
import EmbedForm from './EmbedForm';

const Embed = props => {
  return (
    <Alert
      open={props.embedStatus}
      setClose={props.setEmbedStatus}
    >
      <div className="alert embed">
        <div className="embedHead">
          <svg className="embedTitleIcon">
            <use xlinkHref={`${Sprite}#paperclip`}></use>
          </svg>
          <h4 className="embed__title">Attach URL</h4>
        </div>

        <EmbedForm 
          embed={props.embed}
          setEmbed={props.setEmbed}
          error={props.error}
          setError={props.setErr} 
        />
      </div>
    </Alert>
  );
}

export default Embed;