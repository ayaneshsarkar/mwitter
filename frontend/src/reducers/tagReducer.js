import _ from 'lodash';
import { GET_TAGS, CLEAR_TAGS } from '../actions/type';

const tagReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_TAGS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case CLEAR_TAGS:
      return {  };
    default:
      return state;
  }
}

export default tagReducer;