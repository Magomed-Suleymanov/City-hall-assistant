const initialState = {
  users: [],
  loadingRegistration: false,
  recruiter: JSON.parse(localStorage.getItem("user")) || {},

  // authorizing: false,
  // errorMessage: false,
  // token: JSON.parse(localStorage.getItem("user")) || {},
};

export default function auth(state = initialState, action) {
  switch (action.type) {

    case "auth/registration/start":
      return {
        ...state,
        error: false,
        loadingRegistration: true,
      };
    case "auth/registration/success":
      if (action.payload.error !== undefined) {
        return {
          ...state,
          loadingRegistration: false,
          error: true,
        };
      }
      if (action.checkbox) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
      return {
        ...state,
        loadingRegistration: false,
        recruiter: action.payload,
      };

















    // case 'auth/started':
    //   return {
    //     ...state,
    //     authorizing: true,
    //     errorMessage: false,
    //   };
    // case 'auth/succeed':
    //   return {
    //     ...state,
    //     authorizing: true,
    //   };
    //
    // case 'auth/failed': {
    //   return {
    //     ...state,
    //     authorizing: false,
    //     errorMessage: true,
    //   };
    // }

    default:
      return state;
  }
}
