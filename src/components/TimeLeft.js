import React, { useState } from "react";
import moment from "moment";
import momentDuration from "moment-duration-format";

momentDuration(moment);

const TimeLeft = ({ sessionLength }) => {
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const formattedTime = moment.duration(timeLeft, "s").format("mm:ss");
  return <div> {formattedTime}</div>;
};

export default TimeLeft;
