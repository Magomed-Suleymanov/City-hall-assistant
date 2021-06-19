const initialState = {
  users: [],
  modalAuthVisibility: false,
  loginLoading: false,
  error: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'login/start':
      return {
        ...state,
        loginLoading: true,
        error: false,
      }

    case 'login/success':
      return {
        ...state,
        users: action.payload,
        loginLoading: false,
      }

    case 'login/error':
      return {
        ...state,
        error: true,
      }

    case 'active/modalAuth':
      return {
        ...state,
        modalAuthVisibility: true,
      };

    case 'delete/modalAuth':
      return {
        ...state,
        modalAuthVisibility: false,
      };

    default:
      return state;
  }
}

