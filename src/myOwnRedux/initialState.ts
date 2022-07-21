import presist from "./presist";
import { InitialState } from "./types";

const INITIAL_STATE: InitialState = {
  name: null,
  age: null,
  weight: null,
  hobbies: ["breathing"],
};

const LocalStorageStateExists = presist.get();

export default LocalStorageStateExists ?? INITIAL_STATE;
