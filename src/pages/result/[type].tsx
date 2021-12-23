import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { infoList } from '../../data'

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
    <>
      <div>
        <h1>{result.name}</h1>
        <img src={`/images/${result.id}.jpg`} alt={result.name} />
        <p>{result.desc}</p>
        <h3>나와 캐미터지는 아이돌은 ?</h3>
        <span>{result.partner}</span>
      </div>
      <div>
        <div></div>
        <Link href="/">
          <button className="restart-btn" type="button">
            다시하기
          </button>
        </Link>
      </div>
    </>
  )
}

export default Result
