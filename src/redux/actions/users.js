export const loadUsers = () => (dispatch) => {
  dispatch({ type: 'users/load/start' });

  fetch(`http://localhost:5000/users`)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: 'users/load/success',
        payload: json,
      });
    });
};
