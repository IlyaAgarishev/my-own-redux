import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Titles from "./components/Titles";
import { Provider, Store } from "./myOwnRedux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
