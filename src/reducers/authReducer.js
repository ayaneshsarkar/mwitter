import { CREATE_USER } from '../actions/type';

const initState = {
  loggedIn: false,
  user: {}
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case CREATE_USER:
      return { ...state, loggedIn: true, user: action.payload };
    default:
      return state;
  }
}

export default authReducer;