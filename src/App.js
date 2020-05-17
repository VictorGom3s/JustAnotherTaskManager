import React, { useState, useEffect } from "react";
import swal from "sweetalert";

import Header from "./components/header/Header";
import TaskInput from "./components/taskInput/TaskInput";
import TaskList from "./components/taskList/TaskList";
import Pomodoro from "./components/pomodoro/Pomodoro";

import db from "./config/db";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    db.task.toArray().then((result) => {
      setAllTasks(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db]);

  const handleTaskInputSubmit = (task) => {
    db.task.add({ title: task, description: "Not Yet", isCompleted: false });
    db.task.toArray().then((result) => {
      setAllTasks(result);
    });
  };

  const handleTaskComplete = (id, value) => {
    db.task.update(id, { isCompleted: value });
    db.task.toArray().then((result) => setAllTasks(result));
  };

  const handleTaskEdit = (id, value) => {
    db.task.update(id, { title: value });
    db.task.toArray().then((result) => setAllTasks(result));
  };

  const handleTaskDelete = (id) => {
    swal(
      "Are you sure?",
      "Do you really want to delete this task?",
      "warning",
      {
        dangerMode: true,
        buttons: { cancel: "I changed my mind", confirm: "Yes, I want" },
      }
    ).then((res) => {
      if (res) {
        setAllTasks(allTasks.filter((task) => task.id !== id));
        db.task.delete(id);
      }
    });
  };

  const handleMinutesChange = (value) => {
    setMinutes(value);
  };

  const handleSecondsChange = (value) => {
    setSeconds(value);
  };

  return (
    <div>
      <Header></Header>
      <Pomodoro
        minutes={minutes}
        seconds={seconds}
        onMinutesPassed={handleMinutesChange}
        onSecondsPassed={handleSecondsChange}
      />
      <TaskInput onTaskInputChange={handleTaskInputSubmit} />
      <TaskList
        data={allTasks}
        onTaskDelete={handleTaskDelete}
        onTaskComplete={handleTaskComplete}
        onTaskEdit={handleTaskEdit}
      />
    </div>
  );
}

export default App;
