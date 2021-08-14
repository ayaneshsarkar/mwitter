import { GET_COMMENTS, CREATE_COMMENT, DELETE_COMMENT, GET_POST } from './type';
import { 
  getComments, 
  createComment, 
  deleteComment, 
  getCommentsByPosts 
} from '../asynchronus/Posts/comments';
import { getLikes } from '../asynchronus/Posts/like';
import { getPost } from '../asynchronus/Posts';

export const getAllComments = () => async dispatch => {
  try {
    const comments = await getComments();
    dispatch({ type: GET_COMMENTS, payload: comments });

  } catch(err) {
    throw new Error(err.message);
  }
}

export const addComment = (userId, postId, formData) => async dispatch => {
  try {
    const comment = await createComment(userId, postId, formData);
    const likes = await getLikes(postId, userId);
    const comments = await getCommentsByPosts(postId);
    const post = await getPost(postId);

    post.likes = likes;
    post.comments = comments;

    dispatch({ type: CREATE_COMMENT, payload: comment });
    dispatch({ type: GET_POST, payload: post });

  } catch(err) {
    throw new Error(err.message);
  }
}


export const removeComment = (commentId, userId, postId) => async dispatch => {
  try {
    await deleteComment(commentId);
    const likes = await getLikes(postId, userId);
    const comments = await getCommentsByPosts(postId);
    const post = await getPost(postId);

    post.likes = likes;
    post.comments = comments;

    dispatch({ type: DELETE_COMMENT, payload: commentId });
    dispatch({ type: GET_POST, payload: post });

  } catch(err) {
    throw new Error(err.message);
  }
}



