import { useContext, useEffect, useState } from "react";
import { Context } from "./provider";
import { State, Store } from "./types";
import { isEqual } from "lodash";

type SelectorCallback = (state: State) => any;

const useSelector = (selector: SelectorCallback) => {
  const [state, setState] = useState<State>({});
  const context = useContext(Context);

  useEffect(() => {
    const store: Store = context as Store;
    const certainState = selector(store.getState());
    setState(certainState);

    store.subscribe((previousState, currentState) => {
      const prevState = selector(previousState);
      const newState = selector(currentState);

      // Anti-Rerender logic
      const stateHasBeenChanged = !isEqual(prevState, newState);

      if (stateHasBeenChanged) {
        setState(newState);
      }
    });
  }, []);

  return state;
};

export default useSelector;
