import React from 'react';
import './time.css';

export default function Time(props) {
    return (
      <div className="timer">
        <span className="timer-min">
          {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="timer-min">
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
        </span>
        <span className="timer-min">
          {("0" + ((props.time / 10) % 100)).slice(-2)}
        </span>
      </div>
    );
  }