import { usersAPI } from '../api/api';
import { createSelector } from 'reselect';

const GET_USERS_PROFILE_REQUEST = 'GET_USERS_PROFILE_REQUEST';
const GET_USERS_PROFILE_SUCCESS = 'GET_USERS_PROFILE_SUCCESS';
const CLEAR_STORE = 'CLEAR_STORE';

export const initialState = {
  usersProfile: null,
  loading: false,
};

function profile(state = initialState, action) {
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
        loading: false,
        usersProfile: action.usersData
      };
    }
    case CLEAR_STORE: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
}

const getUsersData = () => {
  return (dispatch) => {
    dispatch({ type: GET_USERS_PROFILE_REQUEST });
      usersAPI.getUsersProfile().then(({ data }) => {
        dispatch({ type: GET_USERS_PROFILE_SUCCESS, usersData: data.data });
      });
  };
};

const clearStore = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_STORE });
  };
};

const getState = (state) => state.profile;
const getProfile = (state) => getState(state).usersProfile;

const selectSocial = createSelector(getProfile, (profile) => {
  if (!profile || !profile.socials) return null;
  return profile.socials.map((c) => {
    const keys = Object.keys(c);
    return {
      link: c[keys[0]],
      name: keys[0]
    }
  });
});

export const SELECTORS = {
  selectSocial
};

export const ACTIONS = {
  getUsersData,
  clearStore
};

export default profile;
