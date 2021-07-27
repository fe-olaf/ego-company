import { Link } from 'react-router-dom'
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
    <Link className={cx('button')} to={to}>
      <div className={cx('txt_label')}>{label}</div>
      <IconArrowRight />
    </Link>
  )
}

export default Linkbutton
