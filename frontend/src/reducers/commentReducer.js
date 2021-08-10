import _ from 'lodash';
import { 
  GET_COMMENTS, 
  CREATE_COMMENT, 
  DELETE_COMMENT, 
  GET_COMMENTS_BY_POSTS 
} from '../actions/type';

const commentReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_COMMENTS:
      return { ..._.mapKeys(action.payload, 'id') };
    case GET_COMMENTS_BY_POSTS:
      return { ..._.mapKeys(action.payload, 'id') };
    case CREATE_COMMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_COMMENT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

export default commentReducer;