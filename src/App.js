import "./App.css";
import React, { useState } from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

function App() {
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(60 * 25);

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

  const decrementSession = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSession = () => {
    setSessionLength(sessionLength + 60);
  };

  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        decrementBreak={decrementBreak}
        incrementBreak={incrementBreak}
      />
      <TimeLeft sessionLength={sessionLength} />
      <Session
        sessionLength={sessionLength}
        decrementSession={decrementSession}
        incrementSession={incrementSession}
      />
    </div>
  );
}

export default App;
