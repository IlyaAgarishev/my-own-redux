import React from "react";
import "./App.css";
import BioForm from "./components/BioForm";
import BioInfo from "./components/BioInfo";
import Connect from "./myOwnRedux/connect";

const App = () => {
  return (
    <div className="App">
      <BioForm />
      <BioInfo />
    </div>
  );
};

export default Connect(App);
