import React, { useState } from 'react'
import Answer from '../components/Answer'
import Question from '../components/Question'
import { qnaList } from '../data'

export default function Test() {
  const [step, setStep] = useState<number>(0)
  type types = {
    E: number
    I: number
    N: number
    S: number
    T: number
    F: number
    P: number
    J: number
  }
  const [type, setType] = useState<types>({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  })

  return (
    <div>
      <span>{step + 1}/12</span>
      <div>
        <div style={{ width: `${step * 8.333}%` }}>&nbsp;</div>
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
  )
}
