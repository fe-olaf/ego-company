import classnames from 'classnames/bind'

import { Beige, Message } from '$types/theme'
import LocationText from '$shared/bedge/LocationText'

import styles from './IntroCard.module.scss'

const cx = classnames.bind(styles)

function IntroCard({
  bride,
  bridegroom,
  location,
  date,
  message,
  image,
}: Pick<Beige, 'bride' | 'bridegroom' | 'location' | 'date'> & {
  message: Message['intro']
  image: string
}) {
  return (
    <div className={cx('article')}>
      <h2 className={cx('txt_intro')}>{message}</h2>
      <img src={image} alt="인트로 이미지" />
      <div className={cx('wrap_name')}>
        <div className={cx('txt_name')}>{bridegroom.name}</div>
        <div className={cx('txt_divide')}>{'&'}</div>
        <div className={cx('txt_name')}>{bride.name}</div>
      </div>
      <LocationText date={date} location={location} />
    </div>
  )
}

export default IntroCard
