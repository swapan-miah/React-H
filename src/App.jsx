import react from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import FormText from "./component/FormText";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar title="TextUtls" />
      {/* <div className="container my-3">
        <FormText heading="Enter The text for Analicis" />
      </div> */}
      <div className="container my-5">
        <About />
      </div>
    </>
  );
}

export default App;
