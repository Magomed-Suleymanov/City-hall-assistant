const initialState = {
  appeals: [],
  loadingAppeals: false,
};


export const  appeals = (state = initialState, action) => {
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
    case "appeals/add/start":
      return {
        ...state,
        loading: true,
      };
    case "appeals/add/success":
      return {
        ...state,
        loading: false,
        notes: [action.payload, ...state.notes],
      }

    default:
      return state
  }

}