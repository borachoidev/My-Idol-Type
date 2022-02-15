import React, { ReactElement, useState } from 'react'
import 'twin.macro'

import Answer from '~/components/Answer'
import Layout from '~/components/Layout'
import Metatag from '~/components/Metatag'
import { qnaList } from '~/data'

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
        <span>{step + 1}/12</span>
        <div tw="bg-gray-100 rounded-full overflow-hidden height[10px]">
          <div style={{ width: `${step * 8.333}%` }} tw="bg-pink-700 transition-all">
            &nbsp;
          </div>
        </div>
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
