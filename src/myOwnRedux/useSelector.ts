import { useContext, useEffect, useState } from "react";
import { Context } from "./provider";
import { State, Store } from "./types";
import { isEqual } from "lodash";

type SelectorCallback = (state: State) => Partial<State>;

const useSelector = (selector: SelectorCallback) => {
  const [state, setState] = useState<State>({});
  // Подписываемся на изменение контекста.
  const context = useContext(Context) as Store;

  useEffect(() => {
    const selectedState = selector(context.getState());
    // Сразу сеттим акутальное выбранное(selected) состояние.
    setState(selectedState);

    // Подписываемся на изменения состояния.
    context.subscribe((previousState, currentState) => {
      const prevState = selector(previousState);
      const newState = selector(currentState);

      // Anti-Rerender logic
      const stateHasBeenChanged = !isEqual(prevState, newState);

      // Если выбранное(selected) пользователем состояние изменилось,
      // то сеттим новый state. Если выбранное(selected) пользователем состояние НЕ изменилось, то ничего не
      // делаем. Таким образом реализована Anti-Rerender logic. Состояние сеттиться не будет,
      // соотвественно компонент, где вызван useSelect, не будет переренлериваться. Новый рендер
      // будет происходить только тогда, когда изменилась конкретная выбранная ячейка.
      if (stateHasBeenChanged) {
        setState(newState);
      }
    });
  }, []);

  return state;
};

export default useSelector;
