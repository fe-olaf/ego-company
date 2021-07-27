import { ko } from 'date-fns/locale'
import {
  format as fnsFormat,
  utcToZonedTime,
  zonedTimeToUtc,
} from 'date-fns-tz'
import parse from 'date-fns/parse'
import getDay from 'date-fns/getDay'

type DateType = Date | string | number

const timeZone = 'Asia/Seoul'
const DEFAULT_DATE_PATTERN = 'yyyy-MM-dd'

const WEEKDAY_LABELS = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
]

export const formatDate = (
  date: DateType,
  format: string,
  datePattern = DEFAULT_DATE_PATTERN,
): string => {
  let parsedDate = date

  if (typeof date === 'string') {
    parsedDate = parse(date, datePattern, new Date(), { locale: ko })
  }

  return fnsFormat(utcToZonedTime(parsedDate, timeZone), format, {
    timeZone,
    locale: ko,
  })
}

export const parseDate = (
  date: string,
  datePattern: string = DEFAULT_DATE_PATTERN,
) => {
  return parse(date, datePattern, new Date(), { locale: ko })
}

export const localDate = (date?: DateType): Date => {
  return zonedTimeToUtc(date ? new Date(date) : new Date(), timeZone)
}

export const today = (): string => formatDate(localDate(), DEFAULT_DATE_PATTERN)

export function generateWeddingDateLabel(weddingDate: string) {
  const date = parseDate(weddingDate, 'yyyy-MM-dd hh:mm')

  const yearAndMonth = formatDate(date, 'yyyy년 M월 dd일')
  const hourAndMinute = formatDate(date, 'hh시 mm분')
  const weekday = getDay(date)

  const dateLabel = `${yearAndMonth} ${WEEKDAY_LABELS[weekday]} 낮 ${hourAndMinute}`

  return dateLabel
}
