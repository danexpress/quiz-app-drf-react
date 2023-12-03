import React, { useState } from 'react'
import { resultInitalState } from '../../constants';
import "./Quiz.scss"
import AnswerTimer from '../AnswerTimer/AnswerTimer';


const Quiz = ({ questions }) => {
  console.log('Questions:', questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  
  const currentQuestionData = questions[currentQuestion];

  const { answers, correct_answer, question_text } = currentQuestionData;

  // useEffect(() => {
   
  //   setShowAnswerTimer(true);
  // }, [currentQuestion]);

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correct_answer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null);
    setShowAnswerTimer(false);
    if (!finalAnswer) {
      setWrongAnswers((prev) => [...prev, currentQuestionData]);
    }
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }

    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  };


  const onPreviousClick = () => {
    setAnswerIdx(null);
    
    if (currentQuestion !== 0) {
      setCurrentQuestion((prev) => prev - 1);      
      setShowAnswerTimer(true);

    }
  };
  
  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
  }

  const handleTimeUp = () => {
    setAnswer(true);
    onClickNext(false)
  }
  
  const viewWrong = () => {
    setShowResult(true);
    setShowAnswerTimer(false);
  };
  

  return (
    <div className='quiz-container'>
      
      {!showResult ? (
        <>
          
          {showAnswerTimer && <AnswerTimer duration={60} onTimeUp={handleTimeUp} />}
          <span className='active-question-no'> {currentQuestion + 1} </span>
          <span className='total-question'> /{questions.length} </span>
          <h2>{question_text}</h2>
          <ul>
            {answers.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={answerIdx === index ? 'selected-answer' : null}
              >
                {answer}
              </li>
            ))}
          </ul>
            
            
            <div className='footer'>
            <button onClick={onPreviousClick} disabled={currentQuestion === 0}>
              Previous
            </button>

            <button onClick={() => onClickNext(answer)} disabled={answerIdx === null}>
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </>
      ) : (
        <div className='result'>
          <h3>Result</h3>
        <p>
          Total Questions: <span>{questions.length}</span>
        </p>
        <p>
          Total Score: <span>{result.score}</span>
        </p>
        <p>
          Correct Answers : <span>{result.correctAnswers}</span>
        </p>
        <p>
          Wrong Answers : <span>{result.wrongAnswers}</span>
        </p>
        <button onClick={onTryAgain}>Try again</button>
       
        {showResult && (
            <div>
              <h3>Wrong Answers</h3>
              <ul>
                {wrongAnswers.map((wrongAnswer, index) => (
                  <li key={index}>
                    <strong>Question: </strong> {wrongAnswer.question_text}
                    <br />
                    <strong>Correct Answer: </strong>{' '}
                    {wrongAnswer.correct_answer}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;