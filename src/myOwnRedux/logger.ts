import { Action, State } from "./types";

export default (prevState: State, newState: State, action: Action) => {
  console.log(
    `%cdipatched %c${JSON.stringify(action)}`,
    "color:green; font-weight:bold;",
    "color:green; font-weight:bold;"
  );
  console.log({ prevState, newState });
};
