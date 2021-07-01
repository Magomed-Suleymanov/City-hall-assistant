export function Registration(login, password) {
  return (dispatch) => {
    dispatch({
      type: 'registration/start',
    });

    fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.stringify({
        login: login,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.login === undefined) {
          dispatch({ type: 'registration/error' });
        } else {
          dispatch({
            type: 'registration/success',
            payload: json,
          });
        }
      });
  };
}

// export const loginStart = (login, password) => {
//   return (dispatch) => {
//     dispatch({
//       type: "auth/login/start",
//     });
//
//     fetch("http://localhost:8000/users/auth", )
//       .then((res) => res.json())
//       .then((json) => {
//         if (json.login === undefined) {
//           dispatch({
//             type: "auth/login/error",
//           });
//         } else {
//           localStorage.setItem('user', json);
//           dispatch({
//             type: "auth/login/success",
//             payload: json,
//           });
//         }
//       })
//       .catch(() => {
//         dispatch({
//           type: "auth/login/error",
//         });
//       });
//   };
// };

export const loginStart = (login, password) => {
  return (dispatch) => {
    dispatch({
      type: 'login/started',
    });
    fetch(
      `/users/authorization/login=${login}/password=${password}`,
    )
      .then((response) => response.json())
      .then((json) => {

        dispatch({
          type: 'login/succeed',
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
        return dispatch({ type: 'login/error' });
      });
  };
};

export const authReset = () => {
  localStorage.removeItem('token');
  return {
    type: 'login/reset',
  };
};
