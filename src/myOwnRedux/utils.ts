import INITIAL_STATE from "./initialState";
import presist from "./presist";

const getDefaultState = () => {
  const LocalStorageStateExists = presist.get();

  // Если ячейка уже существует в localStorage, то вернем ее. Если ее нету, то возвращаем initialState.
  return LocalStorageStateExists ?? INITIAL_STATE;
};

export { getDefaultState };
