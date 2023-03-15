import React, { useState } from "react";
import "./App.css";
import InputHandler from "./Input";
import ListElement from "./ListElement";
import TasksDone from "./TasksDone";

function App() {
  let [taskList, setTaskList] = useState([]);

  function getInputText(input) {
    setTaskList([
      ...taskList,
      { id: taskList.length + 1, text: input, isDone: false },
    ]);
  }

  function getElementToMark(item) {
    const updatedTaskList = taskList.map((obj) => {
      if (obj.id === item.id) {
        obj.isDone = true;
      }
      return obj;
    });
    setTaskList(updatedTaskList);
  }

  return (
    <div>
      <InputHandler getInputText={getInputText} />
      <TasksDone taskList={taskList} />
      <ListElement taskList={taskList} getElementToMark={getElementToMark} />
    </div>
  );
}

export default App;
