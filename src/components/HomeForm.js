import React, { useState } from 'react';
import axios from 'axios';
import { server } from '../config/server';
import { fetchDataRegister, fetchAuth, config } from '../helpers/fetch';
import { Input, File, Button } from '../components/Forms/FormHome';

const HomeForm = () => {
  const [handle, setHandle] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [fileURL, setFileURL] = useState({});
  const [fileName, setFileName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [handleErr, setHandleErr] = useState('');
  const [fullNameErr, setFullNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [fileErr, setFileErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('');

  // console.log(fileURL.lastModified)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const fields = {
      fields: {
        avatar: fileURL //{ 
          // lastModified: fileURL.lastModified,
          // lastModifiedDate: fileURL.lastModifiedDate,
          // name: fileURL.name,
          // size: fileURL.size,
          // type: fileURL.type,
          // webkitRelativePath: fileURL.webkitRelativePath
          
        //}
      }
    }

    console.log(...formData);

    formData.append("data", JSON.stringify(fields));

    try {
      const res = 
      await fetchDataRegister('POST', `${server}/users`, formData);
      const data = await res.json();

      if(data.id) {
        console.log(data);
        const token = await fetchAuth({ username: handle, password });
        localStorage.setItem('userToken', token);

        const configData = await config();
        const avatar = await axios.put(`${server}/users/${data.id}`, formData, configData);
        console.log(avatar.data);
      }
    } catch(err) {
      console.log(err);
    }
  }
  
  return (
    <div className="homeForm">
      <form className="form home" onSubmit={handleSubmit} 
      encType="multipart/form-data">
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
        <Input 
          type="mail" 
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