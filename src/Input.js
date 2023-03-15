import React, { useState } from "react";

const InputHandler = (props) => {
  let [inputText, setInputText] = useState("");

  function onType(e) {
    setInputText(e.target.value);
  }

  function submitHandler() {
    let inputFieldText = inputText;
    if (inputFieldText !== "") {
      props.getInputText(inputFieldText);
      setInputText("");
    }
  }

  return (
    <div>
      <input value={inputText} onChange={(e) => onType(e)}></input>
      <button onClick={() => submitHandler()}>Submit</button>
    </div>
  );
};

export default InputHandler;
