import React from 'react';
import { nullFunc, setFieldValue, setFieldError } from '../../helpers/formFunctions';
import { isString } from '../../validation/formValidation';

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

export const Button = props => {
  return (
    <div className="form--box no-margin">
      <button type="submit" className={ "form--button " + props.className || null }>
        { props.text }
      </button>
    </div>
  );
}