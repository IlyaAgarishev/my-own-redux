export type State = {
  [key: string]: any;
};

export type InitialState = {
  name: string | null;
  age: number | null;
  weight: number | null;
  hobbies: string[];
};

export type ReducerType = (action: Action, state: State) => State;

export type Subscriber = (prevState: State, newState: State) => void;

export interface Action {
  type: string;
  payload?: any;
}

export interface Store {
  subscribers: Array<Subscriber>;
  reducer: ReducerType;
  state: State;
  getState: () => State;
  subscribe: (subscriber: Subscriber) => void;
  dispatch: (action: Action) => void;
}

export type IMapStateToProps = (state: State) => Partial<State>;
