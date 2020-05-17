import React from "react";

const Controls = ({ startTimer, pauseTimer, resetTimer }) => {
  return (
    <div>
      <button onClick={() => startTimer()} className="btn btn-start">
        Start
      </button>
      <button onClick={() => pauseTimer()} className="btn btn-pause">
        Pause
      </button>
      <button onClick={() => resetTimer()} className="btn btn-reset">
        Reset
      </button>
    </div>
  );
};

export default Controls;
