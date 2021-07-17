import { proxyServer } from '../../config/server';
import { normalFetch } from '../../helpers/fetch';

const getFavicon = links => {
  let favicon = null;
  for (var i = 0; i < links.length; i++) {
      if(
        (links[i].getAttribute("rel") === "icon") ||
        (links[i].getAttribute("rel") === "shortcut icon")) {
          favicon = links[i].getAttribute("href");
      }
  }

  return favicon;
}

export const getEmbedData = async (url) => {
  try {
    const res = await normalFetch('GET', `${proxyServer}/${url}`, null);
    const data = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const metas = doc.getElementsByTagName('meta');
    const links = doc.getElementsByTagName('link');
    const favIcon = getFavicon(links);
    const ogImage = doc.querySelector("meta[property='og:image']")?.getAttribute("content");

    return {
      url: url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0],
      title: doc.title,
      description: metas.description.content,
      image: ogImage || favIcon || null
    }
    
  } catch(err) {
    throw new Error(err.message);
  }
}