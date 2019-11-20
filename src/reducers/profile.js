import axios from 'axios';

const GET_USERS_PROFILE_REQUEST = 'GET_USERS_PROFILE_REQUEST';
const GET_USERS_PROFILE_SUCCESS = 'GET_USERS_PROFILE_SUCCESS';
const GET_USERS_PROFILE_FAIL = 'GET_USERS_PROFILE_FAIL';
const CLEAR_STORE = 'CLEAR_STORE';

export const initialState = {
  usersProfile: null,
  loading: false,
  error: null
};

function getUsersProfile(state = initialState, action) {
  //console.log(action)
  switch (action.type) {
    case GET_USERS_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_USERS_PROFILE_SUCCESS: {
      return {
        ...state,
        usersProfile: action.usersData,
        loading: false
      };
    }
    case GET_USERS_PROFILE_FAIL: {
      // const { message, status } = action.data;
      console.log('message', action.error.message);
      console.log('status', action.error.status);
      return {
        ...state,
        loading: false,
        error: action.error
      };
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

const getUsersData = () => {
  const requestUsersProfile = axios.get(
    'https://wearepush-learn-redux-task3-ba.herokuapp.com/api/v1/user-info/1'
  );

  return (dispatch) => {
    dispatch({ type: GET_USERS_PROFILE_REQUEST });
      requestUsersProfile.then(({ data }) => {
        // console.log(data);
        dispatch({ type: GET_USERS_PROFILE_SUCCESS, usersData: data.data });
      });
  };
};

const getError = () => {
  const requestError = axios.get(
    'https://wearepush-learn-redux-task3-ba.herokuapp.com/api/v1/user-info/2'
  );
  return (dispatch) => {
    dispatch({ type: GET_USERS_PROFILE_REQUEST });
    requestError.then((res) => {
      console.log(res);
      dispatch({ type: GET_USERS_PROFILE_FAIL, error: res.data });
    });
  };
};

const clearStore = () => {
  return dispatch => {
    dispatch({ type: CLEAR_STORE })
  }
}

export const ACTIONS = {
  getUsersData,
  getError,
  clearStore
};

export default getUsersProfile;
