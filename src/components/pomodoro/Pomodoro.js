import React from "react";
import Clock from "./Clock";
import Controls from "./Controls";

import "./Pomodoro.scss";
import swal from "sweetalert";

const Pomodoro = ({ minutes, seconds, onMinutesPassed, onSecondsPassed }) => {
  let invervalID;

  const startTimer = () => {
    invervalID = setInterval(timer, 1000);
  };

  const timer = () => {
    if (seconds > 0) {
      onSecondsPassed(--seconds);
    } else if (seconds === 0 && minutes > 0) {
      seconds = 59;
      onSecondsPassed(seconds);
      onMinutesPassed(--minutes);
    } else if (seconds === 0 && minutes === 0) {
      clearInterval(invervalID);
      swal("Good job", "Time to take a walk!", "warning");
    }
  };

  return (
    <div className="pomodoro">
      <Clock minutes={minutes} seconds={seconds} />
      <Controls startTimer={startTimer} />
    </div>
  );
};

export default Pomodoro;
