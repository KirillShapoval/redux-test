const SET_USER_LOGGED = 'SET_USER_LOGGED';
const LOGIN_BUTTON_DISABLED = 'LOGIN_BUTTON_DISABLED';

export const initialState = {
  isLogged: false,
  isButtonDisabled: false
}

export function auth(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOGGED: {
      return {
        ...state,
        isLogged: true
      }
    }
    case LOGIN_BUTTON_DISABLED: {
      return {
        ...state,
        isButtonDisabled: true
      }
    }
    default:
      return state;
  }
}

export const setLogged = () => {
  return {
    type: SET_USER_LOGGED
  }
}

// export const asyncSetLogged = () => (
//   dispatch => {
//     setTimeout(() => {
//       dispatch(setLogged());
//     }, 2500)
//   }
// )

export const disabledLoginButton = () => {
  return {
    type: LOGIN_BUTTON_DISABLED
  }
}

export const ACTIONS = {
  setLogged,
  disabledLoginButton
}

// export const ACTIONS = {
//   asyncSetLogged,
//   disabledLoginButton
// }

export default auth;
