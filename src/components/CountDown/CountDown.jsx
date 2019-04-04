import React, { useState, useEffect, useRef } from "react";
import "./CountDown.css";

const FLIP_DURATION = 10000;

function CountDown() {
  const [time, setTime] = useState({value:getRndInteger(1 * 60 * 60, 3 * 60 * 60),swich:true});
  
  const prev_readable = useRef(getReadableSeconds(time.value));

  useInterval(() => {
    prev_readable.current = getReadableSeconds(time.value);
    
    setTime({
      value: time.swich? (time.value - 1) : time.value, 
      swich: !time.swich
    });

  }, FLIP_DURATION/2 );
  


  const { seconds, minutes, hours } = getReadableSeconds(time.value);
  const {
    seconds: prevSeconds,
    minutes: prevMinutes,
    hours: prevHours
  } = prev_readable.current;


  return (
    <div className="countdown-container">
      {/* <Card prevTime = {prevHours} time = {hours} animate={hours !== prevHours} />
      <Card prevTime = {prevMinutes} time = {minutes} animate={minutes !== prevMinutes} /> */}
      <Card
        prevTime={prevSeconds}
        time={seconds}
        animate={time.swich}
      />
    </div>
  );
}

function Card({ prevTime, time, animate }) {
  
  let render_time = time <= 9 ? "0" + time : time;
  let render_prevTime = prevTime <= 9 ? "0" + prevTime : prevTime;
  
  console.log(render_time , render_prevTime , animate);
  return (
    <div className="card-container">
      <div className="upper-part">
        <span>{render_time}</span>
      </div>
      <div className="bottom-part">
        <span>{render_prevTime}</span>
      </div>
      
          {animate && (
            <div className="upper-part absolute-positioned upper-animation">
              <span>{render_prevTime}</span>
            </div>
          )}
          {!animate && (
            <div
              className="bottom-part absolute-positioned bottom-animation"
              style={{ top: "50%" }}
            >
              <span>{render_time}</span>
            </div>
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
