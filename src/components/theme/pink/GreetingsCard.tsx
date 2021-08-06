import classnames from 'classnames/bind'

import Animation from '$shared/Animation'
import { Wedding, Message } from '$types/wedding'

import styles from './GreetingsCard.module.scss'

const cx = classnames.bind(styles)

function GreetingsCard({
  bride,
  bridegroom,
  message,
  animation,
}: Pick<Wedding, 'bridegroom' | 'bride' | 'animation'> & {
  message: Message['intro']
}) {
  return (
    <div className={cx('article')}>
      <Animation useAnimation={animation} type="coming">
        <div className={cx('wrap_message')}>
          <div className={cx('txt_message')}>{message}</div>
          <div className={cx('wrap_footer')}>
            <div>{bridegroom.shortName}</div>
            <div className={cx('txt_divide')}>·</div>
            <div>{bride.shortName}</div>
            <div className={cx('txt_end')}>올림</div>
          </div>
        </div>
      </Animation>
    </div>
  )
}

export default GreetingsCard
