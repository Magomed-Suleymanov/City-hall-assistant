export function loginStart(login, password) {
    return dispatch => {
        dispatch({
            type:'login/start'
        })

        fetch('http://localhost:8000/auth', {
            method: 'POST',
            body: JSON.stringify({
                login: login,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        )
            .then(response => response.json())
            .then(json => {
                if (json.login === undefined) {
                    dispatch({type: 'login/error'})
                } else {
                    dispatch({
                        type: 'login/success',
                        payload: json,
                    })
                }
            })
    }
}

export function AuthActive() {
    return { type: 'active/modalAuth' };
}

export function deleteModalAuth() {
    return { type: 'delete/modalAuth' };
}