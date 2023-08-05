import React, { useState } from "react";
import { QuizData } from "../data/Quiz_Data";
import Quiz_Result from "./Quiz_Result";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClicked(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clicked === QuizData[currentQuestion].Ans) {
      setScore(score + 1);
    } else {
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClicked(0);
    setScore(0);
  };
  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
          <Quiz_Result
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt">{QuizData[currentQuestion].Quiz}</span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].Options.map((option, i) => {
                return (
                  <button
                    // className="option-btn"
                    className={`option-btn ${
                      clicked == i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClicked(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
