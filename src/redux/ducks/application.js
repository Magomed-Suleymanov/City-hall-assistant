const initialState = {
  items: [],
  modalListItems: [],
  mapVisibility: true,
  listVisibility: false,
  listModalVisibility: false,
  toggleBlockDashBoard: false,
  loading: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case 'loading/street/start':
      return {
        ...state,
        listVisibility: false,
      };

    case 'loading/street/success':
      return {
        ...state,
        items: action.payload,
        listVisibility: true,
        mapVisibility: false,
      };

    case 'loading/modalStreets/start':
      return {
        ...state,
        listModalVisibility: false,
      };

    case 'loading/modalStreets/success':
      return {
        ...state,
        modalListItems: action.payload,
        listModalVisibility: true,
      };

    case 'deact/ModalListItems':
      return {
        ...state,
        listModalVisibility: false,
      };

    case 'add/Map':
      return {
        ...state,
        listVisibility: false,
        mapVisibility: true,
      };

    case 'toggle/Dashboard':
      return {
        ...state,
        toggleBlockDashBoard: !state.toggleBlockDashBoard,
      };

    default:
      return state;
  }
}

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
