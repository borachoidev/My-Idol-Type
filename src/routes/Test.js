import React, { useState, useEffect } from 'react';
import Answer from '../components/Answer';
import Question from '../components/Question';
import { qnaList } from '../data.js';
import './Test.css';

export default function Test() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  });

  return (
    <div className="container">
      <span className="progress-per">{step + 1}/12</span>
      <div className="progress-div">
        <div style={{ width: `${step * 8.333}%` }} className="progress">
          &nbsp;
        </div>
      </div>

      <Question question={qnaList[step].q} />
      <Answer
        answer={qnaList[step].a[0]}
        steps={[step, setStep]}
        types={[type, setType]}
      />
      <Answer
        answer={qnaList[step].a[1]}
        steps={[step, setStep]}
        types={[type, setType]}
      />
    </div>
  );
}
