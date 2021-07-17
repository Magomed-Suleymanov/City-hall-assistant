const initialState = {
  items: [],
  loading: false,
};

export const streets = (state = initialState, action) => {
  switch (action.type) {
    case 'streets/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'streets/load/success':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    default:
      return state;
  }
};
