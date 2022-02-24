import React, { ReactElement, useMemo, useState } from 'react'
import Answer from '../components/Answer'
import Layout from '../components/Layout'
import 'twin.macro'
import Metatag from '~/components/Metatag'
import ProgressBar from '~/components/ProgressBar'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { IQnA } from '~/types/data'

function Test({ qna }: InferGetStaticPropsType<typeof getStaticProps>) {
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
  const currentData: IQnA = useMemo(() => qna[step], [step])
  return (
    <>
      <Metatag />
      <section tw="px-4">
        <ProgressBar step={step} />

        <article tw="p-5 text-center word-break[keep-all] text-xl text-pink-500 height[120px]">
          <p>{currentData.question}</p>
        </article>

        <article tw="text-center space-y-4">
          {currentData.options.map((answer, i) => (
            <Answer answer={answer} steps={[step, setStep]} types={[type, setType]} key={i} />
          ))}
        </article>
      </section>
    </>
  )
}

export default Test
Test.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await import(`~/data/qna.json`)

  return { props: { qna: data } }
}
