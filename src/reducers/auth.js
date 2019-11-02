export const initialState = {
  isLogged: false
}

export function auth(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_LOGGED': {
      return {
        ...state,
        isLogged: true
      }
    }
    default:
      return state;
  }
}

export const setLogged = () => {
  return {
    type: 'SET_USER_LOGGED'
  }
}

export const ACTIONS = {
  setLogged
}

export default auth;
