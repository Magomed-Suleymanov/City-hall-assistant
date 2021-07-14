const initialState = {
  rating: [],
  loadingRatings: false,
};

export const rating = (state = initialState, action) => {
  switch (action.type) {
    case 'loading/rating/start':
      return {
        ...state,
        loadingRatings: true,
      };

    case 'loading/rating/success':
      return {
        ...state,
        rating: action.payload,
        loadingRatings: false,
      };

    case 'rating/add/start':
      return {
        ...state,
        loadingRatings: true,
      };

    case 'rating/add/success':
      return {
        ...state,
        rating: [...state.rating, action.payload],
        loadingRatings: false,
      };

    default:
      return state;
  }
};
