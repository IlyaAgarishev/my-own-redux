import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Titles from "./components/Titles";
import { Provider, store } from "./myOwnRedux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // Передаем store в провайдер, так как нам нужен ф-ал react context, так как реакт понимает
  // когда в нем происходят изменения, а мы на эти измения подписываемся.
  <Provider store={store}>
    <App />
  </Provider>
);
