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

  const [signInAuthErr, setSignInAuthErr ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      try {
        await props.logIn(formData);
      } catch(err) {
        console.log(err.message);
        setSignInAuthErr(err.message);
        setSignInSubmit(false);
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
            signInAuthErr={signInAuthErr}
            setSignInAuthErr={setSignInAuthErr}
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