import INITIAL_STATE from "./initialState";
import presist from "./presist";

const getDefaultState = () => {
  const LocalStorageStateExists = presist.get();

  return LocalStorageStateExists ?? INITIAL_STATE;
};

export { getDefaultState };
