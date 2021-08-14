import _ from 'lodash';
import { 
  GET_POSTS, 
  GET_POST, 
  CREATE_POST, 
  DELETE_POST, 
  GET_AUTHOR_POSTS 
} from '../actions/type';

const postReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_POSTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case GET_AUTHOR_POSTS:
      return { ..._.mapKeys(action.payload, 'id') };
    case GET_POST:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default: 
      return state;
  }
}

export default postReducer;