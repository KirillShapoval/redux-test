import { combineReducers } from 'redux';
import getNews from './news';
import authentication from './authentication';

export const rootReducer = combineReducers({
  getNews,
  authentication
})
