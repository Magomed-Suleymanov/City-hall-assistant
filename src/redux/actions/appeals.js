export const loadingAppeals = () => {
  return (dispatch) => {
    dispatch({
      type: 'loading/appeals/start',
    });

    fetch(`/appeals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'loading/appeals/success',
          payload: json,
        });
      });
  };
};

export const addAppeal = (appeal, streetId, status) => {
  return (dispatch) => {
    dispatch({
      type: 'appeals/add/start',
    });

    fetch(`/appeals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appeal: appeal,
        streetId: streetId,
        status: status,
        date: new Date().toLocaleDateString(),
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'appeals/add/success',
          payload: json,
        });
      });
  };
};

export const deleteAppeals = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'appeals/delete/start',
    });

    fetch(`/appeals/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'appeals/delete/success',
          payload: id,
        });
      });
  };
};

export const changeOfStatus = (id, status) => {
  return (dispatch) => {
    dispatch({
      type: 'change/status/start',
    });
    fetch(`appeals/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        status: status,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'change/status/success',
          payload: id,
        });
      });
  };
};
export const changeRating = (id, rating) => {
  return (dispatch) => {
    dispatch({
      type: 'change/rating/start',
    });
    fetch(`appeals/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        rating: rating,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'change/rating/success',
          payload: id,
        });
      });
  };
};
