import React, { useState, useEffect, useRef } from "react";
import "./CountDown.css";


let prev_readable = {};

function CountDown() {
  const [time, setTime] = useState(getRndInteger(1 * 60 * 60, 3 * 60 * 60));
  
  useInterval(() => {
    prev_readable = { ...readable };
    setTime(time-1);
  }, 1000);
  
  let readable = getReadableSeconds(time);

  console.log(prev_readable,readable);
  const { seconds, minutes, hours } = readable;

  return (
    <div className="countdown-container">
      <div className="card-container">
        <p
          className={
            "plaque" + (hours!==prev_readable.hours?" unfold":"")
          }
        >
          {hours <= 9 ? "0" + hours : hours}
        </p>
      </div>
      <div className="card-container">
        <p
          className={
            "plaque" + (minutes!==prev_readable.minutes?" unfold":"")
          }
        >
          {minutes <= 9 ? "0" + minutes : minutes}
        </p>
      </div>
      <div className="card-container">
        <p
          className={
            "plaque"
          }
        >
          {seconds <= 9 ? "0" + seconds : seconds}
        </p>
      </div>
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
