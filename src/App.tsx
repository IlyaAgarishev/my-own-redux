import React from "react";
import "./App.css";
import Connect from "./myOwnRedux/connect";
import Store from "./myOwnRedux/store";

interface IProps {
  name: string | null;
  age: number | null;
  weight: number | null;
}

const App: React.FC<IProps> = ({ name, age, weight }) => {
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Store.dispatch({ type: "CHANGE_NAME", payload: e.target.value });
  };

  const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Store.dispatch({ type: "CHANGE_AGE", payload: e.target.value });
  };

  const onWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Store.dispatch({ type: "CHANGE_WEIGHT", payload: e.target.value });
  };

  return (
    <span className="App">
      <span>
        <input type="text" placeholder="Name" onChange={onNameChange} />
        <input type="number" placeholder="Age" onChange={onAgeChange} />
        <input type="number" placeholder="Weight" onChange={onWeightChange} />
      </span>
      <span>
        <div>
          <label>
            Name: <strong>{name}</strong>
          </label>
        </div>
        <div>
          <label>
            Age: <strong>{age}</strong>
          </label>
        </div>
        <div>
          <label>
            Weight:{" "}
            <strong>
              {weight} {weight && "kg"}
            </strong>
          </label>
        </div>
      </span>
    </span>
  );
};

export default Connect(App);
