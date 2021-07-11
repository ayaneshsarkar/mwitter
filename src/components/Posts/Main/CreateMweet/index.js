import React, { useState, useRef } from 'react';
import ProfileAvatar from './ProfileAvatar';
import TextInput from './TextInput';
import MediaInput from './MediaInput';;

const CreatePost = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState({});
  const [video, setVideo] = useState({});
  // const [embed, setEmbed] = useState('');

  // DOM Refs
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  // const embedRef = useRef(null);

  const setFile = (e, callback) => {
    callback(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="createPost">
        <ProfileAvatar />
        <form className="createPost__form" onSubmit={handleSubmit} 
          encType="multipart/form-data"
        >
          <TextInput value={text} setValue={setText} />

          {/* File Inputs */}
          <input ref={imageRef} type="file" name="image" hidden 
            onChange={(e) => setFile(e, setImage)} 
          />
          <input ref={videoRef} type="file" name="video" hidden 
            onChange={(e) => setFile(e, setVideo)} 
          />

          <MediaInput 
            image={image}
            video={video}
            imageRef={imageRef}
            videoRef={videoRef}
          />
        </form>
      </div>

      <div className="breaker"></div>
    </>
  );
}

export default CreatePost;