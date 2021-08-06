import Link from 'next/link'
import classnames from 'classnames/bind'

import IconArrowRight from '$icons/IconArrowRight'

import styles from './LinkButton.module.scss'

const cx = classnames.bind(styles)

function Linkbutton({
  to,
  label,
  open,
}: {
  to: string
  open?: boolean
  label: string
}) {
  if (open) {
    return (
      <a className={cx('button')} href={to} target="_blank" rel="noreferrer">
        <div className={cx('txt_label')}>{label}</div>
        <IconArrowRight />
      </a>
    )
  }

  return (
    <Link href={to}>
      <a className={cx('button')}>
        <div className={cx('txt_label')}>{label}</div>
        <IconArrowRight />
      </a>
    </Link>
  )
}

export default Linkbutton
