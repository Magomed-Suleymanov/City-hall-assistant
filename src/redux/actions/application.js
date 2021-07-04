export function toggleDashboard() {
  return { type: 'toggle/Dashboard' };
}

export function addMap() {
  return { type: 'add/Map' };
}

export function deactivationModalList() {
  return { type: 'deactivation/ModalListItems' };
}

export const loadList = () => {
  return (dispatch) => {
    dispatch({ type: 'loading/street/start' });
    fetch('/streets')
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
    fetch(`/streets/${id}`)
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: 'loading/modalStreets/success',
          payload: json,
        }),
      );
  };
};

export const loadAppeals = () => {
  return (dispatch) => {
    dispatch({ type: 'loading/appeals/start' });
    fetch('/appeals')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'loading/appeals/success',
          payload: json,
        });
        console.log(json);
      });
  };
};

export const LoadAppealsModal = (id) => {
  return (dispatch) => {
    dispatch({ type: 'loading/appeals/start' });
    fetch(`/appeals/${id}`)
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: 'loading/appeals/success',
          payload: json,
        }),
      );
  };
};


export const AddAppeals = (appeal,) => {
  return (dispatch) => {
    dispatch({
      type: 'add/text/start',
    });

    fetch(`/appeals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        appeal:appeal,

      }),
    }).then((res) =>
      res.json().then((json) => {
        dispatch({
          type: 'add/text/success',
          payload: json,
        });
      }),
    );
  };
}
