import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import Layout from '../../components/Layout'

import { infoList } from '../../data'
import 'twin.macro'

function Result() {
  const router = useRouter()
  const [result, setResult] = useState<Data>()

  const { type } = router.query

  type Data = {
    name: string
    desc: string
    partner: string
    id: number
    og: string
  }
  console.log('type', type)
  useEffect(() => {
    setResult(infoList[Number(type) - 1])
  }, [type])

  if (!result) return null
  return (
    <section tw="space-y-3">
      <div tw="p-3 space-y-3">
        <h1 tw="text-2xl font-bold word-break[keep-all] px-5 text-pink-500">
          {result.name}
        </h1>
        <div>
          <Image
            width={425}
            height={425}
            src={`/images/${result.id}.jpg`}
            alt={result.name}
          />
        </div>

        <div tw="px-3 text-center">
          <p tw="whitespace-pre-line word-break[keep-all] text-center">
            {result.desc}
          </p>
        </div>
      </div>

      <div tw="p-3 text-center space-y-1">
        <h3 tw="font-bold text-lg text-pink-500">나와 캐미터지는 아이돌은 ?</h3>
        <p>{result.partner}</p>
      </div>

      <Link href="/types">
        <div role={'button'} tw="underline text-center text-gray-500">
          다른 유형 확인하기
        </div>
      </Link>
      <div tw="p-3">
        <Link href="/test">
          <button
            type="button"
            tw="py-4 w-full bg-gray-500 rounded text-pink-300"
          >
            다시하기
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Result

Result.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
