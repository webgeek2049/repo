import React from "react";

function Question({ question, questionCode, codeLanguage, answers, onAnswer, answerStatus, correctAnswerIndex }) {
  const handleAnswerClick = (index) => {
    onAnswer(index);
  };

  return (
    <div>
      <div className="row justify-content-between text-start">
        <div className="flex-1 fw-bolder">Question:</div>
        <p className="flex-1 flex-basis-70">{question}</p>
      </div>
      {questionCode && (
        <pre>
          <div className={`code-container text-start`}>
            <code className={`language-${codeLanguage}`}>{questionCode}</code>
          </div>
        </pre>
      )}
      <ul className="answers-grid">
        {answers.map((answer, index) => (
          <li key={index}>
            <button 
              className={`quizz-btn ${
                (answerStatus === 'correct' && index === correctAnswerIndex) ? 'correct-choice' :
                (answerStatus === 'incorrect' && index === correctAnswerIndex) ? 'correct-choice' :
                (answerStatus === 'incorrect' && index === answers.indexOf(answer)) ? 'incorrect-choice' :
                '' // Do not apply any class if none of the conditions are met
              }`}
              onClick={() => handleAnswerClick(index)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
