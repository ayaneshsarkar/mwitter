import { GET_TAGS } from './type';
import { getTags } from '../asynchronus/Posts/tags';

export const getAllTags = () => async dispatch => {
  try {
    const tags = await getTags();
    dispatch({ type: GET_TAGS, payload: tags });
    
  } catch(err) {
    throw new Error(err.message);
  }
}