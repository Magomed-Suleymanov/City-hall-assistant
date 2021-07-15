const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  streets: [],
  loadingUsers: false,
  loadingLogin: false,
  loadingRegistration: false,
  error: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/login/start':
      return {
        ...state,
        loadingLogin: true,
        error: false,
      };
    case 'auth/login/success':
      return {
        ...state,
        user: action.payload,
        loadingLogin: false,
      };
    case 'auth/login/error':
      return {
        ...state,
        error: true,
        loadingLogin: false,
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

    case 'streets/load/start':
      return {
        ...state,
        loadingUsers: true,
      };

    case 'streets/load/success':
      return {
        ...state,
        loadingUsers: false,
        streets: action.payload,
      };

    default:
      return state;
  }
};
