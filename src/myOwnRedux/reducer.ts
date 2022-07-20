import { ReducerType } from "./types";

const Reducer: ReducerType = function (action, state) {
  switch (action.type) {
    case "CHANGE_AGE":
      return { ...state, age: action.payload };
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_WEIGHT":
      return { ...state, weight: action.payload };
    default:
      return state;
  }
};

export default Reducer;
