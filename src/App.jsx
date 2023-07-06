import react from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import FormText from "./component/FormText";

function App() {
  return (
    <>
      <Navbar title="TextUtls" />
      <div className="container my-3">
        <FormText heading="Enter The text for Analicis" />
      </div>
    </>
  );
}

export default App;
