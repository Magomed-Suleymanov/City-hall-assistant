const initialState = {
  appraisals: [],
  loadingAppraisals: false,
};

export const appraisals = (state = initialState, action) => {
  switch (action.type) {
    case 'loading/appraisals/start':
      return {
        ...state,
        loadingAppeals: true,
      };
    case 'loading/appraisals/success':
      return {
        ...state,
        appraisals: action.payload,
        loadingAppeals: false,
      };
    case 'appraisals/add/start':
      return {
        ...state,
        loadingAppeals: true,
      };
    case 'appraisals/add/success':
      return {
        ...state,
        appraisals: [...state.appraisals, action.payload],
        loadingAppeals: false,
      };
    case 'appraisals/delete/start':
      return {
        ...state,
        loadingAppeals: true,
      };
    case 'appraisals/delete/success':
      return {
        ...state,
        appraisals: state.appraisals.filter(
          (appeal) => appeal.id !== action.payload,
        ),
        loadingAppeals: false,
      };
    default:
      return state;
  }
};
