import initialState from "./initialState";
import { ReducerType } from "./types";

// Reducer - это протсо ф-ия, которая принимает текущее состояние(state) и action(который эммитит компонент) и
// возвращает новый state. Затем это состояние заменяет исходное состояние хранилища.
// Поэтому редакс не мутирует состояние, а возвращает его новые копии.

const Reducer: ReducerType = function (action, state = initialState) {
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

export default Reducer;
