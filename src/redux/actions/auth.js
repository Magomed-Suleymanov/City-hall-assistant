// export function Registration(login, password) {
//   return (dispatch) => {
//     dispatch({
//       type: 'login/start',
//     });
//
//     fetch('http://localhost:8000/users', {
//       method: 'POST',
//       body: JSON.stringify({
//         login: login,
//         password: password,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         if (json.login === undefined) {
//           dispatch({ type: 'login/error' });
//         } else {
//           localStorage.setItem('token-auth', json.token);
//
//           dispatch({
//             type: 'login/success',
//             payload: json,
//           });
//         }
//       });
//   };
// }

export const loginStart = (login, password) => {
  return (dispatch) => {
    dispatch({ type: 'login/start' });

    fetch(`http://localhost:8000//auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        login: login,
        password: password
      })
    })
        .then((res) => res.json())
        .then((json) => {
          if (json.login === undefined) {
            dispatch({type: 'login/error'})
          } else {
            dispatch ({
              type: 'login/success',
              payload: json
            })
          }
        }) .catch(() => {
          dispatch({type: 'login/error'})
    })
  };
};
