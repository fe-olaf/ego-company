import classnames from 'classnames/bind'

import { Wedding, Message } from '$types/wedding'
import LocationText from '$shared/LocationText'
import Animation from '$shared/Animation'

import styles from './IntroCard.module.scss'

const cx = classnames.bind(styles)

function IntroCard({
  bride,
  bridegroom,
  location,
  date,
  message = '결혼합니다.',
  image,
  animation,
}: Pick<Wedding, 'bride' | 'bridegroom' | 'location' | 'date' | 'animation'> & {
  message: Message['intro']
  image: string
}) {
  return (
    <div className={cx('article')}>
      <Animation useAnimation={animation} type="fadein">
        <h2 className={cx('txt_intro')}>{message}</h2>
        <img src={image} alt="인트로 이미지" />
        <div className={cx('wrap_name')}>
          <div className={cx('txt_name')}>{bridegroom.name}</div>
          <div className={cx('txt_divide')}>{'&'}</div>
          <div className={cx('txt_name')}>{bride.name}</div>
        </div>
        <LocationText date={date} location={location} />
      </Animation>
    </div>
  )
}

export default IntroCard
