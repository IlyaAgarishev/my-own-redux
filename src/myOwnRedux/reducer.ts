import initialState from "./initialState";
import { ReducerType } from "./types";

const reducer: ReducerType = function (action, state = initialState) {
  switch (action.type) {
    case "CHANGE_AGE":
      return { ...state, age: action.payload };
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_WEIGHT":
      return { ...state, weight: action.payload };
    case "ADD_HOBBY": {
      const { hobbies } = state;

      return { ...state, hobbies: [...hobbies, action.payload] };
    }
    case "CLEAN_ALL": {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
