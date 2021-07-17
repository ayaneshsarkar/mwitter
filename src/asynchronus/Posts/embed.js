import { proxyServer } from '../../config/server';
import { normalFetch } from '../../helpers/fetch';

export const getEmbedData = async (url, metaName) => {
  try {
    const res = await normalFetch('GET', `${proxyServer}/${url}`, null);
    const data = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    // const metas = doc.getElementsByTagName('meta');

    return doc;
    
  } catch(err) {
    throw new Error(err.message);
  }
}