import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register, logIn } from '../actions/auth';
import SignUpBox from './Auth/SignUp';
import SignInBox from './Auth/SignIn';

const HomeForm = props => {
  const [signUpErrors, setSignUpErrors] = useState(true);
  const [signInErrors, setSignInErrors] = useState(false);
  const [signUpStatus, setSignUpStatus] = useState(false);
  const [signInStatus, setSignInStatus] = useState(true);
  const [signUpSubmit, setSignUpSubmit] = useState(false);
  const [signInSubmit, setSignInSubmit] = useState(false);

  console.log(signUpErrors, signUpStatus)

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(signUpErrors, signUpStatus)

    if(!signUpErrors && signUpStatus) {
      setSignUpSubmit(true);
      setSignInSubmit(false);

      const formData = new FormData(e.target);

      await props.register(formData);
    }

    if(signInStatus && !signInErrors) {
      setSignInSubmit(true);
      setSignUpSubmit(false);

      const formData = new FormData(e.target);

      await props.logIn(formData);
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

export default connect(null, { register, logIn })(HomeForm);