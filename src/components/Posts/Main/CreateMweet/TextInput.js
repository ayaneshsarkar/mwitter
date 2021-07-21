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
    // const pureStr = e.target.value.replace(/(<([^>]+)>)/ig, '');
    // const hashedStr = pureStr.replace(/(#[a-zA-Z0-9-_]+)/g, '<span>$1</span>');
    // e.target.value = hashedStr;

    // if(e.target.value === "\n") console.log('new line');

    // e.target.value = e.target.value.replace(
    //   /(^|\s)(#[a-z\d-]+)(^|\s)/ig, 
    //   "$1<span>$2</span>$3"
    // );

    // e.target.value = e.target.value.replace(
    //   /(^|\s)(@[a-z\d-]+)(^|\s)/ig, 
    //   "$1<span>$2</span>$3"
    // );

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