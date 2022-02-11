import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import Layout from '../../components/Layout'

import { infoList } from '../../data'
import 'twin.macro'
import { FB_APP_ID, KAKAO_KEY } from '~/constants'
import { styled } from 'twin.macro'

interface IResult {
  name: string
  desc: string
  partner: string
  id: number
  og: string
}
function Result() {
  const router = useRouter()
  const [result, setResult] = useState<IResult>()

  const { type } = router.query

  const pageUrl = useMemo(() => {
    if (typeof window !== 'undefined') return `${window.location.origin}${window.location.pathname}`
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    initKakaoSdk()
    initFacebookSdk()
  }, [])

  const initKakaoSdk = () => {
    const { Kakao } = window
    if (!Kakao.isInitialized()) Kakao.init(KAKAO_KEY)
  }

  const initFacebookSdk = () => {
    const { FB } = window

    FB.init({
      appId: FB_APP_ID,
      'js[src]': `https://connect.facebook.net/en_US/sdk.js#version=v13.0&appId=${FB_APP_ID}&xfbml=true&autoLogAppEvents=true`,
      xfbml: true,
      version: 'v13.0',
    })
  }

  const shareToKaKao = () => {
    const { Kakao } = window
    Kakao.Link.sendCustom({
      templateId: 70113,
      templateArgs: { NAME: result?.name, THUM: result?.og },
    })
  }

  const shareToFacebook = () => {
    const { FB } = window
    FB.ui(
      {
        display: 'popup',
        method: 'share',
        href: pageUrl,
      },
      function (response: any) {
        console.log(response)
      }
    )
  }

  useEffect(() => {
    setResult(infoList[Number(type) - 1])
  }, [type])

  if (!result) return null
  return (
    <section tw="space-y-3">
      <div tw="p-3 space-y-3">
        <h1 tw="text-2xl font-bold word-break[keep-all] px-5 text-pink-500 text-center">{result.name}</h1>
        <div>
          <Image width={425} height={425} src={`/images/${result.id}.jpg`} alt={result.name} />
        </div>

        <div tw="px-3 text-center">
          <p tw="whitespace-pre-line word-break[keep-all] text-center">{result.desc}</p>
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
          <button type="button" tw="py-4 w-full bg-gray-500 rounded text-pink-300">
            다시하기
          </button>
        </Link>
      </div>
      <div tw="px-3 py-1">
        <p tw=" text-center text-gray-500">친구에게 나의 아이돋 유형 공유하기</p>
        <div tw="flex space-x-2 justify-center">
          <KakaoLinkButton onClick={shareToKaKao} id="kakao-link-btn" />
          <FaceBookLinkButton onClick={shareToFacebook} />
          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?original_referer=${pageUrl}&text=내가 만약 아이돌이라면? 나는 ${result.name} !&url=${pageUrl}&hashtags=내아이돌유형테스트,MITT`}
            rel="noreferrer"
          >
            <TwitterLinkButton />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Result

Result.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

const KakaoLinkButton = styled.div`
  background: url('/images/share/kakao.png');
  background-size: cover;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
const FaceBookLinkButton = styled.div`
  background: url('/images/share/facebook.png');
  background-size: cover;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
const TwitterLinkButton = styled.div`
  background: url('/images/share/twitter.png');
  background-size: cover;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
