import React, { useEffect } from 'react'
import { AppContext, AppProps } from 'next/app'
import Router from 'next/router'
import Head from 'next/head'

import { WeddingContextProvider } from '$contexts/WeddingContext'
import { AlertContextProvider } from '$contexts/AlertContext'
import { fetchWedding } from '$services/wedding'
import { InvitationType, Wedding } from '$types/wedding'
import { KAKAO_CLIENT_ID, APP_PROFILES } from '$config'

import mockWedding from '../__mock__/wedding'
import '$scss/global.scss'
import '$shared/calendar.css'
import Alert from '$components/shared/Alert'

const isDev = APP_PROFILES === 'development'

export default function Page({
  pageProps,
  Component,
  wedding,
  invitationType,
  id,
}: AppProps<AppContext> & {
  invitationType?: InvitationType
  wedding?: Wedding | null
  id?: string
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

  if (typeof wedding === 'undefined' || !id) {
    return (
      <Alert
        label="만들러가기"
        message="청첩장 정보를 찾을 수 없습니다"
        onClose={() => {
          window.location.href =
            'https://sell.smartstore.naver.com/?NaPm=ct%3Dkrozhc3h%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3D87b4a64f783b3a687480004553481899141bf084#/home/about'
        }}
        show
      ></Alert>
    )
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
        />
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_CLIENT_ID}`}
        ></script>
      </Head>
      <WeddingContextProvider {...(wedding ? { initialValue: wedding } : {})}>
        <AlertContextProvider>
          <Component {...pageProps} invitationType={invitationType} id={id} />
        </AlertContextProvider>
      </WeddingContextProvider>
    </>
  )
}

Page.getInitialProps = async ({
  ctx,
  Component: { getInitialProps: getComponentInitialProps },
}: AppContext) => {
  const { req, query } = ctx
  const { id, invitationType } = query

  const pageProps = await (getComponentInitialProps
    ? getComponentInitialProps(ctx)
    : Promise.resolve({}))

  try {
    const wedding = await (req
      ? !isDev
        ? fetchWedding(id as string)
        : Promise.resolve(mockWedding as Wedding)
      : Promise.resolve({}))

    return {
      pageProps,
      invitationType: invitationType as InvitationType,
      wedding,
      id: id as string,
    }
  } catch (e) {
    return {
      pageProps,
      invitationType: invitationType as InvitationType,
    }
  }
}
