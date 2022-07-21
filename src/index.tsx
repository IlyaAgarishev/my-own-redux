import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./myOwnRedux/provider";
import Store from "./myOwnRedux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={Store}>
    <h1>Testing how the redux works</h1>
    <h4 style={{ color: "green" }}>Check console to see redux state logger</h4>
    <App />
  </Provider>
);
