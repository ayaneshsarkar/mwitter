import { inArray } from '../helpers';

export const isString = (str, fieldName) => {
  return str ? null : `The ${fieldName} field is required.`;
}

export const isEmail = (email, fieldName, req = true) => {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!email && req) {
    return `The ${fieldName} is required.`
  } else if(email && !regEx.test(email)) {
    return `The ${fieldName} has to be an E-Mail.`;
  }

  return null;
}

export const isImage = (file, key = null) => {
  if(typeof file !== 'object') {
    return 'Invalid File';
  } else {
    const fileName = file.name;
    const allowedArray = ["jpg", "jpeg", "png", "gif", "ico"];
    const fileType = fileName.split('.')[fileName.split('.').length - 1].toLowerCase();

    if(!inArray(fileType, allowedArray)) {
      return `Uploaded ${key || 'file'} is not an image.`;
    } else {
      return null;
    }
  }
}

export const isVideo = (file, key = null) => {
  if(!(file instanceof File)) {
    return 'Invalid File.';
  } else {
    const fileName = file.name;
    const allowedArray = ["mp4", "3gp", "m4v", "mov", "wmv", "avi", "mpg", "ogv", "3gp2"];
    const fileType = fileName.split('.')[fileName.split('.').length - 1].toLowerCase();

    if(!inArray(fileType, allowedArray)) {
      return `Uploaded ${key || 'file'} is not a video.`;
    } else {
      return null;
    }
  }
}

export const matchPassword = (str, fieldName, match, req = true) => {
  if(!str && req) {
    return `The ${fieldName} are required.`
  } else if(str !== match) {
    return `Passwords do not match.`;
  }

  return null;
}