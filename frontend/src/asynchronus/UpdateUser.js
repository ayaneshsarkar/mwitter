import { server, serverACF } from '../config/server';
import { fetchData, fetchFile } from '../helpers/fetch';

const sendMedia = async formData => {
  try {
    const res = await fetchFile('POST', `${server}/media`, formData);
    const data = await res.json();

    return data;
  } catch(err) {
    console.log(err);
  }
}

export const updateUser = async (user, formData) => {
  try {
    const data = {};
    const fields = { fields: {  } }

    if(formData.get('avatar').name) {
      if(formData.get('file')) formData.delete('file');
      formData.append('file', formData.get('avatar'));

      const avatarData = await sendMedia(formData);
      fields.fields.avatar = avatarData.id;
    }

    if(formData.get('cover').name) {
      if(formData.get('file')) formData.delete('file');
      formData.append('file', formData.get('cover'));

      const coverData = await sendMedia(formData);
      fields.fields.cover = coverData.id;
    }

    formData.forEach((val, key) => data[key] = val);
    
    if(!formData.get('name') && user.name) {
      data.name = user.name;
    }

    if(!formData.get('description') && user.description) {
      data.description = user.description;
    }

    // Update Media
    const acfData = await fetchData('PUT', `${serverACF}/users/${user.id}`, fields, false);
    const acf = await acfData.json();

    const userRes = await fetchData('POST', `${server}/users/${user.id}`, data, false);
    const userData = await userRes.json();

    return { userData, acf };

  } catch(err) {
    throw new Error(err.message);
  }
}