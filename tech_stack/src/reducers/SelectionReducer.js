// reducers are always called with state and action
// instead of returning undefined as initial state of state we set it to null
export default (state = null, action) => {
  switch (action.type) {
    case "select_library":
      return action.payload;
    default:
      return state;
  }
};
