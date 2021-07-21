import React, { createRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { getHashtags } from '../../../../helpers';

const TextInput = props => {

  const [contentEditableRef] = useState(createRef());

  const styleTextarea = (e) => {
    e.target.className = `createPost__form__text focused${props.textClass || ''}`;
  }

  const unstyleTextarea = (e) => {
    if(!props.value) {
      e.target.className = `createPost__form__text${props.textClass || ''}`;
    }
  }

  const setText = (e) => {
    e.target.value = getHashtags(e.target.value);
    props.setValue(e.target.value);
  }

  return (
    <ContentEditable onFocus={styleTextarea} onBlur={unstyleTextarea}
      innerRef={contentEditableRef}
      onChange={setText}
      className={`createPost__form__text${props.textClass || ''}`} 
      placeholder="What's Happening?"
      html={props.value}
    />
  );
}

export default TextInput;