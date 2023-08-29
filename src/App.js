import React, { useState } from 'react';
import './App.css';
const questions = [
  {
    question: 'What is the full form of CPU',
    options: ['Control Protocol Unit', 'Center Process Unit', 'Central Processing Unit', 'Control Processing Unit'],
    correctAnswer: "Central Processing Unit"
  },
  {
    question: "What is the full form of JS",
    options: ["Jazz Sie  ", "Jam Signal", "Jam Script", "Java Script"],
    correctAnswer: "Java Script",
  },
  {
    question: "What is the capital of Pakistan",
    options: ["Islamabad", "Landi", "Shershah", "Korangi"],
    correctAnswer: "Islamabad",
  },
  {
    question: "What is the full form of DOM",
    options: ["Document On Module", "Disk Open Management", "Drive On Mains", " Document Object Model"],
    correctAnswer: "Document Object Model",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["lb", "/br", "br;", "break"],
    correctAnswer: "/br",
  },
  {
    question: "HTML Stands for ______________",
    options: ["hypher and text Markup Language", "Home toll Markup language", "Hypertext Markup Language", "programing language"],
    correctAnswer: "Hypertext Markup Language",
  },
  
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="application">
      <h1>QUIZ-APP</h1>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
 