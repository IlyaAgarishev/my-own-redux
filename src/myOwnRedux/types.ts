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
  getState: () => State;
  subscribe: (subscriber: Subscriber) => void;
  dispatch: (action: Action) => void;
}

export interface ProviderProps {
  store: Store;
  children: any;
}

export type IMapStateToProps = (state: State) => Partial<State>;
