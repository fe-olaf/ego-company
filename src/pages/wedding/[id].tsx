import classnames from 'classnames/bind'
import Head from 'next/head'

import { ThemeType, Beige } from '$types/theme'
import useLoadKaKao from '$hooks/useLoadKakao'
import BeigeTheme from '$components/theme/bedge'
import { THEME_BG_COLOR } from '$constants'
import { useWeddingContext } from '$contexts/WeddingContext'

import styles from './Wedding.module.scss'

const cx = classnames.bind(styles)

function WeddingPage() {
  const {
    state: { wedding },
  } = useWeddingContext()

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
