const initialState = {
  items: [],
  appeals: [],
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

    case 'loading/appeals/start':
      return {
        ...state,
      };
    case 'loading/appeals/success':
      return {
        ...state,
        appeals: action.payload,
      };

    case 'add/text/start' :
      return {
        ...state,
      }
    case 'add/text/success' :
      return {
        ...state,
        appeals: action.payload
      }


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
}
