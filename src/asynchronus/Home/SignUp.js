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
        const fields = { fields: { avatar: media.id } };

        // Update Profile Picture
        const avatarData = await 
        fetchData('PUT', `${serverACF}/users/${user.id}`, fields, false);

        const avatar = await avatarData.json();

        return { user, avatar };
      }
    }

  } catch(err) {
    console.error(err);
  }
}