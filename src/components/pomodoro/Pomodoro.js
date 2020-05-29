import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import Controls from "./Controls";

import "./Pomodoro.scss";
import swal from "sweetalert";

const Pomodoro = () => {
  const [intervalID, setIntervalID] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(5);
  const [running, setRunning] = useState(false);

  function startTimer() {
    setRunning(true);
    getNotificationPermission();
  }

  function pauseTimer() {
    clearInterval(intervalID);
    setRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalID);
    setMinutes(25);
    setSeconds(0);
    setRunning(false);
  }

  const getNotificationPermission = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification.");
      return false;
    }

    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  };

  async function notify(msg) {
    if (Notification.permission === "granted") {
      new Notification("Just Another Task Manager", { body: msg });
    }
  }

  useEffect(() => {
    if (running) {
      const id = setInterval(timer, 1000);
      setIntervalID(id);
    } else if (minutes === 0 && seconds === 0) {
      notify("Time's ended");
      swal("Good job", "Time to take a walk!", "warning");
      resetTimer();
    }
  }, [running]);

  async function timer() {
    if (seconds > 0) setSeconds(--seconds);
    else if (seconds === 0 && minutes > 0) {
      seconds = 59;
      setSeconds(59);
      setMinutes(--minutes);
    } else if (seconds === 0 && minutes === 0) {
      setRunning(false);
    }
  }

  return (
    <div className="pomodoro">
      <Clock minutes={minutes} seconds={seconds} />
      <Controls
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default Pomodoro;
