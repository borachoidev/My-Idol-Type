import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import 'twin.macro'

import Layout from '../components/Layout'
import Metatag from '~/components/Metatag'

function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Metatag />
      <main tw="space-y-5">
        <Image width={425} height={425} src={`/images/main.gif`} alt="미리보기" />

        <p tw="text-sm text-lg px-2 text-center">
          {t('intro:intro-1')}
          <span tw="text-pink-500 font-bold">{t('intro:intro-kpop')}</span>
          {t('intro:intro-2')}
          <span tw="text-pink-500 font-bold"> {t('intro:intro-start')}</span>
          {t('intro:intro-3')}
        </p>
        <div tw="px-3">
          <Link href="/test">
            <button type="button" tw="py-4 w-full bg-gray-500 rounded text-pink-300">
              {t('intro:start-button')}
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => {
  return { props: { ...(await serverSideTranslations(locale, ['intro'])) } }
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
