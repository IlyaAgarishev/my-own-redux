import store from "./store";
import { Action } from "./types";

const useDispatch = () => {
  return (action: Action) => {
    store.dispatch(action);
  };
};

export default useDispatch;
