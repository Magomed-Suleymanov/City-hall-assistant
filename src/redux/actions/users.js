export const loadUsers = () => (dispatch) => {
  dispatch({ type: 'users/load/start' });

  fetch(`/users`)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: 'users/load/success',
        payload: json,
      });
    });
};
