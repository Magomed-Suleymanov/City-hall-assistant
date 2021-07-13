const initialState = {
  appraisals: [],
  loadingAppraisals: false,
};

export const appraisals = (state = initialState, action) => {
  switch (action.type) {
    case 'loading/appraisals/start':
      return {
        ...state,
        loadingAppraisals: true,
      };
    case 'loading/appraisals/success':
      return {
        ...state,
        appraisals: action.payload,
        loadingAppraisals: false,
      };
    case 'appraisals/add/start':
      return {
        ...state,
        loadingAppraisals: true,
      };
    case 'appraisals/add/success':
      return {
        ...state,
        appraisals: [...state.appraisals, action.payload],
        loadingAppraisals: false,
      };
    case 'appraisals/delete/start':
      return {
        ...state,
        loadingAppraisals: true,
      };
    case 'appraisals/delete/success':
      return {
        ...state,
        appraisals: state.appraisals.filter(
          (appraisals) => appraisals.id !== action.payload,
        ),
        loadingAppraisals: false,
      };

    case 'delete/like/start':
      return {
        ...state,
        loadingAppraisals: true,
      };
    case 'delete/like/success':
      return {
        ...state,
        appraisals: state.appraisals.filter(
          (appraisals) => appraisals.id !== action.payload,
        ),
        loadingAppraisals: false,
      };

    case 'change/like/start':
      return {
        ...state,
      };
    case 'change/like/success':
      return {
        ...state,
        appraisals: [...state.appraisals, action.payload],
      };

    default:
      return state;
  }
};
