import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { GlobalStyles, styled } from 'twin.macro'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

declare global {
  interface Window {
    Kakao: any
    fbAsyncInit: any
    FB: any
  }
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div tw="bg-black">
      <RootContainer>{getLayout(<Component {...pageProps} />)}</RootContainer>
      <GlobalStyles />
    </div>
  )
}
const RootContainer = styled.div`
  position: relative;
  max-width: 425px;
  min-width: 320px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  font-family: 'Jua', sans-serif;
`

export default MyApp
