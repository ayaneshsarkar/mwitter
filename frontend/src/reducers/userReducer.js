import { GET_SINGLE_USER } from '../actions/type';

const initState = {};

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_SINGLE_USER:
      return { user: action.payload };
    default:
      return state;
  }
}

export default userReducer;