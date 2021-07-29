import React from 'react'
import DayPicker, { LocaleUtils, DateUtils } from 'react-day-picker'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import classnames from 'classnames/bind'
import Animation from '$shared/Animation'

import { parseDate } from '$utils/date'

import 'react-day-picker/lib/style.css'

import styles from './Calendar.module.scss'

const cx = classnames.bind(styles)

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

const localeUtils: LocaleUtils = {
  formatDate: (date) => format(date, 'yyyy-MM-dd'),
  formatDay: (date) => format(date, 'yyyy-MM-dd'),
  formatMonthTitle: (date) => `${date.getMonth() + 1}월`,
  formatWeekdayShort: (weekday) => WEEKDAYS[weekday],
  formatWeekdayLong: (weekday) => WEEKDAYS[weekday],
  getFirstDayOfWeek: () => 0,
  getMonths: () => [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ],
  parseDate: (date) => {
    const parsed = parse(date, 'yyyy-MM-dd', new Date())

    if (DateUtils.isDate(parsed)) {
      return parsed
    }

    return new Date()
  },
}

function Calendar({
  date,
  children,
}: React.PropsWithChildren<{ date: string }>) {
  const parsedWeddingDate = parseDate(date, 'yyyy-MM-dd hh:mm')

  const modifiers = {
    highlighted: parsedWeddingDate,
  }

  return (
    <div className={cx('article')}>
      <Animation useAnimation type="fadein">
        <DayPicker
          month={parsedWeddingDate}
          weekdaysShort={WEEKDAYS}
          modifiers={modifiers}
          localeUtils={localeUtils}
        />
        <div className={cx('dimed')} />
        {children}
      </Animation>
    </div>
  )
}

export default Calendar
