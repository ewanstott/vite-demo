import { initialState } from "./initialState";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };

    case "MINUS":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };

    default:
      console.log("Either new store or you made an error!");
      return state; // must remeber to return initial state when store comes alive
  }
}
