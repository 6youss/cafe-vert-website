import React, { useState, useEffect, useRef } from "react";
import "./CountDown.css";

function CountDown({title}) {
  const [time, setTime] = useState(getRndInteger(1 * 60 * 60, 3 * 60 * 60));
  const prev_readable = useRef(getReadableSeconds(time));
  useInterval(() => {
    prev_readable.current = getReadableSeconds(time);
    setTime(time - 1);
  }, 1000);

  const { seconds, minutes, hours } = getReadableSeconds(time);
  const { minutes: prevMinutes, hours: prevHours } = prev_readable.current;

  return (
    <div className="countdown-section">
      <div className="countdown-title">{title}</div>
      <div className="countdown-container">
        <Card time = {hours} animate={hours !== prevHours} />
        <Card time = {minutes} animate={minutes !== prevMinutes} />
        <Card time={seconds} animate={true} />
      </div>
    </div>
  );
}

function Card({time, animate }) {
  
  let render_time = time <= 9 ? "0" + time : time;
  
  return (
    <div className="card-container">
      <>
        <div className={"upper-part"} >
          <span>{render_time}</span>
        </div>
        <div className={"bottom-part"} >
          <span>{render_time}</span>
        </div>
      </>

      {animate && (
        <>
          <div className="upper-part absolute-positioned fold">
            <span>{render_time}</span>
          </div>

          <div
            className="bottom-part absolute-positioned unfold"
            style={{ top: "50%"}}
          >
            <span>{render_time}</span>
          </div>
        </>
      )}
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function getReadableSeconds(seconds) {
  let readable = {};
  readable.hours = Math.floor(seconds / (60 * 60));
  readable.minutes = Math.floor(seconds / 60) - readable.hours * 60;
  readable.seconds = seconds - readable.hours * 60 * 60 - readable.minutes * 60;
  return readable;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default CountDown;
