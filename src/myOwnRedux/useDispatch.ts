import { useContext, useEffect, useState } from "react";
import Store from "./store";
import { Action } from "./types";

const useDispatch = () => {
  return (action: Action) => {
    Store.dispatch(action);
  };
};

export default useDispatch;
