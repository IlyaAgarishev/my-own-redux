import "./App.css";
import BioForm from "./components/BioForm";
import BioInfo from "./components/BioInfo";
import HobbiesForm from "./components/HobbiesForm";
import HobbiesInfo from "./components/HobbiesInfo";

const App = () => {
  return (
    <div className="App">
      <div className="block">
        <BioForm />
        <BioInfo />
      </div>
      <div className="block">
        <HobbiesForm />
        <HobbiesInfo />
      </div>
    </div>
  );
};

export default App;
