import { VERIFY_USER, CREATE_USER, SIGNIN_USER, UPDATE_USER } from './type';
import history from '../config/history';
import { signUp } from '../asynchronus/Home/SignUp';
import { signIn } from '../asynchronus/Home/SignIn';
import { verifyUser } from '../asynchronus/VerifyUser';
import { updateUser } from '../asynchronus/UpdateUser';

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