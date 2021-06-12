import React from 'react';
import './Question.css';

function Question({ question }) {
  return <div className="question-box">{question} </div>;
}

export default Question;
