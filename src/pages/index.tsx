import Link from 'next/link'
import React, { ReactElement } from 'react'
import 'twin.macro'
import Image from 'next/image'
import Layout from '../components/Layout'
import Metatag from '~/components/Metatag'

function Home() {
  return (
    <>
      <Metatag />
      <main tw="space-y-5">
        <Image width={500} height={500} src={`/images/main.gif`} alt="미리보기" />

        <p tw="text-sm word-break[keep-all] text-lg px-2 text-center">
          한국을 넘어서 전 세계사람들의 <br />
          마음을 사로잡은
          <span tw="text-xl text-pink-500"> K-pop 아이돌!</span>
          <br />
          내가 만약 데뷔를 한다면 나는 어떤 아이돌일까 ? <br />
          지금 나의 아이돌 유형을 확인하려면 <br />
          <span tw="text-pink-500 ">"시작하기"</span> 버튼을 눌러주세요!
        </p>
        <div tw="px-3">
          <Link href="/test">
            <button type="button" tw="py-4 w-full bg-gray-500 rounded text-pink-300">
              시작하기
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Home
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
