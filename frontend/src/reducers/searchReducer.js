import _ from 'lodash';
import { GET_SEARCH_POSTS, DELETE_POST } from '../actions/type';

const searchReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_SEARCH_POSTS:
      return { ..._.mapKeys(action.payload, 'id') };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default: 
      return state;
  }
}

export default searchReducer;