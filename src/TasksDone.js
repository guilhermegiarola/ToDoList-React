import React from "react";

const TasksDone = (props) => {
  let doneTasks = props.taskList.filter((item) => item.isDone === true);
  let undoneTasks = props.taskList.filter((item) => item.isDone === false);

  return (
    <div>
      There are {doneTasks.length} done tasks and {undoneTasks.length} undone
      tasks.
    </div>
  );
};

export default TasksDone;
