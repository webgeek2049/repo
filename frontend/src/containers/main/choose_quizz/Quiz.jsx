import React, { useState, useEffect } from "react";
import data from "./quizData.json";
import Question from "./Question";
import Result from "./Result";

function Quiz({ showQuiz, stopTimer }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null); // State to store answer status (correct/incorrect)

  const handleAnswer = (selectedOption) => {
    // Check if the selected option is correct
    const isCorrect =
      selectedOption === data[currentQuestion].correctAnswerIndex;
    if (isCorrect) {
      setScore(score + 1);
    }

    // Set answer status and then reset it after delay
    setAnswerStatus(isCorrect ? "correct" : "incorrect");
    setTimeout(() => {
      setAnswerStatus(null);
      if (currentQuestion < data.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setFinished(true);
      }
    }, 1000); // Delay for 1 second
  };

  useEffect(() => {
    if (showQuiz) {
      setCurrentQuestion(0); // Reset currentQuestion when showQuiz changes to true
    }
  }, [showQuiz]);

  useEffect(() => {
    let timer;
    if (finished) {
      stopTimer(); // Stop the timer by calling the function passed from App component
    } else {
      timer = setInterval(() => {
        setTimeTaken((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [finished, stopTimer]);

  useEffect(() => {
    if (timeTaken >= 10 * 60) {
      // Assuming seconds the time limit
      setFinished(true); // Set finished to true when time limit is reached
    }
  }, [timeTaken]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={`card ${showQuiz ? "fade-in" : ""}`}>
      <div className="card-body">
        {finished ? (
          <Result
            score={score}
            totalQuestions={data.length}
            timeTaken={formatTime(timeTaken)}
          />
        ) : (
          <Question
            question={data[currentQuestion].question}
            questionCode={data[currentQuestion].questionCode}
            codeLanguage={data[currentQuestion].codeLanguage}
            answers={data[currentQuestion].answers}
            onAnswer={handleAnswer}
            answerStatus={answerStatus}
            correctAnswerIndex={data[currentQuestion].correctAnswerIndex} // Pass correct answer index as prop
          />
        )}
      </div>
    </div>
  );
}

export default Quiz;
