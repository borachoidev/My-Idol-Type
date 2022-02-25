import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '~/constants'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jua&family=M+PLUS+Rounded+1c:wght@500&display=swap"
            rel="stylesheet"
          />
          <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60ca01f6b5f03663" />
          <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
