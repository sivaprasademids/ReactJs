// Reducer for time entries
const entriesReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return [...state, action.payload];
    case "REMOVE_ENTRY":
      return state.filter((_:any, i: any) => i !== action.index);
    case "CLEAR_ENTRIES":
      return [];
    default:
      return state;
  }
}

export default entriesReducer