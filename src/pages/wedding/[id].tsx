import classnames from 'classnames/bind'
import Head from 'next/head'

import { Theme, InvitationType } from '$types/wedding'
import useLoadKaKao from '$hooks/useLoadKakao'
import BeigeTheme from '$components/theme/beige'
import PinkTheme from '$components/theme/pink'
import { THEME_BG_COLOR } from '$constants'
import { useWeddingContext } from '$contexts/WeddingContext'
import MetaTags from '$shared/MetaTags'

import styles from './Wedding.module.scss'

const cx = classnames.bind(styles)

function generateThemeComponent(theme: Theme) {
  switch (theme) {
    case 'beige': {
      return BeigeTheme
    }
    case 'pink': {
      return PinkTheme
    }
    default: {
      return null
    }
  }
}

function WeddingPage({
  invitationType,
  id,
}: {
  invitationType?: InvitationType
  id: string
}) {
  const {
    state: { wedding },
  } = useWeddingContext()

  useLoadKaKao()

  const { theme } = wedding

  const Component = generateThemeComponent(theme)

  if (!Component) {
    throw new Error('Not Found Theme')
  }

  const {
    title,
    description,
    image: { gallery },
  } = wedding

  return (
    <>
      <Head>
        <style>{`body { background-color: ${THEME_BG_COLOR[theme]} !important; }`}</style>
      </Head>
      <MetaTags title={title} description={description} image={gallery[0]} />
      <div className={cx('container', theme)}>
        <Component wedding={wedding} id={id} invitationType={invitationType} />
      </div>
    </>
  )
}

export default WeddingPage
