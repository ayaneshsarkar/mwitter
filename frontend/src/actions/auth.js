import { 
  VERIFY_USER, 
  CREATE_USER, 
  SIGNIN_USER, 
  UPDATE_USER, 
  GET_SINGLE_USER,
  LOGOUT_USER,
  CLEAR_POSTS,
  CLEAR_SEARCH_POSTS,
  CLEAR_TAGS,
  CLEAR_COMMENTS,
  CLEAR_SINGLE_USER
} from './type';
import history from '../config/history';
import { signUp } from '../asynchronus/Home/SignUp';
import { signIn } from '../asynchronus/Home/SignIn';
import { verifyUser } from '../asynchronus/VerifyUser';
import { updateUser } from '../asynchronus/UpdateUser';
import { getUser } from '../asynchronus/User';

export const verifyAuth = () => async dispatch => {
  const user = await verifyUser();

  if(user) {
    dispatch({ type: VERIFY_USER, payload: user });
    // history.push('/posts');
  }
}

export const register = formData => async dispatch => {
  const { user, acf } = await signUp(formData, formData.get('password'));
  user.acf = acf;

  localStorage.setItem('userId', user.id);

  dispatch({ type: CREATE_USER, payload: user });
  history.push('/posts');
}

export const logIn = formData => async dispatch => {
  try {
    const user = await signIn(formData);

    dispatch({ type: SIGNIN_USER, payload: user });
    history.push('/posts');
    
  } catch(err) {
    throw new Error(err.message);
  }
  
}

export const updateCurrentUser = (user, formData) => async dispatch => {
  try {
    const { userData } = await updateUser(user, formData);
    dispatch({ type: UPDATE_USER, payload: userData });

  } catch(err) {
    throw new Error(err.message);
  }
}

export const getSingleUser = userId => async dispatch => {
  try {
    const user = await getUser(userId);
    dispatch({ type: GET_SINGLE_USER, payload: user });

  } catch(err) {
    throw new Error(err.message);
  }
}

export const logoutUser = () => async dispatch => {
  localStorage.removeItem('userId');
  localStorage.removeItem('userToken');

  dispatch({ type: LOGOUT_USER, payload: null });
  dispatch({ type: CLEAR_POSTS, payload: null });
  dispatch({ type: CLEAR_SEARCH_POSTS, payload: null });
  dispatch({ type: CLEAR_TAGS, payload: null });
  dispatch({ type: CLEAR_COMMENTS, payload: null });
  dispatch({ type: CLEAR_SINGLE_USER, payload: null });

  history.push('/');
}