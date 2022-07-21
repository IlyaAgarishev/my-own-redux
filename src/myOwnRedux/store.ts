import CreateStore from "./createStore";
import Reducer from "./reducer";
import INITIAL_STATE from "./initialState";
import presist from "./presist";

const Store = new CreateStore(Reducer, INITIAL_STATE);

presist.set(Store.getState());

export default Store;
