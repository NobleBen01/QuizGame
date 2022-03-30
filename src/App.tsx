import React, { useState } from "react";
import QizCard from "./components/questionCard";
import { fetchQuizQuestions } from "./api";
import { QuestionState, Difficulty } from "./api";
import { GlobalStyles, Wrapper } from "./App.styles";
import "./App.css";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { Button } from "antd";

const TotalQuestion = 15;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(question);

  async function StartTrivia() {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TotalQuestion,
      Difficulty.Easy
    );
    setQuestion(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  function checkAnswer(e: React.MouseEvent<HTMLButtonElement>) {
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;
      // check users answer against current answer
      const correct = question[number].correct_answer === answer;
      // add score if answer is correct
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObject = {
        question: question[number].question,
        answer,
        correct,
        correctAnswer: question[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  function nextQuestion() {
    // move to next question
    const nextQuestion = number + 1;
    if (nextQuestion === TotalQuestion) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <h1>Fun Quiz Game</h1>
        {gameOver || userAnswers.length === TotalQuestion ? (
          <button className="start" onClick={StartTrivia}>
            Start Quiz Game
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading && <p>Loading questions...</p>}
        {!loading && !gameOver && (
          <QizCard
            questionNr={number + 1}
            totalQuestions={TotalQuestion}
            question={question[number].question}
            answers={question[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TotalQuestion - 1 ? (
          <button className="next" onClick={nextQuestion}>
            next question
          </button>
        ) : null}
        <Link to="/">
          {" "}
          <Button className="button" type="primary">
            Back
          </Button>
        </Link>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
