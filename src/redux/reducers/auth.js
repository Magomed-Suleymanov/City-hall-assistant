const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  loadingUsers: false,
  auth: false,
  loadingLogin: false,
  loadingRegistration: false,
  error: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/login/start':
      return {
        ...state,
        loadingLogin: true,
        error: false,
        auth: false,
      };
    case 'auth/login/success':
      return {
        ...state,
        user: action.payload,
        loadingLogin: false,
        auth: true,
      };
    case 'auth/login/error':
      return {
        ...state,
        error: true,
        loadingLogin: false,
        auth: false,
      };
    case 'auth/reset':
      return {
        ...state,
        user: {},
      };

    case 'Registration/start':
      return {
        ...state,
        loadingRegistration: true,
        error: false,
      };

    case 'Registration/success':
      return {
        ...state,
        loadingRegistration: false,
        user: action.payload,
      };

    case 'Registration/error':
      return {
        ...state,
        error: true,
        loadingRegistration: false,
      };

    default:
      return state;
  }
};
