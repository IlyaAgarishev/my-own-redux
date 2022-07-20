import logger from "./logger";
import { Action, InitialState, ReducerType, State, Subscriber } from "./types";

export default class CreateStore {
  public subscribers: Array<Subscriber>;
  public reducer: ReducerType;
  public state: State;

  constructor(reducer: ReducerType, initialState: InitialState = {}) {
    this.subscribers = [];
    this.reducer = reducer;
    this.state = initialState;
  }

  // subscribe: ф-ия, которая просто принимает колбек(subscriber) и добавляет его в subscribers
  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  dispatch(action: Action) {
    const prevState = this.state;
    const newState = this.reducer(action, this.state);
    this.state = newState;
    this.subscribers.forEach((subscriber) => subscriber(this.state));

    logger(prevState, newState);
  }

  getState() {
    return this.state;
  }
}
