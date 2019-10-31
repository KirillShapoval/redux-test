export const initialState = {
  formValidation: {
    username: null,
    password: null
  },
  isAuthenticated: false
}

export function authentication(state = initialState, action) {
  switch (action.type) {
    case 'FORM_VALIDATION_SUCCESS': {
      return {
        ...state,
        formValidation: {
          username: '**admin**',
          password: '12345'
        }
      }
    }
    case 'IS_AUTHENTICATED': {
      return {
        ...state,
        isAuthenticated: true
      }
    }
    default:
      return state;
  }
}

export const ValidationSuccess = () => {
  return {
    type: 'FORM_VALIDATION_SUCCESS'
  }
}

export const isAuthenticated = () => {
  return {
    type: 'IS_AUTHENTICATED'
  }
}

export const ACTIONS = {
  ValidationSuccess,
  isAuthenticated
}

export default authentication;
