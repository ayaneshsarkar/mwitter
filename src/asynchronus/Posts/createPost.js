import { server } from '../../config/server';
import { fetchFile, fetchSingleData } from '../../helpers/fetch';

const sendMedia = async (formData, fileType) => {
  formData.append('file', formData.get(fileType));
  const fileData = await fetchFile('POST', `${server}/media`, formData);
  const file = await fileData.json();

  return file;
}

const extractTags = string => {
  const tags = [];
  const strippedStr = string.replace( /(<([^>]+)>)/ig, '');
  const strArr = strippedStr.split(' ');

  strArr.forEach(str => {
    if(str.includes('#')) {
      const hashStrippedStr = str.replace(/#([^\\s]*)/g, '$1');
      tags.push(hashStrippedStr);
    }
  });

  return tags;
}

const createPost = async formData => {
  try {
    let data = {};
    let fields = { 
      text: formData.get('title'), 
      image: null, 
      video: null,
      embed: formData.get('embed') || null,
    };

    const tags = [];
    const tagsStr = extractTags(formData.get('title'));

    // Creating Tags
    tagsStr.forEach(async tagStr => {
      const tagFields = { name: tagStr };
      
      try {
        const tagRes = await fetchSingleData('POST', `${server}/mweet-tags`, tagFields);
        const tagData = await tagRes.json();

        tags.push(tagData.id);

      } catch(err) {
        throw new Error(err.message);
      }
    });

    // Upload Media
    if(formData.get('video') instanceof File && formData.get('video').name) {
      const video = await sendMedia(formData, 'video');
      fields.video = video.id;

    } else if(formData.get('image') instanceof File && formData.get('image').name) {
      const image = await sendMedia(formData, 'image');
      fields.image = image.id;
    }

    formData.forEach((val, key) => data[key] = val);
    data.fields = fields;
    data['mweet-tags'] = tags;
    data.status = 'publish';

    // Sending The Actual Mweeet
    const res = await fetchSingleData('POST', `${server}/mweets`, data);
    const post = await res.json();

    console.log(post);

    return post;

  } catch(err) {
    throw new Error(err.message);
  }
}

export default createPost;