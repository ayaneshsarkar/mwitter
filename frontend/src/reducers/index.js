import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import searchReducer from './searchReducer';
import tagReducer from './tagReducer';
import commentReducer from './commentReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  posts: postReducer,
  searchResults: searchReducer,
  tags: tagReducer,
  comments: commentReducer,
  singleUser: userReducer
});