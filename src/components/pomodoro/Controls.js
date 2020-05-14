import React from "react";

const Controls = ({ startTimer }) => {
  return (
    <div>
      <button onClick={() => startTimer()} className="btn btn-start">
        Start
      </button>
      <button className="btn btn-pause">Pause</button>
      <button className="btn btn-reset">Reset</button>
    </div>
  );
};

export default Controls;
