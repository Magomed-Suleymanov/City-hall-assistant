export const startLogin = (login, password, history) => {
  return (dispatch) => {
    dispatch({ type: 'auth/login/start' });

    fetch('/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login,
        password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.token) {
          dispatch({ type: 'auth/login/error' });
        } else {
          localStorage.setItem('user', JSON.stringify(json));
          history.push('/');
          dispatch({
            type: 'auth/login/success',
            payload: json,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: 'auth/login/error',
        });
      });
  };
};

export const authReset = () => {
  localStorage.removeItem('user');
  return {
    type: 'auth/reset',
  };
};

export const startRegistration = (
  firstName,
  lastName,
  email,
  login,
  password,
  history,
) => {
  return (dispatch) => {
    dispatch({
      type: 'Registration/start',
    });

    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        login,
        password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        history.push('/');
        dispatch({
          type: 'Registration/success',
          payload: json,
        });
      });
  };
};
