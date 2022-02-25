import React, { ReactElement } from 'react'
import Link from 'next/link'
import 'twin.macro'

import Layout from '~/components/Layout'
import Metatag from '~/components/Metatag'
import { GetStaticProps } from 'next'
import { ITestResult } from '~/types/data'

interface TypesProps {
  testResult: ITestResult[]
}
function Types({ testResult }: TypesProps) {
  return (
    <>
      <Metatag title="모든 유형 한번에 보기" />
      <section tw="space-y-8 text-center">
        <h1 tw="text-xl pt-5 text-pink-500">모든 유형 한번에 보기</h1>
        {testResult.map((result) => (
          <React.Fragment key={result.id}>
            <Link href={`/result/${result.id}`}>
              <article tw="cursor-pointer space-y-2 opacity-50 hover:opacity-100 ">
                <div>
                  <img
                    width={200}
                    height={200}
                    src={`/images/${result.id}.jpg`}
                    alt={result.name}
                    tw="rounded-full shadow inline"
                  />
                </div>
                <p tw="text-gray-500 ">{result.name}</p>
              </article>
            </Link>
          </React.Fragment>
        ))}
        <div tw="p-3">
          <Link href="/test">
            <button type="button" tw="py-4 w-full rounded bg-gray-500 text-pink-300">
              내 유형 알아보기
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Types

Types.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export const getStaticProps: GetStaticProps = async (context) => {
  const response = await import('~/data/result.json')
  const testResult: ITestResult[] = response.data
  return {
    props: { testResult },
  }
}
