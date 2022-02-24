import React, { ReactElement, useState } from 'react'
import Answer from '../components/Answer'
import Layout from '../components/Layout'
import { qnaList } from '../data'
import 'twin.macro'
import Metatag from '~/components/Metatag'
import ProgressBar from '~/components/ProgressBar'

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
    <>
      <Metatag />
      <section tw="px-4">
        <ProgressBar step={step} />
        <article tw="p-5 text-center word-break[keep-all] text-xl text-pink-500 height[120px]">
          <p>{qnaList[step].q}</p>
        </article>

        <article tw="text-center space-y-4">
          <Answer answer={qnaList[step].a[0]} steps={[step, setStep]} types={[type, setType]} />
          <Answer answer={qnaList[step].a[1]} steps={[step, setStep]} types={[type, setType]} />
        </article>
      </section>
    </>
  )
}

export default Test
Test.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
