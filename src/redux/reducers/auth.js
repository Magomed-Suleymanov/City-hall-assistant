const initialState = {
  // user: [],
  // loginLoad: false,
  // registerLoad: false,
  // error: false,
  // token: localStorage.getItem('user')
  loading: false,
  token: JSON.parse(localStorage.getItem('token')) || {},
  authorizing: false,
  error: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'login/started':
      return {
        ...state,
        authorizing: true,
        error: false,
      };
    case 'login/succeed':
      return {
        ...state,
        token: localStorage.setItem('token', JSON.stringify(action.payload)),
        authorizing: false,
        error: false,
      };
    case 'login/error':
      return {
        ...state,
        authorizing: false,
        error: true,
      };
    case 'login/reset':
      return {
        ...state,
        token: null,
      };

    // case "auth/login/start":
    //   return {
    //     ...state,
    //     loginLoad: true,
    //     error: false,
    //   };
    // case "auth/login/success":
    //   return {
    //     ...state,
    //     token: action.payload,
    //     loginLoad: false,
    //   };
    // case "auth/login/error":
    //   return {
    //     ...state,
    //     error: true,
    //     loadingLogin: false,
    //   };

    default:
      return state;
  }
}
