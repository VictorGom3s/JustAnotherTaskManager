import React from "react";

const Clock = ({ minutes, seconds }) => {
  const formatSeconds = () => {
    return seconds < 10 ? `0${seconds}` : seconds;
  };

  const formatMinutes = () => {
    return minutes < 10 ? `0${minutes}` : minutes;
  };

  return (
    <span className="clock">
      {formatMinutes()}:{formatSeconds()}
    </span>
  );
};

export default Clock;
