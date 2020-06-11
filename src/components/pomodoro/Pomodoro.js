import React, { useState, useEffect, useCallback, useReducer } from "react";
import Clock from "./Clock";
import Controls from "./Controls";

import "./Pomodoro.scss";
import swal from "sweetalert";

const getNotificationPermission = () => {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification.");
    return false;
  }

  if (Notification.permission === "default") {
    Notification.requestPermission();
  }
};

function notify(msg) {
  if (Notification.permission === "granted") {
    new Notification("Just Another Task Manager", { body: msg });
  }
}

const Pomodoro = () => {
  const [intervalID, setIntervalID] = useState(0);
  let [minutes, setMinutes] = useState(25);
  let [seconds, setSeconds] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_WORKING":
        setMinutes(25);
        setSeconds(0);
        return {
          ...state,
          isRunning: false,
          isRelaxing: false,
          isWorking: true,
        };
      case "SET_RELAXING":
        setMinutes(5);
        setSeconds(0);
        return {
          ...state,
          isRunning: false,
          isRelaxing: true,
          isWorking: false,
        };
      case "START_POMODORO":
        return {
          ...state,
          isRunning: true,
        };
      case "STOP_POMODORO":
        return {
          ...state,
          isRunning: false,
        };
      default:
        throw new Error("Unknown action type");
    }
  };

  const [pomodoro, dispatchPomodoro] = useReducer(reducer, {
    isRelaxing: false,
    isWorking: true,
    isRunning: false,
  });

  useEffect(() => {
    if (pomodoro.isRunning) {
      const id = setInterval(timer, 1000);
      setIntervalID(id);
    } else {
      clearInterval(intervalID);
    }
  }, [pomodoro.isRunning]);

  const timer = () => {
    if (minutes === 0 && seconds === 0) endTimer();
    else if (seconds > 0) {
      setSeconds(--seconds);
    } else if (seconds === 0 && minutes > 0) {
      seconds = 59;
      setSeconds(seconds);
      setMinutes(--minutes);
    }
  };

  const startTimer = () => {
    getNotificationPermission();
    dispatchPomodoro({ type: "START_POMODORO" });
  };

  const pauseTimer = () => {
    dispatchPomodoro({ type: "STOP_POMODORO" });
  };
  const resetTimer = () => {
    if (pomodoro.isWorking) dispatchPomodoro({ type: "SET_WORKING" });
    else dispatchPomodoro({ type: "SET_RELAXING" });
  };

  const endTimer = () => {
    swal("Finish", "Good Job!", "success");
    notify("Time finished!");
    dispatchPomodoro({ type: "STOP_POMODORO" });
    if (pomodoro.isWorking) dispatchPomodoro({ type: "SET_RELAXING" });
    else dispatchPomodoro({ type: "SET_WORKING" });
  };

  function incrementMinutes() {
    if (minutes < 60) setMinutes(minutes + 1);
  }
  function decrementMinutes() {
    if (minutes > 0) setMinutes(minutes - 1);
  }

  return (
    <div className="pomodoro">
      <Clock
        minutes={minutes}
        seconds={seconds}
        incrementMinutes={incrementMinutes}
        decrementMinutes={decrementMinutes}
        running={pomodoro.isRunning}
      />
      <Controls
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default Pomodoro;
