import Link from 'next/link'
import React, { ReactElement } from 'react'
import 'twin.macro'
import Image from 'next/image'
import Layout from '../components/Layout'

function Home() {
  return (
    <main>
      <Image width={500} height={500} src={`/images/main.gif`} alt="미리보기" />

      <p tw="text-sm word-break[keep-all] p-8">
        한국을 넘어서 전 세계사람들의 마음을 사로잡은 K-pop 아이돌!
        <br />
        내가 만약 데뷔를 한다면 나는 어떤 아이돌일까 ? <br />
        지금 나의 아이돌 유형을 확인하려면 <b>"시작하기"</b> 버튼을 눌러주세요!
      </p>

      <Link href="/test">
        <button
          type="button"
          tw="py-4 w-full bg-gray-400 rounded hover:bg-gray-500"
        >
          시작하기
        </button>
      </Link>
    </main>
  )
}

export default Home
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
