import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../../actions/posts';
import { getEmbedData } from '../../../../asynchronus/Posts/embed';
import ProfileAvatar from './ProfileAvatar';
import TextInput from './TextInput';
import MediaInput from './MediaInput';
import Embed from './Embed';
import PostValidationAlert from '../../../../alerts/PostValidationAlert';
import MediaContent from './MediaContent';

const CreatePost = ({ user, addPost }) => {
  const [text, setText] = useState('');
  const [textClass, setTextClass] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [embed, setEmbed] = useState('');
  const [embedStatus, setEmbedStatus] = useState(false);

  // Errors
  const [imgErr, setImgErr] = useState('');
  const [vidErr, setVidErr] = useState('');
  const [embedErr, setEmbedErr] = useState('');
  const [validationErrImg, setValidationErrImg] = useState(false);
  const [validationErrVid, setValidationErrVid] = useState(false);

  // DOM Refs
  const imageRef = useRef(null);
  const videoRef = useRef(null);

  const setFile = (e, callback) => {
    callback(e.target.files[0]);
  }

  const setInputTextClass = () => {
    if(image instanceof File || video instanceof File || embed) {
      setTextClass(' noBorder');
    }
  }

  const setMediaErrors = () => {
    if(imgErr) setValidationErrImg(true);
    if(vidErr) setValidationErrVid(true);
  }

  const setEmbedData = async () => {
    if(!image && !video && !embedErr && embed) {
      try {
        const data = await getEmbedData(embed);
        console.log(data);
        // const image = data.querySelector("meta[property='og:image']").getAttribute("content");
      } catch(err) {
        console.log(err.message)
      }
    }
  }

  useEffect(() => {
    setInputTextClass();
    setMediaErrors();
    setEmbedData();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await addPost(formData);
      setImage(null);
      setVideo(null);
      setEmbed(null);
      setText('');
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="createPost">
        <ProfileAvatar user={user} />
        
        <form className="createPost__form" onSubmit={handleSubmit} 
          encType="multipart/form-data"
        >
          <TextInput user={user} textClass={textClass} value={text} setValue={setText} />

          {/* File Inputs */}
          <input ref={imageRef} type="file" name="image" hidden 
            onChange={(e) => setFile(e, setImage)} 
          />
          <input ref={videoRef} type="file" name="video" hidden 
            onChange={(e) => setFile(e, setVideo)} 
          />

          <input type="text" name="embed" hidden value={embed} 
            onChange={(e) => setEmbed(e.target.value)}
          />

          {/* Selected Media */}
          <MediaContent 
            image={image}
            imgErr={imgErr}
            setImgErr={setImgErr}
            setImage={setImage}
            video={video}
            vidErr={vidErr}
            setVidErr={setVidErr}
            setVideo={setVideo}
            embed={embed}
          />

          {/* Image Error Popup */}
          <PostValidationAlert 
            open={validationErrImg}
            setClose={setValidationErrImg}
            error={imgErr}
            optionalErr={setImgErr}
          />

          {/* Video Error Popup */}
          <PostValidationAlert 
            open={validationErrVid}
            setClose={setValidationErrVid}
            error={vidErr}
            optionalErr={setVidErr}
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

export default connect(null, { addPost })(CreatePost);