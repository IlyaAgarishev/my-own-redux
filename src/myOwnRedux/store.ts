import CreateStore from "./createStore";
import Reducer from "./reducer";
import INITIAL_STATE from "./initialState";

const Store = new CreateStore(Reducer, INITIAL_STATE);

export default Store;
