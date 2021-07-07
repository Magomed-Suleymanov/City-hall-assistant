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

export const addAppeal = (appeal, streetId) => {
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
        streetId:streetId,
        appeal:appeal,
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