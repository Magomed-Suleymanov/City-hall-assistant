const initialState = {
  users: [],
  authorizing: false,
  errorMessage: false,
  token: localStorage.getItem('token-auth'),
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'auth/started':
      return {
        ...state,
        authorizing: true,
        errorMessage: false,
      };
    case 'auth/succeed':
      return {
        ...state,
        authorizing: true,
        token: action.payload.token,
      };

    case 'auth/failed': {
      return {
        ...state,
        authorizing: false,
        errorMessage: true,
      };
    }

    default:
      return state;
  }
}
