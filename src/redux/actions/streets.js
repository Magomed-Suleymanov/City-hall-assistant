export const loadStreets = () => {
  return (dispatch) => {
    dispatch({ type: 'streets/load/start' });

    fetch('/streets')
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'streets/load/success',
          payload: json,
        });
      });
  };
};

export const addStreet = (address, latitude, longitude) => {
  return (dispatch) => {
    dispatch({ type: 'add/street/load' });

    fetch('/streets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        address,
        latitude,
        longitude,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'add/street/success',
          payload: json,
        });
      });
  };
};
