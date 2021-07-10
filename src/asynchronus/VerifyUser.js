import { fetchSingleData } from '../helpers/fetch';
import { server } from '../config/server';

export const verifyUser = async () => {
  if(localStorage.getItem('userToken') && localStorage.getItem('userId')) {
    const userId = localStorage.getItem('userId');

    try {
      const res = await fetchSingleData('GET', `${server}/users/${userId}`, null);
      const user = await res.json();
  
      if(user.id) return user;
    } catch(err) {
      console.error(err);
      return false;
    }
  }

  return false;
}