import { combineReducers } from 'redux';
import getNews from './news';
import auth from './auth';

export const rootReducer = combineReducers({
  getNews,
  auth
})
