import React, { useState } from "react";

const InputHandler = (props) => {
  let [inputText, setInputText] = useState("");

  function onType(e) {
    setInputText(e.target.value);
  }

  function submitHandler() {
    let inputFieldText = inputText;
    props.getInputText(inputFieldText);
    setInputText("");
  }

  return (
    <div>
      <input
        value={inputText}
        style={{ margin: "10px" }}
        onChange={(e) => onType(e)}
      ></input>
      <button onClick={() => submitHandler()}>Submit</button>
    </div>
  );
};

export default InputHandler;
