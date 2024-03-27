import React, { useState } from 'react';
import "../components/Test.css"

function Test() {
  const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (questionId) => {
    setShowAnswer((prevState) => ({
      ...prevState,
      [questionId]: !prevState[questionId],
    }));
  };

  return (
    <div className="test">
      <div className="qa-section">
        <h2>Q&A</h2>
        <div className="qa-content">
          <div className="question-block">
            <div className="question-block-content">
              <p>How do I know if a remote professional is fluent in English?</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                onClick={() => toggleAnswer('q1')}
              >
                <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" fill="#FBFBFA" stroke="#002D4F" />
                <path d="M37 24.5H12" stroke="#002D4F" />
                <path d="M24.5 37L24.5 12" stroke="#002D4F" />
              </svg>
            </div>
            {showAnswer['q1'] && (
              <div className="answer-block">
                <div className="answer-block-content">
                  <p>
                    Through our rigorous Personnel Selection Process, we ensure that every Virtual Professional possesses both
                    English proficiency and the required skill set. You also have the opportunity to conduct interviews with the
                    final candidates before they start their work for you.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
