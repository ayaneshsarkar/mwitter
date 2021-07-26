import React from 'react';
import { URL } from '../../../Forms/FormHome';

const EmbedForm = props => {
  return (
    <>
      <URL 
        type="text"
        name="embed"
        className=" posts"
        label="Attach URL"
        labelClass=" postLabel"
        value={props.embed || ''}
        error={props.error}
        setError={props.setError}
        onChange={props.setEmbed}
      />
    </>
  );
}

export default EmbedForm;