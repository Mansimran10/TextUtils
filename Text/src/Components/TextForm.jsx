import { useState } from "react";
function TextForm(props) {
  const [Text, SetText] = useState("");
  function handleChange(event) {
    SetText(event.target.value);
  }
  function handleClick() {
    let newText = Text.toUpperCase();
    SetText(newText);
    props.showAlert("Converted To Uppercase", "success");
  }
  function handleClickLower() {
    let newText = Text.toLowerCase();
    SetText(newText);
    props.showAlert("Converted To Lowercase", "success");
  }
  function handleClickClear() {
    SetText("");
    props.showAlert("Text Cleared", "success");
  }
  function handleCopy() {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  }
  let mystyle = {
    backgroundColor: props.mode === "light" ? "white" : "grey",
    color: props.mode == "light" ? "black" : "white",
  };
  return (
    <div
      className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
    >
      <div className="mb-2 TextBox">
        <h1>{props.heading}</h1>
        <textarea
          className={`form-control`}
          id="exampleFormControlTextarea1"
          rows="8"
          value={Text}
          onChange={handleChange}
          style={mystyle}
        ></textarea>
        <br></br>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleClick}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleClickLower}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleClickClear}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>

      <div className="mb-3 mt-4 ">
        <h2>Your text summary </h2>
        <p>
          Words:{" "}
          {
            Text.trim()
              .split(/\s+/)
              .filter((word) => word.length !== 0).length
          }{" "}
          And Characters: {Text.length}
          <br></br>
          Time To Read: {Text.split(" ").length * 0.008} minutes
        </p>
        <h2>Preview:</h2>
        <p>{Text.length == 0 ? "Enter Your Text To Preview" : Text}</p>
      </div>
    </div>
  );
}
export default TextForm;
