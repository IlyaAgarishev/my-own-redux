import React, { createContext } from "react";
import { ProviderProps } from "./types";

const Context = createContext({});

const Provider = (props: ProviderProps) => {
  return (
    <Context.Provider value={props.store}>{props.children}</Context.Provider>
  );
};

export default Provider;
export { Context };
