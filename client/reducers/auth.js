const intialState = {
    isFetching: false,
    isAuthenticated: false,
    user: {},
    errorMessage: '',
  }
  
  export default function auth(state = intialState, action) {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          isFetching: true,
          isAuthenticated: false,
          errorMessage: '',
        }
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isFetching: false,
          isAuthenticated: true,
          user: action.user,
        }
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isFetching: false,
          isAuthenticated: false,
          errorMessage: action.message,
        }
      case 'LOGOUT_SUCCESS':
        return {
          ...state,
          isFetching: false,
          isAuthenticated: false,
          user: null
        }
      case 'REGISTER_REQUEST':
        return {
          ...state,
          isFetching: true,
          isAuthenticated: false,
          errorMessage: ''
        }
      case 'REGISTER_FAILURE':
        return {
          ...state,
          isFetching: false,
          isAuthenticated: false,
          errorMessage: action.message
        }
      default:
        return state
    }
  }