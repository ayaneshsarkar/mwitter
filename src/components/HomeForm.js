import React, { useState } from 'react';
import SignUpBox from './Auth/SignUp';
import SignInBox from './Auth/SignIn';
import { signUp } from '../asynchronus/Home/SignUp';

const HomeForm = () => {
  const [signUpErrors, setSignUpErrors] = useState(true);
  const [signInErrors, setSignInErrors] = useState(false);
  const [signUpStatus, setSignUpStatus] = useState(false);
  const [signInStatus, setSignInStatus] = useState(true);
  const [signUpSubmit, setSignUpSubmit] = useState(false);
  const [signInSubmit, setSignInSubmit] = useState(false);

  console.log({signUpStatus});
  console.log({signInStatus});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!signUpErrors && !signInSubmit && !signInStatus && !setSignUpSubmit
      && !signInErrors) {
      setSignUpSubmit(true);
      setSignInSubmit(false);

      const formData = new FormData(e.target);

      try {
        const res = await signUp(formData, formData.get('password'));

        console.log(res);
      } catch(err) {
        console.error(err);
      }
    }
  }
  
  return (
    <div className="homeForm">
      <form className="form home" onSubmit={handleSubmit} 
      encType="multipart/form-data">
        {signUpStatus ?
          <SignUpBox 
            setSignUpErrors={setSignUpErrors}
            signUpSubmit={signUpSubmit}
            setSignUpStatus={setSignUpStatus}
            setSignInStatus={setSignInStatus}
          /> : ''
        }

        {signInStatus ?
          <SignInBox 
            setSignInErrors={setSignInErrors}
            signInSubmit={signInSubmit}
            setSignInStatus={setSignInStatus}
            setSignUpStatus={setSignUpStatus}
          /> : ''
        }
      </form>
    </div>
  );
}

export default HomeForm;