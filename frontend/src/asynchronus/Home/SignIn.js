import { server } from '../../config/server';
import { fetchAuth, fetchSingleData } from '../../helpers/fetch';

export const signIn = async formData => {
  try {
    // Get The User Token
    const token = await fetchAuth(formData.get('username'), formData.get('password'));
    
    // Store the token to Local Storage
    if(token) {
      localStorage.setItem('userToken', token);

      // Get The User Data
      const userData = await fetchSingleData('GET', `${server}/users/me`, null);
      const user = await userData.json();

      if(user && user.id) {
        // Store The User Id and return the User
        localStorage.setItem('userId', user.id);
        return user;
      }
    }

  } catch(err) {
    throw new Error(err.message);
  }

  return null;
}