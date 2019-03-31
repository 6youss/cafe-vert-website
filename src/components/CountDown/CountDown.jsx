import React, { useContext, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./CountDown.css";

function CountDown() {

  let [time,setTime] = useState( getRndInteger(1*60*60,3*60*60) );
  let readable = getReadableSeconds(time);
  
  function count(){
    if(time > 0){
      setTime(--time);
    }else{
      clearInterval(count);
    }
    readable = getReadableSeconds(time);
  }

  useEffect(()=>{
    setInterval(count,1000);
    return clearInterval(count);
  });
  
  const{ hours,minutes,seconds } = readable;

  return (
    <div className="countdown-container">
      <p className="plaque">{hours<=9?"0"+hours:hours}</p>
      <p className="plaque">{minutes<=9?"0"+minutes:minutes}</p>
      <p className="plaque">{seconds<=9?"0"+seconds:seconds}</p>
    </div>
  );
}

function getReadableSeconds(seconds){
  let readable = {};
  readable.hours = Math.floor(seconds/(60*60));
  readable.minutes = Math.floor(seconds/60) - (readable.hours*60);
  readable.seconds = seconds - (readable.hours*60*60) - (readable.minutes*60);
  return readable;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default CountDown;
