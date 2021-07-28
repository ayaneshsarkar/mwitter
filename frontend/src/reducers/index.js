import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  auth: authReducer,
  posts: postReducer,
  searchResults: searchReducer
});