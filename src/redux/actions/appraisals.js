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

export const deleteLike = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'delete/like/start',
    });

    fetch(`/appraisals${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'delete/like/success',
          payload: id,
        });
      });
  };
};

export const deleteDislike = (id, like2) => {
  return (dispatch) => {
    dispatch({
      type: 'appraisals/delete/start',
    });

    fetch(`/appraisals${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'appraisals/delete/success',
          payload: id,
        });
      });
  };
};

export const changeOfLike = (id, like) => {
  return (dispatch) => {
    dispatch({
      type: 'change/like/start',
    });
    fetch(`appraisals/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        like: like,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'change/like/success',
          payload: id,
        });
      });
  };
};
