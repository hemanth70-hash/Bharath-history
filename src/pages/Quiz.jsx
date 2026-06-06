import React, { useEffect, useState } from "react";
import Papa from "papaparse";

import Navbar from "../components/Navbar";
import "../styles/Quiz.css";

export default function Quiz() {

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {

    Papa.parse("/data/quizzes.csv", {

      download: true,

      header: true,

      complete: (results) => {

        const cleanData =
          results.data.filter(
            q => q.question
          );

        const shuffled =
          [...cleanData]
            .sort(() => Math.random() - 0.5);

        setQuestions(shuffled);

      }

    });

  }, []);

  if (questions.length === 0) {

    return (
      <>
        <Navbar />

        <div className="quiz-loading">
          Loading Quiz...
        </div>
      </>
    );
  }

  const question =
    questions[currentQuestion];

  const submitAnswer = () => {

    if (!selectedAnswer)
      return;

    if (
      selectedAnswer ===
      question.correct_answer
    ) {

      setScore(
        prev => prev + 1
      );

    }

    setShowResult(true);

  };

  const nextQuestion = () => {

    setSelectedAnswer("");
    setShowResult(false);

    if (
      currentQuestion + 1 <
      questions.length
    ) {

      setCurrentQuestion(
        prev => prev + 1
      );

    } else {

      setQuizFinished(true);

    }

  };

  if (quizFinished) {

    const percentage =
      Math.round(
        (score /
          questions.length)
        * 100
      );

    let achievement =
      null;

    if (percentage >= 90)
      achievement =
        "🏆 History Master";

    else if (percentage >= 75)
      achievement =
        "🥇 History Scholar";

    else if (percentage >= 50)
      achievement =
        "🥈 History Learner";

    if (achievement) {

      const current =
        JSON.parse(
          localStorage.getItem(
            "achievements"
          )
        ) || [];

      if (
        !current.includes(
          achievement
        )
      ) {

        current.push(
          achievement
        );

        localStorage.setItem(
          "achievements",
          JSON.stringify(
            current
          )
        );

      }

    }

    return (

      <>
        <Navbar />

        <div className="quiz-page">

          <div className="quiz-result-card">

            <h1>
              Quiz Complete 🎉
            </h1>

            <h2>
              {score}
              {" / "}
              {questions.length}
            </h2>

            <p>
              Accuracy:
              {" "}
              {percentage}%
            </p>

            <h3>

              {achievement
                ? achievement
                : "📚 Keep Practicing"}

            </h3>

          </div>

        </div>

      </>

    );

  }

  return (

    <>
      <Navbar />

      <div className="quiz-page">

        <div className="quiz-card">

          <div className="quiz-progress">

            Question
            {" "}
            {currentQuestion + 1}
            {" / "}
            {questions.length}

          </div>

          <h2>
            {question.question}
          </h2>

          <div className="options">

            <button
              className={
                selectedAnswer === "A"
                  ? "selected"
                  : ""
              }
              onClick={() =>
                setSelectedAnswer("A")
              }
            >
              A. {question.option_a}
            </button>

            <button
              className={
                selectedAnswer === "B"
                  ? "selected"
                  : ""
              }
              onClick={() =>
                setSelectedAnswer("B")
              }
            >
              B. {question.option_b}
            </button>

            <button
              className={
                selectedAnswer === "C"
                  ? "selected"
                  : ""
              }
              onClick={() =>
                setSelectedAnswer("C")
              }
            >
              C. {question.option_c}
            </button>

            <button
              className={
                selectedAnswer === "D"
                  ? "selected"
                  : ""
              }
              onClick={() =>
                setSelectedAnswer("D")
              }
            >
              D. {question.option_d}
            </button>

          </div>

          {!showResult ? (

            <button
              className="submit-btn"
              onClick={submitAnswer}
            >
              Submit Answer
            </button>

          ) : (

            <div>

              <div
                className={
                  selectedAnswer ===
                  question.correct_answer
                    ? "correct"
                    : "wrong"
                }
              >

                {selectedAnswer ===
                question.correct_answer
                  ? "✅ Correct"
                  : "❌ Wrong"}

              </div>

              <p className="explanation">

                <strong>
                  Explanation:
                </strong>
                {" "}
                {question.explanation}

              </p>

              <button
                className="submit-btn"
                onClick={nextQuestion}
              >
                Next Question
              </button>

            </div>

          )}

        </div>

      </div>

    </>

  );
}