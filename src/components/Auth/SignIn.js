import React, { useState, useEffect } from 'react';
import { signUpFormValidaton, signUpFormCheckErrors } from '../../helpers/authFuncs';
import { Input, Email, Button } from '../Forms/FormHome';

const SignInBox = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);

  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const checkFields = signUpFormValidaton([
    email, password
  ]);

  const checkErrors = signUpFormCheckErrors([
   emailErr, passwordErr
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

  useEffect(() => {
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

      {/* Email */}
      <Email 
        name="email" 
        label="Email"
        value={ email }
        error={emailErr}
        setError={setEmailErr}
        onChange={setEmail}
      />

      {/* Password */}
      <Input
        type="password"
        name="password" 
        label="Password"
        value={password}
        error={passwordErr}
        setError={setPasswordErr}
        onChange={setPassword}
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