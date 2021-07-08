import React, { useState } from 'react';
import { Input, Button } from '../components/Forms/FormHome';

const HomeForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [fullNameErr, setFullNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('');
  
  return (
    <div className="homeForm">
      <form className="form home" onSubmit={(e) => e.preventDefault()}>
        {/* Full Name */}
        <Input 
          type="text" 
          name="fullName" 
          label="Full Name"
          value={ fullName }
          error={fullNameErr}
          setError={setFullNameErr}
          onChange={setFullName}
        />

        {/* Email */}
        <Input 
          type="email" 
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

        {/* Confirm Password */}
        <Input 
          type="password" 
          name="confirmPassword" 
          label="Confirm Password"
          value={confirmPassword}
          error={confirmPasswordErr}
          setError={setConfirmPasswordErr}
          onChange={setConfirmPassword}
        />

        {/* Submit Button */}
        <Button text="Sign Up" />
      </form>
    </div>
  );
}

export default HomeForm;