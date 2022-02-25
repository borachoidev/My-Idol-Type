import React, { ReactElement, useLayoutEffect, useMemo, useState } from 'react'
import { GetStaticProps } from 'next'
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
  const router = useRouter()

  const [step, setStep] = useState<number>(0)
  const [finish, setFinish] = useState(false)
  const [type, setType] = useState<{ [key: string]: number }>({
    E: 0,
    N: 0,
    T: 0,
    J: 0,
  })
  const currentData = useMemo<IQnA>(() => qna[step], [step])
  useLayoutEffect(() => {
    if (!finish) return

    const res = calculateResult()
    router.push(`/result/${res}`)
  }, [finish])

  function calculateResult() {
    let res = ''
    res += type.E > 0 ? 'E' : 'I'
    res += type.N > 0 ? 'N' : 'S'
    res += type.T > 0 ? 'T' : 'F'
    res += type.J > 0 ? 'J' : 'P'

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

  if (!currentData) return null
  return (
    <>
      <Metatag />
      <section tw="px-4">
        <ProgressBar step={step} />

        <article tw="p-5 text-center text-xl text-pink-500 height[120px] word-break[keep-all]">
          <p>{currentData.question}</p>
        </article>

        <article tw="text-center space-y-4">
          {currentData.options.map((answer, i) => (
            <Option
              option={answer}
              key={i}
              onClick={() => {
                const [key, value] = Object.entries(answer.type)[0]
                setType({
                  ...type,
                  [key]: type[key] + value,
                })
                if (step !== 11) setStep((_step) => _step + 1)
                else setFinish(true)
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
