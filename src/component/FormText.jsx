import React, { useState } from "react";

function FormText(props) {
  const [text, setText] = useState();
  const handleUpClick = () => {
    console.log("handleUpClick is click" + text);
    var newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChangee = (e) => {
    console.log("On change");
    setText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example Here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChangee}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary </h1>
        <p> {text} </p>
        <p>{text.split(" ").length} Minets To read</p>
        <h2>Preview</h2>
        <p> {text} </p>
      </div>
    </>
  );
}

export default FormText;
