import React from 'react';

const TextInput = props => {
  const styleTextarea = (e) => {
    e.target.className = "createPost__form__text focused";
  }

  const unstyleTextarea = (e) => {
    e.target.className = "createPost__form__text";
  }

  const setText = (e) => {
    props.setValue(e.target.value);
  }

  return (
    <textarea onFocus={styleTextarea} onBlur={unstyleTextarea}
      onChange={setText}
      name="post" 
      className="createPost__form__text" 
      placeholder="What's Happening?"
      value={props.value} 
    />
  );
}

export default TextInput;