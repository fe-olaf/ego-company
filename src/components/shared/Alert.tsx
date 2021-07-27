import usePortal from 'use-portal'
import classnames from 'classnames/bind'

import React from 'react'

import styles from './Alert.module.scss'

const cx = classnames.bind(styles)

function Alert({
  show,
  message = '',
  label = '확인',
  onClose,
}: {
  show: boolean
  message?: string
  label?: string
  onClose: (e: React.SyntheticEvent) => void
}) {
  const { Portal } = usePortal()

  return show ? (
    <Portal>
      <div className={cx('alert')}>
        <div className={cx('layer')}>
          <div className={cx('txt_label')}>{message}</div>
          <div className={cx('btn_close')} onClick={onClose}>
            {label}
          </div>
        </div>
      </div>
    </Portal>
  ) : null
}

export default Alert
