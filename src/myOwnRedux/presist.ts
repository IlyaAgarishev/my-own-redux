import INITIAL_STATE from "./initialState";
import { State } from "./types";

class Persist {
  private key: string;

  constructor() {
    this.key = "myOwnReduxStore";
  }

  set(state: State) {
    localStorage.setItem(this.key, JSON.stringify(state));
  }

  get() {
    const localStorageStateString = localStorage.getItem(this.key);

    if (localStorageStateString) {
      return JSON.parse(localStorage.getItem(this.key) as string);
    }

    return INITIAL_STATE;
  }
}

export default new Persist();
