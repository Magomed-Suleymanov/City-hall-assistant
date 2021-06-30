const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  loginLoad: false,
  registerLoad: false,
  error: false,
  authorizing: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'login/start':
      return {
        ...state,
        loginLoad: true,
        error: false,
      };
    case 'login/success':
      return {
        ...state,
        loginLoad: false,
        user: action.payload,
        authorizing: true,
      };

    case 'login/error': {
      return {
        ...state,
        error: true,
        loginLoad: false,
        authorizing: false,
      };
    }

    default:
      return state;
  }
}
