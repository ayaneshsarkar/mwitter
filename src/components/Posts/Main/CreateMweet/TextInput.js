import React, { useState } from 'react';

const TextInput = props => {
  const [newLineCount, setNewLineCount] = useState(0);
  const [textHeight, setTextHeight] = useState(90);

  const styleTextarea = (e) => {
    e.target.className = `createPost__form__text focused${props.textClass || ''}`;
  }

  const unstyleTextarea = (e) => {
    if(!props.value) {
      e.target.className = `createPost__form__text${props.textClass || ''}`;
    }
  }

  const adjustTextAreaHeight = () => {
    if(newLineCount) {
      setTextHeight((newLineCount * 30) + 90);
    }
  }

  const setText = (e) => {
    setTextHeight(e.target.offsetHeight);
    setNewLineCount((e.target.value.match(/\n/g) || []).length);

    adjustTextAreaHeight();

    e.target.style.height = (textHeight/10) + 'rem';
    props.setValue(e.target.value);
  }

  return (
    <textarea onFocus={styleTextarea} onBlur={unstyleTextarea}
      onChange={setText}
      name="title" 
      className={`createPost__form__text${props.textClass || ''}`} 
      placeholder="What's Happening?"

      value={props.value} 
    />
  );
}

export default TextInput;