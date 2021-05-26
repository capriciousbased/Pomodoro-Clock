import moment from "moment";
import React, { useState } from "react";

const Break = () => {
  const [breakLength, setBreakLength] = useState(300);

  const decrementBreak = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreak = () => {
    setBreakLength(breakLength + 60);
  };

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
