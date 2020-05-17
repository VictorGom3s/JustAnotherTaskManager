import React, { useState } from "react";
import Clock from "./Clock";
import Controls from "./Controls";

import "./Pomodoro.scss";
import swal from "sweetalert";

const Pomodoro = ({ minutes, seconds, onMinutesPassed, onSecondsPassed }) => {
  const [intervalID, setIntervalID] = useState("");

  function timer() {
    if (seconds > 0) {
      onSecondsPassed(--seconds);
    } else if (seconds === 0 && minutes > 0) {
      seconds = 59;
      onSecondsPassed(seconds);
      onMinutesPassed(--minutes);
    } else if (seconds === 0 && minutes === 0) {
      clearInterval(intervalID);
      swal("Good job", "Time to take a walk!", "warning");
    }
  }

  function startTimer() {
    const id = setInterval(timer, 1000);
    setIntervalID(id);
    console.log("Start timer", intervalID);
  }

  function pauseTimer() {
    console.log("pause timer", intervalID);
    clearInterval(intervalID);
  }

  function resetTimer() {
    console.log("reset timer", intervalID);
    clearInterval(intervalID);
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
