import React from "react";
import { Context } from "./provider";
import { IMapStateToProps, Store } from "./types";

const defaultMapStateToProps: IMapStateToProps = (state) => state;

export default function Connect(
  Comp: React.FC<any>,
  mapStateToProps: IMapStateToProps = defaultMapStateToProps
) {
  return class extends React.Component {
    static contextType = Context;

    componentDidMount() {
      const store: Store = this.context as Store;
      const certainState = mapStateToProps(store.getState());
      this.setState(certainState);
      store.subscribe((reduxState) => {
        console.log({ reduxState });
        this.setState(mapStateToProps(reduxState));
      });
    }

    render() {
      return <Comp {...this.state} />;
    }
  };
}
