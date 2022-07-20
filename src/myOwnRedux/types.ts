export type State = {
  [key: string]: any;
};

export type InitialState = State;

export type ReducerType = (action: Action, state: State) => State;

export interface Action {
  type: string;
  payload: any;
}
