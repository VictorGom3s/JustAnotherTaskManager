import React, { useState } from "react";
import "./TaskInput.scss";

const splitTaskAndPriority = (task) => {
  let start = task.indexOf("@");
  let end = task.indexOf(" ", start);

  if (end === -1) end = task.length;

  const priority = task.slice(start, end);
  const newTask = task.replace(priority, "");

  return [newTask, priority.replace("@", "")];
};

const TaskInput = ({ onTaskInputChange }) => {
  const [task, setTask] = useState("");

  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false && task) {
      if (task.includes("@")) {
        var [newTask, priority] = splitTaskAndPriority(task);
        setTask(newTask);
      }
      onTaskInputChange(task, priority);
      setTask("");
    }
  };

  return (
    <div className="taskInput">
      <input
        type="input"
        autoFocus
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnterPress}
        placeholder="What do you need to do today?"
        name="taskTitle"
      ></input>
      <button
        type="button"
        onClick={() => {
          if (task) {
            onTaskInputChange(task);
            setTask("");
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default TaskInput;
