import { server } from '../../config/server';
import { fetchData } from '../../helpers/fetch';

export const getPosts = async () => {
  try {
    const res = await fetchData('GET', `${server}/mweets`, null, false);
    const posts = await res.json();

    return posts;

  } catch(err) {
    throw new Error(err.message);
  }
}