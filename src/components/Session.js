import moment from "moment";
import React, { useState } from "react";

const Break = () => {
  const [breakLength, setBreakLength] = useState(1500);

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
      <p id="session-label">Session</p>
      <p id="session-length">{breakLengthInMinutes}</p>
      <button id="session-increment" onClick={incrementBreak}>
        +
      </button>
      <button id="session-decrement" onClick={decrementBreak}>
        -
      </button>
    </div>
  );
};

export default Break;
