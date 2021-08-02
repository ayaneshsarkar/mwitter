import { server } from '../../config/server';
import { fetchSingleData } from '../../helpers/fetch';

export const getTags = async () => {
  try {
    const res = await fetchSingleData('GET', `${server}/mweetTags`, null);
    const data = await res.json();
  
    return data;

  } catch(err) {
    throw new Error(err.message);
  }
}