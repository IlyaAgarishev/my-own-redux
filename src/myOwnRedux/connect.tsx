import React from "react";
import { Context } from "./provider";
import { IMapStateToProps, Store } from "./types";
import { isEqual } from "lodash";

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
        const prevState = mapStateToProps(this.state);
        const newState = mapStateToProps(reduxState);

        const stateHasBeenChanged = !isEqual(prevState, newState);

        if (stateHasBeenChanged) {
          this.setState(mapStateToProps(reduxState));
        }
      });
    }

    render() {
      return <Comp {...this.state} />;
    }
  };
}
