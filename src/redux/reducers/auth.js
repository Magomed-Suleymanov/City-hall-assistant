const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    loadingLogin: false,
    loadingRegistration: false,
    loadingChanges: false,
    error: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "auth/login/start":
            return {
                ...state,
                loadingLogin: true,
                error: false,
            };
        case "auth/login/success":
            return {
                ...state,
                user: action.payload,
                loadingLogin: false,
            };
        case "auth/login/error":
            return {
                ...state,
                error: true,
                loadingLogin: false,
            };

        default:
            return state;
    }
}