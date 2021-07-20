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

const matchTags = async tag => {
  const res = await fetchSingleData('GET', `${server}/mweetTags?search=${tag}`, null);
  const dataArr = await res.json();
  let id = null;

  dataArr.forEach(data => data.slug === tag.toLowerCase() ? id = data.id : null);
  return id;
}

const createTags = async (text, tagsArr = []) => {
  try {
    const tagsStr = extractTags(text);

    for(const i in tagsStr) {
      const tagFields = { name: tagsStr[i] };

      const matchedTag = await matchTags(tagFields.name);

      if(!matchedTag) {
        const tagRes = await fetchSingleData('POST', `${server}/mweetTags`, tagFields);
        const tagData = await tagRes.json();
        tagsArr.push(tagData.id);
      } else {
        tagsArr.push(matchedTag);
      }
    };

    return tagsArr;

  } catch(err) {
    throw new Error(err.message);
  }
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

    // Creating Tags
    const tags = await createTags(formData.get('title'));

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
    data.mweetTags = tags;
    data.status = 'publish';

    // Sending The Actual Mweeet
    const res = await fetchSingleData('POST', `${server}/mweets`, data);
    const post = await res.json();

    return post;

  } catch(err) {
    throw new Error(err.message);
  }
}

export default createPost;