export function toggleDashboard() {
    return { type: 'toggle/Dashboard' };
}

export function addMap() {
    return { type: 'add/Map' };
}

export function deactModalList() {
    return { type: 'deact/ModalListItems' };
}

export const loadList = () => {
    return (dispatch) => {
        dispatch({ type: 'loading/street/start' });
        fetch('http://localhost:8000/streets')
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'loading/street/success',
                    payload: json,
                });
            });
    };
};

export const LoadModalList = (id) => {
    return (dispatch) => {
        dispatch({ type: 'loading/modalStreets/start' });
        fetch(`http://localhost:8000/streets/${id}`)
            .then((response) => response.json())
            .then((json) =>
                dispatch({
                    type: 'loading/modalStreets/success',
                    payload: json,
                }),
            );
    };
};