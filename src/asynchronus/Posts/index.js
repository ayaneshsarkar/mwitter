import { server } from '../../config/server';
import { fetchData, fetchSingleData } from '../../helpers/fetch';

export const getPosts = async () => {
  try {
    const res = await fetchData('GET', `${server}/mweets`, null, false);
    const posts = await res.json();

    return posts;

  } catch(err) {
    throw new Error(err.message);
  }
}

export const deletePost = async id => {
  try {
    const res = await fetchSingleData('DELETE', `${server}/mweets/${id}`, null);
    const data = await res.json();

    return data;

  } catch(err) {
    throw new Error(err.message);
  }
}