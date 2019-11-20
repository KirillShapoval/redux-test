import { combineReducers } from 'redux';
import getNews from './news';
import auth from './auth';
import getUsersProfile from './profile';

export const rootReducer = combineReducers({
  getNews,
  auth,
  getUsersProfile
})
