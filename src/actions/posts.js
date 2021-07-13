import { GET_POSTS, CREATE_POST } from './type';
import { getPosts } from '../asynchronus/Posts';
import createPost from '../asynchronus/Posts/createPost';

export const getAllPosts = () => async dispatch => {
  try {
    const posts = await getPosts();
    dispatch({ type: GET_POSTS, payload: posts });

  } catch(err) {
    throw new Error(err.message);
  }
}

export const addPost = formData => async dispatch => {
  try {
    const post = await createPost(formData);
    dispatch({ type: CREATE_POST, payload: post });

  } catch(err) {
    throw new Error(err.message);
  }
}