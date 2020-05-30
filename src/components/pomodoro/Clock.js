import React from "react";

const Clock = ({
  minutes,
  seconds,
  incrementMinutes,
  decrementMinutes,
  running,
}) => {
  const formatSeconds = () => {
    return seconds < 10 ? `0${seconds}` : seconds;
  };

  const formatMinutes = () => {
    return minutes < 10 ? `0${minutes}` : minutes;
  };

  return (
    <div className="clock">
      <button
        className="btnMedia"
        onClick={decrementMinutes}
        disabled={running}
      >
        -
      </button>
      {formatMinutes()}:{formatSeconds()}
      <button
        className="btnMedia"
        onClick={incrementMinutes}
        disabled={running}
      >
        +
      </button>
    </div>
  );
};

export default Clock;
