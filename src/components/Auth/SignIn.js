import React, { useState, useEffect } from 'react';
import { signUpFormValidaton, signUpFormCheckErrors } from '../../helpers/authFuncs';
import { Input, Button } from '../Forms/FormHome';

const SignInBox = props => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
 //  const [signInAuthErrTouched, setSignInAuthErrTouched] = useState(false);

  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  // console.log(usernameErr);
  //console.log(passwordErr);

  const checkFields = signUpFormValidaton([
    username, password
  ]);

  const checkErrors = signUpFormCheckErrors([
    usernameErr, passwordErr
  ]);

  const setBtnStatus = () => {
    if(checkFields && checkErrors) {
      props.setSignInErrors(false);
      setBtnDisable(false);
    } else {
      props.setSignInErrors(true);
      setBtnDisable(true);
    }
  }

  const setAuthErrors = () => {
    if(props.signInAuthErr) {
      //setSignInAuthErrTouched(false);
      setUsernameErr(props.signInAuthErr);
      setPasswordErr(props.signInAuthErr);
    }
  }

  useEffect(() => {
    // clearAuthErrors();
    setAuthErrors();
    setBtnStatus();
  });

  const setSignUp = () => {
    if(!props.signInSubmit) {
      props.setSignInStatus(false);
      props.setSignUpStatus(true);
    }
  }

  return (
    <>

      {/* Username */}
      <Input 
        type="text"
        name="username" 
        label="Username*"
        value={ username }
        error={usernameErr}
        setError={setUsernameErr}
        setAltError={setPasswordErr}
        onChange={setUsername}
        authErr={props.signInAuthErr}
        setAuthErr={props.setSignInAuthErr}
        //setAuthErrTouched={setSignInAuthErrTouched}
      />

      {/* Password */}
      <Input
        type="password"
        name="password" 
        label="Password*"
        value={password}
        error={passwordErr}
        setError={setPasswordErr}
        setAltError={setUsernameErr}
        onChange={setPassword}
        authErr={props.signInAuthErr}
        setAuthErr={props.setSignInAuthErr}
        //setAuthErrTouched={setSignInAuthErrTouched}
      />

      {/* Submit Button */}
      <div className="flex align-items-center">
        <Button text="Sign In" disabled={btnDisable} />
        <p className="authBtnText" onClick={setSignUp}>Create An Account</p>
      </div>
    </>
  );
}

export default SignInBox;