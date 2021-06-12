const initialState = {
  modalAuthVisible: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {

    case 'active/modalAuth':
      return {
        ...state,
        modalAuthVisible: true,
      };
    case 'delete/modalAuth':
      return {
        ...state,
        modalAuthVisible: false,
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

