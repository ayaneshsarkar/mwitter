import { GET_SINGLE_USER, CLEAR_SINGLE_USER } from '../actions/type';

const initState = {};

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_SINGLE_USER:
      return { user: action.payload };
    case CLEAR_SINGLE_USER:
      return {  };
    default:
      return state;
  }
}

export default userReducer;