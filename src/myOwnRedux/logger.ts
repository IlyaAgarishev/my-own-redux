import { State } from "./types";

export default (prevState: State, newState: State) => {
  console.log({ prevState, newState });
};
