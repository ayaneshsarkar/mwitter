import React from 'react';
import { Input } from '../../../Forms/FormHome';

const EmbedForm = props => {
  return (
    <>
      <Input 
        type="text"
        name="embed"
        className=" posts"
        label="Attach URL"
        labelClass=" postLabel"
        value={props.embed}
        error={props.error}
        setError={props.setError}
        onChange={props.setEmbed}
      />
    </>
  );
}

export default EmbedForm;