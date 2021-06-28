const initialState = {
  items: [],
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

    default:
      return state;
  }
}
