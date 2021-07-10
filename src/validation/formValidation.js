import { inArray } from '../helpers';

export const isString = (str, fieldName) => {
  return str ? null : `The ${fieldName} field is required`;
}

export const isImage = (file, key = null) => {
  if(typeof file !== 'object') {
    return 'Invalid File';
  } else {
    const fileName = file.name;
    const allowedArray = ["jpg", "jpeg", "png", "gif", "ico"];
    const fileType = fileName.split('.')[fileName.split('.').length - 1].toLowerCase();

    if(!inArray(fileType, allowedArray)) {
      return `Uploaded ${key} is not an image.`;
    } else {
      return null;
    }
  }
}

export const matchPassword = (str, fieldName) => {
  
}