import React from 'react';
import { useHistory } from 'react-router';

function Answer({ answer, steps, types }) {
  const history = useHistory();
  const [step, setStep] = steps;
  const [type, setType] = types;
  return <div onClick={goNext}> {answer.answer} </div>;

  function goNext() {
    setType({ ...type, [answer.type[0]]: type[answer.type[0]] + 1 });
    if (step === 11) {
      history.push('/result');
    }
    setStep(step + 1);
  }
}

export default Answer;
