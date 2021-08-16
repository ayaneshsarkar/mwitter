import { 
  VERIFY_USER, 
  CREATE_USER, 
  SIGNIN_USER, 
  UPDATE_USER,
  LOGOUT_USER 
} from '../actions/type';

const initState = {
  loggedIn: false,
  user: {}
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case VERIFY_USER:
      return { ...state, loggedIn: true, user: action.payload };
    case CREATE_USER:
      return { ...state, loggedIn: true, user: action.payload };
    case SIGNIN_USER:
      return { ...state, loggedIn: true, user: action.payload };
    case UPDATE_USER:
      return { ...state, loggedIn: true, user: action.payload };
    case LOGOUT_USER:
      return { ...state, loggedIn: false, user: {} }
    default:
      return state;
  }
}

export default authReducer;