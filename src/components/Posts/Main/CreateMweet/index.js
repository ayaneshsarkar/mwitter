import React, { useState, useRef, useEffect } from 'react';
import ProfileAvatar from './ProfileAvatar';
import TextInput from './TextInput';
import MediaInput from './MediaInput';
import Embed from './Embed';
import MediaContent from './MediaContent';

const CreatePost = () => {
  const [text, setText] = useState('');
  const [textClass, setTextClass] = useState('');
  const [image, setImage] = useState({});
  const [video, setVideo] = useState({});
  const [embed, setEmbed] = useState('');
  const [embedStatus, setEmbedStatus] = useState(false);

  // Errors
  const [embedErr, setEmbedErr] = useState('');

  // DOM Refs
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  // const embedRef = useRef(null);

  const setFile = (e, callback) => {
    callback(e.target.files[0]);
  }

  const setInputTextClass = () => {
    if(image instanceof File || video instanceof File || embed) {
      setTextClass(' noBorder');
    }
  }

  useEffect(() => setInputTextClass());

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
          <TextInput textClass={textClass} value={text} setValue={setText} />

          {/* File Inputs */}
          <input ref={imageRef} type="file" name="image" hidden 
            onChange={(e) => setFile(e, setImage)} 
          />
          <input ref={videoRef} type="file" name="video" hidden 
            onChange={(e) => setFile(e, setVideo)} 
          />

          {/* Selected Media */}
          <MediaContent 
            image={image}
            setImage={setImage}
            video={video}
            setVideo={setVideo}
            embed={embed}
          />

          <Embed
            embed={embed}
            setEmbed={setEmbed}
            embedStatus={embedStatus} 
            setEmbedStatus={setEmbedStatus}
            error={embedErr}
            setErr={setEmbedErr} 
          />

          <MediaInput 
            image={image}
            video={video}
            imageRef={imageRef}
            videoRef={videoRef}
            setEmbedStatus={setEmbedStatus}
          />
        </form>
      </div>

      <div className="breaker"></div>
    </>
  );
}

export default CreatePost;