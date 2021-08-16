import React, { useRef } from 'react';
import { 
  nullFunc, 
  setFieldValue, 
  setFileValue, 
  setFieldError,
  setURLError,
  setFileError,
  setPasswordError
} from '../../helpers/formFunctions';
import { 
  isString, isEmail, matchPassword, isImage, isURL 
} from '../../validation/formValidation';
import Sprite from '../../assets/svg/feather-sprite.svg';

export const Input = props => {
  const setAuthErrors = () => {
    if(props.authErr) {
      props.setAuthErr('');
      props.setError('');
      props.setAltError('');
    }
  }

  return (
    <div className="form--box full-width">
      {props.error && <p className="form--error">{ props.error }</p> }

      <input 
        type={ props.type } 
        name={ props.name } 
        className={`form--input home${props.className || ''}`} 
        placeholder={ props.placeholder || props.label || null }
        value={ props.value }
        onChange={props.onChange ? 
          (e) => { 
            setAuthErrors();
            setFieldValue(e, props.onChange); 
            setFieldError(e, props.setError, isString);
          }
          : nullFunc }
        
      />

      <label htmlFor={ props.name } 
        className={`form--label home${props.labelClass || ''}`}
      >
        { props.label }
      </label>
    </div>
  );
}

export const Email = props => {
  return (
    <div className="form--box full-width">
      {props.error && <p className="form--error">{ props.error }</p> }

      <input 
        type="email" 
        name={ props.name } 
        className="form--input home" 
        placeholder={ props.placeholder || props.label || null }
        value={ props.value }
        onChange={props.onChange ? 
          (e) => { 
            setFieldValue(e, props.onChange); 
            setFieldError(e, props.setError, isEmail) 
          }
          : nullFunc }
        
      />

      <label htmlFor={ props.name } className="form--label home">{ props.label }</label>
    </div>
  );
}

export const Password = props => {
  return (
    <div className="form--box full-width">
      {props.error && <p className="form--error">{ props.error }</p> }

      <input 
        type="password" 
        name={ props.name } 
        className="form--input home" 
        placeholder={ props.placeholder || props.label || null }
        value={ props.value }
        onChange={props.onChange ? 
          (e) => { 
            setFieldValue(e, props.onChange); 
            setPasswordError(e, props.setErrors, matchPassword, props.match) 
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

  const getName = (e) => {
    if(e.target && e.target.files[0] && e.target.files[0].name !== undefined) {
      return e.target.files[0].name;
    } else {
      return '';
    }
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
              props.setName(getName(e));
              setFileError(e, props.setError, isImage);
            }
          }
        />
        <div className="form--fileButton" onClick={fileClick}>
          <svg className="icon">
            <use xlinkHref={`${Sprite}#paperclip`}></use>
          </svg>
        </div>
        <span className="form--fileText">{ props.name || 'No File Chosen*' }</span>
      </div>
  );
}

export const URL = props => {
  return (
    <div className="form--box full-width">
      {props.error && <p className="form--error">{ props.error }</p> }

      <input 
        type="text" 
        name={ props.name } 
        className={`form--input home${props.className || ''}`} 
        placeholder={ props.placeholder || props.label || null }
        value={ props.value }
        onChange={props.onChange ? 
          (e) => { 
            setFieldValue(e, props.onChange); 
            setURLError(e, props.setError, isURL) 
          }
          : nullFunc }
        
      />

      <label htmlFor={ props.name } 
        className={`form--label home${props.labelClass || ''}`}
      >
        { props.label }
      </label>
    </div>
  );
}

export const Button = props => {
  return (
    <div className="form--box no-margin">
      <button type="submit" className={ "form--button " + (props.className || null) }
        disabled={props.disabled ? true : false}
      >
        { props.text }
      </button>
    </div>
  );
}