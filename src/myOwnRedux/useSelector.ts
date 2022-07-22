import { useEffect, useState } from "react";
import { State } from "./types";
import { isEqual } from "lodash";
import store from "./store";

type SelectorCallback = (state: State) => Partial<State>;

const useSelector = (selector: SelectorCallback) => {
  const [state, setState] = useState<State>({});

  useEffect(() => {
    const selectedState = selector(store.getState());
    // Сразу сеттим акутальное выбранное(selected) состояние.
    setState(selectedState);

    // Подписываемся на изменения состояния. Когда Store будет обновляться с помощью
    // экшенов, внутри ф-ии dispatch будут передаваться пердыдущее и актуальное состояние всем
    // слушателям.
    const unsubscribe = store.subscribe((previousState, currentState) => {
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

    return () => {
      // Отписываемся от изменения состояние, когда происходит демонтирование компонента
      unsubscribe();
    };
  }, []);

  return state;
};

export default useSelector;
