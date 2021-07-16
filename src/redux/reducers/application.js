const initialState = {
  items: [],
  defaultImg: [],
  loadingItems: false,
  modalListItems: [],
  loadingModalList: false,
  mapVisibility: true,
  listVisibility: false,
  listModalVisibility: false,
  toggleBlockDashBoard: false,
  loading: false,
};

export const application = (state = initialState, action) => {
  switch (action.type) {
    case 'loading/street/start':
      return {
        ...state,
        listVisibility: false,
        loadingItems: true,
      };

    case 'loading/street/success':
      return {
        ...state,
        items: action.payload,
        listVisibility: true,
        mapVisibility: false,
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

    case 'add/Map':
      return {
        ...state,
        listVisibility: false,
        mapVisibility: true,
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
