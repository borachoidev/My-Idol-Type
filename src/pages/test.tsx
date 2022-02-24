import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import 'twin.macro'

import Option from '~/components/Option'
import Layout from '~/components/Layout'
import Metatag from '~/components/Metatag'
import ProgressBar from '~/components/ProgressBar'

import { IQnA } from '~/types/data'

interface TestProps {
  qna: IQnA[]
}
function Test({ qna }: TestProps) {
  const [step, setStep] = useState<number>(0)
  const router = useRouter()

  const [type, setType] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  })

  useEffect(() => {
    const typeArray = Object.values(type)
    let result = typeArray.reduce((a, b) => a + b)
    if (result === 12) {
      const res = calculateResult()
      router.push(`/result/${res}`)
    }
  }, [type])

  function calculateResult() {
    let res = ''
    if (type.E > type.I) {
      res += 'E'
    } else {
      res += 'I'
    }

    if (type.N > type.S) {
      res += 'N'
    } else {
      res += 'S'
    }
    if (type.F > type.T) {
      res += 'F'
    } else {
      res += 'T'
    }
    if (type.P > type.J) {
      res += 'P'
    } else {
      res += 'J'
    }

    switch (res) {
      case 'ISTP':
      case 'INTP':
        res = '1'
        break
      case 'ESFJ':
      case 'ENFJ':
        res = '2'
        break
      case 'ISFP':
      case 'INFP':
        res = '3'
        break
      case 'ENFP':
      case 'ENTP':
        res = '4'
        break
      case 'ISTJ':
      case 'INTJ':
        res = '5'
        break
      case 'ESTP':
      case 'ESFP':
        res = '6'
        break
      case 'ISFJ':
      case 'INFJ':
        res = '7'
        break
      case 'ESTJ':
      case 'ENTJ':
        res = '8'
        break
      default:
        throw new Error('잘못된 타입입니다')
    }
    return res
  }

  const currentData = useMemo(() => qna[step], [step])

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
            <Option
              option={answer}
              key={i}
              onClick={() => {
                setType({ ...type, [answer.type]: type[answer.type] + 1 })
                if (step !== 11) setStep((_step) => _step + 1)
              }}
            />
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
