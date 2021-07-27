import React, { useEffect } from 'react'
import { AppInitialProps, AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'

import { WeddingContextProvider } from '$contexts/WeddingContext'

import '$scss/global.scss'
import '$shared/calendar.css'

export default function Page({ pageProps, Component }: AppProps<AppContext>) {
  useEffect(() => {
    window.history.scrollRestoration = 'auto'

    const cachedScrollPositions: Array<[number, number]> = []
    let shouldScrollRestore: null | { x: number; y: number }

    Router.events.on('routeChangeStart', () => {
      cachedScrollPositions.push([window.scrollX, window.scrollY])
    })

    Router.events.on('routeChangeComplete', () => {
      if (shouldScrollRestore) {
        const { x, y } = shouldScrollRestore
        window.scrollTo(x, y)
        shouldScrollRestore = null
      }
      window.history.scrollRestoration = 'auto'
    })

    Router.beforePopState(() => {
      if (cachedScrollPositions.length > 0) {
        const scrolledPosition = cachedScrollPositions.pop()
        if (scrolledPosition) {
          shouldScrollRestore = {
            x: scrolledPosition[0],
            y: scrolledPosition[1],
          }
        }
      }
      window.history.scrollRestoration = 'manual'
      return true
    })
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
        />
      </Head>
      <WeddingContextProvider>
        <Component {...pageProps} />
      </WeddingContextProvider>
    </>
  )
}

Page.getInitialProps = async ({
  ctx,
  Component: { getInitialProps: getComponentInitialProps },
}: AppContext): Promise<AppInitialProps> => {
  const pageProps = await (getComponentInitialProps
    ? getComponentInitialProps(ctx)
    : Promise.resolve({}))

  return {
    pageProps,
  }
}
