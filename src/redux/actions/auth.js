export function Registration(login, password) {
  return (dispatch) => {
    dispatch({
      type: 'login/start',
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
          dispatch({ type: 'login/error' });
        } else {
          localStorage.setItem('token-auth', json.token);

          dispatch({
            type: 'login/success',
            payload: json,
          });
        }
      });
  };
}

