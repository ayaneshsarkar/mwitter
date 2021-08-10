import { GET_COMMENTS, CREATE_COMMENT, DELETE_COMMENT } from './type';
import { getComments, createComment, deleteComment } from '../asynchronus/Posts/comments';

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
    dispatch({ type: CREATE_COMMENT, payload: comment });

  } catch(err) {
    throw new Error(err.message);
  }
}


export const removeComment = commentId => async dispatch => {
  try {
    await deleteComment(commentId);
    dispatch({ type: DELETE_COMMENT, payload: commentId });

  } catch(err) {
    throw new Error(err.message);
  }
}



