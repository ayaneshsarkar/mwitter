import React, { useState, useEffect } from 'react';
import { signUpFormValidaton, signUpFormCheckErrors } from '../../helpers/authFuncs';
import { Input, Email, Password, File, Button } from '../Forms/FormHome';

const SignUpBox = props => {

  const [handle, setHandle] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [fileURL, setFileURL] = useState({});
  const [fileName, setFileName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);

  const [handleErr, setHandleErr] = useState('');
  const [fullNameErr, setFullNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [fileErr, setFileErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('');

  const checkFields = signUpFormValidaton([
    handle, fullName, email, fileURL, password, confirmPassword
  ]);

  const checkErrors = signUpFormCheckErrors([
    handleErr, fullNameErr, emailErr, fileErr, passwordErr, confirmPasswordErr
  ]);

  const setBtnStatus = () => {
    if(checkFields && checkErrors) {
      props.setSignUpErrors(false);
      setBtnDisable(false);
    } else {
      props.setSignUpErrors(true);
      setBtnDisable(true);
    }
  }

  useEffect(() => {
    setBtnStatus();
  });

  const setSignIn = () => {
    if(!props.signUpSubmit) {
      props.setSignUpStatus(false);
      props.setSignInStatus(true);
    }
  }

  return (
    <>
      {/* Handle */}
      <Input 
        type="text" 
        name="username" 
        label="Handle"
        value={ handle }
        error={handleErr}
        setError={setHandleErr}
        onChange={setHandle}
      />

      {/* Full Name */}
      <Input 
        type="text" 
        name="name" 
        label="Full Name"
        value={ fullName }
        error={fullNameErr}
        setError={setFullNameErr}
        onChange={setFullName}
      />

      {/* Email */}
      <Email 
        name="email" 
        label="Email"
        value={ email }
        error={emailErr}
        setError={setEmailErr}
        onChange={setEmail}
      />

      {/* Avatar */}
      <File 
        name={fileName} 
        value={fileURL}
        error={fileErr}
        setError={setFileErr}
        setName={setFileName}
        onChange={setFileURL}
      />

      {/* Password */}
      <Password 
        name="password" 
        label="Password"
        value={password}
        match={confirmPassword}
        error={passwordErr}
        setErrors={[setPasswordErr, setConfirmPasswordErr]}
        onChange={setPassword}
      />

      {/* Confirm Password */}
      <Password 
        name="confirmPassword" 
        label="Confirm Password"
        value={confirmPassword}
        match={password}
        error={confirmPasswordErr}
        setErrors={[setConfirmPasswordErr, setPasswordErr]}
        onChange={setConfirmPassword}
      />

      {/* Submit Button */}
      <div className="flex align-items-center">
        <Button text="Sign Up" disabled={btnDisable} />
        <p className="authBtnText" onClick={setSignIn}>Already Have an Account? Log In</p>
      </div>
    </>
  );
}

export default SignUpBox;