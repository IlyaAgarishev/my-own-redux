export type State = {
  [key: string]: any;
};

export type InitialState = State;

export type ReducerType = (action: Action, state: State) => State;

export type Subscriber = (state: State) => void;

export interface Action {
  type: string;
  payload: any;
}

export interface Store {
  subscribers: Array<Subscriber>;
  reducer: ReducerType;
  state: State;
}

export interface ProviderProps {
  store: Store;
  children: any;
}
