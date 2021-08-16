import { server, serverACF } from '../../config/server';
import { fetchData, fetchDataRegister, fetchAuth, fetchFile } from '../../helpers/fetch';

const sendMedia = async (formData) => {
  try {
    const res = await fetchFile('POST', `${server}/media`, formData);
    const data = await res.json();

    return data;
  } catch(err) {
    console.log(err);
  }
}

export const signUp = async (formData, password) => {
  try {
    // Register The User
    const res = await fetchDataRegister('POST', `${server}/users`, formData);
    const user = await res.json();

    if(user.id) {
      // Storing The Auth Token
      const token = await fetchAuth(user.username, password);
      localStorage.setItem('userToken', token);

      // Sending the Media
      const media = await sendMedia(formData);

      if(media.id) {
        const fields = { fields: { avatar: media.id, cover: media.id } };

        // Update Profile Picture
        const acfData = await 
        fetchData('PUT', `${serverACF}/users/${user.id}`, fields, false);

        const acf = await acfData.json();

        return { user, acf };
      }
    }

  } catch(err) {
    throw new Error(err.message);
  }
}