const initialState = {
  modalAuthVisibility: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'active/modalAuth':
      return {
        ...state,
        modalAuthVisibility: true,
      };

    case 'delete/modalAuth':
      return {
        ...state,
        modalAuthVisibility: false,
      };

    default:
      return state;
  }
}

export function AuthActive() {
  return { type: 'active/modalAuth' };
}

export function deleteModalAuth() {
  return { type: 'delete/modalAuth' };
}
