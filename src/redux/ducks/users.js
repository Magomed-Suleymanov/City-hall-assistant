const initialState = {
  items: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'users/load/start':
      return {
        ...state,
      }

    case 'users/load/success':
      return {
        ...state,
        items: action.payload
      }

    default:
      return state;
  }
}

export function loadUsers() {
  return dispatch => {
    dispatch({type: 'users/load/start'})
    fetch(`http://localhost:8000/users`)
        .then(res => res.json())
        .then(json => {
          dispatch({
            type: 'users/load/success',
            payload: json,
          })
        })
  }
}
