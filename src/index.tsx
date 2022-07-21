import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider, Store } from "./myOwnRedux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={Store}>
    <h1>Testing how my-own-redux works</h1>
    <h4>
      Check console to see redux state,{" "}
      <span style={{ color: "green" }}>dispatch</span> and{" "}
      <span style={{ color: "red" }}>re</span>-
      <span style={{ color: "blue" }}>render</span> logger
    </h4>
    <App />
  </Provider>
);
