import React, { useEffect } from 'react'
import { AppInitialProps, AppContext, AppProps } from 'next/app'
import Router from 'next/router'
import Head from 'next/head'

import { WeddingContextProvider } from '$contexts/WeddingContext'
import { AlertContextProvider } from '$contexts/AlertContext'
import { fetchWedding } from '$services/wedding'
import { HeroType, ThemeBase } from '$types/theme'

import '$scss/global.scss'
import '$shared/calendar.css'

export default function Page({
  pageProps,
  Component,
  wedding,
  type,
}: AppProps<AppContext> & {
  type: HeroType
  wedding: ThemeBase | null
}) {
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
      <WeddingContextProvider {...(wedding ? { initialValue: wedding } : {})}>
        <AlertContextProvider>
          <Component {...pageProps} type={type} />
        </AlertContextProvider>
      </WeddingContextProvider>
    </>
  )
}

Page.getInitialProps = async ({
  ctx,
  Component: { getInitialProps: getComponentInitialProps },
}: AppContext): Promise<
  AppInitialProps & {
    type: HeroType
    wedding: ThemeBase | null
  }
> => {
  const { req, query } = ctx
  const { id, type } = query

  const pageProps = await (getComponentInitialProps
    ? getComponentInitialProps(ctx)
    : Promise.resolve({}))

  const wedding = await (req
    ? fetchWedding(id as string)
    : Promise.resolve(null))

  return {
    pageProps,
    type: type as HeroType,
    wedding,
  }
}
