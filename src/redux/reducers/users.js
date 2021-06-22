const initialState = {
  items: [],
  token: localStorage.getItem('token-auth'),
  usersLoading: false,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'users/load/start': {
      return {
        ...state,
        usersLoading: true,
      };
    }

    case 'users/load/success':
      return {
        ...state,
        usersLoading: false,
        items: action.payload,
      };

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
