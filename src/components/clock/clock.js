import React, { useState } from "react";

import { ClockStyle } from "./clockStyling";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  let [ctime, setCTime] = useState();
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <ClockStyle> {ctime}</ClockStyle>
    </>
  );
};
export default Clock;
