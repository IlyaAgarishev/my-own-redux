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
Store is created by `createStore` function. Store is state keeper. `useSelector` is used to subscribe on store to see state changes. If required state field is changed, react component where `useSelector` is called will be re-render. You can find all this custom redux logic in `myOwnRedux` folder.

This is how  `useSelector` logic looks like:
```javascript
const useSelector = (selector: SelectorCallback) => {
  const [state, setState] = useState<State>({});

  useEffect(() => {
    const selectedState = selector(store.getState());
    setState(selectedState);

    const unsubscribe = store.subscribe((previousState, currentState) => {
      const prevState = selector(previousState);
      const newState = selector(currentState);

      // Anti-Rerender logic
      const stateHasBeenChanged = !isEqual(prevState, newState);

      if (stateHasBeenChanged) {
        setState(newState);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return state;
};
```

### How to start locally
1.  `npm install` - install all dependencies
2.  `npm start` - start a project

### Technologies used
- React
- Typescript
