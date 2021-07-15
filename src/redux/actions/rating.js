export const loadingRatings = () => {
  return (dispatch) => {
    dispatch({ type: 'loading/rating/start' });

    fetch('/ratings')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'loading/rating/success',
          payload: json,
        });
      });
  };
};

export const addRating = (streetId, rating) => {
  return (dispatch) => {
    dispatch({
      type: 'rating/add/start',
    });
    fetch('/ratings', {
      method: 'POST',
      body: JSON.stringify({
        streetId: streetId,
        rating: rating,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'rating/add/success',
          payload: json,
        });
      });
  };
};
