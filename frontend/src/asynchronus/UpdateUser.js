import { server } from '../config/server';
import { fetchData, fetchFile } from '../helpers/fetch';

export const sendMedia = async formData => {
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
    const fields = {
      bio: formData.get('bio') || user.acf.bio || ''
    }

    if(formData.get('avatar').name) {
      if(formData.get('file')) formData.delete('file');
      formData.append('file', formData.get('avatar'));

      const avatarData = await sendMedia(formData);
      fields.avatar = avatarData.id;
    }

    if(formData.get('cover').name) {
      if(formData.get('file')) formData.delete('file');
      formData.append('file', formData.get('cover'));

      const coverData = await sendMedia(formData);
      fields.cover = coverData.id;
    }

    formData.forEach((val, key) => data[key] = val);
    data.fields = fields;
    
    if(!formData.get('name') && user.name) {
      data.name = user.name;
    }

    const userRes = await fetchData('PUT', `${server}/user/${user.id}`, data, false);
    const userData = await userRes.json();

    return userData;

  } catch(err) {
    throw new Error(err.message);
  }
}