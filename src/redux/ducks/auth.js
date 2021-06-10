const initialState = {
  modalAuth: false,

};

export default function auth(state = initialState, action) {
  switch (action.type) {

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


export function AuthActive() {
  return { type: 'active/modalAuth' };
}

export function deleteModalAuth() {
  return { type: 'delete/modalAuth' };
}

