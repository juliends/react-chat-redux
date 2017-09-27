export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload.messages;
    case 'CREATE_MESSAGES':
      // [...state, action.payload];
      const newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
}
