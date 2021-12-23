import React, { useState } from 'react'
import Answer from '../components/Answer'
import Layout from '../components/Layout'
import Question from '../components/Question'
import { qnaList } from '../data'
import 'twin.macro'

const Test = () => {
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
      <div tw="bg-gray-100 rounded-full overflow-hidden height[10px]">
        <div
          style={{ width: `${step * 8.333}%` }}
          tw="bg-red-500 transition-all"
        >
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
  )
}

export default Test
Test.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
