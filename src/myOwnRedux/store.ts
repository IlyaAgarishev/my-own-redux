import CreateStore from "./createStore";
import Reducer from "./reducer";
import presist from "./presist";
import { getDefaultState } from "./utils";

const store = new CreateStore(Reducer, getDefaultState());

presist.set(store.getState());

export default store;
