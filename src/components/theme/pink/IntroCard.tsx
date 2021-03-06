import classnames from 'classnames/bind'

import { Wedding } from '$types/wedding'
import LocationText from '$shared/LocationText'
import Animation from '$shared/Animation'

import styles from './IntroCard.module.scss'

const cx = classnames.bind(styles)

function IntroCard({
  bride,
  bridegroom,
  location,
  date,
  image,
  animation,
}: Pick<Wedding, 'bride' | 'bridegroom' | 'location' | 'date' | 'animation'> & {
  image: string
}) {
  return (
    <div className={cx('article')}>
      <Animation useAnimation={animation} type="fadein">
        <div className={cx('wrap_name')}>
          <div className={cx('txt_name')}>{bridegroom.name}</div>
          <div className={cx('txt_divide')}>{'♥'}</div>
          <div className={cx('txt_name')}>{bride.name}</div>
        </div>
        <LocationText date={date} location={location} />
        <img src={image} alt="인트로 이미지" />
      </Animation>
    </div>
  )
}

export default IntroCard
