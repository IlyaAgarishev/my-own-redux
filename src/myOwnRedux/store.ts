import CreateStore from "./createStore";
import Reducer from "./reducer";
import presist from "./presist";
import { getDefaultState } from "./utils";

const Store = new CreateStore(Reducer, getDefaultState());

presist.set(Store.getState());

export default Store;
