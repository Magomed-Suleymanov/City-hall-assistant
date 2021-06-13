import auth from "./auth";

const initialState = {
  items: [],
  usersLoading: false,

  token: "",
  authorizing: false,
  errorMessage: false,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'users/load/start': {
      return {
        ...state,
        usersLoading: true,
      }
    }

    case 'users/load/success':
      return {
        ...state,
        usersLoading: false,
        items: action.payload
      }

    case 'auth/started':
      return {
          ...state,
          authorizing: true,
          errorMessage: false,
      }
      case 'auth/succeed':
          return {
              ...state,
              authorizing: false,
              token: action.payload.token
          }

      case 'auth/failed': {
          return {
              ...state,
              authorizing: false,
              errorMessage: true,
          }
      }

    default:
      return state;
  }
}

export const loadUsers = () => (dispatch) => {
  dispatch({type: 'users/load/start'})

  fetch(`http://localhost:8000/users`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'users/load/success',
          payload: json,
        })
      })
}

export const loginStart = (login, password) => (dispatch) => {
  dispatch({type: 'auth/started'})

  fetch(` http://localhost:8000/users`)
      .then(response => response.json())
      .then((json) => {
          const random = Math.random();

          if (random < 0.5) {
              dispatch({
                  type: "auth/failed",
                  payload: json
              })
          }
          else {
              dispatch({
                  type: 'auth/succeed',
                  payload: json
              })
          }
      })
}
