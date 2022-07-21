import { createContext } from "react";
import { Store } from "./types";

export interface ProviderProps {
  store: Store;
  children: any;
}

const Context = createContext({});

const Provider = (props: ProviderProps) => {
  return (
    <Context.Provider value={props.store}>{props.children}</Context.Provider>
  );
};

export default Provider;
export { Context };
