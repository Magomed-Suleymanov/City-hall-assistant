const initialState = {
  items: [],
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

    case 'loading/modalStreets/start':
      return {
        ...state,
        listModalVisibility: false,
        loadingModalList: true,
      };

    case 'loading/modalStreets/success':
      return {
        ...state,
        modalListItems: action.payload,
        listModalVisibility: true,
        loadingModalList: false,
      };

    case 'deactivation/ModalListItems':
      return {
        ...state,
        listModalVisibility: false,
      };

    case 'add/Map':
      return {
        ...state,
        listVisibility: false,
        mapVisibility: true,
      };

    case 'toggle/Dashboard':
      return {
        ...state,
        toggleBlockDashBoard: !state.toggleBlockDashBoard,
      };

    default:
      return state;
  }
};
