import CreateStore from "./createStore";
import reducer from "./reducer";
import presist from "./presist";
import { getDefaultState } from "./utils";

const store = new CreateStore(reducer, getDefaultState());

// Сохраняем state в localStorage
presist.set(store.getState());

export default store;
