import moment from "moment";
import React from "react";

const Break = ({ breakLength, decrementBreak, incrementBreak }) => {
  const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();
  return (
    <div>
      <p id="break-label">Break</p>
      <p id="break-length">{breakLengthInMinutes}</p>
      <button id="break-increment" onClick={incrementBreak}>
        +
      </button>
      <button id="break-decrement" onClick={decrementBreak}>
        -
      </button>
    </div>
  );
};

export default Break;
