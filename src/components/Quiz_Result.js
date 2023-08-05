import React from "react";

const Quiz_Result = (props) => {
  return (
    <>
      <div className="show-score">
        YourScore{props.score} <br />
        TotalScore:{props.totalScore}
      </div>
      <button id="next-button" onClick={props.tryAgain}>
        Try Again
      </button>
    </>
  );
};

export default Quiz_Result;
