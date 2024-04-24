import React, { useRef, useEffect, useState } from "react";
import "./lesson.scss";
import lessonData from "./lessonData.json";
import ChooseQuiz from "../choose_quizz/App";
import Star from "../../../ressources/svg/star.svg";

function Lesson() {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const leftContainerRef = useRef(null);

  useEffect(() => {
    if (leftContainerRef.current) {
      const { height } = leftContainerRef.current.getBoundingClientRect();
      setContainerSize({
        width: `${height - 36}px`,
        height: `${height - 36}px`,
      });
    }
  }, [containerSize]);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    if (currentSlide < lessonData.content.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setSelectedMenuItem(currentSlide + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setSelectedMenuItem(currentSlide - 1);
    }
  };

  const renderParagraph = (text) => {
    return (
      <p>
        {text.map((paragraph, idx) => {
          if (paragraph.startsWith(" ")) {
            return (
              <React.Fragment key={idx}>
                <p className="ps-3 mb-0">{paragraph}</p>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={idx}>
                {paragraph}
                <br />
              </React.Fragment>
            );
          }
        })}
      </p>
    );
  };

  return (
    <div className="lesson">
      <div className="left-content" ref={leftContainerRef}>
        <div className="menu" style={{ pointerEvents: showQuiz ? 'none' : 'auto' }}>
          <h3 className="title fw-bolder">
            {lessonData.title}
            <img className="star" src={Star} alt="Start" />
          </h3>
          <ul>
            {lessonData.lessonMenu.map((item, index) => (
              <li key={index} onClick={() => handleMenuItemClick(index)} disabled={showQuiz}>
                <span className={selectedMenuItem === index ? "active" : ""}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-content">
        {showQuiz ? (
          <div>
            <ChooseQuiz/>
          </div>
        ) : (
          <>
            {lessonData.content[currentSlide].content.map((contentItem, index) => {
              switch (contentItem.type) {
                case "paragraph":
                  return renderParagraph(contentItem.text);
                case "list":
                  return null;
                case "code":
                  return (
                    <pre key={index}>
                      <div className="code-container">
                        <code className={`language-${contentItem.language}`}>
                          {contentItem.code}
                        </code>
                      </div>
                    </pre>
                  );
                default:
                  return null;
              }
            })}
            {currentSlide < lessonData.content.length - 1 && (
              <button
                onClick={handleNextSlide}
                id="nextButton"
                className="btn btn-primary"
              >
                Next
              </button>
            )}
            {currentSlide > 0 && (
              <button
                onClick={handlePreviousSlide}
                id="backButton"
                className="btn btn-primary"
              >
                Back
              </button>
            )}
          </>
        )}
        {!showQuiz && currentSlide === lessonData.content.length - 1 && (
          <button onClick={() => setShowQuiz(true)} id="quizzButtonStart" className="btn btn-primary">
            Quiz
          </button>
        )}
      </div>
    </div>
  );
}

export default Lesson;
