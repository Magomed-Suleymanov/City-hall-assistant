const initialState = {
  items: [],
  toggleBlockDashBoard: false,
  loading: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
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

