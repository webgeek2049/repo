// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Quiz from "./Quiz";
import CountdownTimer from "./countdown-timer";

function App() {
  const [started, setStarted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setShowQuiz(true);
    setTimerActive(true);
  };

  const stopTimer = () => {
    setTimerActive(false);
  };

  useEffect(() => {
    return () => {
      // You might want to do some cleanup here if needed
    };
  }, []);

  return (
    <div className="quizz-container">
      <div className={`App ${showQuiz ? "fade-in" : ""}`}>
        {!started ? (
          <div className={`${showQuiz ? "fade-out" : ""}`}>
            <svg className="d-block mb-5"
              width="397"
              height="63"
              viewBox="0 0 397 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70703 0.730469H57.9766L51.6875 52H34.5977L43.5869 62.2539H29.0947L20.1055 52H0.417969L6.70703 0.730469ZM15.6963 10.9844L11.9365 41.7461H42.6982L46.458 10.9844H15.6963ZM64.8125 0.730469H75.0664L70.042 41.7461H100.804L105.828 0.730469H116.082L109.793 52H58.5234L64.8125 0.730469ZM126.883 52H116.629L122.918 0.730469H133.172L126.883 52ZM172.513 10.9844H138.743L140.008 0.730469H198.523L152.483 41.7461H186.253L184.988 52H126.473L172.513 10.9844ZM241.282 10.9844L236.258 52H226.004L231.028 10.9844H210.521L211.785 0.730469H263.055L261.79 10.9844H241.282ZM273.855 52H263.602L269.891 0.730469H280.145L273.855 52ZM295.97 10.9844L290.945 52H280.691L286.98 0.730469H338.25L331.961 52H321.707L326.731 10.9844H316.478L311.453 52H301.199L306.224 10.9844H295.97ZM350.315 41.7461H391.331L390.066 52H338.797L345.086 0.730469H396.355L395.091 10.9844H354.075L352.845 21.2383H393.86L392.596 31.4922H351.58L350.315 41.7461Z"
                fill="#2300F7"
              />
            </svg>
            <button onClick={handleStart}>Start Quiz</button>
          </div>
        ) : (
          <>
            <Quiz showQuiz={showQuiz} stopTimer={stopTimer} />
            {timerActive && <CountdownTimer minutes={10} seconds={0} />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
