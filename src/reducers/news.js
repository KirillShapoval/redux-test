import { usersAPI } from '../api/api';

const GET_ALL_NEWS_REQUEST = 'GET_ALL_NEWS_REQUEST';
const GET_ALL_NEWS_SUCCESS = 'GET_ALL_NEWS_SUCCESS';
const GET_ALL_NEWS_FAIL = 'GET_ALL_NEWS_FAIL';
const CLEAR_STORE = 'CLEAR_STORE';

export const initialState = {
  newsArticles: null,
  loading: false
}

function news(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_NEWS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_ALL_NEWS_SUCCESS: {
      return {
        ...state,
        loading: false,
        newsArticles: action.news
      }
    }
    case GET_ALL_NEWS_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    case CLEAR_STORE: {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
}

const getAllNews = () => {
  return dispatch => {
    dispatch({type: GET_ALL_NEWS_REQUEST});
      usersAPI.getNews().then(({data}) => {
        // console.log(data);
        dispatch({type: GET_ALL_NEWS_SUCCESS, news: data.data})
      });
  };
}

const clearStore = () => {
  return dispatch => {
    dispatch({ type: CLEAR_STORE })
  }
}

export const ACTIONS = {
  getAllNews,
  clearStore
}

export default news;
