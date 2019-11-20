import axios from 'axios';

const GET_ALL_NEWS_REQUEST = 'GET_ALL_NEWS_REQUEST';
const GET_ALL_NEWS_SUCCESS = 'GET_ALL_NEWS_SUCCESS';
const GET_ALL_NEWS_FAIL = 'GET_ALL_NEWS_FAIL';


export const initialState = {
  newsArticles: [],
  loading: false
}

function getNews(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_NEWS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    };
    case GET_ALL_NEWS_SUCCESS: {
      return {
        ...state,
        newsArticles: action.news,
        loading: false
      }
    };
    case GET_ALL_NEWS_FAIL: {
      return {
        ...state,
        loading: false
      }
    };
    default:
      return state;
  }
}

const getAllNews = () => {
  const requestNews = axios.get('https://wearepush-learn-redux-task3-ba.herokuapp.com/api/v1/news');

  return dispatch => {
    dispatch({type: GET_ALL_NEWS_REQUEST});
    setTimeout(() => {
      requestNews.then(({data}) => {
        // console.log(data);
        dispatch({type: GET_ALL_NEWS_SUCCESS, news: data.data})
      });
    }, 1000)
  };
}

export const ACTIONS = {
  getAllNews
}

export default getNews;
