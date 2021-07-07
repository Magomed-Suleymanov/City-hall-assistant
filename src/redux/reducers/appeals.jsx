const initialState = {
  appeals: [],
  loadingAppeals: false,
};

export const appeals = (state = initialState, action) => {
  switch (action.type) {
    case 'loading/appeals/start':
      return {
        ...state,
        loadingAppeals: true,
      };
    case 'loading/appeals/success':
      return {
        ...state,
        loadingAppeals: false,
        appeals: action.payload,
      };
    case 'appeals/add/start':
      return {
        ...state,
        loading: true,
      };
    case 'appeals/add/success':
      return {
        ...state,
        loading: false,
        appeals: [action.payload, ...state.appeals],
      };

    case 'appeals/delete/start':
      return {
        ...state,
        loading: true,
      };
    case 'appeals/delete/success':
      return {
        ...state,
        loading: false,
        appeals: state.appeals.filter((appeal) => appeal.id !== action.payload),
      };

    default:
      return state;
  }
};