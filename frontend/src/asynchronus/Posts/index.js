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

export const getAuthorSpecificPosts = async (authorId) => {
  try {
    const res = await fetchData('GET', `${server}/mweets?author=${authorId}`, null, false);
    const posts = await res.json();

    return posts;

  } catch(err) {
    throw new Error(err.message);
  }
}

export const getPost = async id => {
  try {
    const res = await fetchData('GET', `${server}/mweets/${id}`, null, false);
    const post = await res.json();

    return post;

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

export const getMediaUrl = async mediaId => {
  try {
    const res = await fetchSingleData('GET', `${server}/media/${mediaId}`, null);
    const data = await res.json();

    return data ? data.media_details.sizes.full.source_url : null;

  } catch(err) {
    console.error(err.message);
  }
}

export const getUser = async userId => {
  try {
    const res = await fetchSingleData('GET', `${server}/users/${userId}`, null);
    const data = await res.json();
  
    return data;
    
  } catch(err) {
    console.error(err.message);
  }
}