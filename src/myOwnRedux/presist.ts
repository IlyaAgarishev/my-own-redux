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
    return JSON.parse(localStorage.getItem(this.key) as string);
  }
}

export default new Persist();
