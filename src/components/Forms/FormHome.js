import React, { useRef } from 'react';
import { 
  nullFunc, 
  setFieldValue, 
  setFileValue, 
  setFieldError,
  setFileError
} from '../../helpers/formFunctions';
import { isString, isImage } from '../../validation/formValidation';
import Sprite from '../../assets/svg/feather-sprite.svg';

export const Input = props => {
  return (
    <div className="form--box full-width">
      {props.error && <p className="form--error">{ props.error }</p> }

      <input 
        type={ props.type } 
        name={ props.name } 
        className="form--input home" 
        placeholder={ props.placeholder || props.label || null }
        value={ props.value }
        onChange={props.onChange ? 
          (e) => { 
            setFieldValue(e, props.onChange); 
            setFieldError(e, props.setError, isString) 
          }
          : nullFunc }
        
      />

      <label htmlFor={ props.name } className="form--label home">{ props.label }</label>
    </div>
  );
}

export const File = props => {
  const fileInput = useRef(null);

  const fileClick = () => {
    fileInput.current.click();
  }
  
  return (
    <div className="form--box full-width file">
      {props.error && <p className="form--error fileError">{ props.error }</p> }

      <input type="file" className="form--input file" name="file" placeholder="Avatar" 
        hidden 
        ref={fileInput} 
        onChange={
          (e) => 
          {
            setFileValue(e, props.onChange); 
            props.setName(e.target.files[0].name);
            setFileError(e, props.setError, isImage);
          }
        }
      />
      <div className="form--fileButton" onClick={fileClick}>
        <svg className="icon">
          <use xlinkHref={`${Sprite}#paperclip`}></use>
        </svg>
      </div>
      <span className="form--fileText">{ props.name || 'No File Chosen' }</span>
    </div>
  );
}

export const Button = props => {
  return (
    <div className="form--box no-margin">
      <button type="submit" className={ "form--button " + props.className || null }>
        { props.text }
      </button>
    </div>
  );
}