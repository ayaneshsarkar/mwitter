import { server } from "../../config/server";
import { fetchSingleData } from "../../helpers/fetch";

export const getComments = async () => {
  try {
    const res = await fetchSingleData('GET', `${server}/comments`, null);
    const data = await res.json();

    return data;

  } catch(err) {
    throw new Error(err.message);
  }
}

export const getCommentsByPosts = async postId => {
  try {
    const res = await fetchSingleData('GET', `${server}/comments?post=${postId}`, null);
    const data = await res.json();

    return data;

  } catch(err) {
    throw new Error(err.message);
  }
}

export const createComment = async (userId, postId, formData) => {
  try {
    const comment = {
      author: userId,
      content: { raw: formData.get('title') },
      post: postId
    };
  
    const res = await fetchSingleData('POST', `${server}/comments`, comment);
    const data = await res.json();

    return data;

  } catch(err) {
    throw new Error(err.message);
  }
}

export const deleteComment = async commentId => {
  try {
    const res = await fetchSingleData('DELETE', `${server}/${commentId}`, null);
    const data = await res.json();

    return data;

  } catch(err) {
    throw new Error(err.message);
  }
}

