import React, { useState, useEffect, useCallback } from "react";
import swal from "sweetalert";

import TaskInput from "./components/taskInput/TaskInput";
import TaskList from "./components/taskList/TaskList";
import Pomodoro from "./components/pomodoro/Pomodoro";
import Footer from "./components/footer/Footer";

import db from "./config/db";

function App() {
  const [allTasks, setAllTasks] = useState([]);

  const fetchTasks = useCallback(() => {
    db.task.toArray().then((result) => {
      setAllTasks(result);
    });
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleTaskInputSubmit = (task, priority) => {
    db.task.add({
      title: task,
      description: "Not Yet",
      priority: priority || null,
      isCompleted: false,
    });
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

  return (
    <>
      <Pomodoro />
      <TaskInput onTaskInputChange={handleTaskInputSubmit} />
      <TaskList
        data={allTasks}
        onTaskDelete={handleTaskDelete}
        onTaskComplete={handleTaskComplete}
        onTaskEdit={handleTaskEdit}
      />
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
