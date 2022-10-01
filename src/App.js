import Questions from "./QuetionContainer";
import "./App.css";
import { useState } from "react";

const questionList = Questions;

function App() {
  const [currentQus, setCurrentQus] = useState(0);
  const [showScore, setShowSfcore] = useState(false);
  const [score, setScore] = useState(0);


  const optionClickHandler = (isCorrect) => {
    if (isCorrect) {
      // alert('Your ans is correct',isCorrect)
      setScore(score + 1);
    }
    if (currentQus < questionList.length - 1) {
      setCurrentQus(currentQus + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetHandler = () =>{
    setShowScore(false);
    setCurrentQus(0);
    setScore(0)
  }

  return (
    <div className="App">
      {showScore ? (
        <div className="show-score">
          Your score is {score} out of {questionList.length}{" "}
          <button onClick={resetHandler} className="reset">reset</button>
        </div>
      ) : (
        <div className="qus-ans">
          <h1 className="question-text"> Qs.{currentQus + 1}:- {questionList[currentQus].qusText}</h1>
          {questionList[currentQus].qusOptions.map((option, index) => {
            return (
              <button
                onClick={() => optionClickHandler(option.isCorrect)}
                key={index}
              >
                {index + 1}. {option.ansText}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
