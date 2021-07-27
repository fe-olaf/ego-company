import { NextPageContext } from 'next'
import classnames from 'classnames/bind'
import Head from 'next/head'

import { fetchWedding } from '$services/wedding'
import { HeroType, ThemeBase, ThemeType, Beige } from '$types/theme'
import useLoadKaKao from '$hooks/useLoadKakao'
import BeigeTheme from '$components/theme/bedge'
import { THEME_BG_COLOR } from '$constants'

import styles from './Wedding.module.scss'

const cx = classnames.bind(styles)

function WeddingPage({ wedding }: { id: string; wedding: ThemeBase }) {
  useLoadKaKao()

  function generateThemeComponent(type: ThemeType) {
    switch (type) {
      case 'beige': {
        return <BeigeTheme wedding={wedding as Beige} />
      }
      case 'pink': {
        return <BeigeTheme wedding={wedding as Beige} />
      }
      default: {
        return null
      }
    }
  }

  const { type } = wedding

  const Component = generateThemeComponent(type)

  return (
    <>
      <Head>
        <style>{`body { background-color: ${THEME_BG_COLOR[type]} !important; }`}</style>
      </Head>
      <div className={cx('container', type)}>{Component}</div>
    </>
  )
}

export default WeddingPage

export async function getServerSideProps(context: NextPageContext) {
  const {
    query: { id, type },
  } = context

  const response = await fetchWedding(id as string)

  if (!id || !response) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    }
  }

  return {
    props: {
      type: type as HeroType | undefined,
      wedding: response,
    },
  }
}
