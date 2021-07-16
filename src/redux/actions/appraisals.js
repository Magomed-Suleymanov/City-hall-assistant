export const loadingAppraisals = () => {
  return (dispatch) => {
    dispatch({
      type: 'loading/appraisals/start',
    });

    fetch(`/appraisals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'loading/appraisals/success',
          payload: json,
        });
      });
  };
};

export const addLike = (appealId, like, dislike, userId, login) => {
  return (dispatch) => {
    dispatch({
      type: 'appraisals/add/start',
    });

    fetch(`/appraisals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appealId: appealId,
        like: like,
        dislike: dislike,
        userId: userId,
        login: login,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'appraisals/add/success',
          payload: json,
        });
      });
  };
};
