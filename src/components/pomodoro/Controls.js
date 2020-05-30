import React from "react";

import Play from "./../../svg/play";
import Pause from "./../../svg/pause";
import Stop from "./../../svg/stop";

const Controls = ({ startTimer, pauseTimer, resetTimer }) => {
  return (
    <div className="controls">
      <button onClick={startTimer} className="btn-start btnMedia">
        <Play width={36} height={36} fill={"#af8baf"} />
      </button>
      <button onClick={pauseTimer} className="btnMedia">
        <Pause width={28} height={28} fill={"#af8baf"} />
      </button>
      <button onClick={resetTimer} className="btnMedia">
        <Stop width={36} height={36} fill={"#af8baf"} />
      </button>
    </div>
  );
};

export default Controls;
