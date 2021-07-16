export function addMap() {
  return { type: 'add/Map' };
}

export const loadList = () => {
  return (dispatch) => {
    dispatch({ type: 'loading/street/start' });
    fetch('/streets')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'loading/street/success',
          payload: json,
        });
      });
  };
};

export const LoadModalList = (id) => {
  return (dispatch) => {
    dispatch({ type: 'loading/modalStreets/start' });
    fetch(`/streets/${id}`)
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: 'loading/modalStreets/success',
          payload: json,
        }),
      );
  };
};

export const deleteStreet = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'street/delete/start',
    });

    fetch(`/streets/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'street/delete/success',
          payload: id,
        });
      });
  };
};
