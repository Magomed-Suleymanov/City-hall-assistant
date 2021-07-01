const initialState = {
  Items: [],
  modalListItems: [],
  mapVisibility: true,
  listVisibility: false,
  listModalVisibility: false,
  toggleBlockDashBoard: false,
  loading: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case 'loading/street/start':
      return {
        ...state,
        listVisibility: false,
      };

    case 'loading/street/success':
      return {
        ...state,
        items: action.payload,
        listVisibility: true,
        mapVisibility: false,
      };

    case 'loading/modalStreets/start':
      return {
        ...state,
        listModalVisibility: false,
      };

    case 'loading/modalStreets/success':
      return {
        ...state,
        modalListItems: action.payload,
        listModalVisibility: true,
      };

    case 'deact/ModalListItems':
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
}