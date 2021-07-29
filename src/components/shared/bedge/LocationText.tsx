import { Beige } from '$types/wedding'
import classNames from 'classnames/bind'

import { generateWeddingDateLabel } from '$utils/date'

import styles from './LocationText.module.scss'

const cx = classNames.bind(styles)

function LocationText({ date, location }: Pick<Beige, 'location' | 'date'>) {
  return (
    <div className={cx('article')}>
      <div className={cx('txt_date')}>{generateWeddingDateLabel(date)}</div>
      <div className={cx('txt_location')}>{location.name}</div>
    </div>
  )
}

export default LocationText
