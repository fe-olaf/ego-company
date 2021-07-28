import classnames from 'classnames/bind'

import Animation from '$shared/Animation'
import { Beige, Message } from '$types/theme'

import styles from './GreetingsCard.module.scss'

const cx = classnames.bind(styles)

function GreetingsCard({
  bride,
  bridegroom,
  message,
}: Pick<Beige, 'bridegroom' | 'bride'> & { message: Message['intro'] }) {
  return (
    <div className={cx('article')}>
      <Animation useAnimation type="coming">
        <div className={cx('wrap_thumbnail')}>
          <img
            className={cx('thumbnail')}
            src={bridegroom.imageUrl}
            alt="신랑 이미지"
          />
          <div className={cx('txt_divide')}>♥</div>
          <img
            className={cx('thumbnail')}
            src={bride.imageUrl}
            alt="신부 이미지"
          />
        </div>
      </Animation>
      <Animation useAnimation type="coming">
        <div className={cx('txt_area')}>{message}</div>
        <div className={cx('wrap_footer')}>
          <div>{bridegroom.shortName}</div>
          <div className={cx('txt_divide')}>·</div>
          <div>{bride.shortName}</div>
          <div className={cx('txt_end')}>올림</div>
        </div>
      </Animation>
    </div>
  )
}

export default GreetingsCard
