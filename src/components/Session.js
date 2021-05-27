import moment from "moment";

const Break = ({ sessionLength, decrementSession, incrementSession }) => {
  const sessionLengthInMinutes = moment.duration(sessionLength, "s").minutes();
  return (
    <div>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthInMinutes}</p>
      <button id="session-increment" onClick={incrementSession}>
        +
      </button>
      <button id="session-decrement" onClick={decrementSession}>
        -
      </button>
    </div>
  );
};

export default Break;
