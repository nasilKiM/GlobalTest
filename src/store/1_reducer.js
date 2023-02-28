export function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return [...state, { id: state.length + 1, ...action.payload.item }];
    }
    case "DELETE": {
      return state.filter((v) => v.id !== action.payload.id);
    }
    default:
      return state;
  }
}

export default reducer;
