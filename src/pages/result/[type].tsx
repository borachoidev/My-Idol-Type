import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
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
    <section tw="">
      <h1 tw="text-2xl font-bold word-break[keep-all] px-5">{result.name}</h1>
      <Image
        width={472}
        height={472}
        src={`/images/${result.id}.jpg`}
        alt={result.name}
        tw="rounded-lg"
      />

      <p tw="whitespace-pre-line word-break[keep-all] p-2">{result.desc}</p>
      <h3 tw="font-bold">나와 캐미터지는 아이돌은 ?</h3>
      <span>{result.partner}</span>

      <div>
        <Link href="/test">
          <button
            type="button"
            tw="py-4 w-full  bg-gray-400 rounded hover:bg-gray-500"
          >
            다시하기
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Result

Result.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
