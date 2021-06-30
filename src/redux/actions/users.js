// export const loadUsers = () => (dispatch) => {
//   dispatch({ type: 'users/load/start' });
//
//   fetch(`http://localhost:8000/users`)
//     .then((response) => response.json())
//     .then((json) => {
//       dispatch({
//         type: 'users/load/success',
//         payload: json,
//       });
//     });
// };
