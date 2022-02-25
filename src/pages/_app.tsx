import { ReactElement, ReactNode, useEffect } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { GlobalStyles, styled } from 'twin.macro'
import { appWithTranslation } from 'next-i18next'

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
    gtag: any
  }
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
  font-family: 'M PLUS Rounded 1c', 'Jua', sans-serif;
`

export default appWithTranslation(MyApp)
