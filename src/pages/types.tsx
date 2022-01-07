import Image from 'next/image'
import React, { ReactElement } from 'react'
import Layout from '~/components/Layout'
import { infoList } from '~/data'
import 'twin.macro'
import Link from 'next/link'

export const Types = () => {
  return (
    <section tw="space-y-8 text-center">
      <h1 tw="text-xl pt-5 text-pink-500">모든 유형 한번에 보기</h1>
      {infoList.map((info) => (
        <React.Fragment key={info.id}>
          <Link href={`/result/${info.id}`}>
            <article tw="cursor-pointer space-y-2 hover:opacity-50">
              <div>
                <Image
                  width={200}
                  height={200}
                  src={`/images/${info.id}.jpg`}
                  alt={info.name}
                  tw="rounded-full shadow"
                />
              </div>
              <p tw="text-gray-500 ">{info.name}</p>
            </article>
          </Link>
        </React.Fragment>
      ))}
      <div tw="p-3">
        <Link href="/test">
          <button
            type="button"
            tw="py-4 w-full rounded bg-gray-500 text-pink-300"
          >
            내 유형 알아보기
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Types

Types.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
