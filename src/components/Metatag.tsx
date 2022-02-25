import React from 'react'
import Head from 'next/head'

interface MetatagProps {
  title?: string
  description?: string
  image?: string
}

function Metatag({
  title = 'My idol type test',
  description = '나의 아이돌 유형을 알아보자!',
  image = 'https://rawcdn.githack.com/borachoidev/My-Idol-Type/9db39f52240ecc175551323967d908cdc78fd6f0/public/images/5.jpg?raw=true',
}: MetatagProps) {
  return (
    <Head>
      <title>{title} | 아이돌 유형 테스트</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="아이돌유형,아이돌mbti,아이돌테스트,mitt" />
      <meta property="og:title" content={title + '| MITT 내아이돌유형테스트'} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="MITT 내아이돌유형테스트" />
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
