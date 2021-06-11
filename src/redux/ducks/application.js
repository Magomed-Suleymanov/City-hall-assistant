const initialState = {
  items: [],
  toggleBlockDashBoard: false,
  loading: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case 'loading/img/start':
      return {
        ...state,
        loading: true,
      }

    case 'loading/img/success':
      return {
        ...state,
        items: action.payload,
        loading: true,
      }

    case 'toggle/Dashboard':
      return {
        ...state,
        toggleBlockDashBoard: !state.toggleBlockDashBoard,
      };

    default:
      return state;
  }
}

export const openList= () => {
  return (dispatch) => {
    dispatch({ type: 'loading/img/start' });
    fetch('http://localhost:8000/streets')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'loading/img/success',
          payload: json,
        });
      });
  };
}

export function toggleDashboard() {
  return { type: 'toggle/Dashboard' };
}

