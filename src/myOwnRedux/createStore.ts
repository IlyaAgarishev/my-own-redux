import logger from "./logger";
import presist from "./presist";
import { Action, InitialState, ReducerType, State, Subscriber } from "./types";

export default class CreateStore {
  public subscribers: Array<Subscriber>;
  public reducer: ReducerType;
  public state: State;

  constructor(reducer: ReducerType, initialState: InitialState) {
    // subscribers - это просто список listeners которые слушают любое изменение state
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

    // Передаем данные о состоянии подписчикам
    this.subscribers.forEach((subscriber) => subscriber(prevState, newState));

    // Добавляем в localStorage новый state
    presist.set(newState);

    // Логгируем предыдущее состояни и нынешнее
    logger(prevState, newState, action);
  }

  getState() {
    return this.state;
  }
}
