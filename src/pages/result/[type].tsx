import React, { ReactElement, useEffect, useMemo } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { styled } from 'twin.macro'

import { FB_APP_ID, KAKAO_KEY } from '~/constants'
import { ITestResult } from '~/types/data'
import Layout from '~/components/Layout'
import Metatag from '~/components/Metatag'
import Share from '~/components/Share'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

interface ResultProps {
  result: ITestResult
  type: string
}
function Result({ result, type }: ResultProps) {
  const { t } = useTranslation()
  const pageUrl = useMemo(() => `https://my-idol-type-test.vercel.app/result/${type}`, [])

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

  if (!result) return null
  return (
    <>
      <Metatag title={t(`result:${result.name}`)} description={t(`result:${result.desc}`)} image={result.og} />
      <section tw="space-y-3">
        <div tw="p-3 space-y-3">
          <h1 tw="text-2xl font-bold word-break[keep-all] px-5 text-pink-500 text-center">
            {t(`result:${result.name}`)}
          </h1>
          <div>
            <Image width={425} height={425} src={`/images/${result.id}.jpg`} alt={result.name} />
          </div>

          <div tw="px-3 text-center">
            <p tw="whitespace-pre-line word-break[keep-all] text-center">{t(`result:${result.desc}`)}</p>
          </div>
        </div>

        <div tw="p-3 text-center space-y-1">
          <h3 tw="font-bold text-lg text-pink-500">{t('result:chemistry')}</h3>
          <p>{t(`result:${result.partner}`)}</p>
        </div>

        <Link href="/types">
          <div role={'button'} tw="underline text-center text-gray-500">
            {t('result:check-other-type')}
          </div>
        </Link>
        <div tw="p-3">
          <Link href="/test">
            <button type="button" tw="py-4 w-full bg-gray-500 rounded text-pink-300">
              {t('result:retry-button')}
            </button>
          </Link>
        </div>
        <Share pageUrl={pageUrl} result={result} />
      </section>
    </>
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
const DefaultLinkButton = styled.div`
  background: #eee url('/images/share/link.png');
  border-radius: 3px;
  background-size: cover;
  width: 32px;
  height: 32px;
  cursor: pointer;
`

export const getStaticProps: GetStaticProps = async ({ locale = 'ko', params }) => {
  const { data: testResult } = await import('~/data/result.json')

  if (!params)
    return {
      notFound: true,
    }

  return {
    props: {
      result: testResult[Number(params.type) - 1],
      type: params.type,
      ...(await serverSideTranslations(locale, ['result'])),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { type: '1' }, locale: 'ko' },
      { params: { type: '2' }, locale: 'ko' },
      { params: { type: '3' }, locale: 'ko' },
      { params: { type: '4' }, locale: 'ko' },
      { params: { type: '5' }, locale: 'ko' },
      { params: { type: '6' }, locale: 'ko' },
      { params: { type: '7' }, locale: 'ko' },
      { params: { type: '8' }, locale: 'ko' },
      { params: { type: '1' }, locale: 'ja' },
      { params: { type: '2' }, locale: 'ja' },
      { params: { type: '3' }, locale: 'ja' },
      { params: { type: '4' }, locale: 'ja' },
      { params: { type: '5' }, locale: 'ja' },
      { params: { type: '6' }, locale: 'ja' },
      { params: { type: '7' }, locale: 'ja' },
      { params: { type: '8' }, locale: 'ja' },
    ],
    fallback: false, // See the "fallback" section below
  }
}
