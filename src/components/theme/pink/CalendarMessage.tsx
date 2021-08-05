import classnames from 'classnames/bind'

import styles from './CalendarMessage.module.scss'

import LocationText from '$shared/LocationText'
import { Location } from '$types/wedding'

const cx = classnames.bind(styles)

function CalendarMessage({
  date,
  location,
}: {
  date: string
  location: Location
}) {
  return (
    <div className={cx('article')}>
      <div className={cx('hr')}></div>
      <LocationText date={date} location={location} />
    </div>
  )
}

export default CalendarMessage
