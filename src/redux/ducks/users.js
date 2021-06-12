const initialState = {
  items: [],
  usersLoading: false,

  token: "",
  authorizing: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const loginStart = () => {
  return dispatch => {

  }
}
