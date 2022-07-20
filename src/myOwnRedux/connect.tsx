import React from "react";
import { Context } from "./provider";
import { Store } from "./types";

export default function Connect(Comp: React.FC<any>) {
  return class extends React.Component {
    static contextType = Context;

    componentDidMount() {
      const store: Store = this.context as Store;
      this.setState(store.getState());
      store.subscribe((reduxState) => {
        console.log({ reduxState });
        this.setState(reduxState);
      });
    }

    render() {
      return <Comp {...this.state} />;
    }
  };
}
