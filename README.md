![logo](https://i.imgur.com/4Sre3gG.png)

# My Own Redux
### See demo: https://my-own-redux.netlify.app/

### About
My own redux implementation with typescript. Integrated this technology into react app to show how it works in real project. 

### Things that has been implemented:

- createStore(subscribe, unsubscribe, getState, dispatch)
- useSelector
- useDispatch
- reducer
- persist
- logger
- Anti-rerender logic (redux prevState and current state comparison)

![screenshot](https://i.imgur.com/JZnIqvR.png)

### How it works
Store is created by `createStore` function. Store is state keeper. `useSelector` is used to subscribe on store to see state changes. If required state field is changed, react component where `useSelector` will re-render. This is how  `useSelector` logic looks like:
```javascript
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
```
