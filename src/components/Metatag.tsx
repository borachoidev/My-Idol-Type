import React from 'react'
import Head from 'next/head'

interface MetatagProps {
  title?: string
  description?: string
  image?: string
}

function Metatag({
  title = 'My idol type test',
  description = '나의 아이돌 유형을 알아보자! 私がkーpopアイドルになったらどんなタイプ？',
  image = 'https://raw.githubusercontent.com/borachoidev/My-Idol-Type/dff71dfbf597a5e635cb70109acccd88557c2a7d/public/images/main.gif',
}: MetatagProps) {
  return (
    <Head>
      <title>{title} | 아이돌 유형 테스트</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="아이돌유형,아이돌mbti,아이돌테스트,My Idol Type Test,アイドルタイプテスト" />
      <meta property="og:title" content={title + '| My Idol Type Test'} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="My Idol Type Test" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="photo" />
    </Head>
  )
}

export default Metatag
