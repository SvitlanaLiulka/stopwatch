import React from "react";
import { useState } from "react";
import { interval,  Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Time from "../time/time";
import { ControlButtons } from "../controlButtons/controlButtons";
import "./stopwatch.css";

const StopWatch = () => {
  const [isStart, setIsStart] = useState(false);
  const [isWait, setIsWait] = useState(false);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    const unsubscribe = new Subject();
    interval(10)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (isStart) {
          setTime(val => val + 10);
        }
      });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [isStart]);

  const handleStart = () => {
    setIsStart(!isStart);
    setIsWait(true);
    if(isStart){
      setTime(0);
    }
  };

  const handlePauseResume = () => {
    setIsWait(!isWait);
    setIsStart(false);
    };
      
  const handleReset = () => {
    setIsStart(false);
    setTime(0);
    setIsWait(!isWait);
    setIsStart(true);
    setIsWait(false);
    };

  return (
    <div className="stopwatch">
      <Time time={time}/>
      <ControlButtons
        isStart={isStart}
        isWait={isWait}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}
export default StopWatch;