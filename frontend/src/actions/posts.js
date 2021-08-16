import { 
  GET_POSTS, 
  GET_POST, 
  CREATE_POST, 
  DELETE_POST, 
  GET_SEARCH_POSTS,
  GET_SEARCH_POST,
  GET_COMMENTS_BY_POSTS,
  GET_AUTHOR_POSTS
} from './type';
import { getPosts, getPost, deletePost, getAuthorSpecificPosts } from '../asynchronus/Posts';
import { searchPostsByTerm, searchPostsByTag } from '../asynchronus/Posts/searchPosts';
import createPost from '../asynchronus/Posts/createPost';
import { getCommentsByPosts } from '../asynchronus/Posts/comments';
import { getLikes, createOrDeleteLike } from '../asynchronus/Posts/like';

export const getAllPosts = userId => async dispatch => {
  try {
    const posts = await getPosts();

    if(posts) {
      for(const i in posts) {
        const likes = await getLikes(posts[i].id, userId);
        const comments = await getCommentsByPosts(posts[i].id);

        posts[i].likes = likes;
        posts[i].comments = comments;
      }
    }

    dispatch({ type: GET_POSTS, payload: posts });

  } catch(err) {
    throw new Error(err.message);
  }
}

export const getAllPostsByAuthor = authorId => async dispatch => {
  try {
    const posts = await getAuthorSpecificPosts(authorId);
    
    if(posts) {
      for(const i in posts) {
        const likes = await getLikes(posts[i].id, authorId);
        const comments = await getCommentsByPosts(posts[i].id);

        posts[i].likes = likes;
        posts[i].comments = comments;
      }
    }

    dispatch({ type: GET_AUTHOR_POSTS, payload: posts });

  } catch(err) {
    throw new Error(err.message);
  }
}

export const getSinglePost = (id, userId) => async dispatch => {
  try {
    const post = await getPost(id);
    const comments = await getCommentsByPosts(post.id);
    const likes = await getLikes(post.id, userId);

    post.likes = likes;
    post.comments = comments;

    dispatch({ type: GET_POST, payload: post });
    dispatch({ type: GET_COMMENTS_BY_POSTS, payload: comments });

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

export const removePost = id => async dispatch => {
  try {
    await deletePost(id);
    dispatch({ type: DELETE_POST, payload: id });

  } catch(err) {
    throw new Error(err.message);
  }
}

export const getPostsBySearch = (search, tag = false, userId) => async dispatch => {
  try {
    const posts = !tag ? await searchPostsByTerm(search) : await searchPostsByTag(search);

    if(posts) {
      for(const i in posts) {
        const likes = await getLikes(posts[i].id, userId);
        const comments = await getCommentsByPosts(posts[i].id);
        
        posts[i].likes = likes;
        posts[i].comments = comments;
      }
    }

    dispatch({ type: GET_SEARCH_POSTS, payload: posts });
    
  } catch(err) {
    console.error(err.message);
  }
}

export const likePost = (postId, userId, likeId = null, location = null) => async dispatch => {
  try {
    !likeId ? await createOrDeleteLike(postId) : await createOrDeleteLike(postId, likeId);
    
    const post = await getPost(postId);
    const likes = await getLikes(post.id, userId);
    const comments = await getCommentsByPosts(postId);
    post.likes = likes;
    post.comments = comments;

    dispatch({ type: GET_POST, payload: post });

    if(location && (location.includes('tag') || location.includes('search'))) {
      dispatch({ type: GET_SEARCH_POST, payload: post });
    }

  } catch(err) {
    throw new Error(err.message);
  }
}