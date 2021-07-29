import classnames from 'classnames/bind'
import Head from 'next/head'

import { Theme, InvitationType } from '$types/wedding'
import useLoadKaKao from '$hooks/useLoadKakao'
import BeigeTheme from '$components/theme/bedge'
import { THEME_BG_COLOR } from '$constants'
import { useWeddingContext } from '$contexts/WeddingContext'

import styles from './Wedding.module.scss'

const cx = classnames.bind(styles)

function generateThemeComponent(theme: Theme) {
  switch (theme) {
    case 'beige': {
      return BeigeTheme
    }
    case 'pink': {
      return BeigeTheme
    }
    default: {
      return null
    }
  }
}

function WeddingPage({ invitationType }: { invitationType?: InvitationType }) {
  const {
    state: { wedding },
  } = useWeddingContext()

  useLoadKaKao()

  const { theme } = wedding

  const Component = generateThemeComponent(theme)

  if (!Component) {
    throw new Error('Not Found Theme')
  }

  return (
    <>
      <Head>
        <style>{`body { background-color: ${THEME_BG_COLOR[theme]} !important; }`}</style>
      </Head>
      <div className={cx('container', theme)}>
        {<Component wedding={wedding} invitationType={invitationType} />}
      </div>
    </>
  )
}

export default WeddingPage
