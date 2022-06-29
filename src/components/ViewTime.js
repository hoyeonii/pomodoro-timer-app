import React, { useEffect, useRef, useState } from "react";
import "../css/ViewTime.css";
import logo from "../logo.png";

function ViewTime() {
  // Renderer callback with condition
  const [studying, setStudying] = useState(true);

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [total, setTotal] = useState(0);
  const [twentyfive, setTwentyfive] = useState(true);

  useEffect(() => {
    if (start) {
      let interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            ///종료됐을때
            let minutes = studying ? 4 : 24; //24 : 4;
            let seconds = studying ? 59 : 59; //5;

            setSeconds(seconds);
            setMinutes(minutes);
            setStudying(!studying);
          }
        } else {
          setSeconds(seconds - 1);
          if (studying) {
            setTotal(total + 1);
          }
        }
      }, 1000);
    }
  }, [seconds, start]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="pomo-message">
        <img src={logo} alt="logo" className="pomo-logo" />
        {studying ? (
          <div>Focus!</div>
        ) : (
          <div>Break time! New session starts in:</div>
        )}
      </div>
      <div className="pomo-timer">
        {timerMinutes}:{timerSeconds}
      </div>
      <div className="pomo-button">
        <button
          onClick={() => {
            setStart(true);
          }}
          style={
            start ? { opacity: "0.5", pointerEvents: "none" } : { opacity: "1" }
          }
        >
          Start
        </button>
        <button
          onClick={() => {
            setStart(false);
          }}
          style={
            !start
              ? { opacity: "0.5", pointerEvents: "none" }
              : { opacity: "1" }
          }
        >
          Pause
        </button>

        <button
          onClick={() => {
            twentyfive ? setMinutes(15) : setMinutes(25);
            setSeconds(0);
            setTwentyfive(!twentyfive);
            setStudying(true);
          }}
          style={
            start ? { opacity: "0.5", pointerEvents: "none" } : { opacity: "1" }
          }
        >
          {!twentyfive ? 25 : 15}min
        </button>
        <button
          onClick={() => {
            let minutes = studying ? 5 : 25;
            let seconds = studying ? 0 : 0; 

            setSeconds(seconds);
            setMinutes(minutes);
            setStudying(!studying);
          }}
          style={
            start ? { opacity: "0.5", pointerEvents: "none" } : { opacity: "1" }
          }
        >
          Next
        </button>
      </div>
      <div className="pomo-total">
        Total
        {total > 3600
          ? ` ${Math.floor(total / 3600)
              .toString()
              .padStart(2, 0)}h`
          : ""}
        {total > 60
          ? ` ${(Math.floor(total / 60) % 60).toString().padStart(2, 0)}m`
          : ""}
        {` ${(total % 60).toString().padStart(2, 0)}s`}
      </div>
    </div>
  );
}

export default ViewTime;
