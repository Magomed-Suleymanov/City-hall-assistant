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
        appeals: action.payload,
        loadingAppeals: false,
      };
    case 'appeals/add/start':
      return {
        ...state,
        loading: true,
      };
    case 'appeals/add/success':
      return {
        ...state,
        appeals: [...state.appeals, action.payload],
        loading: false,
      };
    case 'change/status/start':
      return {
        ...state,
      };
    case 'change/status/success':
      return {
        ...state,
        appeals: [...state.appeals, action.payload],
      };

    case 'change/rating/start':
      return {
        ...state,
      };
    case 'change/rating/success':
      return {
        ...state,
        appeals: [...state, action.payload],
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
