export const startLogin = (login, password) => {
    return (dispatch) => {
        dispatch({ type: "auth/login/start", });

        fetch("http://localhost:5000/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                login: login,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((json) => {
                if (json.login === undefined) {
                    dispatch({ type: "auth/login/error", });
                } else {
                    dispatch({
                        type: "auth/login/success",
                        payload: json,
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: "auth/login/error",
                });
            });
    };
};
