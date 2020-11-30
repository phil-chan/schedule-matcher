const initialState = {
  userEvents: [],
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case "RECIEVE_EVENT":
      return {
        ...state,
        userEvents: [...state.userEvents, action.event],
      };
    default:
    return state;
  }
}
