import "./App.css";
import BioForm from "./components/BioForm";
import BioInfo from "./components/BioInfo";
import HobbiesForm from "./components/HobbiesForm";
import HobbiesInfo from "./components/HobbiesInfo";
import Titles from "./components/Titles";

const App = () => {
  return (
    <>
      <Titles />
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

      <a
        href="https://github.com/IlyaAgarishev/my-own-redux"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </>
  );
};

export default App;
