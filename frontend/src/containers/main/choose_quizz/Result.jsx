// Result.js
import React from 'react';

function Result({ score, totalQuestions, timeTaken}) {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);


  return (
    <div>
      <h2>Quiz Finished!</h2>
      <p>Time taken: {timeTaken}</p>
      <p>Your score: {score} out of {totalQuestions}</p>
      <p>Percentage correct: {percentage}%</p>
    </div>
  );
}

export default Result;
