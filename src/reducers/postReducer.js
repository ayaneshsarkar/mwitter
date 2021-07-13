import _ from 'lodash';
import { GET_POSTS, CREATE_POST } from '../actions/type';

const postReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_POSTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload }
    default: 
      return state;
  }
}

export default postReducer;