import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import searchReducer from './searchReducer';
import tagReducer from './tagReducer';

export default combineReducers({
  auth: authReducer,
  posts: postReducer,
  searchResults: searchReducer,
  tags: tagReducer
});