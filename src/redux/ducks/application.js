const initialState = {
  modalAuth: false,
  toggleBlockDashBoard: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case 'toggle/Dashboard':
      return {
        ...state,
        toggleBlockDashBoard: !state.toggleBlockDashBoard,
      };
    case 'active/modalAuth':
      return {
        ...state,
        modalAuth: true,
      };
    case 'delete/modalAuth':
      return {
        ...state,
        modalAuth: false,
      };

    default:
      return state;
  }
}

export function toggleDashboard() {
  return { type: 'toggle/Dashboard' };
}

export function AuthActive() {
  return { type: 'active/modalAuth' };
}

export function deleteModalAuth() {
  return { type: 'delete/modalAuth' };
}
