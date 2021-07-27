import { server } from '../../config/server';
import { fetchSingleData } from '../../helpers/fetch';

const getTagId = async tag => {
  const res = await fetchSingleData('GET', `${server}/mweetTags?search=${tag}`, null);
  const tags = await res.json();

  return tags.length ? tags[0].id : null;
}

export const searchPostsByTerm = async term => {
  try {
    const res = await fetchSingleData('GET', `${server}/mweets?search=${term}`, null);
    const data = await res.json();
    return data;

  } catch (err) {
    throw new Error(err.message);
  }
}

export const searchPostsByTag = async tag => {
  try {
    const tagId = await getTagId(tag);
    
    if(tagId) {
      const res = await fetchSingleData('GET', `${server}/mweets?tags=${tagId}`, null);
      const data = await res.json();
      return data;

    } else {
      throw new Error('Invalid Tag!');
    }
    
  } catch(err) {
    throw new Error(err.message);
  }
}