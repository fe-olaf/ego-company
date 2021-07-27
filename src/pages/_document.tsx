import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

import { NCP_CLIENT_ID } from '$config'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage()

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      }
    } finally {
      //
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="EGO WEDDING" />
          <meta property="og:image" content="" />
          <meta id="metaOgUrl" property="og:url" content="" />
          <meta property="og:description" content="새로운 시작을 함께합니다" />
          <link rel="shortcut icon" href="" />
          <link rel="icon" href="" />
          <link rel="apple-touch-icon-precomposed" href="" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NCP_CLIENT_ID}`}
          ></script>
        </body>
      </Html>
    )
  }
}
