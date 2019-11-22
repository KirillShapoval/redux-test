import { combineReducers } from 'redux';
import news from './news';
import auth from './auth';
import profile from './profile';

export const rootReducer = combineReducers({
  news,
  auth,
  profile
})
