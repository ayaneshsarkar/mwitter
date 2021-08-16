import _ from 'lodash';
import { 
  GET_SEARCH_POSTS, 
  GET_SEARCH_POST, 
  DELETE_POST, 
  CLEAR_SEARCH_POSTS 
} from '../actions/type';

const searchReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_SEARCH_POSTS:
      return { ..._.mapKeys(action.payload, 'id') };
    case GET_SEARCH_POST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_POST:
      return _.omit(state, action.payload);
    case CLEAR_SEARCH_POSTS:
      return {  };
    default: 
      return state;
  }
}

export default searchReducer;