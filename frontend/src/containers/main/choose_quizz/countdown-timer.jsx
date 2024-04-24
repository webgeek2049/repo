// CountdownTimer.js
import React, { useState, useEffect } from 'react';

function CountdownTimer({ minutes, seconds }) {
  const [time, setTime] = useState(minutes * 60 + seconds);
  const [isActive, setIsActive] = useState(true); // Start the timer immediately

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 0) {
            clearInterval(timer);
            setIsActive(false); // Stop the timer when it reaches zero
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  const formattedTime = `${String(Math.floor(time / 60)).padStart(2, '0')}:${String(
    time % 60
  ).padStart(2, '0')}`;

  return <div className="timer">Time Remaining : {formattedTime}</div>;
}

export default CountdownTimer;
