import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './Answer.css';

function Answer({ answer, steps, types }:any) {
  const history = useHistory();
  const [step, setStep] = steps;
  const [type, setType] = types;

  useEffect(() => {
    const typeArray :number[]=Object.values(type);
    let result:number = typeArray.reduce((a, b) =>  a + b);

    if (result === 12) {
      const res = calculateResult();
      history.push({
        pathname: `/result/${res}`,
      });
    }
  }, [type]);

  return (
    <div className="answer-box" onClick={goNext}>
      {answer.answer}
    </div>
  );

  function goNext() {
    setType({ ...type, [answer.type]: type[answer.type] + 1 });
    if (step !== 11) {
      setStep(step + 1);
    }
  }

  function calculateResult() {
    let res = '';
    if (type.E > type.I) {
      res += 'E';
    } else {
      res += 'I';
    }

    if (type.N > type.S) {
      res += 'N';
    } else {
      res += 'S';
    }
    if (type.F > type.T) {
      res += 'F';
    } else {
      res += 'T';
    }
    if (type.P > type.J) {
      res += 'P';
    } else {
      res += 'J';
    }

    switch (res) {
      case 'ISTP':
      case 'INTP':
        res = '1';
        break;
      case 'ESFJ':
      case 'ENFJ':
        res = '2';
        break;
      case 'ISFP':
      case 'INFP':
        res = '3';
        break;
      case 'ENFP':
      case 'ENTP':
        res = '4';
        break;
      case 'ISTJ':
      case 'INTJ':
        res = '5';
        break;
      case 'ESTP':
      case 'ESFP':
        res = '6';
        break;
      case 'ISFJ':
      case 'INFJ':
        res = '7';
        break;
      default:
        res = '8';
        break;
    }
    return res;
  }
}

export default Answer;