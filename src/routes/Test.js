import React, { useState } from 'react';
import Answer from '../components/Answer';
import Question from '../components/Question';
import { qnaList } from '../data.js';

export default function Test(props) {
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
    <div>
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
