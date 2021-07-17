import { proxyServer } from '../../config/server';
import { normalFetch } from '../../helpers/fetch';

export const getEmbedData = async url => {
  try {
    const res = await normalFetch('GET', `${proxyServer}/${url}`, null);
    const data = await res.text();

    return data;
    
  } catch(err) {
    throw new Error(err.message);
  }
}