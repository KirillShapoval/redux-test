import axios from 'axios';

const SET_USER_LOGGED_REQUEST = 'SET_USER_LOGGED_REQUEST';
const SET_USER_LOGGED_SUCCESS = 'SET_USER_LOGGED_SUCCESS';
const SET_USER_LOGGED_FAILURE = 'SET_USER_LOGGED_FAILURE';

export const initialState = {
  loading: false,
  isLogged: false,
  error: null,
  data: null
}

export function auth(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOGGED_REQUEST: {
      return {
        ...state,
        loading: true,
        err: false
      }
    }
    case SET_USER_LOGGED_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLogged: true,
        data: action.data
      }
    }
    case SET_USER_LOGGED_FAILURE: {
      return {
        ...state,
        loading: false,
        err: action.err
      }
    }
    default:
      return state;
  }
}

const setUserLoggedRequest = () => {
  return dispatch => {
    dispatch({ type: SET_USER_LOGGED_REQUEST})
  }
}

const setUserLoggedSuccess = ({ data }) => {
  return dispatch => {
    dispatch({ type: SET_USER_LOGGED_SUCCESS}, data)
  }
}

const setUserLoggedFailure = (error) => {
  return dispatch => {
    dispatch({ type: SET_USER_LOGGED_FAILURE }, error)
  }
}

const loginPost = ({ email, password }) => {
  const configSettings = {
    method: 'post',
    url: 'https://wearepush-learn-redux-task3-ba.herokuapp.com/api/v1/validate',
    data: {
      email: email,
      password: password
    },
    // headers: {
    //   'content-type': 'application/json'
    // }
  }

  return axios(configSettings)
}

const setLogged = ({ email, password }) => {
  return (dispatch) => {
    dispatch(setUserLoggedRequest());

  let promise = new Promise((resolve, reject) => {
    loginPost({ email, password })
    .then(res => {
      // console.log(res)
      dispatch(setUserLoggedSuccess(res));
      resolve(res);
    },
    error => {
      // console.log(error.response.data)
      dispatch(setUserLoggedFailure(error));
      reject(error.response)
    })
  })
  return promise;
  }
}

export const ACTIONS = {
  setLogged
}

export default auth;
