import { CREATE_USER } from './type';
import { signUp } from '../asynchronus/Home/SignUp';

export const register = formData => async dispatch => {
  const { user, acf } = await signUp(formData, formData.get('password'));
  user.acf = acf;

  dispatch({ type: CREATE_USER, payload: user });
}