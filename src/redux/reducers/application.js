const initialState = {
  items: [],
  defaultImg: [],
  loadingItems: false,
  toggleBlockDashBoard: false,
  loading: false,
};

export const application = (state = initialState, action) => {
  switch (action.type) {
    case 'loading/street/start':
      return {
        ...state,
        loadingItems: true,
      };

    case 'loading/street/success':
      return {
        ...state,
        items: action.payload,
        loadingItems: false,
      };

    case 'street/delete/start':
      return {
        ...state,
        loadingItems: true,
      };
    case 'street/delete/success':
      return {
        ...state,
        loading: false,
        items: state.items.filter((street) => street.id !== action.payload),
      };

    case 'loading/defaultImg/start':
      return {
        ...state,
      };

    case 'loading/defaultImg/success':
      return {
        ...state,
        defaultImg: action.payload,
      };

    case 'toggle/Navigation':
      return {
        ...state,
        toggleBlockDashBoard: !state.toggleBlockDashBoard,
      };

    default:
      return state;
  }
};
