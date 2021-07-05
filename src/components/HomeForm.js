import React from 'react';
import { Input, Button } from '../components/Forms/FormHome';

const HomeForm = () => {
  return (
    <div className="homeForm">
      <form className="form home" onSubmit={(e) => e.preventDefault()}>
        {/* Full Name */}
        <Input 
          type="text" 
          name="fullname" 
          label="Full Name"
          error=""
        />

        {/* Email */}
        <Input 
          type="email" 
          name="email" 
          label="Email"
          error=""
        />

        {/* Password */}
        <Input 
          type="password" 
          name="password" 
          label="Password"
          error=""
        />

        {/* Confirm Password */}
        <Input 
          type="password" 
          name="confirmPassword" 
          label="Confirm Password"
          error=""
        />

        {/* Submit Button */}
        <Button text="Sign Up" />
      </form>
    </div>
  );
}

export default HomeForm;