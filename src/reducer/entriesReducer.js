// Reducer for time entries
const entriesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return [...state, action.payload];
    case "REMOVE_ENTRY":
      return state.filter((_, i) => i !== action.index);
    case "CLEAR_ENTRIES":
      return [];
    default:
      return state;
  }
}

export default entriesReducer